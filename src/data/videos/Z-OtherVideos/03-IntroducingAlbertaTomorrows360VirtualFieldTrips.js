/**
 * @file 03-IntroducingAlbertaTomorrows360VirtualFieldTrips.js
 * @module Data/Videos/OtherVideos
 * @desc Contains localized metadata and media information for the Introducing Alberta Tomorrow's 360 Virtual Field Trips video.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Aug 07, 2026
 */

import { VideoCategory } from "../../enums/videoCategoryIds.js";
import { Language } from "../../enums/language.js";

export const introducingAlbertaTomorrows360VirtualFieldTripsVideo = {
  id: "oth-03z-intro-360-virtual-field-trips",

  supportedLanguages: [Language.EN.id, Language.FR.id],

  categoryId: VideoCategory.OTHER.id,

  title: {
    en: "Introducing Alberta Tomorrow’s 360 Virtual Field Trips",
    fr: "Présentation des visites virtuelles à 360 degrés d’Alberta Tomorrow"
  },

  description: {
    en: "The time has finally come! Check out the 360 Virtual Field Trips to Alberta's Ecoregions!  1 for each ecoregion exploring the plants, animals, geology, landforms, climate, land uses and species at risk! Register for your Alberta Tomorrow account at www.albertatomorrow.ca to gain access TODAY!",
    fr: "Le moment est enfin arrivé! Effectuez les visites virtuelles à 360 degrés dans les écorégions de l’Alberta! Une pour chaque écorégion : explorez les plantes, les animaux, la géologie, les reliefs, le climat, l’utilisation des terres et les espèces en péril! Pour accéder aux visites, créez votre compte d’Alberta Tomorrow à www.albertatomorrow.ca DÈS AUJOURD’HUI!"
  },

  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=rL13Xz_x2dA",
    thumbnailUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/virtualToursEcoRegions.jpg",
    is360: true
  },

  searchTerms: {
    en: [
      "360-virtual-field-trips",
      "ecoregions",
      "climate-change",
      "climate-science",
      "isotope-geochemistry",
      "land-stewardship",
      "paleoclimate"
    ],
    fr: [
      "visites",
      "virtuelles",
      "ecoregions",
      "alberta",
      "plantes",
      "animaux",
      "geologie",
      "climat"
    ]
  }
};
