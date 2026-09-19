---
sidebar_position: 2
title: Installation
description: Install AgentX on macOS, Linux, or Windows.
---

# Installation

Choose the distribution channel that fits your machine.

## Requirements

- Node.js 20 or newer is recommended.
- A modern terminal such as bash, zsh, fish, PowerShell, or Windows Terminal.
- A supported cloud provider credential, or a local model runner.

## npm

```bash
npm install -g @agent-qofeno/agentx-cli
```

## Homebrew

On macOS or Linux:

```bash
brew tap SohailKhan0525/agentx
brew install agentx
```

## JSR

```bash
npx jsr add @agent-qofeno/agentx-cli
```

## Verify

```bash
agentx --version
```

Then start AgentX from the project you want it to understand:

```bash
cd your-project
agentx
```

## First run

Configure only the provider you intend to use. Keep credentials in your environment or secure credential store and never commit secrets.

For local inference, continue to [Local Models](./local-models).
