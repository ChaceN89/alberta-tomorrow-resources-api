/**
 * @file 04-WatershedsAndHydrology.ts
 * @module Data/Videos/BowRiverWatershed360
 * @desc Contains localized metadata and media information for the Watersheds and Hydrology video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 * @updated Nov 02, 2026 - added French titles, descriptions, and search terms to video metadata
 */

import { VideoCategory } from "../../../enums/videoCategoryIds.js";
import { Language } from "../../../enums/language.js";
import { ALBERTA_TOMORROW_PROVIDER, getVideoAssetPaths } from "../../../core/assetUrls.js";

import type { VideoSource } from "../../../core/videoTypes.js";

const videoId = "brbc-04f-watersheds-hydro";
const videoAssets = getVideoAssetPaths(VideoCategory.BOW_RIVER_360.id, videoId);

export const watershedsAndHydrologyVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id],

  categoryId: VideoCategory.BOW_RIVER_360.id,

  title: {
    en: "Watersheds and Hydrology",
    fr: "Bassins versants et hydrologie"
  },

  description: {
    en: "Go from the mountains through the river basin while learning what a watershed is, and how hydrology is apparent in the landscape. Tricia Stadnyk will explain how hydrology can affect everything around it as you explore.",
    fr: "Parcourez le bassin fluvial depuis les montagnes et découvrez ce qu’est un bassin versant ainsi que les manifestations de l’hydrologie dans le paysage. Tricia Stadnyk explique comment l’hydrologie peut influencer tout ce qui l’entoure."
  },

  lessonPlans: [
    {
      title: "Watersheds and Hydrology",
      link: "https://docs.google.com/document/d/1pluUXun-r0TxsYWRj8b5X__UlWWcJMcW"
    }
  ],

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=_hFqA3agfhk&list=PLvZi8sQT8o8PgFddqYnvhY3EJUJx-N6y3",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: true,
    provider: ALBERTA_TOMORROW_PROVIDER
  },
  subtitles: {
    en: null,
    fr: null
  },

  searchTerms: {
    en: ["water", "watershed", "monitoring", "hydrology", "landscape"],
    fr: ["eau", "bassin versant", "surveillance", "hydrologie", "paysage"]
  },
} satisfies VideoSource;
