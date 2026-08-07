/**
 * @file 21-UsingTheLand.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Using The Land video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const usingTheLandVideo = {
	id: "stoney-021h-using-the-land",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Using The Land",
		fr: "Utiliser les terres"
	},

	description: {
		en: "Listen to Elders talk about how the Stoney people used the land.",
		fr: "Écoutez les aînés parler de l’utilisation que faisaient les Stoney du territoire."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/yz52Ysp_meQ?si=2uYyt4W4Qjq31z2N",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/a7edc400-3c29-48bb-bcc6-296883adc89c/thumbnails/Using%20the%20Land_tumb.0000000.jpg",
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
		  "utiliser",
		  "terres",
		  "ecoutez",
		  "aines",
		  "parler",
		  "utilisation",
		  "faisaient",
		  "stoney"
		]
	}
};
