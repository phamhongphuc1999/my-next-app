import { TopicType } from 'src/global';

export const LS = { THEME: 'theme' };

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
];
