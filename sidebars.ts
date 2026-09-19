import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars:SidebarsConfig={
  docsSidebar:[
    {type:'category',label:'Start here',items:['intro','installation']},
    {type:'category',label:'Models',items:['providers','local-models']},
    {type:'category',label:'Build with AgentX',items:['architecture','commands','stacks','services']},
    {type:'category',label:'Trust & support',items:['security','faq']},
  ],
};
export default sidebars;
