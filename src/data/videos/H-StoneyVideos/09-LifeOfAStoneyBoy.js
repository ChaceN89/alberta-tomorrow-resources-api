/**
 * @file 09-LifeOfAStoneyBoy.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Life Of A Stoney Boy video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const lifeOfAStoneyBoyVideo = {
	id: "stoney-09h-life-of-a-stoney-0boy",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Life Of A Stoney Boy",
		fr: "La vie d’un jeune garçon de la nation Stoney"
	},

	description: {
		en: "Listen to Elder Terry tell a story from his youth.",
		fr: "Écoutez l’aîné Terry raconter une histoire de sa jeunesse."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/2CaTbIIOHNE?si=yevh87KVNQY-uCua",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/cc961a95-b604-4cba-9c34-993437f3f823/thumbnails/Life%20of%20a%20Stoney%20Boy_tumb.0000000.jpg",
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
		  "vie",
		  "jeune",
		  "garcon",
		  "nation",
		  "stoney",
		  "ecoutez",
		  "aine",
		  "terry"
		]
	}
};
