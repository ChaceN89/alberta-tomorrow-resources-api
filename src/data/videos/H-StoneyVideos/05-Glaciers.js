/**
 * @file 05-Glaciers.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Glaciers video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const glaciersVideo = {
	id: "stoney-05h-glaciers",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Glaciers",
		fr: "Glaciers"
	},

	description: {
		en: "Elder Margaret talks about her experience on the Columbia Ice field and what she thinks should be done.",
		fr: "L’aînée Margaret raconte son expérience sur le champ de glace Columbia et explique ce qu’on devrait faire selon elle."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/IxZgkmJnYrw?si=2haLY-beyIpsZQ5W",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/88e5ec8f-5109-493e-a3ba-94c10f630a08/thumbnails/Glaciers_tumb.0000000.jpg",
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
		  "glaciers",
		  "ainee",
		  "margaret",
		  "raconte",
		  "son",
		  "experience",
		  "champ",
		  "glace"
		]
	}
};
