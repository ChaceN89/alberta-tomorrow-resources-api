/**
 * @file 06-CreatorStory.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Creator Story video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const creatorStoryVideo = {
	id: "stoney-06h-creator-story",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Creator Story",
		fr: "Histoire du Créateur"
	},

	description: {
		en: "According to the Stoney, Jasper down to the US is their land. This is where creator put them.",
		fr: "Selon les Stoney, leur territoire va de Jasper jusqu’aux États-Unis. C’est la terre sur laquelle le Créateur les a placés."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/HKy3Sb2u-Mk?si=FUDzF1rx4dzmQzKz",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/7d5e3424-03c7-40c0-b1f6-e26ef8dd99ec/thumbnails/Creator Story_tumb.0000000.jpg",
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
		  "histoire",
		  "createur",
		  "selon",
		  "stoney",
		  "leur",
		  "territoire",
		  "jasper",
		  "jusqu"
		]
	}
};
