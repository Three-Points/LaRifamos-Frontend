# ℹ️ Description
# Defines the information about your infrastructure that Terraform Cloud will display to you when it makes changes.

output "iam_role" {
  description = "IAM role name"
  value       = aws_iam_role.amplify.name
}

output "amplify_id" {
  description = "Amplify id"
  value       = aws_amplify_app.application.id
}

output "app_domain" {
  description = "Application domain"
  value       = "https://${aws_amplify_app.application.default_domain}"
}

output "env_domain" {
  description = "Environment domain"
  value       = "https://${aws_amplify_branch.environment.display_name}.${aws_amplify_app.application.default_domain}"
}
