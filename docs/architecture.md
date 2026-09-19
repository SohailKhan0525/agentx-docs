---
sidebar_position: 1
title: Architecture
description: Understand the AgentX plan, read, execute, and verify loop.
---

# The agent loop

AgentX treats a useful unit of work as an iteration around the repository, not a generated snippet.

```text
REQUEST
   │
   ▼
PLAN ─────────► review
   │
   ▼
READ ─────────► source + config + dependencies
   │
   ▼
EXECUTE ──────► files + terminal + tools
   │
   ▼
VERIFY ────────► build + tests + type checks
   │
   ├─ failure ─► next iteration
   │
   └─ clean ───► result
```

## Plan

Translate the request into affected areas, implementation steps, dependencies, and checks.

## Read

Inspect the current repository before editing. Existing routes, packages, configuration, and conventions are part of the context.

## Execute

Use the tools and commands already available to the project. Keep the edit focused on the requested outcome.

## Verify

Run the checks that matter: type checking, builds, tests, linting, or runtime inspection.

## Ship

Your normal Git and deployment process remains the source of truth.
