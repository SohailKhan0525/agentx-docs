import type {Config} from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import {themes as prismThemes} from 'prism-react-renderer'

const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

const config: Config = {
  title: 'AgentX',
  tagline: 'The AI agent that builds production-ready websites from your terminal',
  favicon: 'img/favicon.ico',

  url: isCustomDomain ? 'https://agentx.js.org' : 'https://sohailkhan0525.github.io',
  baseUrl: isCustomDomain ? '/' : '/agentx-docs/',

  organizationName: 'SohailKhan0525',
  projectName: 'agentx-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/SohailKhan0525/agentx-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-biel',
      {
        project: 'zzovrc39p5',
        headerTitle: 'Ask AgentX AI',
        buttonPosition: 'center-right',
        modalPosition: 'sidebar-right',
        bielButtonText: 'Ask AI',
        buttonStyle: 'dark',
      },
    ],
  ],

  themeConfig: {
    image: 'img/agentx-social.png',
    metadata: [
      { name: 'theme-color', content: '#000000' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'description', content: 'AgentX is the AI agent that plans, builds, tests, and deploys production-ready websites from your terminal.' },
    ],

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'AgentX',
      logo: {
        alt: 'AgentX Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/installation',
          label: 'Install',
          position: 'left',
        },
        {
          to: '/docs/stacks',
          label: 'Stacks',
          position: 'left',
        },
        {
          to: '/docs/providers',
          label: 'Providers',
          position: 'left',
        },
        {
          href: 'https://npmjs.com/package/@agent-qofeno/agentx-cli',
          label: 'npm v2.0.4',
          position: 'right',
          className: 'navbar-npm-badge',
        },
        {
          href: 'https://github.com/SohailKhan0525/agentx-cli',
          label: 'GitHub ⭐',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Quick Start', to: '/docs/intro' },
            { label: 'Installation', to: '/docs/installation' },
            { label: 'AI Providers', to: '/docs/providers' },
            { label: 'Local Models (Ollama)', to: '/docs/local-models' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Slash Commands', to: '/docs/commands' },
            { label: 'Supported Stacks', to: '/docs/stacks' },
            { label: 'Integrations & Services', to: '/docs/services' },
            { label: 'Security Architecture', to: '/docs/security' },
          ],
        },
        {
          title: 'Packages & Registries',
          items: [
            { label: 'npm Registry', href: 'https://npmjs.com/package/@agent-qofeno/agentx-cli' },
            { label: 'JSR Registry', href: 'https://jsr.io/@agent-qofeno/agentx-cli' },
            { label: 'Homebrew Tap', href: 'https://github.com/SohailKhan0525/homebrew-agentx' },
            { label: 'GitHub Releases', href: 'https://github.com/SohailKhan0525/agentx-cli/releases' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub Repo', href: 'https://github.com/SohailKhan0525/agentx-cli' },
            { label: 'Issue Tracker', href: 'https://github.com/SohailKhan0525/agentx-cli/issues' },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AgentX. Built with precision for developers worldwide.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'json'],
    },
  } satisfies Preset.ThemeConfig,
}

export default config
