import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config:Config={
  title:'AgentX',
  tagline:'A terminal based AI agent for real software projects',
  favicon:'img/agentx-mark.svg',
  url:'https://agentx.js.org',
  baseUrl:'/',
  organizationName:'SohailKhan0525',
  projectName:'agentx-docs',
  deploymentBranch:'gh-pages',
  trailingSlash:false,
  onBrokenLinks:'warn',
  onBrokenMarkdownLinks:'warn',
  i18n:{defaultLocale:'en',locales:['en']},
  presets:[['classic',{docs:{sidebarPath:'./sidebars.ts',showLastUpdateAuthor:false,showLastUpdateTime:false,editUrl:'https://github.com/SohailKhan0525/agentx-docs/tree/main/'},blog:false,theme:{customCss:'./src/css/custom.css'}}] satisfies Preset.Options],
  themeConfig:{
    image:'img/agentx-social.svg',
    colorMode:{defaultMode:'light',disableSwitch:false,respectPrefersColorScheme:false},
    navbar:{
      title:'AgentX',
      logo:{alt:'AgentX',src:'img/agentx-mark.svg'},
      items:[
        {type:'docSidebar',sidebarId:'docsSidebar',position:'left',label:'Docs'},
        {to:'/docs/installation',label:'Install',position:'left'},
        {href:'https://github.com/SohailKhan0525/agentx-cli',label:'GitHub',position:'right'},
      ],
    },
    footer:{
      style:'dark',
      links:[
        {title:'Learn',items:[{label:'Introduction',to:'/docs/intro'},{label:'Installation',to:'/docs/installation'},{label:'Architecture',to:'/docs/architecture'}]},
        {title:'Reference',items:[{label:'Providers',to:'/docs/providers'},{label:'Commands',to:'/docs/commands'},{label:'Security',to:'/docs/security'}]},
        {title:'Source',items:[{label:'AgentX CLI',href:'https://github.com/SohailKhan0525/agentx-cli'},{label:'Documentation source',href:'https://github.com/SohailKhan0525/agentx-docs'}]},
      ],
      copyright:`Copyright © ${new Date().getFullYear()} AgentX. Built by SohailKhan0525.`,
    },
    prism:{theme:prismThemes.github,darkTheme:prismThemes.dracula,additionalLanguages:['bash','typescript','json','yaml']},
  } satisfies Preset.ThemeConfig,
};
export default config;
