<div align="center">

<img src="https://raw.githubusercontent.com/SohailKhan0525/agentx-cli/main/assets/logo.png" width="110" height="110" alt="AgentX Logo" style="border-radius: 20%;" />

# AgentX Documentation

**The official documentation portal for AgentX — The autonomous AI agent that builds production-ready websites from your terminal.**

[![Live Documentation](https://img.shields.io/badge/Live%20Docs-GitHub%20Pages-000000?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=18181b)](https://sohailkhan0525.github.io/agentx-docs/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-000000?style=for-the-badge&logo=typescript&logoColor=white&labelColor=18181b)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-000000?style=for-the-badge&logo=open-source-initiative&logoColor=white&labelColor=18181b)](LICENSE)
[![Ask AI](https://img.shields.io/badge/AI%20Chatbot-Biel.ai-000000?style=for-the-badge&logo=openai&logoColor=white&labelColor=18181b)](https://sohailkhan0525.github.io/agentx-docs/)

</div>

---

## Overview

This repository hosts the interactive documentation site for [AgentX](https://github.com/SohailKhan0525/agentx-cli), featuring full API references, architecture guides, live search, and an embedded AI documentation chatbot.

- **Production URL**: [https://sohailkhan0525.github.io/agentx-docs/](https://sohailkhan0525.github.io/agentx-docs/)
- **Custom Domain**: [https://agentx.js.org](https://agentx.js.org) (pending DNS propagation)
- **AI Knowledge Base**: Included `llms.txt` and `llms-full.txt` for LLM context indexing

---

## Documentation Structure

| Guide | Description | Target |
| :--- | :--- | :--- |
| **Getting Started** | Fast-track onboarding to build your first website in 60 seconds | [`/docs/intro`](https://sohailkhan0525.github.io/agentx-docs/docs/intro) |
| **Installation** | Setup via npm, Homebrew, JSR, and GitHub Packages | [`/docs/installation`](https://sohailkhan0525.github.io/agentx-docs/docs/installation) |
| **Cloud Providers** | Connecting Copilot, OpenAI, Gemini, Claude, and Groq | [`/docs/providers`](https://sohailkhan0525.github.io/agentx-docs/docs/providers) |
| **Local Models** | Zero-cost offline development using Ollama and LM Studio | [`/docs/local-models`](https://sohailkhan0525.github.io/agentx-docs/docs/local-models) |
| **CLI Commands** | Exhaustive reference of every CLI flag and option | [`/docs/commands`](https://sohailkhan0525.github.io/agentx-docs/docs/commands) |
| **Agent Architecture** | Plan -> Read -> Tool Execution -> Verification workflow | [`/docs/architecture`](https://sohailkhan0525.github.io/agentx-docs/docs/architecture) |
| **Supported Stacks** | Next.js 14, React + Vite, Astro, Nuxt, and modern UI toolkits | [`/docs/supported-stacks`](https://sohailkhan0525.github.io/agentx-docs/docs/supported-stacks) |
| **Deployment** | One-command deployment to Vercel, Netlify, Cloudflare, and GitHub | [`/docs/deployment`](https://sohailkhan0525.github.io/agentx-docs/docs/deployment) |

---

## Local Development

```bash
# Clone the documentation repository
git clone https://github.com/SohailKhan0525/agentx-docs.git
cd agentx-docs

# Install dependencies
npm install

# Start local development server
npm run start

# Build production bundle
npm run build
```

---

## License

[MIT](LICENSE) © [Sohail Khan](https://github.com/SohailKhan0525)
