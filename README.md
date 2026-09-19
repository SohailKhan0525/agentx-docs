# AgentX Documentation

The documentation site for AgentX, a terminal-based AI agent for building and modifying real web projects.

## Start here

- [Introduction](https://agentx.js.org/docs/intro)
- [Installation](https://agentx.js.org/docs/installation)
- [AI Providers](https://agentx.js.org/docs/providers)
- [Local Models](https://agentx.js.org/docs/local-models)
- [Architecture](https://agentx.js.org/docs/architecture)
- [Commands](https://agentx.js.org/docs/commands)
- [Supported Stacks](https://agentx.js.org/docs/stacks)
- [Integrated Services](https://agentx.js.org/docs/services)
- [Security & Privacy](https://agentx.js.org/docs/security)
- [FAQ](https://agentx.js.org/docs/faq)

## Local development

```bash
git clone https://github.com/SohailKhan0525/agentx-docs.git
cd agentx-docs
npm install
npm run start
```

Build the site with:

```bash
npm run build
```

## Project structure

- `docs/` — product documentation.
- `src/pages/` — landing page.
- `src/css/` — shared Docusaurus design system.
- `sidebars.ts` — documentation navigation.
- `static/CNAME` — custom domain declaration.

## Deployment

The site is configured for GitHub Pages and uses the existing deployment workflow. The custom domain is intentionally kept in `static/CNAME`.

## License

MIT © Sohail Khan
