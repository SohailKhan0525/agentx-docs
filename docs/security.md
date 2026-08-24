---
sidebar_position: 8
title: Security
---

# Security

## API Key Storage

AgentX stores all API keys in your operating system's secure storage:

- **macOS**: Keychain
- **Windows**: Windows Credential Manager
- **Linux**: Secret Service / GNOME Keyring / KWallet

Keys are never stored in plain text files.
Keys are never logged anywhere.
Keys are always masked when displayed: `sk-pr••••••••••••ABCD`

## .env.local Files

When AgentX creates a project, it:
1. Writes credentials to `.env.local` in your project folder
2. Immediately adds `.env.local` to `.gitignore`
3. Reminds you never to commit `.env.local`

## Reporting Security Issues

Found a vulnerability? Report it at:
github.com/SohailKhan0525/agentx-cli/issues

Please do not include sensitive information in public issues.
