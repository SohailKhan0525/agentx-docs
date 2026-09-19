---
sidebar_position: 4
title: Local Models
description: Run AgentX with local model runners such as Ollama and LM Studio.
---

# Local models

Local model runners let you keep inference on your machine or local network. AgentX documents workflows for Ollama and LM Studio.

## Supported runners

- **Ollama** — local model management with a simple CLI.
- **LM Studio** — desktop model management with a local API.
- **llama.cpp** — high-performance local inference server.
- **Jan / LocalAI** — additional open local inference options.

## Ollama example

```bash
ollama run qwen2.5-coder:7b
agentx --provider ollama
```

## Choosing a model

The right model depends on your hardware and task.

| Model family | Typical footprint | Useful for |
| --- | --- | --- |
| **Qwen Coder 7B** | ~5 GB VRAM | General coding and iteration |
| **Qwen Coder 14B** | ~10 GB VRAM | Larger edits and architecture |
| **DeepSeek-R1 Distill 8B** | ~6 GB VRAM | Reasoning and diagnostics |
| **Llama 3.2 3B** | ~3 GB VRAM | Lightweight scripts and quick tasks |

These are example configurations, not hardware guarantees. Quantization and runtime settings change actual memory use.

## Privacy model

When you choose a local runner, model inference can remain local. The runner's own telemetry, networking, or model-download behavior depends on how you configure that runner.

## Next

Return to [AI Providers](/docs/providers) to compare provider setup.
