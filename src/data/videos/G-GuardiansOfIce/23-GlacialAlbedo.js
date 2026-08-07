/**
 * @file 23-GlacialAlbedo.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the So as glaciers shrink or as glacier surfaces become dirtier both of these impact overal albedo. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const glacialAlbedoVideo = {
  id: "goi-23g-glacial-albedo",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "So as glaciers shrink or as glacier surfaces become dirtier both of these impact overal albedo.",
    fr: "À mesure que les glaciers rétrécissent ou que leur surface devient plus sale, ces deux phénomènes influencent l’albédo global."
  },

  description: {
    en: "Dr. Ali Criscitiello discusses what Albedo is and how it relates to Alberta glaciers.",
    fr: "Ces deux processus contribuent donc à rendre la surface de la Terre moins réfléchissante."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=RbPa7lv1fv0",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["glaciers","shrink","glacier","surfaces","become","dirtier","both","these"],
    fr: ["mesure","que","les","glaciers","retrecissent","leur","surface","devient"]
  },
};
