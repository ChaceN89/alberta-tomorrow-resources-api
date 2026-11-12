/**
 * @file 04-Forestry.ts
 * @module Data/Videos/SocioeconomicIndicators
 * @desc Contains localized metadata and media information for the Forestry video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Sep 10, 2026
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "soc-04d-forestry";
const videoAssets = getVideoAssetPaths(VideoCategory.SOCIO_ECONOMIC_INDICATORS.id, videoId);

export const forestryVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.SOCIO_ECONOMIC_INDICATORS.id,

  title: {
    en: "Forestry",
    fr: "Foresterie"
  },

  description: {
    en: "Explore forestry in Alberta, from harvesting trees for lumber and paper to its effects on the landscape. Learn how logging and forestry roads affect old-growth forests, carbon storage, and wildlife habitat.",
    fr: "Explorez la foresterie en Alberta, de la récolte des arbres pour produire du bois d’œuvre et du papier à ses effets sur le paysage. Découvrez comment l’exploitation forestière et les chemins forestiers affectent les forêts anciennes, le stockage du carbone et les habitats fauniques."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=157uaHUOKJw",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "alberta forestry",
      "timber production",
      "logging",
      "land use",
      "old-growth forests",
      "carbon storage",
      "wildlife habitat"
    ],

    fr: [
      "foresterie en alberta",
      "production de bois d’œuvre",
      "exploitation forestière",
      "utilisation des terres",
      "forêts anciennes",
      "stockage du carbone",
      "habitats fauniques"
    ]
  },
} satisfies VideoSource;
