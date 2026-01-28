# variables.tf

variable "environment" {
	description = "Deployment environment (e.g., prod, dev)"
	type        = string
}

variable "aws_lambda_service_name" {
	description = "Name of the Lambda function for the Express API."
	type        = string
}

variable "aws_api_gateway_service_name" {
	description = "Name of the API Gateway REST API."
	type        = string
}

variable "lambda_code_bucket" {
	description = "Name of the S3 bucket to store the Lambda deployment package. Must be globally unique."
	type        = string
}

variable "aws_region" {
	description = "AWS region to deploy resources in."
	type        = string
}

variable "lambda_zip_file" {
	description = "The S3 key (object name) for the Lambda deployment ZIP file."
	type        = string
}
