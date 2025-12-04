
/**
 * @file lambda.js
 * @author Chace Nielson
 * @created Dec 3, 2025
 * @updated Dec 3, 2025
 *
 * @description
 * Entry point for AWS Lambda to run the Alberta Tomorrow Resources API as a serverless backend.
 *
 * This file adapts the Express application (src/app.js) to work in a serverless environment using
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
 * - Do not run this file directly. It is invoked by AWS Lambda when deployed.
 * - For local development, use src/app.js with `npm start` or `npm run dev`.
 */

import serverlessExpress from '@vendia/serverless-express';
import app from './src/app.js';

// Create the serverless handler
const handler = serverlessExpress({ app });

export { handler };