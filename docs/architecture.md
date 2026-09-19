---
sidebar_position: 5
title: Architecture
description: A practical view of the AgentX plan, read, execute, and verify loop.
---

# Agent architecture

AgentX is organized around an iterative agent loop rather than one-shot code generation.

```text
request
  │
  ▼
PLAN ────────► review / confirmation
  │
  ▼
READ ────────► repository + context
  │
  ▼
EXECUTE ─────► files + terminal + tools
  │
  ▼
VERIFY ──────► build / type-check / tests
  │
  ├── errors ─────► another iteration
  │
  └── clean ──────► result
```

## 1. Plan

AgentX turns the request into concrete implementation work. A useful plan names the affected areas, expected changes, and checks.

## 2. Read

Before editing, the agent inspects the repository. This gives it the context needed to follow existing structure instead of inventing a parallel architecture.

## 3. Execute

The agent can work with the terminal and project files available to it. Package installation, file edits, and commands remain part of the same task loop.

## 4. Verify

Verification turns failures into feedback. Depending on the project, that can include TypeScript checks, builds, tests, linting, or runtime inspection.

## 5. Ship

AgentX does not replace your release process. Once the project is in the state you want, use your existing Git and hosting workflow.

## Why the loop matters

The important unit is not the generated snippet. It is the state of the repository after a complete, inspectable iteration.
