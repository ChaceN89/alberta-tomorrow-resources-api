/**
 * @file 25-ReconciliAction.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Reconcili-ACTION video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const reconciliActionVideo = {
	id: "stoney-25h-reconcili-action",

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
		type: "youtube",
		url: "https://youtu.be/P65TspAOwrU?si=JEA8buNzlAZus7Jl",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/a84b6134-084c-4223-b8eb-ace6e197e71e/thumbnails/ReconciliACTION_tumb.0000000.jpg",
		is360: false
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
};
