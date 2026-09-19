---
sidebar_position: 1
title: Security and privacy
description: Credential handling and workspace safety for AgentX.
---

# Security and privacy

AgentX works with real repositories, so credential handling and tool boundaries matter.

## Credentials

Never commit API keys, tokens, or private credentials.

Prefer:

- environment variables for local development
- a platform secret store for deployment
- the credential store supported by your operating system

Treat terminal output and logs as sensitive when credentials may appear.

## Workspace boundaries

Run AgentX from the project you intend to change. Review destructive commands and file changes before allowing them.

Keep secrets and generated artifacts out of version control.

## Local inference

Ollama and LM Studio can keep inference on your machine or local network. Their downloads, networking, and telemetry depend on how each runner is configured.

## Production checklist

- [ ] No secrets committed.
- [ ] Production credentials live in a secret store.
- [ ] Generated dependencies reviewed.
- [ ] Authentication and authorization tested.
- [ ] Build and type checks pass.
- [ ] Deployment permissions are scoped.

## Vulnerabilities

Use the AgentX CLI repository's private security reporting flow when available. Use its issue tracker for non sensitive bugs and feature requests.
