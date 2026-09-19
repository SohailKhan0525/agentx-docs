---
sidebar_position: 1
title: AI providers
description: Configure model providers for AgentX.
---

# AI providers

AgentX can use hosted model providers or local runners.

| Provider | Credential | Model source |
| --- | --- | --- |
| Anthropic | `ANTHROPIC_API_KEY` | Claude |
| OpenAI | `OPENAI_API_KEY` | GPT |
| Google | `GEMINI_API_KEY` | Gemini |
| Groq | `GROQ_API_KEY` | Hosted open models |
| GitHub Copilot | GitHub authentication | Copilot models |
| Ollama | Local API | Local models |
| LM Studio | Local API | Local models |

Provider names, limits, pricing, and retention policies change. Use each provider's current documentation for account specific details.

## Environment variables

Example shell configuration:

```bash
export ANTHROPIC_API_KEY="your-key"
export OPENAI_API_KEY="your-key"
export GEMINI_API_KEY="your-key"
export GROQ_API_KEY="your-key"
```

Configure only what you use.

## In a session

Common controls include:

```text
/provider
/model
/cost
```

See [Commands](./commands) for the reference.

## Local inference

If inference should remain on your machine or local network, see [Local models](./local-models).
