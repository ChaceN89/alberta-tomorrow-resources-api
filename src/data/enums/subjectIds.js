/**
 * @file subjectIds.js
 * @module Data/Enums
 * @desc Defines stable subject identifiers and localized subject labels.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @notes
 * - IDs are stable API values and should not be translated or changed.
 * - Labels may be translated or updated without affecting stored lesson-plan data.
 */

export const Subject = {
  SCIENCE: {
    id: "science",
    label: {
      en: "Science",
      fr: "Sciences"
    }
  },

  BIOLOGY: {
    id: "biology",
    label: {
      en: "Biology",
      fr: "Biologie"
    }
  },

  CHEMISTRY: {
    id: "chemistry",
    label: {
      en: "Chemistry",
      fr: "Chimie"
    }
  },

  PHYSICS: {
    id: "physics",
    label: {
      en: "Physics",
      fr: "Physique"
    }
  },

  SOCIAL_STUDIES: {
    id: "social-studies",
    label: {
      en: "Social Studies",
      fr: "Études sociales"
    }
  },

  OUTDOOR_EDUCATION: {
    id: "outdoor-environmental-education",
    label: {
      en: "Outdoor and Environmental Education",
      fr: "Éducation en plein air et environnementale"
    }
  },

  CTS: {
    id: "cts",
    label: {
      en: "CTS",
      fr: "Études professionnelles et technologiques"
    }
  },

  ENGLISH_LANGUAGE_ARTS: {
    id: "english-language-arts",
    label: {
      en: "English Language Arts",
      fr: "Anglais et arts langagiers"
    }
  },

  MATH: {
    id: "math",
    label: {
      en: "Math",
      fr: "Mathématiques"
    }
  },

  PHYSICAL_EDUCATION: {
    id: "physical-education",
    label: {
      en: "Physical Education",
      fr: "Éducation physique"
    }
  },

  HEALTH: {
    id: "health",
    label: {
      en: "Health",
      fr: "Santé"
    }
  },

  FINE_ARTS: {
    id: "fine-arts",
    label: {
      en: "Fine Arts",
      fr: "Beaux-arts"
    }
  },

  SPECIAL_PROJECTS: {
    id: "special-projects",
    label: {
      en: "Special Projects",
      fr: "Projets spéciaux"
    }
  },

  LOCALLY_DEVELOPED_COURSE: {
    id: "locally-developed-course",
    label: {
      en: "Locally Developed Course",
      fr: "Cours élaboré localement"
    }
  },

  INDIGENOUS_STUDIES: {
    id: "indigenous-studies",
    label: {
      en: "Indigenous Studies",
      fr: "Études autochtones"
    }
  },

  OTHER: {
    id: "other",
    label: {
      en: "Other",
      fr: "Autre"
    }
  }
};