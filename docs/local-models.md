---
sidebar_position: 4
title: Local Models
---

# Local & Offline Models

AgentX features first-class support for zero-cost, privacy-first local inference. When using local models, all code generation, planning, and tool calls remain 100% on your machine.

---

## Supported Runners

- **Ollama** (Recommended for macOS, Linux, and Windows)
- **LM Studio** (GUI runner with visual model download manager)
- **llama.cpp** (High performance CLI server)
- **Jan / LocalAI** (Open source local inference servers)

---

## Recommended Coding Models

| Model | Memory Footprint | Recommended Use Case |
| :--- | :--- | :--- |
| **Qwen 2.5 Coder 7B** | ~5 GB VRAM | Best overall coding agent balance |
| **Qwen 2.5 Coder 14B** | ~10 GB VRAM | High-accuracy architecture & multi-file editing |
| **DeepSeek-R1 Distill 8B**| ~6 GB VRAM | Deep reasoning, bug diagnostics, and algorithms |
| **Llama 3.2 3B** | ~3 GB VRAM | Fast lightweight scripts and rapid iteration |

---

## Automated Ollama Setup

AgentX can automatically detect your hardware specs (CPU threads, total RAM, and GPU VRAM) to recommend the optimal quantization level:

```bash
# Pull recommended model
ollama run qwen2.5-coder:7b

# Launch AgentX with Ollama
agentx --provider ollama
```
