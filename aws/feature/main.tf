# ℹ️ Description
# Specifies the AWS provider, a provider plugin that Terraform will use to manage your AWS resources.
# The configuration defines:
# - IAM Policy and Role as Amplify resource
# - Frontend application definition and its branch settings

provider "aws" {
  region = var.region
}


resource "aws_amplify_branch" "environment" {
  app_id       = var.app_id
  branch_name  = var.env_branch
  display_name = var.env_feature

  framework = "React"
}