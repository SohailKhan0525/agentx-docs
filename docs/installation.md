---
sidebar_position: 2
title: Installation
description: Install AgentX on macOS, Linux, or Windows.
---

# Installation

AgentX is a terminal tool. Pick the distribution channel that fits your machine.

## Requirements

- Node.js 20 or newer.
- A modern terminal.
- A supported hosted provider credential or a local model runner.

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

Then start from your repository:

```bash
cd your-project
agentx
```

## First run

Keep credentials outside Git. For local inference, continue to [Local models](./local-models).
