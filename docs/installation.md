---
sidebar_position: 2
title: Installation
description: Install AgentX on macOS, Linux, or Windows.
---

# Installation

AgentX is distributed through npm, Homebrew, JSR, and GitHub Packages.

## Requirements

- **Node.js:** 18.0.0 or newer. Node 20+ is recommended.
- **Terminal:** bash, zsh, fish, PowerShell, Windows Terminal, or another modern shell.
- **Credentials:** an API key for a supported provider, or a local model runner such as Ollama or LM Studio.

## npm

```bash
npm install -g @agent-qofeno/agentx-cli
```

## Homebrew

On macOS and Linux:

```bash
brew tap SohailKhan0525/agentx
brew install agentx
```

## JSR

```bash
npx jsr add @agent-qofeno/agentx-cli
```

## GitHub Packages

```bash
npm install -g @SohailKhan0525/agentx-cli --registry https://npm.pkg.github.com
```

## Verify

```bash
agentx --version
agentx
```

## First run

On first launch, configure the AI provider you want to use. Keep credentials in your normal environment or secure credential-management workflow; do not commit secrets to a repository.

For local inference, continue to [Local Models](/docs/local-models).
