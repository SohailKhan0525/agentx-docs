---
sidebar_position: 3
title: AI Providers
---

# AI Providers & Model Configuration

AgentX supports cloud LLMs and local offline models. You can switch models and providers on the fly without leaving your session.

---

## Supported Providers

| Provider | Recommended Models | Authentication Method |
| :--- | :--- | :--- |
| **Anthropic Claude** | `claude-3-7-sonnet`, `claude-3-5-sonnet`, `claude-3-opus` | `export ANTHROPIC_API_KEY="sk-ant-..."` |
| **OpenAI** | `gpt-4o`, `gpt-4o-mini`, `o3-mini`, `o1` | `export OPENAI_API_KEY="sk-..."` |
| **Google Gemini** | `gemini-2.0-flash`, `gemini-1.5-pro` | `export GEMINI_API_KEY="AIza..."` |
| **GitHub Copilot** | GPT-4o, Claude 3.5 Sonnet | GitHub OAuth / PAT Token |
| **Groq (Ultra-Fast)** | `llama-3.3-70b-versatile`, `mixtral-8x7b` | `export GROQ_API_KEY="gsk_..."` |
| **Ollama (Offline)** | `qwen2.5-coder:7b`, `deepseek-r1:8b`, `llama3.2` | Local API endpoint (`http://localhost:11434`) |
| **LM Studio** | Any loaded GGUF model | Local API endpoint (`http://localhost:1234`) |

---

## Managing Providers in Session

- Switch provider: `/provider`
- Switch active model: `/model`
- Check token usage & cost: `/cost`

---

## Environment Variables

You can pre-configure provider credentials in your `.bashrc`, `.zshrc`, or Windows environment variables:

```bash
# Anthropic
export ANTHROPIC_API_KEY="your-anthropic-key"

# OpenAI
export OPENAI_API_KEY="your-openai-key"

# Google Gemini
export GEMINI_API_KEY="your-gemini-key"

# Groq
export GROQ_API_KEY="your-groq-key"
```
