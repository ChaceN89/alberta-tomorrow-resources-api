/**
 * @file 04-UsingLandForProtection.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Using Land For Protection video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-04h-using-land-for-protection";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const usingLandForProtectionVideo = {
	id: videoId,

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Using Land For Protection",
		fr: "Utiliser les terres pour assurer sa protection"
	},

	description: {
		en: "Learn how the Stoney people used the land for protection.",
		fr: "Apprenez comment la nation Stoney a utilisé les terres pour assurer sa protection."
	},

	media: {
		primaryUrl: videoAssets.file("video.mp4"),
		youtubeUrl: "https://youtu.be/ZqpwZ1irYFY?si=sdiru7LP4nhu6jox",
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
		  "utiliser",
		  "terres",
		  "assurer",
		  "protection",
		  "apprenez",
		  "comment",
		  "nation",
		  "stoney"
		]
	}
} satisfies VideoSource;
