/**
 * @file 02-CementFactory.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Cement Factory video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const cementFactoryVideo = {
	id: "stoney-02h-cement-factory",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Cement Factory",
		fr: "Cimenterie"
	},

	description: {
		en: "The Cement factory has been around for a long time. Listen to Elder Lawrence talk about how Exshaw got it's name and the impact of the plant on the Stoney people.",
		fr: "La cimenterie existe depuis très longtemps. Écoutez l’aîné Lawrence expliquer ce qui a valu son nom à Exshaw et l’impact de l’usine sur la nation Stoney."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/KFbHx-jduws?si=IpEgy6vTFzxCDL-u",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/b647ff76-e29d-438c-85c3-5f9b64e5ce32/thumbnails/Cement%20Factory_tumb.0000001.jpg",
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
		  "cimenterie",
		  "existe",
		  "depuis",
		  "tres",
		  "longtemps",
		  "ecoutez",
		  "aine",
		  "lawrence"
		]
	}
};
