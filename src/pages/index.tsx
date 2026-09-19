import React, {useState} from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import styles from './index.module.css'

const features = [
  ['01','Plan first','AgentX turns a request into an implementation plan before it starts editing.'],
  ['02','Understand the repo','It reads the project structure, conventions, dependencies, and existing code before acting.'],
  ['03','Use real tools','The agent can work with your terminal, files, package manager, Git, and configured services.'],
  ['04','Verify the result','Builds, type checks, and failures become feedback for the next iteration.'],
]
const workflow = [
  ['01','Describe the outcome','Start with what you want the project to become, not a list of files to edit.'],
  ['02','Review the plan','Check the proposed pages, components, dependencies, and commands before changes begin.'],
  ['03','Build with context','AgentX reads, edits, runs, and iterates inside the project you already have.'],
  ['04','Verify and ship','Run the same checks you trust locally, then use your existing deployment workflow.'],
]
const installs = [
  ['npm','npm install -g @agent-qofeno/agentx-cli','https://npmjs.com/package/@agent-qofeno/agentx-cli'],
  ['brew','brew tap SohailKhan0525/agentx && brew install agentx','https://github.com/SohailKhan0525/homebrew-agentx'],
  ['jsr','npx jsr add @agent-qofeno/agentx-cli','https://jsr.io/@agent-qofeno/agentx-cli'],
]
const faqs = [
  ['What is AgentX?','AgentX is a terminal-based AI agent for building and modifying real web projects.'],
  ['Can AgentX work in an existing repository?','Yes. The workflow starts by inspecting the current project so changes can fit the code that is already there.'],
  ['Can I review a plan before changes?','Yes. Planning and confirmation are part of the intended workflow.'],
  ['Which platforms are supported?','The documentation covers Windows, macOS, and Linux environments.'],
  ['Can I use local models?','Yes. The local-models guide covers Ollama and LM Studio workflows.'],
  ['Where should I start?','Install the CLI, open the Introduction guide, and run AgentX from a project you want to change.'],
]

function CopyCommand({label, command, href}:{label:string; command:string; href:string}) {
  const [copied,setCopied] = useState(false)
  const copy = async () => {
    if (!navigator.clipboard) return
    await navigator.clipboard.writeText(command)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }
  return <div className={styles.installRow}>
    <a className={styles.installLabel} href={href} target="_blank" rel="noreferrer">{label}</a>
    <button className={styles.codeButton} type="button" onClick={copy} aria-label={copied ? 'Command copied' : 'Copy install command'}>
      <code>{command}</code><span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  </div>
}

export default function Home():React.JSX.Element {
  return <Layout title="AgentX" description="Documentation for AgentX, a terminal-based AI agent for building real web projects.">
    <main>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroNav}><span className={styles.brandMark}>A</span><span>AgentX</span><span className={styles.navLabel}>Documentation</span></div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>OPEN-SOURCE AI CODING AGENT</p>
              <h1>Build with an agent that understands the project.</h1>
              <p className={styles.heroLead}>AgentX plans the work, reads your repository, uses the tools already in your workflow, and verifies what it changes.</p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} to="/docs/intro">Get started <span aria-hidden="true">→</span></Link>
                <a className={styles.secondaryButton} href="https://github.com/SohailKhan0525/agentx-cli" target="_blank" rel="noreferrer">View source</a>
              </div>
              <div className={styles.heroMeta}><span>Terminal first</span><span>Windows · macOS · Linux</span><span>Bring your model</span></div>
            </div>
            <div className={styles.terminal} aria-label="Example AgentX terminal session">
              <div className={styles.terminalBar}><span>agentx</span><span>● ready</span></div>
              <div className={styles.terminalBody}>
                <p><span className={styles.prompt}>$</span> agentx</p>
                <p className={styles.terminalMuted}>What should we build?</p>
                <p>Build a docs site for my CLI with a clean command reference.</p>
                <div className={styles.terminalDivider}/>
                <p><span className={styles.status}>01</span> Inspecting project</p>
                <p><span className={styles.status}>02</span> Writing implementation plan</p>
                <p><span className={styles.status}>03</span> Waiting for approval</p>
                <div className={styles.cursor} aria-hidden="true"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.statement}><div className={styles.narrow}><p className={styles.statementLabel}>THE IDEA</p><h2>The terminal is not a limitation. It is the workspace.</h2><p>AgentX is designed around the full loop: understand the request, inspect the code, make changes with real tools, and check the result.</p></div></section>
      <section className={styles.section}><div className={styles.shell}>
        <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>CAPABILITIES</p><h2>Less guessing. More context.</h2></div><p>Designed for projects that already have structure, history, dependencies, and decisions worth preserving.</p></div>
        <div className={styles.featureGrid}>{features.map(([number,title,description]) => <article key={number} className={styles.feature}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>
      <section className={styles.sectionAlt}><div className={styles.shell}>
        <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>WORKFLOW</p><h2>From request to verified result.</h2></div></div>
        <div className={styles.workflow}>{workflow.map(([number,title,description]) => <article key={number} className={styles.workflowRow}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </div></section>
      <section className={styles.install}><div className={styles.shell}><div className={styles.installGrid}>
        <div><p className={styles.eyebrow}>INSTALL</p><h2>Use the package manager you already know.</h2><p>Install AgentX, then open the getting-started guide for your first project.</p><Link className={styles.inlineLink} to="/docs/installation">Installation guide →</Link></div>
        <div className={styles.installPanel}>{installs.map(([label,command,href]) => <CopyCommand key={label} label={label} command={command} href={href}/>)}</div>
      </div></div></section>
      <section className={styles.section}><div className={styles.shell}>
        <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>FAQ</p><h2>Before you start.</h2></div></div>
        <div className={styles.faq}>{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </div></section>
      <section className={styles.final}><div className={styles.shell}><div className={styles.finalCard}><p className={styles.eyebrow}>START HERE</p><h2>Give AgentX a real project.</h2><p>Read the quick start, install the CLI, and let the agent work with the code that actually matters.</p><Link className={styles.primaryButton} to="/docs/intro">Open the docs <span aria-hidden="true">→</span></Link></div></div></section>
    </main>
  </Layout>
}
