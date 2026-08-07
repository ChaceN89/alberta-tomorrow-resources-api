/**
 * @file 18-StoneyVoiceAtTheTable.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Stoney Voice At The Table video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const stoneyVoiceAtTheTableVideo = {
	id: "stoney-018h-stoney-0voice-at-table",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Stoney Voice At The Table",
		fr: "Voix de la nation Stoney à la table"
	},

	description: {
		en: "Land Use planning in Alberta needs to include a Stoney Voice.",
		fr: "Un porte-parole de la nation des Stoney doit prendre part à la planification de l’utilisation des terres en Alberta."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/kuFB4CrTufw?si=rVjuYL9xCxY5HwVm",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/1bd74c11-faa1-41f4-8d12-cab9e5b0767c/thumbnails/Stoney%20Voice%20at%20the%20Table_tumb.0000000.jpg",
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
		  "voix",
		  "nation",
		  "stoney",
		  "table",
		  "porte",
		  "parole",
		  "doit",
		  "prendre"
		]
	}
};
