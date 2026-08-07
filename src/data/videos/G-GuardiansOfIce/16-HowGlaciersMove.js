/**
 * @file 16-HowGlaciersMove.js
 * @module Data/Videos/GuardiansOfIce
 * @desc Contains localized metadata and media information for the First of all, there's slipage between the ice and the bedrock. video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const howGlaciersMoveVideo = {
  id: "goi-16g-how-glaciers-move",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.GLACIER_SERIES.id,

  title: {
    en: "First of all, there's slipage between the ice and the bedrock.",
    fr: "Tout d’abord, il existe un glissement entre la glace et le sous-sol rocheux."
  },

  description: {
    en: "Peter Lemieux discusses how Glaciers move.",
    fr: "Un glacier plus chaud, sous lequel circule de l’eau de fonte, se déplacera généralement un peu plus rapidement qu’un glacier froid dont la base est gelée."
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=Iy6sdst_Nnc",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/8b8ba51d-9a90-4daa-9cbd-22a13dc1660b/thumbnails/obs_885b7ca9-4e91-4226-a03b-8ad488210cb5_tumb.0000016.jpg",
    is360: false
  },

  searchTerms: {
    en: ["first","all","there","slipage","between","ice","bedrock","abglaciers"],
    fr: ["tout","abord","existe","glissement","entre","glace","sous","sol"]
  },
};
