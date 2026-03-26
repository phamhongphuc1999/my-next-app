import { ReferenceType, TabListType, TabType, TopicType } from 'src/global';

export const TabConfig: TabListType = {
  [TabType.all]: { id: TabType.all, title: 'All' },
  [TabType['zero-knowledge-proof']]: {
    id: TabType['zero-knowledge-proof'],
    title: 'Zero-knowledge proofs',
  },
  [TabType['elliptic-curve']]: { id: TabType['elliptic-curve'], title: 'Elliptic Curve' },
  [TabType['account-abstraction']]: {
    id: TabType['account-abstraction'],
    title: 'Account abstraction',
  },
  [TabType.rubik]: { id: TabType.rubik, title: 'Rubik' },
};

export const ReferenceConfig: Record<ReferenceType, TopicType> = {
  [ReferenceType.snark]: {
    id: '1',
    title: 'SNARK',
    tabs: [TabType['zero-knowledge-proof'], TabType['elliptic-curve']],
    link: '/snark',
  },
  [ReferenceType['elliptic-curve']]: {
    id: '8',
    title: 'Elliptic Curve Cryptography',
    tabs: [TabType['elliptic-curve']],
    link: '/elliptic-curve-cryptography',
  },
  [ReferenceType['simple-snark']]: {
    id: '9',
    title: 'Simple SNARK',
    tabs: [TabType['zero-knowledge-proof'], TabType['elliptic-curve']],
    link: '/simple-snark',
  },
  [ReferenceType.rubik3x3]: {
    id: '10',
    title: 'Rubik 3x3',
    tabs: [TabType['rubik']],
    link: '/rubik3x3',
  },
};
