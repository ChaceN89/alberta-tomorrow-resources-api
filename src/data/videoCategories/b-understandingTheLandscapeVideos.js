/**
 * @file b-understandingTheLandscapeVideos.js
 * @module Data/Video/UnderstandingTheLandscape
 * @desc Contains video data for the "Understanding the Landscape" category in Alberta Tomorrow.
 * 
 * @author Chace Nielson
 * @created Apr 9, 2025
 * @updated Apr 10, 2025
 */

import { VideoCategory, AssociatedTool } from "../videosEnums";

export const understandingTheLandscapeVideos = [
  { // video 1 - Climate Change
    id: "landscape-01b-climate-change",
    title: "Climate Change",
    description: "How will Alberta be affected by Climate Change? What's the difference between Climate Change and Global Warming?",
    category: VideoCategory.LANDSCAPE,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=Okh7vn60kxg",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/climate_change_video.jpg",
      is360: false
    },
    hashtags: [
      "climatechange", "globalwarming", "landuse", "education", "renewableenergy", "futurealberta"
    ]
  },
  { // video 2 - Beneficial Management Practices
    id: "landscape-02b-management-practices",
    title: "Beneficial Management Practices",
    description: "What are Beneficial Management Practices and how do they affect the future of Alberta? Find out what large companies, farmers, and you can do to minimize the effect on the environment.",
    category: VideoCategory.LANDSCAPE,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=WBKwcDIqJ0U",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/a3db110f-8d4b-4190-b512-a84cf1472eb5/thumbnails/Management Practices_H264_tumb.0000039.jpg",
      is360: false
    },
    hashtags: [
      "bmp", "management", "landuse", "sustainability", "industry", "futurealberta"
    ]
  },
  { // video 3 - Ecological Goods and Services
    id: "landscape-03b-ecological-goods",
    title: "Ecological Goods and Services",
    description: "An introduction to ecological goods and services.",
    category: VideoCategory.LANDSCAPE,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=WBdpkY9KSgs",
      cloundFrontUrl: "https://d2qcvmovr4fv.cloudfront.net/out/v1/d3af3f5027fc4578bb8a5e661fd15662/4ca13953c62041b89da9ee75727d50c9/d421596074b04016aafe5f186ec3ff53/index.m3u8",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/7f76a14f-20e9-430d-bef6-5c08247cad75/thumbnails/Ecological Goods v2_H264_tumb.0000033.jpg",
      is360: false
    },
    hashtags: [
      "egs", "ecology", "landuse", "naturalcapital", "ecosystemservices"
    ]
  },
  { // video 4 - Water Quality, Climate Change and Alberta's Glaciers Webinar
    id: "landscape-04b-glaciers-webinar",
    title: "Water Quality, Climate Change and Alberta's Glaciers Webinar",
    description: "This webinar was held on May 27, 2020 and features 4 prominent scientists talking about climate change and how it will affect glaciers, glacier melt, water policy and our water quality.",
    category: VideoCategory.LANDSCAPE,
    tools: [AssociatedTool.SIMULATOR],
    lessonPlans: [],
    media: {
      url: "https://www.youtube.com/watch?v=Xgb3_I8nagY",
      thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/youtube/thumbnails/water-climate-change-glaciers-webinar.jpg",
      is360: false
    },
    hashtags: [
      "abglaciers", "climatechange", "waterquality", "columbiaicefield", "athabascaglacier", "landuse"
    ]
  }
];
