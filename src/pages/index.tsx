import React, { useState, useEffect } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import styles from './index.module.css'

// Feature list
const features = [
  {
    icon: '⚡',
    title: 'Plans Before Acting',
    description: "Like Claude Code, AgentX writes an explicit plan and gets your confirmation before building anything.",
  },
  {
    icon: '📖',
    title: 'Reads Code First',
    description: "Never edits files it hasn't read. Understands your codebase before making any changes.",
  },
  {
    icon: '🛠',
    title: 'Real Tools',
    description: "Actually runs commands, writes files, and makes API calls. Never just describes what it would do.",
  },
  {
    icon: '🔄',
    title: 'Iterates Until Done',
    description: "Fixes its own TypeScript errors and build failures. Doesn't stop until the website works.",
  },
  {
    icon: '🚀',
    title: 'Deploys Live',
    description: "Pushes to GitHub and deploys to Vercel, Netlify, Railway, or Fly.io automatically.",
  },
  {
    icon: '🔒',
    title: 'Secure By Default',
    description: "API keys stored in OS secure storage. Never in plain text files. Never logged.",
  },
]

const providers = [
  { name: 'GitHub Copilot', icon: '🐙' },
  { name: 'ChatGPT', icon: '🤖' },
  { name: 'Google Gemini', icon: '✨' },
  { name: 'Claude', icon: '🧠' },
  { name: 'Local Models', icon: '💻' },
]

const installMethods = [
  { id: 'npm', label: 'npm', command: 'npm install -g @agent-qofeno/agentx-cli' },
  { id: 'brew', label: 'Homebrew', command: 'brew tap SohailKhan0525/agentx && brew install agentx' },
  { id: 'jsr', label: 'JSR', command: 'npx jsr add @agent-qofeno/agentx-cli' },
]

function HeroSection({ stars, version }: { stars: number | null, version: string }) {
  const [copied, setCopied] = useState(false)
  const heroCmd = 'npm install -g @agent-qofeno/agentx-cli'

  const copyHero = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(heroCmd)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          <span>🚀 Now in v{version} — Production Ready</span>
        </div>
        <h1 className={styles.heroTitle}>
          The AI agent that builds<br />
          <span className={styles.heroHighlight}>real websites</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Describe your website in plain English. AgentX plans, builds, deploys, and ships it.
          Not a demo. Not an MVP. A real website, live on the internet.
        </p>
        <div className={styles.heroInstall} onClick={copyHero} title="Click to copy">
          <code className={styles.installCommand}>
            <span>{heroCmd}</span>
            <span className={styles.copyIndicator}>{copied ? '✓ Copied!' : '📋'}</span>
          </code>
        </div>
        <div className={styles.heroActions}>
          <Link className={styles.primaryBtn} to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className={styles.secondaryBtn}
            to="https://github.com/SohailKhan0525/agentx-cli"
          >
            ⭐ Star on GitHub {stars !== null ? `(${stars})` : ''}
          </Link>
        </div>
        <div className={styles.heroPlatforms}>
          <span>Works on</span>
          <strong>Windows</strong>
          <span>·</span>
          <strong>macOS</strong>
          <span>·</span>
          <strong>Linux</strong>
        </div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Like Claude Code, but for websites</h2>
        <p className={styles.sectionSubtitle}>
          AgentX thinks and works the same way — plans first, reads before editing,
          uses real tools, and iterates until everything works.
        </p>
        <div className={styles.featureGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProvidersSection() {
  return (
    <section className={styles.providers}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Works with every AI provider</h2>
        <div className={styles.providerList}>
          {providers.map((p, i) => (
            <div key={i} className={styles.providerChip}>
              <span>{p.icon}</span>
              <span>{p.name}</span>
            </div>
          ))}
        </div>
        <p className={styles.providerNote}>
          Including local models via Ollama, LM Studio, Jan, GPT4All, and llama.cpp.
          Your conversations stay on your machine.
        </p>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Describe your website', desc: 'Tell AgentX what you want to build in plain English. No technical knowledge required.' },
    { num: '02', title: 'AgentX plans it', desc: 'See the full plan — every page, every service, every integration — before any code is written.' },
    { num: '03', title: 'You confirm', desc: 'Review the plan. Request changes. AgentX only builds when you say go.' },
    { num: '04', title: 'AgentX builds', desc: 'Every page, every API route, every integration. Real code. No placeholders.' },
    { num: '05', title: 'It deploys live', desc: 'Pushed to GitHub, deployed to your platform, live URL in your terminal.' },
  ]

  return (
    <section className={styles.howItWorks}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>How it works</h2>
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InstallSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyCode = (cmd: string, id: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(cmd)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }

  return (
    <section className={styles.install}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Get started in seconds</h2>
        <div className={styles.installGrid}>
          {installMethods.map((m) => (
            <div
              key={m.id}
              className={styles.installCard}
              onClick={() => copyCode(m.command, m.id)}
              title="Click to copy command"
            >
              <div className={styles.installCardHeader}>
                <div className={styles.installLabel}>{m.label}</div>
                <span className={styles.cardCopyTag}>
                  {copiedId === m.id ? '✓ Copied!' : 'Click to copy'}
                </span>
              </div>
              <code className={styles.installCode}>{m.command}</code>
            </div>
          ))}
        </div>
        <p className={styles.installReq}>Requires Node.js 18 or higher</p>
      </div>
    </section>
  )
}

function CTASection({ stars }: { stars: number | null }) {
  return (
    <section className={styles.cta}>
      <div className={styles.sectionInner}>
        <h2>Ready to ship your website?</h2>
        <p>Install AgentX and describe what you want to build.</p>
        <div className={styles.ctaActions}>
          <Link className={styles.primaryBtn} to="/docs/intro">
            Read the docs →
          </Link>
          <Link
            className={styles.secondaryBtn}
            to="https://github.com/SohailKhan0525/agentx-cli"
          >
            ⭐ Star on GitHub {stars !== null ? `(${stars})` : ''}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext()
  const [stars, setStars] = useState<number | null>(null)
  const [version, setVersion] = useState<string>('2.0.4')

  useEffect(() => {
    // Fetch GitHub stars
    fetch('https://api.github.com/repos/SohailKhan0525/agentx-cli')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {})

    // Fetch npm version
    fetch('https://registry.npmjs.org/@agent-qofeno/agentx-cli/latest')
      .then(res => res.json())
      .then(data => {
        if (data && data.version) {
          setVersion(data.version)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <Layout
      title={siteConfig.title}
      description="The AI agent that builds production-ready websites from your terminal"
    >
      <HeroSection stars={stars} version={version} />
      <FeaturesSection />
      <ProvidersSection />
      <HowItWorksSection />
      <InstallSection />
      <CTASection stars={stars} />
    </Layout>
  )
}
