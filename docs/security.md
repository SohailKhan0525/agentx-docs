---
sidebar_position: 9
title: Security & Privacy
description: Security practices and privacy considerations for AgentX projects.
---

# Security & privacy

AgentX is intended to work with real repositories, so credential handling and tool boundaries matter.

## Credentials

Do not commit API keys or access tokens to source control.

Use the credential mechanism supported by your environment, such as:

- macOS Keychain
- Windows Credential Manager
- Linux Secret Service / keyring
- Environment variables for local development
- Your CI or hosting provider's secret store for deployment

Treat terminal output and logs as sensitive when credentials are involved.

## Workspace boundaries

Run AgentX from the project you intend it to change. Review commands and file changes before allowing destructive operations.

Keep sensitive files out of the repository with an appropriate ignore file.

## Local inference

When using Ollama or LM Studio, inference can remain on your local machine or local network. The network behavior of the model runner itself depends on how you configure that runner.

## Before production

- [ ] No secrets are committed.
- [ ] Production credentials are stored in a secret manager.
- [ ] Generated dependencies are reviewed.
- [ ] Authentication and authorization are tested.
- [ ] Build and type checks pass.
- [ ] Deployment permissions are scoped to what the project needs.

## Reporting a vulnerability

For a security issue in AgentX, use the project's GitHub security reporting flow or open an issue when private disclosure is not available.
