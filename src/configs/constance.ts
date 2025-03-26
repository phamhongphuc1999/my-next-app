import { TabListType, TopicType } from 'src/global';

export const LS = { THEME: 'theme' };

export const TabConfig: TabListType = {
  frontend: { id: 'frontend', title: 'frontend' },
  'zero-knowledge': { id: 'zero-knowledge', title: 'zero knowledge' },
  javascript: { id: 'javascript', title: 'js' },
  'state-management': { id: 'state-management', title: 'state management' },
  architecture: { id: 'architecture', title: 'architecture' },
  seo: { id: 'seo', title: 'SEO' },
};

export const ReferenceConfig: Array<TopicType> = [
  { id: '1', title: 'SNARK', tabs: ['zero-knowledge'], link: '/snark' },
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
];
