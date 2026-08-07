/**
 * @file 10-BringingBackTheBison.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Bringing Back the Bison video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const bringingBackTheBisonVideo = {
	id: "stoney-010h-bringing-back-the-bison",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Bringing Back the Bison",
		fr: "Ramener le bison"
	},

	description: {
		en: "Travis talks about reintroducing Bison back on the landscape.",
		fr: "Travis parle de la réintroduction du bison sur le territoire."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/Y5ib6lh4HLE?si=p3HpiNYvKy9rFqPT",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/09bee351-3a94-49b1-9a86-a4978e7c53cd/thumbnails/Bring%20Back%20Bison_tumb.0000000.jpg",
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
		  "ramener",
		  "bison",
		  "travis",
		  "parle",
		  "reintroduction",
		  "territoire"
		]
	}
};
