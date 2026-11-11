/**
 * @file 13-WhereWasTheGlacierIn1982AndWhatIsALateralMoraine.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the Yeah, exactly. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-13g-where-was-the-glacier-in-1982";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const whereWasTheGlacierIn1982AndWhatIsALateralMoraineVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Where was the glacier in 1982 and what is a lateral moraine?",
    fr: "Où était le glacier en 1982 et qu’est-ce qu’une moraine latérale?"
  },

  description: {
    en: "Listen to Peter Lemieux as he discusses where the Athabasca glacier was in 1982.",
    fr: "Écoutez Peter Lemieux expliquer où se situait le glacier Athabasca en 1982."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=xYQocIUXHQU",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["yeah","exactly","abglaciers","climatechange","abwater"],
    fr: ["oui","exactement"]
  },
} satisfies VideoSource;
