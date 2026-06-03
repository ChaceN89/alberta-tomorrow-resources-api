
/*
    File: LessonPlanData.js
    Author: Chace Nielson
    Date Created: Jun 3, 2026
    Date Updated: Jun 3, 2026

    Description:
    - Loads, combines, filters, and localizes lesson plan data for the Alberta Tomorrow Resources API.
    - Uses source JSON files from /lessonPlans during development.
    - Can optionally use generated JSON files from /generatedJsonFiles.
    - Resolves localized text from LessonPlanLocalizedText, MetaDataLocalizedText, and TagsLocalizedText.

    Dependencies:
    - Node.js fs/promises
    - Node.js path
    - Node.js url

    Notes:
    - Lesson plan JSON files should use localization keys, not direct display text.
    - API responses should return localized text, not localization keys.
    - English is used as the fallback language.
*/

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LessonPlansFolderPath = path.join(__dirname, "lessonPlans");
const LocalizedTextFolderPath = path.join(__dirname, "localizedText");
const GeneratedLessonPlansPath = path.join(__dirname, "generatedJsonFiles", "LessonPlans.generated.json");

const LessonPlanLocalizedTextPath = path.join(LocalizedTextFolderPath, "LessonPlanLocalizedText.json");
const MetaDataLocalizedTextPath = path.join(LocalizedTextFolderPath, "MetaDataLocalizedText.json");
const TagsLocalizedTextPath = path.join(LocalizedTextFolderPath, "TagsLocalizedText.json");

const DefaultLanguage = "en";

export async function getAllLessonPlans(options = {}) {
    const {
        lang = DefaultLanguage,
        useGeneratedData = false,
        includeLocalizationKeys = false
    } = options;

    const lessonPlans = useGeneratedData
        ? await loadGeneratedLessonPlans()
        : await loadLessonPlansFromSourceFiles();

    const localizedTextData = await loadAllLocalizedTextData();

    return lessonPlans.map((lessonPlan) => {
        return localizeLessonPlan(lessonPlan, localizedTextData, lang, includeLocalizationKeys);
    });
}

export async function getLessonPlanById(id, options = {}) {
    const lessonPlans = await getAllLessonPlans(options);

    return lessonPlans.find((lessonPlan) => lessonPlan.id === id) ?? null;
}

export async function getLessonPlansByTheme(themeId, options = {}) {
    const lessonPlans = await getAllLessonPlans(options);

    return lessonPlans.filter((lessonPlan) => lessonPlan.theme.id === themeId);
}

export async function getLessonPlansByGrade(gradeId, options = {}) {
    const lessonPlans = await getAllLessonPlans(options);

    return lessonPlans.filter((lessonPlan) => {
        return lessonPlan.grades.some((grade) => grade.id === gradeId);
    });
}

export async function getLessonPlansBySubject(subjectId, options = {}) {
    const lessonPlans = await getAllLessonPlans(options);

    return lessonPlans.filter((lessonPlan) => {
        return lessonPlan.subjects.some((subject) => subject.id === subjectId);
    });
}

export async function getLessonPlansByTag(tagId, options = {}) {
    const lessonPlans = await getAllLessonPlans(options);

    return lessonPlans.filter((lessonPlan) => {
        return lessonPlan.tags.some((tag) => tag.id === tagId);
    });
}

export async function searchLessonPlans(searchText, options = {}) {
    const lessonPlans = await getAllLessonPlans(options);
    const normalizedSearchText = normalizeSearchText(searchText);

    if (!normalizedSearchText) {
        return lessonPlans;
    }

    return lessonPlans.filter((lessonPlan) => {
        const searchableText = [
            lessonPlan.title,
            lessonPlan.description,
            lessonPlan.theme.label,
            ...lessonPlan.grades.map((grade) => grade.label),
            ...lessonPlan.subjects.map((subject) => subject.label),
            ...lessonPlan.tags.map((tag) => tag.label),
            ...lessonPlan.learningOutcomes
        ].join(" ");

        return normalizeSearchText(searchableText).includes(normalizedSearchText);
    });
}

export async function loadLessonPlansFromSourceFiles() {
    const fileNames = await fs.readdir(LessonPlansFolderPath);

    const lessonPlanFileNames = fileNames.filter((fileName) => {
        return fileName.endsWith(".json");
    });

    const lessonPlanGroups = await Promise.all(lessonPlanFileNames.map(async (fileName) => {
        const filePath = path.join(LessonPlansFolderPath, fileName);
        const fileData = await fs.readFile(filePath, "utf8");

        return JSON.parse(fileData);
    }));

    return lessonPlanGroups.flat();
}

export async function loadGeneratedLessonPlans() {
    const fileData = await fs.readFile(GeneratedLessonPlansPath, "utf8");

    return JSON.parse(fileData);
}

export async function loadAllLocalizedTextData() {
    const [
        lessonPlanLocalizedText,
        metaDataLocalizedText,
        tagsLocalizedText
    ] = await Promise.all([
        loadJsonFile(LessonPlanLocalizedTextPath),
        loadJsonFile(MetaDataLocalizedTextPath),
        loadJsonFile(TagsLocalizedTextPath)
    ]);

    return {
        ...lessonPlanLocalizedText,
        ...metaDataLocalizedText,
        ...tagsLocalizedText
    };
}

async function loadJsonFile(filePath) {
    const fileData = await fs.readFile(filePath, "utf8");

    return JSON.parse(fileData);
}

function localizeLessonPlan(lessonPlan, localizedTextData, lang, includeLocalizationKeys = false) {
    const localizedLessonPlan = {
        id: lessonPlan.id,

        title: getLocalizedText(localizedTextData, lessonPlan.titleKey, lang),
        description: getLocalizedText(localizedTextData, lessonPlan.descriptionKey, lang),
        approximateTime: getLocalizedText(localizedTextData, lessonPlan.approximateTimeKey, lang),

        theme: localizeIdLabel(localizedTextData, "theme", lessonPlan.theme, lang),
        tools: lessonPlan.tools.map((tool) => localizeIdLabel(localizedTextData, "tool", tool, lang)),

        files: lessonPlan.files.map((file) => {
            return {
                title: getLocalizedText(localizedTextData, file.titleKey, lang),
                description: getLocalizedText(localizedTextData, file.descriptionKey, lang),
                link: file.link
            };
        }),

        grades: lessonPlan.grades.map((grade) => localizeIdLabel(localizedTextData, "grade", grade, lang)),
        subjects: lessonPlan.subjects.map((subject) => localizeIdLabel(localizedTextData, "subject", subject, lang)),
        tags: lessonPlan.tags.map((tag) => localizeIdLabel(localizedTextData, "tag", tag, lang)),

        learningOutcomes: lessonPlan.learningOutcomeKeys.map((learningOutcomeKey) => {
            return getLocalizedText(localizedTextData, learningOutcomeKey, lang);
        }),

        videos: lessonPlan.videos,

        relatedUrls: lessonPlan.relatedUrls.map((relatedUrl) => {
            return {
                title: getLocalizedText(localizedTextData, relatedUrl.titleKey, lang),
                link: relatedUrl.link
            };
        })
    };

    if (includeLocalizationKeys) {
        localizedLessonPlan.localizationKeys = {
            titleKey: lessonPlan.titleKey,
            descriptionKey: lessonPlan.descriptionKey,
            approximateTimeKey: lessonPlan.approximateTimeKey,
            learningOutcomeKeys: lessonPlan.learningOutcomeKeys
        };
    }

    return localizedLessonPlan;
}

function localizeIdLabel(localizedTextData, type, id, lang) {
    return {
        id,
        label: getLocalizedText(localizedTextData, `${type}.${id}`, lang)
    };
}

function getLocalizedText(localizedTextData, key, lang) {
    if (!key) {
        return "";
    }

    return localizedTextData[key]?.[lang]
        ?? localizedTextData[key]?.[DefaultLanguage]
        ?? key;
}

function normalizeSearchText(value) {
    return String(value ?? "")
        .trim()
        .toLowerCase();
}
