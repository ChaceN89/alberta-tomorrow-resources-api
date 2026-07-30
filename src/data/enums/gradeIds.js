/**
 * @file gradeIds.js
 * @module Data/Enums
 * @desc Defines stable grade identifiers, display order, and localized grade labels.
 *
 * @author Chace Nielson
 * @created Jul 30, 2026
 * @updated Jul 30, 2026
 *
 * @notes
 * - IDs are stable API values and should not be translated or changed.
 * - Labels may be translated or updated without affecting stored lesson-plan data.
 * - The order value should be used when sorting grades.
 */

export const Grade = {
  KINDERGARTEN: {
    id: "kindergarten",
    order: 0,
    label: {
      en: "Kindergarten",
      fr: "Maternelle"
    }
  },

  GRADE_1: {
    id: "grade-1",
    order: 1,
    label: {
      en: "Grade 1",
      fr: "1re année"
    }
  },

  GRADE_2: {
    id: "grade-2",
    order: 2,
    label: {
      en: "Grade 2",
      fr: "2e année"
    }
  },

  GRADE_3: {
    id: "grade-3",
    order: 3,
    label: {
      en: "Grade 3",
      fr: "3e année"
    }
  },

  GRADE_4: {
    id: "grade-4",
    order: 4,
    label: {
      en: "Grade 4",
      fr: "4e année"
    }
  },

  GRADE_5: {
    id: "grade-5",
    order: 5,
    label: {
      en: "Grade 5",
      fr: "5e année"
    }
  },

  GRADE_6: {
    id: "grade-6",
    order: 6,
    label: {
      en: "Grade 6",
      fr: "6e année"
    }
  },

  GRADE_7: {
    id: "grade-7",
    order: 7,
    label: {
      en: "Grade 7",
      fr: "7e année"
    }
  },

  GRADE_8: {
    id: "grade-8",
    order: 8,
    label: {
      en: "Grade 8",
      fr: "8e année"
    }
  },

  GRADE_9: {
    id: "grade-9",
    order: 9,
    label: {
      en: "Grade 9",
      fr: "9e année"
    }
  },

  GRADE_10: {
    id: "grade-10",
    order: 10,
    label: {
      en: "Grade 10",
      fr: "10e année"
    }
  },

  GRADE_11: {
    id: "grade-11",
    order: 11,
    label: {
      en: "Grade 11",
      fr: "11e année"
    }
  },

  GRADE_12: {
    id: "grade-12",
    order: 12,
    label: {
      en: "Grade 12",
      fr: "12e année"
    }
  },

  POST_SECONDARY: {
    id: "post-secondary",
    order: 13,
    label: {
      en: "Post-Secondary",
      fr: "Études postsecondaires"
    }
  }
};