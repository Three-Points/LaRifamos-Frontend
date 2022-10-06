# ℹ️ Description
# Defines the input variables that are referenced in main.tf, which make the configuration customizable.

variable "region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "project" {
  description = "AWS project name"
  default     = "ignite"
}

variable "gh_repository" {
  description = "Github repository"
  default     = "https://github.com/roremdev/Ignite"
}

variable "gh_access_token" {
  description = "Github access token"
}

variable "env_feature" {
  description = "Environment feature post-fix"
  default     = "development"
}

variable "env_branch" {
  description = "Environment branch listener"
  default     = "development"
}
