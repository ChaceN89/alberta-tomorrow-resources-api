/**
 * @file 03-TheRailway.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the The Railway video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const theRailwayVideo = {
	id: "stoney-03h-the-railway",

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
		type: "youtube",
		url: "https://youtu.be/NvR7dT83UKE?si=MWipJUoMutYdAGzY",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/55aaaa60-b4e8-4a17-8e57-a160624b63a7/thumbnails/Railway_tumb.0000000.jpg",
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
};
