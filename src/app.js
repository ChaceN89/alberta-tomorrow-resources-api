import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import videosRouter from './routes/videos.js';
import lessonPlansRouter from './routes/lesson-plans.js';

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
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/app.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware to parse JSON requests
app.use(express.json());

// Mount route modules
app.use('/api/videos', videosRouter);
app.use('/api/lessons', lessonPlansRouter);

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: API Information
 *     description: Returns basic API information and welcome message
 *     responses:
 *       200:
 *         description: API information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 service:
 *                   type: string
 *                 version:
 *                   type: string
 */
// Basic hello world route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Alberta Tomorrow Resources API!',
    service: 'Alberta Tomorrow Resources API',
    version: '1.0.0',
    documentation: `http://localhost:${PORT}/api-docs`
  });
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health Check
 *     description: Returns the health status of the API
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 timestamp:
 *                   type: string
 */
// Health check route
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
    message: 'API routes are now documented with Swagger',
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
      'GET /api/lessons/:id'
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
  console.log(`\n✨ Use Swagger UI for testing - much better than Postman!`);
});

export default app;