/**
 * @file LessonThemeIds.js
 * @module Data/Enums
 * @desc Defines stable lesson-plan theme identifiers and localized theme labels.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @notes
 * - IDs are stable API values and should not be translated or changed.
 * - Labels may be translated or updated without affecting stored lesson-plan data.
 */

// // Themes for lesson plans - old version - no localization 
// export const Theme = {
//   GLACIERS_AND_WATERSHEDS: "Glaciers/Watersheds",
//   CLIMATE_CHANGE: "Climate Change",
//   LAND_USE: "Land Use",
//   AB_NATURAL_REGIONS: "Alberta Natural Regions & Ecosystems",
//   INDIGENOUS_VOICES: "Indigenous Voices",
//   BOW_RIVER_WATERSHED: "Bow River Watershed",
//   ENERGY: "Energy",
// }

export const LessonTheme = {
  GLACIERS_AND_WATERSHEDS: {
    id: "glaciers-and-watersheds",
    label: {
      en: "Glaciers and Watersheds",
      fr: "Glaciers et bassins versants"
    }
  },

  CLIMATE_CHANGE: {
    id: "climate-change",
    label: {
      en: "Climate Change",
      fr: "Changements climatiques"
    }
  },

  LAND_USE: {
    id: "land-use",
    label: {
      en: "Land Use",
      fr: "Utilisation des terres"
    }
  },

  ALBERTA_NATURAL_REGIONS: {
    id: "alberta-natural-regions-and-ecosystems",
    label: {
      en: "Alberta Natural Regions and Ecosystems",
      fr: "Régions naturelles et écosystèmes de l'Alberta"
    }
  },

  INDIGENOUS_VOICES: {
    id: "indigenous-voices",
    label: {
      en: "Indigenous Voices",
      fr: "Voix autochtones"
    }
  },

  BOW_RIVER_WATERSHED: {
    id: "bow-river-watershed",
    label: {
      en: "Bow River Watershed",
      fr: "Bassin versant de la rivière Bow"
    }
  },

  ENERGY: {
    id: "energy",
    label: {
      en: "Energy",
      fr: "Énergie"
    }
  }
};