/**
 * @file e-indigenousIndicatorsVideos.js
 * @module Data/Video/IndigenousIndicators
 * @desc Contains video data for the Indigenous Indicators category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 9, 2025
 * @updated Apr 10, 2025
 */

import { VideoCategory, AssociatedTool } from "../enums/videosEnums.js";

export const indigenousIndicatorsVideos = [
  { // video 1 - TLU Access
    id: "ind-01e-tlu-access",
    title: "TLU Access",
    description: 
      "Traditional Land Use Access (TLU Access) measures land accessibility for Indigenous peoples engaging in traditional practices. It reflects accessible natural areas not within protected zones.",
    category: VideoCategory.INDIGENOUS_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://youtu.be/yz52Ysp_meQ?si=2uYyt4W4Qjq31z2N",
      cloudFrontUrl: 'https://d2qcvmovr4fv.cloudfront.net/out/v1/31daf805c8d44748a6a14f7d38cc0084/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8',
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/a7edc400-3c29-48bb-bcc6-296883adc89c/thumbnails/Using%20the%20Land_tumb.0000000.jpg",
      is360: false
    },
    hashtags: ["tlu", "indigenous-access", "traditional-use", "landuse"]
  },
  { // video 2 - Moose Habitat
    id: "ind-02e-moose-habitat",
    title: "Moose Habitat",
    description: 
      "Moose Habitat is reduced by industrial development and proximity to human activity. This video explores how habitat value is calculated in Alberta Tomorrow.",
    category: VideoCategory.INDIGENOUS_INDICATORS,
    tools: [AssociatedTool.SIMULATOR, AssociatedTool.WILDLIFE_TOMORROW],
    lessonPlans: [],
    media: {
      url: "https://youtu.be/rb0WIzUHnYw?si=r438JuVzkL4PxsaR",
      cloudFrontUrl: 'https://d2qcvmovr4fv.cloudfront.net/out/v1/0b5e0c2176c843228629c01f7775b085/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8',
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/18212f4c-ba95-443b-9a9c-8cea0186f22a/thumbnails/Moose%20Story_tumb.0000000.jpg",
      is360: false
    },
    hashtags: ["moose", "habitat", "wildlife", "landuse"]
  },
  { // video 3 - Hunting Opportunity
    id: "ind-03e-hunting-opportunity",
    title: "Hunting Opportunity",
    description: 
      "This video explains the Hunting Opportunity indicator, combining TLU Access and Moose Habitat to reflect Indigenous hunting access.",
    category: VideoCategory.INDIGENOUS_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://youtu.be/d_wKqUZMaTk?si=3dnMMNcSOKg8pW5X",
      cloudFrontUrl: 'https://d2qcvmovr4fv.cloudfront.net/out/v1/5eefc5c24b0d4099bd93ae333cf1ec23/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8',
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/4682cb45-4133-437f-b341-98c1a7254a06/thumbnails/Land%20Use%20wildlife_tumb.0000000.jpg",
      is360: false
    },
    hashtags: ["hunting", "tlu", "moose", "landuse"]
  },
  {
    id: "ind-04e-water-quality",
    title: "Water Quality",
    description: 
      "Phosphorus runoff and land conversion reduce water quality. Learn how Indigenous communities are impacted and how this indicator is measured.",
    category: VideoCategory.INDIGENOUS_INDICATORS,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://youtu.be/oG-PuCO-h7I?si=wtIn-3h7T1rZQqWU",
      cloudFrontUrl: 'https://d2qcvmovr4fv.cloudfront.net/out/v1/b0d49bc627c0484e91c44be95305d9b4/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8',
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/9a3e7d28-fbfe-465e-96c8-74f4ddf8e15e/thumbnails/Water_tumb.0000000.jpg",
      is360: false
    },
    hashtags: ["abwater", "waterquality", "eutrophication", "landuse"]
  },
  {
    id: "ind-05e-fish-habitat",
    title: "Fish Habitat",
    description: 
      "Healthy fish habitat means diverse native species and fewer disturbances. This video highlights habitat importance to Indigenous communities.",
    category: VideoCategory.INDIGENOUS_INDICATORS,
    tools: [AssociatedTool.SIMULATOR, AssociatedTool.WILDLIFE_TOMORROW],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=oti7o8JS62Q",
      cloudFrontUrl: 'https://d2qcvmovr4fv.cloudfront.net/out/v1/edc8301613324a6699d44e7e8ad91427/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8',
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/28da03d6-aee2-4c23-be8f-bee1d50d7a4a/thumbnails/Fish Habitat v2_H264_tumb.0000030.jpg",
      is360: false
    },
    hashtags: ["abfish", "fishhabitat", "nativetrout", "indigenous-values"]
  },
  {
    id: "ind-06e-fishing-opportunity",
    title: "Fishing Opportunity",
    description: 
      "Fishing Opportunity combines TLU Access and Fish Habitat to indicate access to successful fishing activities for Indigenous peoples.",
    category: VideoCategory.INDIGENOUS_INDICATORS,
    tools: [AssociatedTool.SIMULATOR, AssociatedTool.WILDLIFE_TOMORROW],
    lessonPlans: [],
    media: {
      url: "https://youtu.be/vN_X59jznLE?si=qs742rPJ9WvbOe1y",
      cloudFrontUrl: 'https://d2qcvmovr4fv.cloudfront.net/out/v1/64b6a087dc63427fa227b08165994242/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8',
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/e9bd9064-c34e-4769-a3c3-8d702623d91b/thumbnails/Fishing%20on%20the%20Bow_tumb.0000000.jpg",
      is360: false
    },
    hashtags: ["fishing", "tlu", "nativetrout", "landuse"]
  }
];
