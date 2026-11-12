/**
 * @file 02-BeneficialManagementPractices.ts
 * @module Data/Videos/UnderstandingTheLandscape
 * @desc Contains localized metadata and media information for the Beneficial Management Practices video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @dependencies
 * - videoCategoryIds.js
 *
 * @notes
 * - The ID is a stable API value and should not be changed.
 * - The current media URL is shared between locales.
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "landscape-02b-management-practices";
const videoAssets = getVideoAssetPaths(VideoCategory.LANDSCAPE.id, videoId);

export const beneficialManagementPracticesVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.LANDSCAPE.id,

  title: {
    en: "Beneficial Management Practices",
    fr: "Pratiques de gestion bénéfiques"
  },

  description: {
    en: "What are Beneficial Management Practices and how do they affect the future of Alberta? Find out what large companies, farmers, and you can do to minimize the effect on the environment.",
    fr: "Quelles sont les pratiques de gestion bénéfiques et quel effet ont-elles sur l’avenir de l’Alberta? Découvrez ce que les grandes compagnies, les agriculteurs et vous pouvez faire pour réduire au minimum les effets sur l’environnement."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=WBKwcDIqJ0U",
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
      "beneficial management practices",
      "management",
      "land use",
      "sustainability",
      "industry",
      "agriculture",
      "farmers",
      "environment",
      "future of Alberta"
    ],

    fr: [
      "pratiques de gestion benefiques",
      "gestion",
      "utilisation des terres",
      "durabilite",
      "industrie",
      "agriculture",
      "agriculteurs",
      "environnement",
      "avenir de l'alberta"
    ]
  },


} satisfies VideoSource;
