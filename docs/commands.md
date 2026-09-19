---
sidebar_position: 6
title: Commands & Shortcuts
description: Reference the AgentX terminal commands and keyboard shortcuts.
---

# Commands & shortcuts

AgentX provides slash commands for session control and keyboard shortcuts for terminal interaction.

## Slash commands

| Command | Purpose | Example |
| --- | --- | --- |
| `/help` | Show available commands | `/help` |
| `/clear` | Clear the current session context | `/clear` |
| `/model` | Change the active model | `/model claude-3-7-sonnet` |
| `/provider` | Change the active provider | `/provider` |
| `/cost` | Show token usage and estimated cost | `/cost` |
| `/theme` | Change the terminal theme | `/theme` |
| `/skills` | List available skills and tools | `/skills` |
| `/exit` | End the session | `/exit` |

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| **Ctrl + C** | Interrupt generation or tool execution |
| **Ctrl + D** | Exit the CLI |
| **Tab** | Autocomplete commands and paths |
| **Shift + Enter** | Add a newline to a multi-line prompt |
| **↑ / ↓** | Cycle through prompt history |

> Command availability can change as AgentX evolves. If a command behaves differently in your installed version, run `/help` inside the session.
