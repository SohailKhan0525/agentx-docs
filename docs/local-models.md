---
sidebar_position: 2
title: Local models
description: Use Ollama or LM Studio with AgentX.
---

# Local models

Local runners are useful when you want model inference on your machine or local network.

## Ollama

Run a coding model with Ollama:

```bash
ollama run qwen2.5-coder:7b
agentx --provider ollama
```

## LM Studio

LM Studio can expose a local OpenAI compatible API. Start its local server, select a model, then configure AgentX for the endpoint.

## Choosing a model

Hardware needs depend on architecture, quantization, context length, and runtime settings.

| Example | Typical footprint | Good fit |
| --- | --- | --- |
| Qwen Coder 7B | around 5 GB VRAM | General coding |
| Qwen Coder 14B | around 10 GB VRAM | Larger edits |
| DeepSeek R1 Distill 8B | around 6 GB VRAM | Reasoning and diagnostics |
| Llama 3.2 3B | around 3 GB VRAM | Lightweight tasks |

These are reference configurations rather than guarantees.

## Network boundary

A local runner can keep inference local, but model downloads and optional telemetry still depend on the runner's configuration.
