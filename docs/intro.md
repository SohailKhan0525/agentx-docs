---
sidebar_position: 1
title: Introduction
description: Understand AgentX and run your first task from the terminal.
---

# AgentX

AgentX is a terminal-based AI agent for building and modifying real web projects.

The workflow is project-aware: describe an outcome, let AgentX inspect the repository, review its plan, approve the work, and verify the result.

## The core loop

| Stage | What happens |
| --- | --- |
| **Plan** | AgentX turns the request into an implementation plan. |
| **Read** | It inspects the project structure, code, dependencies, and context. |
| **Execute** | It edits files and uses the terminal tools available to the project. |
| **Verify** | It uses build, type-check, lint, or other project checks as feedback. |
| **Ship** | You keep the result in your normal local or deployment workflow. |

## Start in two commands

```bash
npm install -g @agent-qofeno/agentx-cli
agentx
```

Run AgentX from the root of the project you want it to understand.

## What AgentX is built for

- **Website creation** — build pages and applications from a natural-language outcome.
- **Existing repositories** — work with code that already has structure and conventions.
- **Provider choice** — connect supported cloud models or local model runners.
- **Tool-driven work** — use files, commands, packages, and Git as part of the task.
- **Iterative verification** — treat compiler and build feedback as part of the loop.

## A useful first prompt

Be specific about the outcome and constraints:

```text
Build a documentation site for this CLI.

Keep the existing routes, use the current framework,
and make the landing page responsive. Before editing,
inspect the repository and show me the implementation plan.
```

## Next

1. [Install AgentX](/docs/installation)
2. [Configure a provider](/docs/providers)
3. [Learn the agent architecture](/docs/architecture)
4. [Explore commands](/docs/commands)
