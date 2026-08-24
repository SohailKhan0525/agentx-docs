---
sidebar_position: 1
title: Introduction
---

# AgentX Introduction

**AgentX** is an autonomous AI agent built specifically for full-stack website creation from your terminal. 

Unlike generic code generation assistants that produce disconnected snippets or partial examples, AgentX acts as an end-to-end software engineer: it writes a structured implementation plan, analyzes your existing directory, invokes shell commands, writes real production files, self-heals build and TypeScript errors, and deploys live.

---

## Key Capabilities

- **Autonomous Website Builder**: From prompt to live URL in Next.js 14, React + Vite, Astro, or Nuxt 3.
- **Interactive Terminal UI**: Monochromatic Ink interface with live streaming tokens, step-by-step progress bars, and keyboard shortcuts.
- **Provider Agnostic**: Cloud models (Claude, OpenAI, Gemini, Copilot, Groq) or 100% private offline inference with Ollama and LM Studio.
- **Self-Healing Loop**: Automatically inspects build logs, runs compiler checks, and fixes syntax or dependency issues before shipping.
- **One-Command Deployment**: Instant hosting integration with Vercel, Netlify, Cloudflare Pages, Railway, and GitHub Pages.
- **Cryptographic Provenance**: Signed npm and JSR releases with verified build attestations.

---

## Quick Start (60 Seconds)

```bash
# 1. Install globally via npm
npm install -g @agent-qofeno/agentx-cli

# 2. Launch the interactive AgentX session
agentx
```

---

## Next Steps

- [Installation Guide](/docs/installation) — Explore install options via npm, Homebrew, JSR, and GitHub Packages.
- [AI Providers](/docs/providers) — Connect your preferred LLM provider or local runtime.
- [Supported Stacks](/docs/stacks) — Learn about framework presets and design systems.
- [Agent Architecture](/docs/architecture) — Understand the five-stage planning and execution loop.
