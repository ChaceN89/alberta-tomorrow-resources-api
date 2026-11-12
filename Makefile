
# // below is the make from the website- something simialr for the two parts of the application
#  the delaoy the API
#  the set up the s3 bucket with the correct data - repalce files or add files - the youtube mp4s or the thumnails or subttiels/ or later the pdf for lesson plans 
# SHELL = /bin/bash

# include .env.deploy
# export

# # Make sure AWS CLI is installed and configured with Key, Secret, and Region for this bucket

# publish:
# 	@echo "📦 Building and exporting static Next.js site..."
# 	npx next build

# 	@echo "🚀 Syncing 'out/' directory to S3 bucket... Deleting non matching files..."
# 	aws s3 sync out s3://$(BUCKET_NAME) --delete

# 	@echo "🧹 Invalidating CloudFront cache..."
# 	aws cloudfront create-invalidation \
# 		--distribution-id $(DISTRIBUTION_ID) \
# 		--paths "/*"

# 	@echo "✅ Deployment complete!\n\n"
