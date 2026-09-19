import React,{useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Reveal from '../components/Reveal';
import WordReveal from '../components/WordReveal';
import styles from './index.module.css';

const install='npm install -g @agent-qofeno/agentx-cli';
const benefits=[
  ['01','Repository aware','Start from the files, packages, routes, and conventions that already exist.'],
  ['02','Plan before edits','Turn a broad outcome into a visible sequence of changes before the write phase.'],
  ['03','Terminal native','Use the commands and tools your project already trusts instead of replacing the workflow.'],
  ['04','Verify the work','Builds, tests, type checks, and runtime feedback become part of the same loop.'],
];
const faqs=[
  ['What is AgentX?','AgentX is a terminal based AI agent for building and modifying real software projects.'],
  ['Does it work with existing repositories?','Yes. Existing code, configuration, dependencies, and conventions are treated as context before edits begin.'],
  ['Can I use local models?','Yes. The docs cover local model runners including Ollama and LM Studio.'],
  ['Can I review a plan first?','Yes. The intended workflow makes the plan explicit before the execution pass.'],
  ['Which operating systems are covered?','The documentation covers Windows, macOS, and Linux terminal workflows.'],
  ['Where do I start?','Install the CLI, open the introduction, then run AgentX from the root of a project.'],
];
function CopyInstall(){
 const [copied,setCopied]=useState(false);
 const copy=async()=>{try{await navigator.clipboard.writeText(install);setCopied(true);setTimeout(()=>setCopied(false),1400)}catch{}};
 return <button className={styles.installCommand} onClick={copy} aria-label="Copy npm installation command"><code>{install}</code><span>{copied?'Copied':'Copy'}</span></button>
}
export default function Home():React.JSX.Element{
 return <Layout title="AgentX — terminal agent for real software" description="AgentX is a terminal based AI agent that reads your project, plans the work, executes changes, and verifies the result.">
 <main>
  <section className={styles.hero}>
   <div className={styles.shell}>
    <nav className={styles.miniNav} aria-label="Homepage"><Link to="/" className={styles.logo}><img src="/img/agentx-mark.svg" alt="" />AgentX</Link><div><Link to="/docs/intro">Docs</Link><a href="https://github.com/SohailKhan0525/agentx-cli">GitHub</a></div></nav>
    <div className={styles.heroGrid}>
      <div>
       <p className={styles.kicker}>TERMINAL AGENT · OPEN WORKFLOW</p>
       <h1>Build with an agent that can see the whole project.</h1>
       <p className={styles.heroLead}>AgentX reads the repository, plans the work, changes the right files, and uses your project’s own checks to verify the result.</p>
       <div className={styles.heroActions}><Link className={styles.primary} to="/docs/intro">Start with the docs <span>↗</span></Link><a className={styles.secondary} href="https://github.com/SohailKhan0525/agentx-cli">View source</a></div>
       <p className={styles.proof}>Open source · Windows · macOS · Linux · cloud or local models</p>
      </div>
      <div className={styles.terminal} aria-label="AgentX terminal preview">
       <div className={styles.termTop}><span>agentx</span><span>plan mode</span></div>
       <div className={styles.termBody}>
        <div><span className={styles.prompt}>$</span> agentx</div>
        <div className={styles.termMuted}>Project: ~/work/agentx</div>
        <div className={styles.termLine}/>
        <div>What should we change?</div>
        <div className={styles.termMuted}>Rework the settings experience. Keep the current API.</div>
        <div className={styles.plan}><span>01</span> Read routes and components</div>
        <div className={styles.plan}><span>02</span> Map affected files</div>
        <div className={styles.plan}><span>03</span> Draft implementation plan</div>
        <div className={styles.plan}><span>04</span> Wait for confirmation<span className={styles.caret}/></div>
       </div>
      </div>
    </div>
   </div>
  </section>

  <section className={styles.tagline}><div className={styles.narrow}><p className={styles.kicker}>THE CORE IDEA</p><WordReveal text="Understand the code before you change the code." /></div></section>

  <section className={styles.section}><div className={styles.shell}>
   <Reveal><div className={styles.sectionHead}><div><p className={styles.kicker}>WHY AGENTX</p><h2>Less guessing. More useful context.</h2></div><p>Designed for repositories that have history, constraints, and a real release process.</p></div></Reveal>
   <div className={styles.benefitGrid}>{benefits.map(([n,t,d])=><Reveal key={n}><article className={styles.benefit}><span>{n}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div>
  </div></section>

  <section className={styles.dark}><div className={styles.shell}>
   <Reveal><div className={styles.sectionHead}><div><p className={styles.kicker}>THE LOOP</p><h2>One workspace. Four deliberate moves.</h2></div><p>Inspired by the practical, terminal centered clarity of modern coding agents such as OpenCode, while keeping AgentX’s own workflow and identity.</p></div></Reveal>
   <div className={styles.loop}>
    {['Plan the outcome','Read the workspace','Execute the change','Verify the result'].map((t,i)=><Reveal key={t}><div className={styles.loopRow}><span>0{i+1}</span><h3>{t}</h3><p>{['Define what done means and identify the files that matter.','Inspect source, dependencies, configuration, and project conventions.','Use the terminal and tools to make a focused, reviewable change.','Run the checks that matter and iterate when the project gives feedback.'][i]}</p></div></Reveal>)}
   </div>
  </div></section>

  <section className={styles.editorial}><div className={styles.shell}><Reveal><div className={styles.editorialGrid}><div><p className={styles.kicker}>WORK WITH WHAT YOU HAVE</p><h2>Keep your stack. Keep your tools. Add an agent.</h2></div><div><p>AgentX is designed to fit around the repository instead of making the repository fit around the agent.</p><Link to="/docs/architecture" className={styles.arrowLink}>Read the architecture →</Link></div></div></Reveal></div></section>

  <section className={styles.install}><div className={styles.shell}><Reveal><div className={styles.installGrid}><div><p className={styles.kicker}>INSTALL</p><h2>Open a terminal and start from the project.</h2><p>Install the CLI, enter your repository, and run AgentX. Configure a cloud provider or continue with a local model.</p><Link to="/docs/installation" className={styles.arrowLink}>Installation guide →</Link></div><div><CopyInstall/><p className={styles.installHint}>Then: <code>cd your-project</code> and <code>agentx</code></p></div></div></Reveal></div></section>

  <section className={styles.section}><div className={styles.shell}><Reveal><div className={styles.sectionHead}><div><p className={styles.kicker}>FAQ</p><h2>Before your first session.</h2></div></div></Reveal><div className={styles.faq}>{faqs.map(([q,a])=><Reveal key={q}><details><summary>{q}<span>+</span></summary><p>{a}</p></details></Reveal>)}</div></div></section>

  <section className={styles.cta}><div className={styles.shell}><Reveal><div className={styles.ctaInner}><div><p className={styles.kicker}>START HERE</p><h2>Give the agent a real repository.</h2><p>Read the quick start, install the CLI, and keep your existing engineering workflow in charge.</p></div><Link className={styles.primaryLight} to="/docs/intro">Read the docs <span>↗</span></Link></div></Reveal></div></section>
 </main>
 </Layout>
}