---
sidebar_position: 3
title: AI Providers
description: Configure cloud and local model providers for AgentX.
---

# AI providers

AgentX can work with cloud providers or local model runners. Model names and authentication options depend on the provider account you use.

## Provider matrix

| Provider | Example models | Typical authentication |
| --- | --- | --- |
| **Anthropic** | Claude models | ANTHROPIC_API_KEY |
| **OpenAI** | GPT and reasoning models | OPENAI_API_KEY |
| **Google** | Gemini models | GEMINI_API_KEY |
| **GitHub Copilot** | Copilot-supported models | GitHub authentication |
| **Groq** | Llama and other supported models | GROQ_API_KEY |
| **Ollama** | Local coding models | Local API |
| **LM Studio** | Local GGUF models | Local API |

Model availability changes over time. Treat the provider's current documentation as the source of truth for model names and limits.

## Environment variables

A typical shell configuration looks like:

```bash
export ANTHROPIC_API_KEY="your-key"
export OPENAI_API_KEY="your-key"
export GEMINI_API_KEY="your-key"
export GROQ_API_KEY="your-key"
```

Only configure the credentials for providers you actually use.

## Switching during a session

```text
/provider
/model
/cost
```

See [Commands & Shortcuts](/docs/commands) for the command reference.

## Local providers

For an offline or local workflow, see [Local Models](/docs/local-models).
