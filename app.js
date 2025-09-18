const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic hello world route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
    service: 'Alberta Tomorrow Resources API',
    version: '1.0.0'
  });
});

// Hello world route with name parameter
app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello World from Alberta Tomorrow!',
    timestamp: new Date().toISOString()
  });
});

// Hello world route with custom name
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.json({
    message: `Hello ${name}!`,
    from: 'Alberta Tomorrow Resources API'
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Alberta Tomorrow Resources API is running',
    timestamp: new Date().toISOString()
  });
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
  console.log(`Alberta Tomorrow Resources API is running on port ${PORT}`);
  console.log(`Available routes:`);
  console.log(`  GET /          - Hello World`);
  console.log(`  GET /hello     - Hello World with timestamp`);
  console.log(`  GET /hello/:name - Hello with custom name`);
  console.log(`  GET /health    - Health check`);
});

module.exports = app;