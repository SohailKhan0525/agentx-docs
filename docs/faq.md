---
sidebar_position: 2
title: FAQ
description: Common questions about AgentX installation, providers, privacy, and projects.
---

# FAQ

## Is AgentX only for new projects?

No. Working with an existing repository is a central use case. AgentX is designed to read the current project before editing.

## Does my code leave my machine?

That depends on the model provider. Hosted providers receive the information required for model requests. With a local runner, inference can remain on your machine or local network.

Check the current privacy and retention terms of the provider you choose.

## Where should API keys live?

Use your environment or a secure credential store. Never commit keys to Git.

## Can I use local models?

Yes. See [Local models](./local-models) for Ollama and LM Studio workflows.

## Which operating systems are supported?

The documentation covers Windows, macOS, and Linux terminal workflows.

## Is the CLI free?

The AgentX CLI is open source under the MIT License. Hosted model providers can charge for usage, while local inference has hardware and electricity costs.

## Where do I report bugs?

Use the [AgentX CLI repository](https://github.com/SohailKhan0525/agentx-cli) for bugs and feature requests.
