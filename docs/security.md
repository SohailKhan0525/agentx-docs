---
sidebar_position: 9
title: Security & Privacy
---

# Security & Privacy Architecture

AgentX is designed around strict security, sandboxing, and credential protection principles.

---

## Native Credential Encryption

- **No Plaintext Secrets**: API keys are never stored in plaintext dotfiles or JSON caches.
- **OS Keychain Integration**: Credentials are protected via OS-level hardware encryption:
  - **macOS**: Apple Keychain Services
  - **Windows**: Windows Credential Manager (DPAPI)
  - **Linux**: Freedesktop Secret Service (GNOME Keyring / KWallet)
- **Masked Display**: Keys shown in terminal or logs are truncated: `sk-ant••••••••ABCD`.

---

## Sandboxed Tool Execution

1. **Workspace Boundary**: AgentX commands run exclusively within your current project root.
2. **Ignored Files**: Automatically writes sensitive credentials to `.env.local` and validates `.gitignore` before repository commits.
3. **Local Inference Privacy**: When using Ollama or LM Studio, no code, logs, or prompt tokens leave your local network.

---

## Vulnerability Reporting

Report security issues directly via our [GitHub Security Advisories](https://github.com/SohailKhan0525/agentx-cli/security/advisories) or repository issues.
