import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';
import styles from './index.module.css';

const capabilities = [
  ['01','Read before editing','AgentX inspects the repository, dependencies, routes, and conventions before it proposes a change.'],
  ['02','Plan the work','Turn a broad request into concrete files, components, commands, and checks you can review.'],
  ['03','Work in the terminal','Use the project’s existing tools instead of forcing your codebase into a generated template.'],
  ['04','Verify the result','Builds, type checks, tests, and runtime feedback become part of the same iteration.'],
];

const steps = [
  ['01','Describe the outcome','Tell AgentX what the finished project should do and what must stay intact.'],
  ['02','Inspect and plan','The agent reads the workspace and presents an implementation path before the edit loop begins.'],
  ['03','Execute with context','Files, packages, commands, and Git changes stay connected to the original request.'],
  ['04','Check and iterate','Failures become input for another pass until the repository reaches the state you asked for.'],
];

const installs = [
  ['npm','npm install -g @agent-qofeno/agentx-cli','https://www.npmjs.com/package/@agent-qofeno/agentx-cli'],
  ['brew','brew tap SohailKhan0525/agentx && brew install agentx','https://github.com/SohailKhan0525/homebrew-agentx'],
  ['jsr','npx jsr add @agent-qofeno/agentx-cli','https://jsr.io/@agent-qofeno/agentx-cli'],
];

const faqs = [
  ['What is AgentX?','A terminal based AI agent for building and modifying real software projects with repository context and a plan first workflow.'],
  ['Can it work in an existing repository?','Yes. Inspecting the current project before editing is a core part of the documented workflow.'],
  ['Do I have to use a hosted model?','No. AgentX documents both cloud providers and local runners such as Ollama and LM Studio.'],
  ['What operating systems are covered?','The documentation covers Windows, macOS, and Linux terminal workflows.'],
  ['Can I review the plan before changes?','Yes. Planning and confirmation are part of the intended agent loop.'],
  ['Where should I begin?','Install the CLI, open the introduction, then run AgentX from the root of a project you want it to understand.'],
];

function CopyRow({name, command, href}:{name:string;command:string;href:string}) {
  const [copied,setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {}
  }
  return <div className={styles.installRow}>
    <a href={href} target="_blank" rel="noreferrer" className={styles.installName}>{name}</a>
    <button type="button" onClick={copy} className={styles.command} aria-label={copied ? 'Copied' : `Copy ${name} command`}>
      <code>{command}</code><span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  </div>;
}

export default function Home():React.JSX.Element {
  return <Layout title="AgentX" description="AgentX documentation: a terminal based AI agent for building and modifying real software projects.">
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <header className={styles.topline}>
            <Link to="/" className={styles.brand}><span className={styles.mark}>A</span><span>AgentX</span></Link>
            <nav aria-label="Primary"><Link to="/docs/intro">Docs</Link><a href="https://github.com/SohailKhan0525/agentx-cli">GitHub</a></nav>
          </header>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <SectionLabel>TERMINAL FIRST · PLAN FIRST</SectionLabel>
              <h1>Build with an agent that understands the project.</h1>
              <p className={styles.lede}>AgentX reads the repository, plans the work, uses the tools already in your workflow, and verifies what it changes.</p>
              <div className={styles.actions}>
                <Link className={styles.primary} to="/docs/intro">Read the docs <span>→</span></Link>
                <a className={styles.textLink} href="https://github.com/SohailKhan0525/agentx-cli">View source</a>
              </div>
              <div className={styles.meta}><span>Open source</span><span>Windows · macOS · Linux</span><span>Cloud or local models</span></div>
            </div>
            <div className={styles.terminal}>
              <div className={styles.terminalHead}><span>agentx</span><span>READY</span></div>
              <div className={styles.terminalBody}>
                <p><b>$</b> agentx</p>
                <p className={styles.dim}>What should we build?</p>
                <p>Redesign this docs site without changing its deployment.</p>
                <div className={styles.rule}/>
                <p><span>01</span> Inspect repository</p>
                <p><span>02</span> Map affected files</p>
                <p><span>03</span> Draft implementation plan</p>
                <p className={styles.cursorLine}><span>04</span> Awaiting confirmation<span className={styles.cursor}/></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.manifesto}>
        <Reveal><div className={styles.narrow}>
          <SectionLabel>THE WORKSPACE</SectionLabel>
          <h2>Good agent work starts with context, not autocomplete.</h2>
          <p>AgentX is built around the state of the repository after a complete iteration: understand the request, inspect what exists, make a deliberate change, and check the result.</p>
        </div></Reveal>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <Reveal><div className={styles.sectionIntro}><div><SectionLabel>CAPABILITIES</SectionLabel><h2>Less guessing. More context.</h2></div><p>For projects with history, dependencies, conventions, and decisions worth preserving.</p></div></Reveal>
          <div className={styles.capabilityGrid}>{capabilities.map(([n,t,d]) => <Reveal key={n}><article className={styles.capability}><span>{n}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.wrap}>
          <Reveal><div className={styles.sectionIntro}><div><SectionLabel>WORKFLOW</SectionLabel><h2>From request to verified result.</h2></div><p>One loop. Four clear stages. Your existing toolchain stays in charge.</p></div></Reveal>
          <div className={styles.steps}>{steps.map(([n,t,d]) => <Reveal key={n}><article className={styles.step}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article></Reveal>)}</div>
        </div>
      </section>

      <section className={styles.statement}>
        <Reveal><div className={styles.wrap}><p className={styles.bigStatement}><span>Read it.</span> <span>Plan it.</span> <span>Change it.</span> <span>Prove it.</span></p></div></Reveal>
      </section>

      <section className={styles.installSection}>
        <div className={styles.wrap}>
          <Reveal><div className={styles.installGrid}><div><SectionLabel>INSTALL</SectionLabel><h2>Start from the package manager you already use.</h2><p>Install the CLI, then open the quick start to configure a provider and run your first session.</p><Link to="/docs/installation" className={styles.textLink}>Open installation guide →</Link></div><div className={styles.installPanel}>{installs.map(([n,c,h]) => <CopyRow key={n} name={n} command={c} href={h}/>)}</div></div></Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <Reveal><div className={styles.sectionIntro}><div><SectionLabel>FAQ</SectionLabel><h2>Before you start.</h2></div></div></Reveal>
          <div className={styles.faq}>{faqs.map(([q,a]) => <Reveal key={q}><details><summary>{q}<span>+</span></summary><p>{a}</p></details></Reveal>)}</div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.wrap}><Reveal><div className={styles.ctaInner}><div><SectionLabel>START HERE</SectionLabel><h2>Give AgentX a real project.</h2><p>Install the CLI and let the agent work with the code that actually matters.</p></div><Link to="/docs/intro" className={styles.primary}>Open the docs <span>→</span></Link></div></Reveal></div>
      </section>
    </main>
  </Layout>;
}
