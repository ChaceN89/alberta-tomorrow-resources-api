/**
 * @file 11-IndigenousVoicesInAlbertaTomorrow.js
 * @module Data/Videos/Tutorials
 * @desc Contains localized metadata and media information for the Indigenous Voices in Alberta Tomorrow tutorial video.
 *
 * @author Chace Nielson
 * @created Sep 09, 2026
 * @updated Sep 09, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const indigenousVoicesInAlbertaTomorrowVideo = {
  id: "tutorial-11a-indigenous-voices",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.TUTORIALS.id,

  title: {
    en: "Indigenous Voices in Alberta Tomorrow",
    fr: "Voix autochtones dans Alberta Tomorrow"
  },

  description: {
    en: "This video shows land use planning through an Indigenous lens in the Alberta Tomorrow simulation tool, including how the southern half of the Stoney Nakoda Traditional Territory has changed and may change in the future using indicators developed with Stoney Elders and Knowledge Keepers.",
    fr: "Cette video presente la planification de l'utilisation des terres selon une perspective autochtone dans Alberta Tomorrow, y compris l'evolution passee et future possible de la moitie sud du territoire traditionnel Stoney Nakoda a l'aide d'indicateurs elabores avec des aines et des gardiens du savoir Stoney."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=r-Yk6CjEKP8",
    thumbnailUrl: "https://img.youtube.com/vi/r-Yk6CjEKP8/hqdefault.jpg",
    is360: false
  },

  searchTerms: {
    en: [
      "indigenous voices",
      "stoney nakoda",
      "land use planning",
      "traditional territory"
    ],

    fr: [
      "voix autochtones",
      "stoney nakoda",
      "planification territoriale",
      "territoire traditionnel"
    ]
  },
};
