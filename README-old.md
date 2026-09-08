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

### Statistics & Metadata Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/stats` | Get comprehensive API statistics |
| `GET` | `/api/stats/videos` | Get video-only statistics |
| `GET` | `/api/stats/lessons` | Get lesson-only statistics |
| `GET` | `/api/stats/filters` | Get all available filter values |

## 🔍 Filtering, Pagination & Query Parameters

### 📄 Pagination

All collection endpoints (`/api/videos` and `/api/lessons`) support pagination:

```bash
# Basic pagination
GET /api/videos?page=1&limit=10

# Get all results (bypass pagination)
GET /api/videos?page=all

# Default pagination (page=1, limit=10)
GET /api/videos
```

#### Pagination Parameters
- **`page`**: Page number (default: 1, or use `"all"` for no pagination)
- **`limit`**: Items per page (default: 10)

#### Pagination Response Format
```javascript
{
  "data": [/* array of videos/lessons */],
  "meta": {
    "currentPage": 1,
    "totalPages": 13,
    "totalItems": 128,
    "itemsPerPage": 10,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

### 🎯 Video Filters
```bash
# Filter by category (URL encoded for spaces)
GET /api/videos?category=Simulator%20Tutorials

# Filter by associated tool
GET /api/videos?tool=Land%20Use%20Simulator

# Combine filters with pagination
GET /api/videos?category=Simulator%20Tutorials&tool=Land%20Use%20Simulator&page=1&limit=5
```

#### Available Video Categories
- `Simulator Tutorials`
- `Understanding the Landscape`
- `Environmental Indicators`
- `Socio-Economic Indicators`
- `Indigenous Indicators`
- `Bow River Watershed 360 Series`
- `Glacier Series`
- `Stoney Voices`
- `Blackfoot Voices`
- `Points of Interest`
- `Other Videos`

### 📚 Lesson Plan Filters
```bash
# Filter by theme
GET /api/lessons?theme=Climate%20Change

# Filter by subject
GET /api/lessons?subject=Science

# Filter by grade level
GET /api/lessons?grade=Grade%209

# Filter by associated tool
GET /api/lessons?tool=Land%20Use%20Simulator

# Combine multiple filters with pagination
GET /api/lessons?theme=Climate%20Change&grade=Grade%209&subject=Science&page=1&limit=20
```

#### Available Lesson Themes
- `Climate Change`
- `Glaciers and Watersheds`
- `Land Use`
- `Indigenous Voices`
- `Bow River Watershed`
- `Alberta's Natural Regions`
- `Energy`

### 🔍 Discovering Filter Values

Use the stats/filters endpoint to get all available filter values:

```bash
# Get all available filter options
GET /api/stats/filters
```

**Response:**
```javascript
{
  "videos": {
    "categories": ["Simulator Tutorials", "Understanding the Landscape", ...],
    "tools": ["Land Use Simulator", "Energy Tomorrow", ...]
  },
  "lessons": {
    "themes": ["Climate Change", "Land Use", ...],
    "grades": ["Grade 4", "Grade 5", ...],
    "subjects": ["Science", "Social Studies", ...],
    "tools": ["Land Use Simulator", "Wildlife Tomorrow", ...]
  }
}
```

### 📊 Statistics Endpoints

```bash
# Get comprehensive API statistics
GET /api/stats

# Get video statistics only
GET /api/stats/videos

# Get lesson statistics only  
GET /api/stats/lessons

# Get available filter values (shown above)
GET /api/stats/filters
```

**Pro Tips:**
- 🔗 Use `/api/stats/filters` to build dynamic dropdown menus
- 📄 Use `page=all` when you need all results for data analysis
- 🎯 Combine filters and pagination for precise data retrieval
- 🌐 URL encode spaces and special characters (e.g., `%20` for spaces)

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
  lessonPlans: [
    { title: "Lesson Plan", link: "link to lesson plan" },
  ],
  media: {
    url: "https://www.youtube.com/watch?v=...",
    cloudfrontUrl: "Specific URl for a cloudfront endpoint"
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
  videos: ["env-06c-greenhouse-gases", "landscape-01b-climate-change"],
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
- ✅ **Flexible Pagination** with customizable page sizes
- ✅ **Statistics & Metadata** endpoints for API insights
- ✅ **Interactive Documentation** with Swagger UI
- ✅ **CORS Support** for cross-origin requests
- ✅ **Error Handling** with meaningful responses
- ✅ **Modular Data Structure** for easy maintenance
- ✅ **ES6 Modules** for modern JavaScript
- ✅ **Type-Safe Enums** for consistency
- ✅ **Detailed Logging** for debugging
- ✅ **Developer-Friendly** with filter discovery endpoints

## 🔧 Configuration

- **Port**: Default 3000 (configurable via `PORT` environment variable)
- **CORS**: Currently allows all origins (development setup)
- **Logging**: Console-based request logging enabled

## 📚 Usage Examples

### Get Tutorial Videos with Pagination
```bash
# First page of tutorials (default 10 per page)
curl "http://localhost:3000/api/videos?category=Simulator%20Tutorials"

# Second page with custom page size
curl "http://localhost:3000/api/videos?category=Simulator%20Tutorials&page=2&limit=5"

# All tutorial videos (bypass pagination)
curl "http://localhost:3000/api/videos?category=Simulator%20Tutorials&page=all"
```

### Get Climate Change Lessons for Grade 9
```bash
# With pagination
curl "http://localhost:3000/api/lessons?theme=Climate%20Change&grade=Grade%209"

# Get all matching lessons
curl "http://localhost:3000/api/lessons?theme=Climate%20Change&grade=Grade%209&page=all"
```

### Get Single Resources
```bash
# Single video by ID
curl "http://localhost:3000/api/videos/tutorial-01a-register-account"

# Single lesson by ID
curl "http://localhost:3000/api/lessons/climate-01a-going-going-gone"
```

### Get Statistics and Metadata
```bash
# API overview statistics
curl "http://localhost:3000/api/stats"

# Available filter values for frontend dropdowns
curl "http://localhost:3000/api/stats/filters"

# Video-only statistics
curl "http://localhost:3000/api/stats/videos"
```

## 🚀 Best Practices for Developers

1. **Use Swagger UI** (`/api-docs`) for API testing instead of Postman
2. **Start with `/api/stats/filters`** to discover available filter values
3. **Use pagination** for better performance (`page=1&limit=10`)
4. **URL encode parameters** with spaces (e.g., `Grade%209`, `Climate%20Change`)
5. **Follow naming conventions** when adding new data files
6. **Use existing enums** rather than hardcoded strings
7. **Test filters** with multiple parameters to ensure compatibility
8. **Check console logs** for request tracking and debugging
9. **Use `page=all`** only when you need all results (e.g., data export)
10. **Combine stats endpoints** with main endpoints for comprehensive frontends

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

