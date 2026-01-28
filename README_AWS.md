# Alberta Tomorrow Resources API – Serverless Deployment Overview

This document provides an overview of the AWS services required to deploy the Alberta Tomorrow Resources API as a serverless backend, along with a brief explanation of the serverless architecture.

## AWS Services Used

### 1. AWS Lambda
- **Purpose:** Runs your backend API code without managing servers.
- **Usage:** Deploy your Express.js API using the AWS Lambda service. Lambda automatically scales and handles execution in response to HTTP requests.

### 2. Amazon API Gateway
- **Purpose:** Provides a RESTful API endpoint for clients to interact with your Lambda function.
- **Usage:** Configure API Gateway to route HTTP requests to your Lambda handler. Supports authentication, throttling, and monitoring.

### 3. AWS IAM (Identity and Access Management)
- **Purpose:** Manages permissions and access control for AWS resources.
- **Usage:** Assign IAM roles to Lambda for secure access to other AWS services if needed (e.g., S3, DynamoDB). You already have company IAM access.

### 4. Amazon CloudWatch
- **Purpose:** Monitors logs and metrics for Lambda and API Gateway.
- **Usage:** View logs, set up alarms, and monitor API performance and errors.

---

## Not Required for Backend API
- **Amazon S3:** Not needed for backend API code deployment. S3 is used for static assets (PDFs, images) for frontend applications (simulator, homepage).

---

## What is a Serverless System?
A serverless system allows you to run backend code without provisioning or managing servers. AWS Lambda executes your code in response to events (such as HTTP requests via API Gateway). You pay only for the compute time used, and AWS automatically scales your application.

**Benefits:**
- No server management
- Automatic scaling
- Cost-effective (pay per use)
- Integrated monitoring and security

**Typical Workflow:**
1. Package and deploy your API code to Lambda.
2. Configure API Gateway to expose REST endpoints.
3. Assign IAM roles for permissions.
4. Monitor and troubleshoot using CloudWatch.

---

## Next Steps
- Package your Express.js API for Lambda (see `lambda.js` and deployment template).
- Deploy using AWS Console, CLI, or AWS SAM.
- Update API Gateway settings as needed.

---

For more details, see the main README or deployment template files.
