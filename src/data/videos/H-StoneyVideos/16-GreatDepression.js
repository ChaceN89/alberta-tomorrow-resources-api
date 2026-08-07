/**
 * @file 16-GreatDepression.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Great Depression video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const greatDepressionVideo = {
	id: "stoney-016h-great-depression",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Great Depression",
		fr: "La Crise de 1929"
	},

	description: {
		en: "Elder Lawrence talks about the Stoney experience during the Great Depression.",
		fr: "L’aîné Lawrence parle de l’expérience des Stoney durant la Crise de 1929."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/57vkAX541xY?si=pygUdIJEajIdovUC",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/f6e8f0b0-7db4-4bc4-b13e-81a31217b801/thumbnails/Great%20Depression_tumb.0000000.jpg",
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
		  "crise",
		  "1929",
		  "aine",
		  "lawrence",
		  "parle",
		  "experience",
		  "stoney",
		  "durant"
		]
	}
};
