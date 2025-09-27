import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import videosRouter from './routes/videos.js';
import lessonPlansRouter from './routes/lesson-plans.js';
import statsRouter from './routes/stats.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Alberta Tomorrow Resources API',
      version: '1.0.0',
      description: 'API for educational videos and lesson plans for Alberta Tomorrow',
      contact: {
        name: 'Chace Nielson',
        email: 'chacenielson@gmail.com',
        url: 'https://chacenielson.com'
      }
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
  },
  apis: [
    './src/routes/videos.js',
    './src/routes/lesson-plans.js',
    './src/routes/stats.js',
    './src/app.js'
  ], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Debug: Check if swagger spec is generated properly
console.log('🔍 Swagger spec generated with', Object.keys(swaggerSpec.paths || {}).length, 'paths');

// Middleware to parse JSON requests
app.use(express.json());

// Serve static PDF files
app.use('/pdfs', express.static('src/data/pdfs'));

// Mount route modules
app.use('/api/videos', videosRouter);
app.use('/api/lessons', lessonPlansRouter);
app.use('/api/stats/', statsRouter);

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Alberta Tomorrow Resources API!',
    service: 'Alberta Tomorrow Resources API',
    version: '1.0.0',
    documentation: `http://localhost:${PORT}/api-docs`
  });
});

// health Check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Alberta Tomorrow Resources API is running',
    timestamp: new Date().toISOString()
  });
});

// Routes listing endpoint
app.get('/routes', (req, res) => {
  res.json({
    message: 'API routes are documented with Swagger',
    swaggerUI: `http://localhost:${PORT}/api-docs`,
    jsonSpec: `http://localhost:${PORT}/api-docs.json`,
    availableRoutes: [
      'GET /',
      'GET /health',
      'GET /routes',
      'GET /api-docs',
      'GET /api/videos',
      'GET /api/videos/:id',
      'GET /api/lessons',
      'GET /api/lessons/:id',
      'GET /api/stats',
      'GET /api/stats/videos',
      'GET /api/stats/lessons',
      'GET /api/stats/filters'
    ]
  });
});

// Serve swagger spec as JSON
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Alberta Tomorrow Resources API is running on port ${PORT}`);
  console.log(`📋 Interactive API Documentation: http://localhost:${PORT}/api-docs`);
  console.log(`📄 API Specification (JSON): http://localhost:${PORT}/api-docs.json`);
  console.log(`🌐 API Base URL: http://localhost:${PORT}`);
});

export default app;