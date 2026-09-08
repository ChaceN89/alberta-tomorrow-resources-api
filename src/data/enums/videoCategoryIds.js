/**
 * @file videoCategoryIds.js
 * @module Data/Enums
 * @desc Defines stable video category identifiers and localized category labels.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @notes
 * - IDs are stable API values and should not be translated or changed.
 * - Labels may be translated or updated without affecting stored video data.
 */

export const VideoCategory = {
  TUTORIALS: {
    id: "simulator-tutorials",
    label: {
      en: "Simulator Tutorials",
      fr: "Tutoriels du simulateur"
    }
  },

  LANDSCAPE: {
    id: "understanding-the-landscape",
    label: {
      en: "Understanding the Landscape",
      fr: "Comprendre le paysage"
    }
  },

  ENVIRONMENTAL_INDICATORS: {
    id: "environmental-indicators",
    label: {
      en: "Environmental Indicators",
      fr: "Indicateurs environnementaux"
    }
  },

  SOCIO_ECONOMIC_INDICATORS: {
    id: "socio-economic-indicators",
    label: {
      en: "Socio-Economic Indicators",
      fr: "Indicateurs socioéconomiques"
    }
  },

  INDIGENOUS_INDICATORS: {
    id: "indigenous-indicators",
    label: {
      en: "Indigenous Indicators",
      fr: "Indicateurs autochtones"
    }
  },

  BOW_RIVER_360: {
    id: "bow-river-watershed-360",
    label: {
      en: "Bow River Watershed 360 Series",
      fr: "Série 360 du bassin versant de la rivière Bow"
    }
  },

  GLACIER_SERIES: {
    id: "glacier-series",
    label: {
      en: "Glacier Series",
      fr: "Série sur les glaciers"
    }
  },

  STONEY_VOICES: {
    id: "stoney-voices",
    label: {
      en: "Stoney Voices",
      fr: "Voix des Stoney"
    }
  },

  BLACKFOOT_VOICES: {
    id: "blackfoot-voices",
    label: {
      en: "Blackfoot Voices",
      fr: "Voix des Pieds-Noirs"
    }
  },

  POINTS_OF_INTEREST: {
    id: "points-of-interest",
    label: {
      en: "Points of Interest",
      fr: "Points d'intérêt"
    }
  },

  OTHER: {
    id: "other",
    label: {
      en: "Other Videos",
      fr: "Autres vidéos"
    }
  }
};