---
sidebar_position: 1
title: Security and privacy
description: Credential handling, workspace boundaries, and local inference guidance.
---

# Security and privacy

AgentX works with real repositories, so credentials and tool boundaries deserve the same care as any other development workflow.

## Credentials

Never commit API keys, tokens, or private credentials to Git.

Use the credential mechanism supported by your environment:

- macOS Keychain
- Windows Credential Manager
- Linux Secret Service or keyring
- Environment variables for local development
- CI or hosting provider secret stores for deployment

Treat terminal output and logs as sensitive when credentials are present.

## Workspace boundaries

Run AgentX from the project you intend to change. Review destructive commands and file changes before allowing them.

Use an appropriate ignore file for secrets and generated files.

## Local inference

Ollama and LM Studio can keep inference on your machine or local network. Their model downloads, telemetry, and networking depend on how you configure each runner.

## Production checklist

- [ ] No secrets are committed.
- [ ] Production credentials live in a secret manager.
- [ ] Generated dependencies are reviewed.
- [ ] Authentication and authorization are tested.
- [ ] Build and type checks pass.
- [ ] Deployment permissions are scoped to the project.

## Reporting a vulnerability

Use the AgentX CLI repository's security reporting flow for private disclosure when available. For non sensitive bugs and feature requests, use its issue tracker.
