---
sidebar_position: 2
title: Local models
description: Run AgentX with local model runners such as Ollama and LM Studio.
---

# Local models

Local runners can keep model inference on your machine or local network. AgentX documents workflows for Ollama and LM Studio.

## Ollama

Install and run a coding model with Ollama, then start AgentX against the local provider:

```bash
ollama run qwen2.5-coder:7b
agentx --provider ollama
```

## LM Studio

LM Studio can expose a local OpenAI compatible API. Start the local server in LM Studio, choose a model, then configure AgentX for the local endpoint.

## Model sizing

Hardware requirements depend on model architecture, quantization, context length, and runtime settings.

| Example family | Typical footprint | Useful for |
| --- | --- | --- |
| Qwen Coder 7B | around 5 GB VRAM | General coding and iteration |
| Qwen Coder 14B | around 10 GB VRAM | Larger edits and architecture |
| DeepSeek R1 Distill 8B | around 6 GB VRAM | Reasoning and diagnostics |
| Llama 3.2 3B | around 3 GB VRAM | Lightweight tasks |

These are reference configurations, not guarantees.

## Privacy boundary

With a local runner, inference can remain local. The runner may still download models or make network requests depending on your configuration.

Return to [AI providers](./providers) when you need a hosted model.
