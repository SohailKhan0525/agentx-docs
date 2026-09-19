---
sidebar_position: 1
title: AI providers
description: Configure cloud and local model providers for AgentX.
---

# AI providers

AgentX can work with hosted model providers or local model runners.

| Provider | Example credential | Notes |
| --- | --- | --- |
| Anthropic | `ANTHROPIC_API_KEY` | Claude family |
| OpenAI | `OPENAI_API_KEY` | GPT and reasoning models |
| Google | `GEMINI_API_KEY` | Gemini family |
| Groq | `GROQ_API_KEY` | Hosted open models |
| GitHub Copilot | GitHub authentication | Copilot supported models |
| Ollama | Local API | Local inference |
| LM Studio | Local API | Local inference |

Provider model names, limits, and retention policies change over time. Use the provider's current documentation as the source of truth.

## Environment variables

A typical shell setup looks like:

```bash
export ANTHROPIC_API_KEY="your-key"
export OPENAI_API_KEY="your-key"
export GEMINI_API_KEY="your-key"
export GROQ_API_KEY="your-key"
```

Configure only the variables you need.

## During a session

The command reference includes provider and model controls:

```text
/provider
/model
/cost
```

See [Commands](./commands) for the full list.

## Choosing local inference

If you want model inference to remain on your machine or local network, see [Local Models](./local-models).
