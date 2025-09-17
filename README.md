# alberta-tomorrow-resources-api
Videos and lesson plans for Alberta Tomorrow

## Overview
A basic Express.js API server providing hello world routes and health checks for the Alberta Tomorrow Resources platform.

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Start the server
```bash
npm start
```

The server will start on port 3000 by default (or the port specified in the `PORT` environment variable).

### Available Routes

- **GET /** - Basic hello world message
  ```json
  {
    "message": "Hello World!",
    "service": "Alberta Tomorrow Resources API",
    "version": "1.0.0"
  }
  ```

- **GET /hello** - Hello world with timestamp
  ```json
  {
    "message": "Hello World from Alberta Tomorrow!",
    "timestamp": "2025-09-17T22:27:08.931Z"
  }
  ```

- **GET /hello/:name** - Hello world with custom name
  ```json
  {
    "message": "Hello Alberta!",
    "from": "Alberta Tomorrow Resources API"
  }
  ```

- **GET /health** - Health check endpoint
  ```json
  {
    "status": "OK",
    "message": "Alberta Tomorrow Resources API is running",
    "timestamp": "2025-09-17T22:27:08.937Z"
  }
  ```

## Development

To run the development server:
```bash
npm run dev
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## API Testing

You can test the API using curl:

```bash
# Test basic hello world
curl http://localhost:3000

# Test hello with timestamp
curl http://localhost:3000/hello

# Test hello with custom name
curl http://localhost:3000/hello/YourName

# Test health check
curl http://localhost:3000/health
```
