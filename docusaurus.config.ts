import type {Config} from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import {themes as prismThemes} from 'prism-react-renderer'

const config: Config = {
  title: 'AgentX',
  tagline: 'The AI agent that builds production-ready websites from your terminal',
  favicon: 'img/logo.png',

  url: 'https://agentx.js.org',
  baseUrl: '/',

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

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      type: 'text/css',
    },
  ],

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
      }
    ],
  ],

  themeConfig: {
    image: 'img/agentx-social.png',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'AgentX',
      logo: {
        alt: 'AgentX Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://npmjs.com/package/@agent-qofeno/agentx-cli',
          label: 'npm',
          position: 'right',
        },
        {
          href: 'https://github.com/SohailKhan0525/agentx-cli',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/intro' },
            { label: 'Installation', to: '/docs/installation' },
            { label: 'Providers', to: '/docs/providers' },
            { label: 'Local Models', to: '/docs/local-models' },
          ],
        },
        {
          title: 'Install',
          items: [
            { label: 'npm', href: 'https://npmjs.com/package/@agent-qofeno/agentx-cli' },
            { label: 'JSR', href: 'https://jsr.io/@agent-qofeno/agentx-cli' },
            { label: 'Homebrew', href: 'https://github.com/SohailKhan0525/homebrew-agentx' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/SohailKhan0525/agentx-cli' },
            { label: 'Issues', href: 'https://github.com/SohailKhan0525/agentx-cli/issues' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AgentX. Built by SohailKhan0525.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'json'],
    },
  } satisfies Preset.ThemeConfig,
}

export default config
