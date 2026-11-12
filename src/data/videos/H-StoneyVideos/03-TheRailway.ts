/**
 * @file 03-TheRailway.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the The Railway video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "stoney-03h-the-railway";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const theRailwayVideo = {
	id: videoId,

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "The Railway",
		fr: "Le chemin de fer"
	},

	description: {
		en: "Elder Lawrence talks about the railway as it goes through Stoney Territory.",
		fr: "L’aîné Lawrence parle du chemin de fer qui traverse le territoire des Stoney."
	},

	media: {
		primaryUrl: videoAssets.file("video.mp4"),
		youtubeUrl: "https://youtu.be/NvR7dT83UKE?si=MWipJUoMutYdAGzY",
		thumbnailUrl: videoAssets.file("thumbnail.jpg"),
		is360: false,
		provider: ALBERTA_TOMORROW_PROVIDER
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
		  "chemin",
		  "fer",
		  "aine",
		  "lawrence",
		  "parle",
		  "traverse",
		  "territoire",
		  "stoney"
		]
	}
} satisfies VideoSource;
