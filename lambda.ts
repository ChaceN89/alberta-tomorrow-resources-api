/**
 * @file lambda.ts
 * @author Chace Nielson
 * @created Dec 3, 2025
 * @updated Dec 3, 2025
 *
 * @description
 * Entry point for AWS Lambda to run the Alberta Tomorrow Resources API as a serverless backend.
 *
 * This file adapts the Express application (src/app.ts) to work in a serverless environment using
 * the @vendia/serverless-express library. It creates and exports a Lambda handler function that
 * translates API Gateway/Lambda events into Express requests, allowing the API to run seamlessly
 * on AWS Lambda behind API Gateway.
 *
 * Why is this needed?
 * - AWS Lambda does not natively understand Express apps. This file acts as a bridge, enabling
 *   your existing Express code to run on Lambda without modification.
 * - The exported handler is referenced in the AWS SAM/CloudFormation template (template.yaml)
 *   as the Lambda entry point.
 *
 * Usage:
 * - Build the application with `npm run build` before deploying the Lambda handler.
 * - For local development, use `npm run dev` or `npm start`.
 */

import { configure } from '@vendia/serverless-express';
import app from './src/app.js';

// Create the serverless handler
const handler = configure({ app });

export { handler };