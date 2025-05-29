import { TabListType, TopicType } from 'src/global';

export const TabConfig: TabListType = {
  all: { id: 'all', title: 'All' },
  frontend: { id: 'frontend', title: 'frontend' },
  'zero-knowledge': { id: 'zero-knowledge', title: 'zero knowledge' },
  javascript: { id: 'javascript', title: 'js' },
  'state-management': { id: 'state-management', title: 'state management' },
  architecture: { id: 'architecture', title: 'architecture' },
  seo: { id: 'seo', title: 'SEO' },
  'elliptic-curve': { id: 'elliptic-curve', title: 'Elliptic Curve' },
};

export const ReferenceConfig: Array<TopicType> = [
  { id: '1', title: 'SNARK', tabs: ['zero-knowledge', 'elliptic-curve'], link: '/snark' },
  {
    id: '2',
    title: 'State management',
    tabs: ['frontend', 'state-management'],
    link: '/state-management',
  },
  {
    id: '3',
    title: 'setTimeout and setInterval',
    tabs: ['javascript'],
    link: '/js/timeout-and-interval',
  },
  { id: '4', title: 'Event loop in JS', tabs: ['javascript'], link: '/js/event-loop' },
  {
    id: '5',
    title: 'Flux architecture',
    tabs: ['state-management', 'architecture'],
    link: '/flux-architecture',
  },
  { id: '6', title: 'Google tab manager and Google analytic', tabs: ['seo'], link: '/gtm-ga' },
  { id: '7', title: 'Proxy in javascript', tabs: ['javascript'], link: '/js/proxy-object' },
  {
    id: '8',
    title: 'Elliptic Curve Cryptography',
    tabs: ['elliptic-curve'],
    link: '/elliptic-curve-cryptography',
  },
];
