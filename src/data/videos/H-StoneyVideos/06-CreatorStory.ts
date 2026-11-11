/**
 * @file 06-CreatorStory.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Creator Story video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-06h-creator-story";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const creatorStoryVideo = {
	id: videoId,

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Creator Story",
		fr: "Histoire du Créateur"
	},

	description: {
		en: "According to the Stoney, Jasper down to the US is their land. This is where creator put them.",
		fr: "Selon les Stoney, leur territoire va de Jasper jusqu’aux États-Unis. C’est la terre sur laquelle le Créateur les a placés."
	},

	media: {
		primaryUrl: videoAssets.file("video.mp4"),
		youtubeUrl: "https://youtu.be/HKy3Sb2u-Mk?si=FUDzF1rx4dzmQzKz",
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
		  "histoire",
		  "createur",
		  "selon",
		  "stoney",
		  "leur",
		  "territoire",
		  "jasper",
		  "jusqu"
		]
	}
} satisfies VideoSource;
