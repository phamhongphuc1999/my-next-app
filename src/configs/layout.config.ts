import { ReferenceType, TabListType, TabType, TopicType } from 'src/global';

const { all, zeroKnowledgeProof, ellipticCurve, accountAbstraction, rubik } = TabType;

export const TabConfig: TabListType = {
  [all]: { id: all, title: 'All' },
  [zeroKnowledgeProof]: { id: zeroKnowledgeProof, title: 'Zero-knowledge proofs' },
  [ellipticCurve]: { id: ellipticCurve, title: 'Elliptic Curve' },
  [accountAbstraction]: { id: accountAbstraction, title: 'Account abstraction' },
  [TabType.rubik]: { id: TabType.rubik, title: 'Rubik' },
};

const { snark, ellipticCurve: rEllipticCurve, simpleSnark, rubik3x3 } = ReferenceType;

export const ReferenceConfig: Record<ReferenceType, TopicType> = {
  [snark]: { id: '1', title: 'SNARK', tabs: [zeroKnowledgeProof, ellipticCurve], link: '/snark' },
  [rEllipticCurve]: {
    id: '8',
    title: 'Elliptic Curve Cryptography',
    tabs: [ellipticCurve],
    link: '/elliptic-curve-cryptography',
  },
  [simpleSnark]: {
    id: '9',
    title: 'Simple SNARK',
    tabs: [zeroKnowledgeProof, ellipticCurve],
    link: '/simple-snark',
  },
  [rubik3x3]: { id: '10', title: 'Rubik 3x3', tabs: [rubik], link: '/rubik3x3' },
};
