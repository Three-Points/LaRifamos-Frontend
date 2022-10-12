# ℹ️ Description
# Specifies the AWS provider, a provider plugin that Terraform will use to manage your AWS resources.
# The configuration defines:
# - IAM Policy and Role as Amplify resource
# - Frontend application definition and its branch settings

provider "aws" {
  region = var.region
}

data "aws_iam_policy_document" "amplify" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["amplify.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "amplify" {
  name               = "amplify-${var.project}"
  assume_role_policy = data.aws_iam_policy_document.amplify.json
}

resource "aws_amplify_app" "application" {
  name         = var.project
  repository   = var.gh_repository
  access_token = var.gh_access_token
  build_spec   = file("./build.yml")

  iam_service_role_arn = aws_iam_role.amplify.arn

  enable_branch_auto_build    = true
  enable_branch_auto_deletion = true
  platform                    = "WEB"

  custom_rule {
    source = "/<*>"
    status = "404"
    target = "/index.html"
  }

  tags = {
    application = var.project
  }
}

resource "aws_amplify_branch" "environment" {
  app_id       = aws_amplify_app.application.id
  branch_name  = var.env_branch
  display_name = var.env_feature

  framework = "React"

  depends_on = [aws_amplify_app.application]
}