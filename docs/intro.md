---
sidebar_position: 1
title: Introduction
description: Understand the AgentX workflow before your first session.
---

# Build with context

AgentX is a terminal based AI agent for building and modifying real software projects.

The workflow is deliberately inspectable: understand the outcome, read the workspace, plan the change, execute it with real tools, and verify what happened.

## First session

Install the CLI and run it from the project you want AgentX to understand:

```bash
npm install -g @agent-qofeno/agentx-cli
cd your-project
agentx
```

Start with an outcome and a constraint:

```text
Improve the settings page.

Keep the existing routes and API contracts.
Inspect the repository first and show me the plan
before making changes.
```

## The four moves

1. **Plan** — define the requested outcome and the affected areas.
2. **Read** — inspect source, dependencies, configuration, and conventions.
3. **Execute** — make focused changes with the terminal and project tools.
4. **Verify** — run the checks that matter and iterate when they fail.

## Continue

- [Installation](./installation) — install and verify the CLI.
- [Providers](./providers) — configure hosted models.
- [Local models](./local-models) — keep inference on your machine or network.
- [Architecture](./architecture) — understand the agent loop.
- [Commands](./commands) — session controls and shortcuts.
