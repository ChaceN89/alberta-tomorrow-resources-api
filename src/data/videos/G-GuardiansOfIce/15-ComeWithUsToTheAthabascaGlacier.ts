/**
 * @file 15-ComeWithUsToTheAthabascaGlacier.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Come with us to the Athabasca Glacier video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../core/assetUrls.js";

import type { VideoSource } from "../../core/videoTypes.js";

const videoId = "goi-15g-come-with-us-to-the-athabasca";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const comeWithUsToTheAthabascaGlacierVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Come with us to the Athabasca Glacier",
    fr: "Venez avec nous jusqu’au glacier Athabasca"
  },

  description: {
    en: "Walk with us the Athabasca Glacier on the Columbia Icefield.",
    fr: "Venez marcher avec nous au glacier Athabasca sur le champ de glace Columbia."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=IvYUaGfUesM",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["come","athabasca","glacier","abglaciers","climatechange","abwater"],
    fr: ["venez","avec","nous","jusqu","glacier","athabasca"]
  },
} satisfies VideoSource;
