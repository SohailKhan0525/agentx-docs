---
sidebar_position: 2
title: Installation
---

# Installation & Setup

AgentX is distributed across all major package ecosystems for maximum portability on macOS, Linux, and Windows.

---

## Prerequisites

- **Node.js**: Version `18.0.0` or higher (Node 20+ recommended)
- **Terminal**: Any modern shell (bash, zsh, fish, PowerShell, Windows Terminal)
- **AI Credentials**: API key from a supported provider, or a local model runner (Ollama / LM Studio)

---

## Installation Methods

### Option 1: npm (Recommended)

```bash
npm install -g @agent-qofeno/agentx-cli
```

### Option 2: Homebrew (macOS & Linux)

```bash
brew tap SohailKhan0525/agentx
brew install agentx
```

### Option 3: JSR (Deno & Modern Runtimes)

```bash
npx jsr add @agent-qofeno/agentx-cli
```

### Option 4: GitHub Packages

```bash
npm install -g @SohailKhan0525/agentx-cli --registry https://npm.pkg.github.com
```

---

## Verify Installation

Check that AgentX is installed and accessible in your PATH:

```bash
agentx --version
```

---

## First Run & Authentication

Launch the CLI:

```bash
agentx
```

On first launch, AgentX will prompt you to select your preferred AI provider. Keys are securely stored in your OS native keychain (Windows Credential Manager, macOS Keychain, or Linux Secret Service) and are never written to unencrypted configuration files.
