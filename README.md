# AgentX documentation

The public documentation site for AgentX.

AgentX is a terminal based AI agent for building and modifying real software projects. The docs cover installation, model providers, local inference, the agent loop, commands, supported stacks, integrations, and security.

## Development

```bash
git clone https://github.com/SohailKhan0525/agentx-docs.git
cd agentx-docs
npm install
npm run start
```

Build a production bundle with `npm run build`.

## Structure

- `docs/` — product documentation
- `src/pages/` — landing page and 404
- `src/components/` — small reusable page primitives
- `src/css/` — shared documentation design system
- `static/CNAME` — custom domain declaration

## Deployment

GitHub Pages deployment is configured through the existing workflow. The public domain is **https://agentx.js.org**.

The custom domain file and deployment workflow are intentionally preserved.
