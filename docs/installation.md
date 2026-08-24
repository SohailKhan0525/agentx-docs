---
sidebar_position: 2
title: Installation
---

# Installation

## Requirements

- Node.js 18 or higher
- An API key from a supported AI provider

## npm (recommended)

```bash
npm install -g @agent-qofeno/agentx-cli
```

## Homebrew (macOS/Linux)

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
npm install -g @SohailKhan0525/agentx-cli \
  --registry https://npm.pkg.github.com
```

## Verify Installation

```bash
agentx --version
```

## First Run

```bash
agentx
```

AgentX will ask for your AI provider API key on first run.
The key is stored securely in your OS keychain — never in plain text.
