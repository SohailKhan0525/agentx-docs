---
sidebar_position: 1
title: Introduction
description: Start using AgentX as a terminal based AI agent for real software projects.
---

# Build with context

AgentX is a terminal based AI agent for building and modifying real software projects.

The important difference is the loop around generation. AgentX is designed to inspect the project, form a plan, make changes with real tools, and use verification as feedback.

## The first session

Install the CLI, move into a project, and start a session:

```bash
npm install -g @agent-qofeno/agentx-cli
cd your-project
agentx
```

Start with an outcome rather than a list of implementation details:

```text
Redesign the settings page.

Keep the current routes and API contracts.
Inspect the repository first and show me the plan
before making changes.
```

## What to expect

1. **Inspect** — AgentX reads the workspace and relevant configuration.
2. **Plan** — The requested outcome becomes a concrete implementation path.
3. **Execute** — Files, packages, commands, and tools are used in context.
4. **Verify** — Build, type, test, or runtime feedback informs the next pass.

## What the docs cover

- [Installation](./installation) and first run
- [AI providers](./providers) and [local models](./local-models)
- [Architecture](./architecture) and the agent loop
- [Commands](./commands) for session control
- [Supported stacks](./stacks) and [integrated services](./services)
- [Security](./security) and common [FAQ](./faq)

> Keep your normal Git workflow in place. AgentX works inside the project you give it; your repository and deployment process remain the source of truth.
