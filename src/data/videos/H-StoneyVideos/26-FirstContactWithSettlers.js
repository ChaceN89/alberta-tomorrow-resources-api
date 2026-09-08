/**
 * @file 26-FirstContactWithSettlers.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the First Contact With Settlers video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const firstContactWithSettlersVideo = {
	id: "stoney-26h-first-contact",

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
		type: "youtube",
		url: "https://youtu.be/7pI3iyUuhK0?si=Y-8Gc_UmAStwrK1Y",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/cdf75db1-7b00-473f-bf7c-927b33b3589a/thumbnails/First%20Contact%20w%20Settlers_tumb.0000000.jpg",
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
};
