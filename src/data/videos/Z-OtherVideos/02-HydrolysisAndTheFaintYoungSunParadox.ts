/**
 * @file 02-HydrolysisAndTheFaintYoungSunParadox.ts
 * @module Data/Videos/OtherVideos
 * @desc Contains localized metadata and media information for the Hydrolysis and the Faint Young Sun Paradox video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";
import { getVideoAssetPaths } from "../../assetUrls.js";

import type { VideoSource } from "../../videoTypes.js";

const videoId = "oth-02z-hydrolysis-and-the-faint-young-sun-paradox";
const videoAssets = getVideoAssetPaths(VideoCategory.OTHER.id, videoId);

export const hydrolysisAndTheFaintYoungSunParadoxVideo = {
  id: videoId,

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.OTHER.id,

  title: {
    en: "Hydrolysis and the Faint Young Sun Paradox",
    fr: "Hydrolyse et paradoxe du jeune Soleil faible"
  },

  description: {
    en: "The chemical weathering of continental rocks (hydrolysis) removes CO2 from the atmosphere over geologic time. Could this explain why the Earth was not frozen in its early history when the sun was very faint?",
    fr: "La météorisation chimique des roches continentale (hydrolyse) retire le CO2 de l’atmosphère au fil du temps géologique. Est-ce cela pourrait expliquer pourquoi la Terre n’était pas gelée dans ses jeunes années lorsque le Soleil était très faible?"
  },

  media: {
    primaryUrl: videoAssets.file("video.mp4"),
    youtubeUrl: "https://www.youtube.com/watch?v=rEeixDNVjeE",
    thumbnailUrl: videoAssets.file("thumbnail.jpg"),
    is360: false,
    provider: "https://www.youtube.com/@suzanneobrien3361"
  },
  subtitles: {
    en: videoAssets.file("en.vtt"),
    fr: videoAssets.file("fr.vtt")
  },

  searchTerms: {
    en: [
      "hydrolysis",
      "faint-young-sun-paradox",
      "climate-change",
      "climate-science",
      "isotope-geochemistry",
      "land-stewardship",
      "paleoclimate"
    ],
    fr: [
      "hydrolyse",
      "paradoxe",
      "jeune",
      "soleil",
      "faible",
      "meteorisation",
      "climatique"
    ]
  }
} satisfies VideoSource;
