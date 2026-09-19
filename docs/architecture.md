---
sidebar_position: 1
title: Architecture
description: Understand the AgentX plan, read, execute, and verify loop.
---

# The agent loop

AgentX is organized around an iterative loop instead of one shot code generation.

```text
REQUEST
   │
   ▼
PLAN ──────────► review
   │
   ▼
READ ──────────► repository + context
   │
   ▼
EXECUTE ───────► files + terminal + tools
   │
   ▼
VERIFY ────────► build + typecheck + tests
   │
   ├── failure ─► another iteration
   │
   └── clean ───► result
```

## Plan

Translate the requested outcome into affected areas, implementation steps, dependencies, and checks.

## Read

Inspect the current repository before editing. Existing routes, configuration, packages, and conventions are context rather than obstacles.

## Execute

Work with the terminal and project files available to the session. Changes stay connected to the plan.

## Verify

Use the checks that matter for the repository: type checking, builds, tests, linting, or runtime inspection.

## Ship

AgentX does not replace your release process. Once the repository is ready, use your existing Git and hosting workflow.

> The useful unit is not a generated snippet. It is a complete, inspectable repository iteration.
