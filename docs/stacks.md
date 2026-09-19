---
sidebar_position: 3
title: Supported stacks
description: Framework and styling guidance for AgentX workflows.
---

# Supported stacks

AgentX is intended to work with modern web projects while respecting the stack that is already there.

## Next.js

Useful for full stack applications and production web platforms. Existing App Router, TypeScript, Server Components, Server Actions, and styling choices should be read before new patterns are introduced.

## React and Vite

A strong fit for client heavy applications, dashboards, and single page tools.

## Astro

Useful for content heavy sites and documentation where keeping the client bundle small matters.

## Nuxt

A Vue oriented option for SSR applications and full stack Vue projects.

## Styling

AgentX should follow the repository's existing styling system. Keep design tokens, component primitives, responsive rules, and naming conventions consistent rather than creating a second visual system.

## A good stack prompt

```text
Inspect the current framework and styling setup first.
Do not add a new UI library unless the repository
already uses it or the plan explains why it is needed.
```
