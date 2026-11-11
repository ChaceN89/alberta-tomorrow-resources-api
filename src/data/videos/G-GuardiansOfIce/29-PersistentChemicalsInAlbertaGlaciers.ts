/**
 * @file 29-PersistentChemicalsInAlbertaGlaciers.ts
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the A persistent chemical is something that doesn't break down in the environment. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "goi-29g-persistent-chemicals-in-alberta";
const videoAssets = getVideoAssetPaths(VideoCategory.GLACIER_SERIES.id, videoId);

export const persistentChemicalsInAlbertaGlaciersVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "Persistent Chemicals in Alberta Glaciers",
    fr: "Produits chimiques persistants dans les glaciers de l’Alberta"
  },

  description: {
    en: "Dr. Ali Criscitiello discusses what persistent chemicals are and the danger of them being released after being trapped in Alberta glacier ice.",
    fr: "Ali Criscitiello, Ph. D., explique ce que sont les produits chimiques persistants et le danger que représente leur rejet dans l’environnement après avoir été emprisonnés dans les glaciers de l’Alberta."
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=dlIX3EisMpo",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: ["persistent", "chemical", "something", "doesn", "break", "down", "environment", "abglaciers"],
    fr: ["produit", "chimique", "persistant", "est", "une", "substance", "qui", "degrade"]
  },
} satisfies VideoSource;
