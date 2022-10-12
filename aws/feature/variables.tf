# ℹ️ Description
# Defines the input variables that are referenced in main.tf, which make the configuration customizable.

variable "region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "app_id" {
  description = "AWS Amplify id"
}

variable "env_feature" {
  description = "Environment feature post-fix"
  default     = "development"
}

variable "env_branch" {
  description = "Environment branch listener"
  default     = "development"
}
