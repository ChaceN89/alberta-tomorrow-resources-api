/**
 * @file 27-AccessToLandSibbaldFlats.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Access To Land - Sibbald Flats video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const accessToLandSibbaldFlatsVideo = {
	id: "stoney-027h-access-to-land",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Access To Land - Sibbald Flats",
		fr: "Accès aux terres - Sibbald Flats"
	},

	description: {
		en: "Listen to Elders talk about the  importance of the Sibbald Flats for hunting, collecting berries and traditional uses and the incompatibility with some other land uses.",
		fr: "Écoutez les aînés parler de l’importance des Sibbald Flats pour la chasse, la cueillette de petits fruits et les utilisations traditionnelles, et de l’incompatibilité avec certaines autres utilisations du territoire."
	},

	media: {
		type: "youtube",
		url: "https://www.youtube.com/watch?v=4ZixFCSIMww",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8fd91908-cba7-4774-9faa-113d7c686c01/thumbnails/Access%20to%20Land%20-%20Sibbald%20Flats_tumb.0000000.jpg",
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
		  "acces",
		  "terres",
		  "sibbald",
		  "flats",
		  "ecoutez",
		  "aines",
		  "parler",
		  "importance"
		]
	}
};
