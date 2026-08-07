/**
 * @file 19-FishingOnTheBow.js
 * @module Data/Videos/StoneyVideos
 * @desc Contains localized metadata and media information for the Fishing On The Bow video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const fishingOnTheBowVideo = {
	id: "stoney-019h-fishing-on-the-bow",

	supportedLanguages: [Language.EN.id, Language.FR.id],

	categoryId: VideoCategory.STONEY_VOICES.id,

	title: {
		en: "Fishing On The Bow",
		fr: "Pêcher dans la Bow"
	},

	description: {
		en: "The Stoney used to use the fish from the Bow River, but they don't eat the fish anymore. They enjoy the river but they don't eat the fish.",
		fr: "Autrefois, les Stoney mangeaient le poisson qu’ils pêchaient dans la rivière Bow, mais ils n’osent plus le faire. Ils profitent de la rivière, mais ils ne mangent plus le poisson."
	},

	media: {
		type: "youtube",
		url: "https://youtu.be/vN_X59jznLE?si=qs742rPJ9WvbOe1y",
		thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/e9bd9064-c34e-4769-a3c3-8d702623d91b/thumbnails/Fishing%20on%20the%20Bow_tumb.0000000.jpg",
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
		  "pecher",
		  "bow",
		  "autrefois",
		  "stoney",
		  "mangeaient",
		  "poisson",
		  "ils",
		  "pechaient"
		]
	}
};
