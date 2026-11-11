/**
 * @file 26-FirstContactWithSettlers.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the First Contact With Settlers video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-26h-first-contact";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const firstContactWithSettlersVideo = {
	id: videoId,

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "First Contact With Settlers",
		fr: "Premier contact avec les colons blancs"
	},

	description: {
		en: "Travis recalls stories of Stoney encountering Settlers for the first time.",
		fr: "Travis se rappelle des histoires des Stoney qui rencontraient les colons pour la première fois."
	},

	media: {
		primaryUrl: videoAssets.file("video.mp4"),
		youtubeUrl: "https://youtu.be/7pI3iyUuhK0?si=Y-8Gc_UmAStwrK1Y",
		thumbnailUrl: videoAssets.file("thumbnail.jpg"),
		is360: false
	},
	subtitles: {
	  en: videoAssets.file("en.vtt"),
	  fr: videoAssets.file("fr.vtt")
	},

	searchTerms: {
		en: [
		  "indigenousstories",
		  "stoneynakoda",
		  "indigenouslanduse",
		  "morley",
		  "landuse",
		  "abwater",
		  "alberta",
		  "stoneyvoices",
		  "traditionallanduse"
		],
		fr: [
		  "premier",
		  "contact",
		  "colons",
		  "blancs",
		  "travis",
		  "rappelle",
		  "histoires",
		  "stoney"
		]
	}
} satisfies VideoSource;
