/**
 * @file 24-ProtectedAreas.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Protected Areas video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const protectedAreasVideo = {
	id: "stoney-024h-protected-areas",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Protected Areas",
		fr: "Aires protégées"
	},

	description: {
		en: "The Sibbald area is an area used for camping and recreation but does that compatible with the Stoney Traditional Land Uses?",
		fr: "La région Sibbald sert aujourd’hui pour le camping et les activités récréatives, mais est-ce compatible avec les utilisations des terres traditionnelles des Stoney?"
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/IuvVMb1y0oU?si=mka-5Q1s3IP_kDPU",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/eb6c9fb2-43cb-4c4c-bc42-d08c1228837b/thumbnails/Protected%20Areas_tumb.0000000.jpg",
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
		  "aires",
		  "protegees",
		  "region",
		  "sibbald",
		  "sert",
		  "aujourd",
		  "hui",
		  "camping"
		]
	}
};
