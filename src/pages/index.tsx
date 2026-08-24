import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import styles from './index.module.css'

const features = [
  {
    icon: '⚡',
    tag: 'INTELLIGENT PLANNING',
    title: 'Plans Before Acting',
    description: 'AgentX creates an explicit, step-by-step architecture specification and verifies all requirements with you before writing code.',
  },
  {
    icon: '🔍',
    tag: 'CONTEXT-AWARE',
    title: 'Reads Code First',
    description: 'Never blindly edits files. Analyzes component structures, dependencies, and design systems first for flawless cohesion.',
  },
  {
    icon: '🛠️',
    tag: 'REAL EXECUTION',
    title: 'Real Tools & Terminal CLI',
    description: 'Spawns processes, manages files, executes tests, installs packages, and configures databases with native performance.',
  },
  {
    icon: '🔄',
    tag: 'SELF-HEALING',
    title: 'Iterates Until Working',
    description: 'Automatically analyzes compiler output, fixes TypeScript diagnostics and resolves build errors until the app ships.',
  },
  {
    icon: '🚀',
    tag: 'INSTANT DEPLOY',
    title: 'Deploys Live in Seconds',
    description: 'Initializes Git, commits atomic diffs, pushes to GitHub and triggers continuous deployments on Vercel, Netlify, or Railway.',
  },
  {
    icon: '🔒',
    tag: 'ZERO-LEAK SECURITY',
    title: 'Hardware Secure Storage',
    description: 'API keys stored exclusively in OS secure enclaves (macOS Keychain, Windows Credential Manager). Never plain text.',
  },
]

const providers = [
  { name: 'GitHub Copilot', tier: 'CLI & IDE' },
  { name: 'ChatGPT (OpenAI)', tier: 'GPT-4o / GPT-4.5' },
  { name: 'Anthropic Claude', tier: 'Sonnet 4.6 / Opus' },
  { name: 'Google Gemini', tier: '2.0 Flash / Pro' },
  { name: 'Local Ollama', tier: '100% Offline / Free' },
  { name: 'LM Studio / Jan', tier: 'Local GPU / Private' },
]

const stacks = [
  { name: 'Next.js 14', desc: 'App Router, SSR, Server Actions, Tailwind' },
  { name: 'React + Vite', desc: 'Ultra-fast SPA, HMR, Client-side routes' },
  { name: 'Astro', desc: 'Content-driven, Islands architecture, 100% SEO' },
  { name: 'Nuxt 3', desc: 'Vue 3, Fullstack SSR, Nitro engine' },
]

function HeroSection() {
  const [copied, setCopied] = useState(false)
  const installCmd = 'npm install -g @agent-qofeno/agentx-cli'

  const copyCommand = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroGlow}></div>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgePulse}></span>
          <span>AgentX v2.0.4 is live on npm & JSR</span>
        </div>

        <h1 className={styles.heroTitle}>
          The AI agent that builds<br />
          <span className={styles.heroGradientText}>production websites</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Describe your application in plain English. AgentX plans the architecture, writes full-stack code, tests components, and deploys it live to the web.
        </p>

        <div className={styles.commandBox} onClick={copyCommand} role="button" tabIndex={0}>
          <span className={styles.commandPrompt}>$</span>
          <code className={styles.commandText}>{installCmd}</code>
          <button className={styles.copyBtn} aria-label="Copy install command">
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>

        <div className={styles.heroCtaGroup}>
          <Link className={styles.primaryCta} to="/docs/intro">
            Get Started Documentation →
          </Link>
          <Link
            className={styles.secondaryCta}
            href="https://github.com/SohailKhan0525/agentx-cli"
          >
            GitHub Repository
          </Link>
        </div>

        <div className={styles.platformMeta}>
          <span>Platforms:</span>
          <strong>macOS (Apple Silicon & Intel)</strong>
          <span>·</span>
          <strong>Windows 10/11</strong>
          <span>·</span>
          <strong>Linux (x64 & ARM64)</strong>
        </div>
      </div>
    </div>
  )
}

function TerminalPreview() {
  return (
    <section className={styles.terminalSection}>
      <div className={styles.terminalContainer}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalDots}>
            <span className={styles.dotRed}></span>
            <span className={styles.dotYellow}></span>
            <span className={styles.dotGreen}></span>
          </div>
          <div className={styles.terminalTitle}>agentx — v2.0.4 — React Ink TUI</div>
          <div className={styles.terminalRight}>Node 18+</div>
        </div>
        <div className={styles.terminalBody}>
          <div className={styles.tuiStatusBar}>
            <span className={styles.tuiBrand}>AgentX</span>
            <span>·</span>
            <span className={styles.tuiModel}>claude-sonnet-4-6</span>
            <span>·</span>
            <span className={styles.tuiTokens}>1,420 tok</span>
            <span>·</span>
            <span className={styles.tuiCost}>$0.004</span>
            <span>·</span>
            <span className={styles.tuiHelp}>/help</span>
          </div>
          <div className={styles.tuiConversation}>
            <p className={styles.tuiUser}>
              <span className={styles.tuiPromptChar}>❯</span> Build a modern SaaS landing page for an AI developer analytics tool with Next.js 14, Tailwind, and Supabase auth.
            </p>
            <p className={styles.tuiAgent}>
              <span className={styles.tuiAgentBadge}>AgentX</span> <strong>Plan created:</strong> 6 components, 2 auth routes, dark monochrome design system. Generating project scaffold...
            </p>
            <div className={styles.tuiProgress}>
              <span className={styles.tuiCheck}>✓</span> Scaffolded Next.js 14 App Router project<br />
              <span className={styles.tuiCheck}>✓</span> Implemented Auth middleware & Supabase client<br />
              <span className={styles.tuiCheck}>✓</span> Verified TypeScript diagnostics (0 errors)<br />
              <span className={styles.tuiCheck}>✓</span> Deployed to Vercel: <span className={styles.tuiLink}>https://analytics-preview.vercel.app</span>
            </div>
          </div>
          <div className={styles.tuiInputBox}>
            <span>❯ Type instructions or /command...</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Engineered for Real-World Development</h2>
          <p className={styles.sectionSubheading}>
            Unlike generic chat interfaces, AgentX behaves like an experienced staff engineer in your terminal.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((item, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.cardTop}>
                <span className={styles.featureIcon}>{item.icon}</span>
                <span className={styles.featureTag}>{item.tag}</span>
              </div>
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StacksSection() {
  return (
    <section className={styles.stacksSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>First-Class Framework Support</h2>
          <p className={styles.sectionSubheading}>
            AgentX writes idiomatic, strictly-typed code according to current framework standards.
          </p>
        </div>

        <div className={styles.stackGrid}>
          {stacks.map((s, idx) => (
            <div key={idx} className={styles.stackCard}>
              <h3 className={styles.stackTitle}>{s.name}</h3>
              <p className={styles.stackDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProvidersSection() {
  return (
    <section className={styles.providersSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Choose Your Intelligence</h2>
          <p className={styles.sectionSubheading}>
            Switch between cloud frontier models and local private offline LLMs seamlessly with <code>/model</code> and <code>/provider</code>.
          </p>
        </div>

        <div className={styles.providerGrid}>
          {providers.map((p, idx) => (
            <div key={idx} className={styles.providerCard}>
              <div className={styles.providerName}>{p.name}</div>
              <div className={styles.providerTier}>{p.tier}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaCard}>
        <h2 className={styles.ctaHeading}>Ready to Ship Your Next Idea?</h2>
        <p className={styles.ctaSub}>
          Install AgentX globally with npm and start building from your command line in seconds.
        </p>
        <div className={styles.ctaButtonGroup}>
          <Link className={styles.primaryCta} to="/docs/intro">
            Read Getting Started →
          </Link>
          <Link
            className={styles.secondaryCta}
            href="https://npmjs.com/package/@agent-qofeno/agentx-cli"
          >
            View on npm
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description="The AI agent that builds production-ready websites from your terminal."
    >
      <HeroSection />
      <TerminalPreview />
      <FeaturesSection />
      <StacksSection />
      <ProvidersSection />
      <CTASection />
    </Layout>
  )
}
