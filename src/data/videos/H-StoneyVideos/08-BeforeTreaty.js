/**
 * @file 08-BeforeTreaty.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Before Treaty video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const beforeTreatyVideo = {
	id: "stoney-08h-before-treaty",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Before Treaty",
		fr: "Avant le Traité"
	},

	description: {
		en: "Elder Margaret is asked to describe the Stoney people before Treaty was signed.",
		fr: "On demande à l’aînée Margaret de décrire la nation Stoney avec la signature du Traité."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/tuNheHwbU7c?si=uTlYq-LqELvWmpuf",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/a9b99252-a854-4a77-aaa2-f7fe43a1a6c1/thumbnails/Before%20Treaty_tumb.0000000.jpg",
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
		  "avant",
		  "traite",
		  "demande",
		  "ainee",
		  "margaret",
		  "decrire",
		  "nation",
		  "stoney"
		]
	}
};
