# Alberta Tomorrow Resources API

A RESTful API providing access to educational videos and lesson plans for the Alberta Tomorrow project. This Express.js API serves as the backend for the Alberta Tomorrow educational platform, offering comprehensive resources for environmental education in Alberta.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express.js](https://img.shields.io/badge/Express.js-5.1.0-lightgrey)
![ES6 Modules](https://img.shields.io/badge/ES6-Modules-blue)
![Swagger](https://img.shields.io/badge/Swagger-3.0-orange)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/ChaceN89/alberta-tomorrow-resources-api.git
cd alberta-tomorrow-resources-api

# Install dependencies
npm install

# Start the server
npm start
```

The API will be running at `http://localhost:3000`

**📋 Interactive API Documentation**: `http://localhost:3000/api-docs`

## 📁 Project Structure

```
abc-alberta-tomorrow-resources-api/
├── src/
│   ├── app.js                          # Main Express application
│   ├── routes/                         # API route handlers
│   │   ├── videos.js                   # Video endpoints
│   │   └── lesson-plans.js            # Lesson plan endpoints
│   └── data/                          # Data layer
│       ├── videoData.js               # Aggregated video data
│       ├── lessonData.js              # Aggregated lesson data
│       ├── enums/                     # Type definitions
│       │   ├── videosEnums.js         # Video categories & tools
│       │   └── lessonPlanEnums.js     # Lesson themes, grades, subjects
│       ├── videoCategories/           # Video data by category
│       │   ├── a-tutorialVideos.js    # Tutorial videos
│       │   ├── b-understandingTheLandscapeVideos.js
│       │   ├── c-environmentalIndicatorsVideos.js
│       │   ├── d-socio-economicIndicatorsVideos.js
│       │   ├── e-indigenousIndicatorsVideos.js
│       │   ├── f-bowRiverWatershed360VideoSeries.js
│       │   ├── g-guardiansOfTheIceVideoSeries.js
│       │   ├── h-stoneyVoicesVideos.js
│       │   ├── i-blackfootVoicesVideos.js
│       │   ├── j-pointsOfInterest.js
│       │   └── z-otherVideos.js
│       └── lessonCategories/          # Lesson plans by theme
│           ├── a-climateChangeLessons.js
│           ├── b-glaciersAndWatershedsLessons.js
│           ├── c-landUseLessons.js
│           ├── d-indigenousVoicesLessons.js
│           ├── e-bowRiverWatershedLessons.js
│           ├── f-albertaNaturalRegions.js
│           └── g-energyLessons.js
├── package.json
└── README.md
```

## 🎯 API Endpoints

### Base Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | API information and welcome |
| `GET` | `/health` | Health check status |
| `GET` | `/routes` | Available routes listing |
| `GET` | `/api-docs` | **Interactive Swagger UI** |
| `GET` | `/api-docs.json` | OpenAPI specification |

### Video Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/videos` | Get all videos (with filtering) |
| `GET` | `/api/videos/:id` | Get single video by ID |

### Lesson Plan Endpoints  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/lessons` | Get all lesson plans (with filtering) |
| `GET` | `/api/lessons/:id` | Get single lesson plan by ID |

## 🔍 Filtering & Query Parameters

### Video Filters
```bash
# Filter by category
GET /api/videos?category=tutorials

# Filter by associated tool
GET /api/videos?tool=Land%20Use%20Simulator

# Combine filters
GET /api/videos?category=tutorials&tool=Land%20Use%20Simulator
```

### Lesson Plan Filters
```bash
# Filter by theme
GET /api/lessons?theme=Climate%20Change

# Filter by subject
GET /api/lessons?subject=science

# Filter by grade level
GET /api/lessons?grade=9

# Filter by associated tool
GET /api/lessons?tool=Land%20Use%20Simulator

# Combine multiple filters
GET /api/lessons?theme=Climate%20Change&grade=9&subject=science
```

## 📊 Data Structure

### Video Object
```javascript
{
  id: "tutorial-01a-register-account",
  title: "User Tutorial: Registering for an Account",
  description: "Watch this tutorial to see how to register...",
  category: "Simulator Tutorials",
  subtype: "tutorials",
  tools: ["Land Use Simulator"],
  lessonPlans: [],
  media: {
    url: "https://www.youtube.com/watch?v=...",
    thumbUrl: "https://d2qcvmovr4fv.cloudfront.net/...",
    is360: false
  },
  hashtags: ["account", "registration", "user-guide"]
}
```

### Lesson Plan Object
```javascript
{
  id: "climate-01a-going-going-gone",
  title: "Going Going Going Gone: Climate Change...",
  description: "Students will explore how climate change...",
  theme: "Climate Change",
  provider: {
    name: "Alberta Tomorrow",
    link: "https://www.albertatomorrow.ca"
  },
  approximateTime: "60 min",
  grades: ["Grade 4", "Grade 5", "Grade 7", "Grade 8"],
  subjects: ["Social Studies", "Science", "Biology"],
  tools: ["Land Use Simulator"],
  files: [{
    title: "Going Going Going Gone",
    link: "/pdfs/lesson-plans/climateChange/..."
  }],
  videos: ["env-06c-greenhouse-gasses", "landscape-01b-climate-change"],
  learningOutcomes: ["understand seasonal variation...", "..."],
  tags: ["glaciers", "climate change", "math"],
  relatedUrls: []
}
```

## 🏗️ Architecture

### Data Organization
- **Modular Structure**: Videos and lessons are organized by category/theme in separate files
- **Enum-Based**: Categories, tools, grades, and subjects use centralized enums for consistency
- **Aggregation**: Individual category files are imported and combined in `videoData.js` and `lessonData.js`
- **ES6 Modules**: Modern JavaScript import/export syntax throughout

### Route Structure
- **Express Routers**: Separate route handlers for videos and lessons
- **Middleware**: JSON parsing, CORS headers, error handling, 404 handling
- **Filtering Logic**: Query parameter-based filtering with case-insensitive matching
- **Logging**: Console output for request tracking and debugging

### API Documentation
- **Swagger/OpenAPI 3.0**: Comprehensive API documentation
- **Interactive Testing**: Built-in Swagger UI for testing endpoints
- **Schema Definitions**: Detailed request/response models
- **Auto-Generation**: Documentation generated from code comments

## 🛠️ Development

### Adding New Videos
1. Add video data to the appropriate category file in `src/data/videoCategories/`
2. Use existing enums from `videosEnums.js` for consistency
3. Video automatically appears in API responses

### Adding New Lesson Plans  
1. Add lesson data to the appropriate theme file in `src/data/lessonCategories/`
2. Use existing enums from `lessonPlanEnums.js` for consistency
3. Lesson automatically appears in API responses

### Adding New Categories/Themes
1. Create new category/theme file following existing naming convention
2. Import and add to the aggregation arrays in `videoData.js`/`lessonData.js`
3. Update enums if needed

## 📝 Available Scripts

```bash
npm start    # Start the production server
npm run dev  # Start the development server (same as start)
npm test     # Run tests (not implemented yet)
```

## 🌟 Features

- ✅ **RESTful API** with consistent endpoints
- ✅ **Comprehensive Filtering** by multiple parameters
- ✅ **Interactive Documentation** with Swagger UI
- ✅ **CORS Support** for cross-origin requests
- ✅ **Error Handling** with meaningful responses
- ✅ **Modular Data Structure** for easy maintenance
- ✅ **ES6 Modules** for modern JavaScript
- ✅ **Type-Safe Enums** for consistency
- ✅ **Detailed Logging** for debugging

## 🔧 Configuration

- **Port**: Default 3000 (configurable via `PORT` environment variable)
- **CORS**: Currently allows all origins (development setup)
- **Logging**: Console-based request logging enabled

## 📚 Usage Examples

### Get All Tutorial Videos
```bash
curl "http://localhost:3000/api/videos?category=tutorials"
```

### Get Climate Change Lessons for Grade 9
```bash
curl "http://localhost:3000/api/lessons?theme=Climate%20Change&grade=9"
```

### Get Single Video
```bash
curl "http://localhost:3000/api/videos/tutorial-01a-register-account"
```

## 🚀 Best Practices for Developers

1. **Use Swagger UI** (`/api-docs`) for API testing instead of Postman
2. **Follow naming conventions** when adding new data files
3. **Use existing enums** rather than hardcoded strings
4. **Test filters** with multiple parameters to ensure compatibility
5. **Check console logs** for request tracking and debugging

## 📋 Data Statistics

- **Videos**: 128 total across 11 categories
- **Lesson Plans**: 38 total across 7 themes  
- **Grade Levels**: K-12 coverage
- **Subjects**: Science, Social Studies, Biology, CTS, and more
- **Tools**: Land Use Simulator, Energy Tomorrow, Wildlife Tomorrow

## 🤝 Contributing

1. Follow the existing file structure and naming conventions
2. Use TypeScript-style JSDoc comments for documentation
3. Test your changes with the Swagger UI
4. Ensure all filters work correctly with new data

## 📞 Support

For questions about the Alberta Tomorrow Resources API, please contact the development team or refer to the interactive documentation at `/api-docs`.

---

**Built with ❤️ for Alberta Tomorrow Educational Initiative**

## 👨‍💻 Author

**Chace Nielson**
- 🌐 Website: [chacenielson.com](https://chacenielson.com)
- 📧 Email: [chacenielson@gmail.com](mailto:chacenielson@gmail.com)
- 🐙 GitHub: [@ChaceN89](https://github.com/ChaceN89)

*Full-stack developer passionate about educational technology and environmental awareness.*

