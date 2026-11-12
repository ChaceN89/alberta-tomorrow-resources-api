/**
 * @file 26-HowDoChemicalsThatWereTrappedInAlbertaGlaciersGetIntoOurWater.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Well in this case, where glaciers are receiving these chemicals. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-26g-how-do-chemicals-that-were-trapped";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const howDoChemicalsThatWereTrappedInAlbertaGlaciersGetIntoOurWaterVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "How do chemicals that were trapped in Alberta glaciers get into our water?",
    fr: "Comment les polluants des glaciers de l’Alberta se retrouvent-ils dans notre eau?"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses how chemicals, once trapped in frozen ice, will get into our water supply, even some that were banned years ago!",
    fr: "Ali Criscitiello, Ph. D., explique comment les produits chimiques, autrefois emprisonnés dans la glace, se retrouvent dans notre approvisionnement en eau, même certains qui ont été interdits bien des années auparavant!"
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=2ULp_NlGUHE",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["well", "case", "glaciers", "receiving", "these", "chemicals", "abglaciers", "climatechange"],
    fr: ["dans", "cas", "les", "glaciers", "recoivent", "ces", "substances", "chimiques"]
  },
} satisfies VideoSource;
