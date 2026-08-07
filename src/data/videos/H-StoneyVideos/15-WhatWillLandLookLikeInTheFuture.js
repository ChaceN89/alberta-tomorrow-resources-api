/**
 * @file 15-WhatWillLandLookLikeInTheFuture.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the What Will Land Look Like In The Future video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const whatWillLandLookLikeInTheFutureVideo = {
	id: "stoney-015h-what-will-land-look-like",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "What Will Land Look Like In The Future",
		fr: "À quoi ressemblera le territoire dans le futur"
	},

	description: {
		en: "What is your hope for the future?",
		fr: "Qu’espérez-vous pour le futur?"
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/UpJUo8M5Bck?si=PHyuoBHHtza4vsmy",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/695381a7-7628-4818-990f-89d3211aa303/thumbnails/What%20Will%20Land%20Look%20Like%20in%20Future_tumb.0000000.jpg",
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
		  "quoi",
		  "ressemblera",
		  "territoire",
		  "futur",
		  "esperez",
		  "vous"
		]
	}
};
