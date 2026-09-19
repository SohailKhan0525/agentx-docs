import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars:SidebarsConfig={
  docsSidebar:[
    {type:'category',label:'Get started',items:['intro','installation']},
    {type:'category',label:'Models',items:['providers','local-models']},
    {type:'category',label:'Agent workflow',items:['architecture','commands']},
    {type:'category',label:'Build',items:['stacks','services']},
    {type:'category',label:'Trust',items:['security','faq']},
    {type:'category',label:'Site',items:['privacy','terms']},
  ],
};
export default sidebars;
