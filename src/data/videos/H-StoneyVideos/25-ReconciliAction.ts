/**
 * @file 25-ReconciliAction.ts
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Reconcili-ACTION video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "stoney-25h-reconcili-action";
const videoAssets = getVideoAssetPaths(VideoCategory.STONEY_VOICES.id, videoId);

export const reconciliActionVideo = {
	id: videoId,

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Reconcili-ACTION",
		fr: "Réconcili-ACTION"
	},

	description: {
		en: "Elder Terry talks about the need for ReconciliACTION after Reconciliation.",
		fr: "L’aîné Terry parle de la nécessité de RéconciliACTION après la Réconciliation."
	},

	media: {
		primaryUrl: videoAssets.file("video.mp4"),
		youtubeUrl: "https://youtu.be/P65TspAOwrU?si=JEA8buNzlAZus7Jl",
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
		  "reconcili",
		  "action",
		  "aine",
		  "terry",
		  "parle",
		  "necessite",
		  "reconciliaction",
		  "apres"
		]
	}
} satisfies VideoSource;
