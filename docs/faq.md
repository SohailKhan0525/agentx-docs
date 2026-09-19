---
sidebar_position: 10
title: FAQ
description: Common questions about AgentX installation, providers, privacy, and projects.
---

# Frequently asked questions

## Does AgentX send my code to an external service?

That depends on the provider you choose. Cloud providers receive the information required for the model request. With a local model runner, inference can remain on your machine or local network.

Review the privacy and data-retention terms of the provider you connect.

## Where should API keys live?

Keep credentials in the environment or secure credential store supported by your platform. Never commit keys to Git.

## Which operating systems are supported?

The documentation covers Windows, macOS, and Linux workflows.

## Can AgentX work on an existing codebase?

Yes. Reading the current repository before editing is a core part of the workflow.

## Can I use local models?

Yes. See [Local Models](/docs/local-models) for Ollama and LM Studio setup.

## Is AgentX free?

The AgentX CLI is open source under the MIT License. Your AI provider may charge for model usage, while local inference has its own hardware and electricity costs.

## Where do I report bugs?

Use the [AgentX CLI GitHub repository](https://github.com/SohailKhan0525/agentx-cli) and its issue tracker for bugs and feature requests.
