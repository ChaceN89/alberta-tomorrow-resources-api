SHELL := /bin/bash
.DEFAULT_GOAL := help

AWS ?= aws
DRY_RUN ?= 0
SECTION ?=
ID ?=
FILE ?=
PROFILE ?=
export AWS DRY_RUN SECTION ID FILE PROFILE

.PHONY: help upload-assets upload-videos upload-pdfs invalidate-assets

help:
	@printf '%s\n' \
		'make upload-assets                     Upload videos and lesson PDFs' \
		'make upload-videos                     Upload videos only' \
		'make upload-pdfs                       Upload lesson PDFs only' \
		'Add SECTION=<folder>                   Limit to one section' \
		'Add SECTION=<folder> ID=<resource-id>   Limit to one video or lesson' \
		'Add SECTION=<folder> ID=<id> FILE=<name> Upload one file' \
		'Add DRY_RUN=1                          Preview uploads without writing to S3' \
		'Add PROFILE=<name>                     Use a named AWS profile instead of .env keys' \
		'make invalidate-assets                 Invalidate both asset prefixes' \
		'' \
		'Reads AWS credentials, region and BUCKET_NAME from .env.' \
		'Invalidation requires ASSETS_DISTRIBUTION_ID (not the API DISTRIBUTION_ID).' \
		'Uses the existing bucket; never deletes objects or deploys the API.'

define load-env
	set -euo pipefail; \
	if [[ -f .env ]]; then set -a; source .env; set +a; fi; \
	if [[ -n "$$PROFILE" ]]; then \
		unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN AWS_SECURITY_TOKEN; \
		export AWS_PROFILE="$$PROFILE"; \
	fi; \
	export AWS_PAGER=""; \
	command -v "$$AWS" >/dev/null || { echo "AWS CLI not found: $$AWS" >&2; exit 1; };
endef

define upload
	@$(load-env) \
	: "$${BUCKET_NAME:?Set BUCKET_NAME in .env}"; \
	[[ "$$BUCKET_NAME" =~ ^[a-z0-9][a-z0-9.-]+[a-z0-9]$$ ]] || { echo "BUCKET_NAME must be a bucket name, not a URL." >&2; exit 1; }; \
	[[ "$$DRY_RUN" == 0 || "$$DRY_RUN" == 1 ]] || { echo "DRY_RUN must be 0 or 1." >&2; exit 1; }; \
	for value in "$$SECTION" "$$ID" "$$FILE"; do \
		[[ -z "$$value" || "$$value" =~ ^[A-Za-z0-9][A-Za-z0-9_.-]*$$ ]] || { echo "Invalid section, ID or filename: $$value" >&2; exit 1; }; \
	done; \
	[[ -z "$$ID" || -n "$$SECTION" ]] || { echo "ID requires SECTION." >&2; exit 1; }; \
	[[ -z "$$FILE" || -n "$$ID" ]] || { echo "FILE requires SECTION and ID." >&2; exit 1; }; \
	source_dir="$(1)"; destination="s3://$$BUCKET_NAME/$(2)"; \
	if [[ -n "$$SECTION" ]]; then source_dir+="/$$SECTION"; destination+="/$$SECTION"; fi; \
	if [[ -n "$$ID" ]]; then source_dir+="/$$ID"; destination+="/$$ID"; fi; \
	[[ -d "$$source_dir" ]] || { echo "Extraction directory does not exist: $$source_dir" >&2; exit 1; }; \
	options=(--no-follow-symlinks); \
	if [[ "$$DRY_RUN" == 1 ]]; then options+=(--dryrun); fi; \
	if [[ -n "$$FILE" ]]; then \
		if [[ "$(2)" == video-assets ]]; then \
			[[ "$$FILE" =~ ^(video\.mp4|thumbnail\.jpg|en\.vtt|fr\.vtt)$$ ]] || { echo "Unsupported video asset filename: $$FILE" >&2; exit 1; }; \
		else \
			[[ "$$FILE" =~ ^(en|fr)-(lesson_plan|answer_key|student_worksheet|presentation_slides|other_file_type)-[a-z0-9_]+(-[2-9][0-9]*|-1[0-9]+)?\.pdf$$ ]] || { echo "Unsupported PDF filename: $$FILE" >&2; exit 1; }; \
		fi; \
		[[ -f "$$source_dir/$$FILE" && ! -L "$$source_dir/$$FILE" ]] || { echo "Asset file is missing or a symlink: $$source_dir/$$FILE" >&2; exit 1; }; \
		"$$AWS" s3 cp "$$source_dir/$$FILE" "$$destination/$$FILE" "$${options[@]}"; \
	else \
		options+=(--exclude '*'); \
		if [[ "$(2)" == video-assets ]]; then \
			for name in video.mp4 thumbnail.jpg en.vtt fr.vtt; do options+=(--include "$$name" --include "*/$$name"); done; \
		else \
			for language in en fr; do \
				for type in lesson_plan answer_key student_worksheet presentation_slides other_file_type; do \
					options+=(--include "$$language-$$type-*.pdf" --include "*/$$language-$$type-*.pdf"); \
				done; \
			done; \
		fi; \
		"$$AWS" s3 sync "$$source_dir/" "$$destination/" "$${options[@]}"; \
	fi
endef

upload-assets:
	@if [[ -n "$$SECTION$$ID$$FILE" ]]; then echo "Use upload-videos or upload-pdfs for a scoped upload." >&2; exit 1; fi
	@$(MAKE) --no-print-directory upload-videos
	@$(MAKE) --no-print-directory upload-pdfs

upload-videos:
	$(call upload,src/data/extracted-data/youtube-extracted-data,video-assets)

upload-pdfs:
	$(call upload,src/data/extracted-data/lesson-plan-extracted-data,lesson-plan-pdfs)

invalidate-assets:
	@$(load-env) \
	: "$${ASSETS_DISTRIBUTION_ID:?Set ASSETS_DISTRIBUTION_ID to the resource bucket CloudFront distribution}"; \
	[[ "$$DRY_RUN" == 0 || "$$DRY_RUN" == 1 ]] || { echo "DRY_RUN must be 0 or 1." >&2; exit 1; }; \
	if [[ "$$DRY_RUN" == 1 ]]; then \
		echo "Would invalidate /video-assets/* and /lesson-plan-pdfs/* on the asset distribution."; \
	else \
		"$$AWS" cloudfront create-invalidation --distribution-id "$$ASSETS_DISTRIBUTION_ID" \
			--paths '/video-assets/*' '/lesson-plan-pdfs/*'; \
	fi
