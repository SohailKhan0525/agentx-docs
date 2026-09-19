import React, {useState} from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import styles from './index.module.css'

const capabilities = [
  ['01','Plans before it edits','AgentX creates a concrete plan before changing code, so you can review the work first.'],
  ['02','Reads the repo first','It inspects the project it is about to change instead of guessing from a blank template.'],
  ['03','Uses your terminal','Commands, files, package managers, Git, and APIs are part of the workflow.'],
  ['04','Verifies the result','Build failures and type errors become another pass in the loop instead of the end of the task.'],
]

const workflow = [
  ['01','Describe the outcome','Tell AgentX what the website should do, who it is for, and what matters.'],
  ['02','Review the plan','See the pages, implementation work, and integrations before the build starts.'],
  ['03','Let it build','AgentX reads the repo, edits the right files, runs commands, and keeps iterating.'],
  ['04','Ship the result','Use the project locally or push it through your existing deployment flow.'],
]

const installs = [
  ['npm','npm install -g @agent-qofeno/agentx-cli','https://npmjs.com/package/@agent-qofeno/agentx-cli'],
  ['Homebrew','brew tap SohailKhan0525/agentx && brew install agentx','https://github.com/SohailKhan0525/homebrew-agentx'],
  ['JSR','npx jsr add @agent-qofeno/agentx-cli','https://jsr.io/@agent-qofeno/agentx-cli'],
]

const faqs = [
  ['What is AgentX?','AgentX is a terminal based AI agent for building and modifying real website projects.'],
  ['Does it work with an existing project?','Yes. Its workflow is designed around reading the current repository before making changes.'],
  ['Can I review the plan first?','Yes. Planning and confirmation are part of the documented workflow.'],
  ['Which operating systems are supported?','The documentation lists Windows, macOS, and Linux.'],
  ['Can I use local models?','The documentation includes local model setup for Ollama and LM Studio.'],
  ['Where should I start?','Open Getting Started for the quickest path from installation to a first project.'],
]

function CopyCommand({label,command,href}:{label:string;command:string;href:string}) {
  const [copied,setCopied]=useState(false)
  const copy=async()=>{ if(!navigator.clipboard) return; await navigator.clipboard.writeText(command); setCopied(true); window.setTimeout(()=>setCopied(false),1600) }
  return <div className={styles.installRow}>
    <a className={styles.installLabel} href={href} target="_blank" rel="noreferrer">{label}</a>
    <button className={styles.codeButton} type="button" onClick={copy} aria-label={copied?'Command copied':'Copy install command'}>
      <code>{command}</code><span>{copied?'Copied':'Copy'}</span>
    </button>
  </div>
}

export default function Home():React.JSX.Element {
  return <Layout title="AgentX documentation" description="Documentation for AgentX, the terminal based AI agent for building real website projects.">
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.kicker}><span className={styles.kickerDot} aria-hidden="true"/>AgentX documentation</div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.overline}>BUILD FROM THE TERMINAL</p>
              <h1 className={styles.heroTitle}>Build real websites<span className={styles.heroTitleMuted}> with an agent that can act.</span></h1>
              <p className={styles.heroSubtitle}>AgentX plans the work, reads your repository, changes files, runs the tools you already use, and verifies the result before you ship it.</p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} to="/docs/intro">Read the docs <span aria-hidden="true">→</span></Link>
                <a className={styles.textLink} href="https://github.com/SohailKhan0525/agentx-cli" target="_blank" rel="noreferrer">View the CLI on GitHub</a>
              </div>
            </div>
            <div className={styles.terminal} aria-label="Example AgentX terminal session">
              <div className={styles.terminalTop}><span/><span/><span/><small>agentx</small></div>
              <div className={styles.terminalBody}>
                <p><span className={styles.prompt}>$</span> agentx</p>
                <p className={styles.terminalMuted}>Tell me what you want to build.</p>
                <p className={styles.terminalUser}>Build a marketing site for my CLI with docs, a command reference, and a clean dark theme.</p>
                <div className={styles.terminalDivider}/>
                <p><span className={styles.prompt}>01</span> Reading project structure</p>
                <p><span className={styles.prompt}>02</span> Drafting implementation plan</p>
                <p><span className={styles.prompt}>03</span> Waiting for confirmation</p>
              </div>
            </div>
          </div>
          <div className={styles.proofStrip}><span>Works with your existing stack</span><span>Windows</span><span>macOS</span><span>Linux</span><span>GitHub</span></div>
        </div>
      </section>

      <section className={styles.tagline}><div className={styles.narrow}><p className={styles.taglineText}>{'From request to verified result, the terminal stays in the loop.'.split(' ').map((word,i)=><span key={word+i} className={styles.taglineWord}>{word}&nbsp;</span>)}</p></div></section>

      <section className={styles.capabilities} id="capabilities"><div className={styles.sectionShell}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>WHY AGENTX</p><h2>Less guessing. More visible work.</h2><p>Plan, inspect, act, verify, then keep working in the project it helped build.</p></div>
        <div className={styles.capabilityGrid}>{capabilities.map(([n,t,d])=><article key={n} className={styles.capability}><span className={styles.capabilityNumber}>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div></section>

      <section className={styles.workflow} id="workflow"><div className={styles.sectionShell}>
        <div className={styles.workflowIntro}><p className={styles.eyebrow}>HOW IT WORKS</p><h2>A repeatable loop from idea to repo.</h2></div>
        <div className={styles.workflowList}>{workflow.map(([n,t,d])=><article key={n} className={styles.workflowRow}><span className={styles.workflowNumber}>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
      </div></section>

      <section className={styles.install} id="install"><div className={styles.sectionShell}><div className={styles.installGrid}>
        <div><p className={styles.eyebrow}>START HERE</p><h2>Install once. Keep your workflow.</h2><p>Use the package manager that fits your setup, then open the getting started guide.</p><Link className={styles.textLinkStrong} to="/docs/intro">Open Getting Started →</Link></div>
        <div className={styles.installPanel}>{installs.map(([l,c,h])=><CopyCommand key={l} label={l} command={c} href={h}/>)}</div>
      </div></div></section>

      <section className={styles.faq} id="faq"><div className={styles.sectionShell}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>FAQ</p><h2>Answers before you open the terminal.</h2></div>
        <div className={styles.faqGrid}>{faqs.map(([q,a])=><details key={q} className={styles.faqItem}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>

      <section className={styles.finalCta}><div className={styles.sectionShell}><div className={styles.ctaCard}>
        <div><p className={styles.eyebrow}>READY WHEN YOU ARE</p><h2>Start with the docs, then let AgentX touch the repo.</h2><p>Read the quick start, install the CLI, and run your first task with a workflow you can inspect.</p></div>
        <Link className={styles.primaryButton} to="/docs/intro">Open the quick start <span aria-hidden="true">→</span></Link>
      </div></div></section>
    </main>
  </Layout>
}
