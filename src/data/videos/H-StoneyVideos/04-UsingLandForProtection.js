/**
 * @file 04-UsingLandForProtection.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Using Land For Protection video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const usingLandForProtectionVideo = {
	id: "stoney-04h-using-land-for-protection",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Using Land For Protection",
		fr: "Utiliser les terres pour assurer sa protection"
	},

	description: {
		en: "Learn how the Stoney people used the land for protection.",
		fr: "Apprenez comment la nation Stoney a utilisé les terres pour assurer sa protection."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/ZqpwZ1irYFY?si=sdiru7LP4nhu6jox",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/ec2fe1f5-06e1-47b5-b9c4-7ca8e985e17d/thumbnails/Using%20Land%20for%20Protection_tumb.0000000.jpg",
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
		  "assurer",
		  "protection",
		  "apprenez",
		  "comment",
		  "nation",
		  "stoney"
		]
	}
};
