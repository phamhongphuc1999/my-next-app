import AbbreviationBox, { AbbreviationType } from 'src/components/Thesis/AbbreviationBox';
import { DivProps } from 'src/global';

const data: Array<AbbreviationType> = [
  { short: 'CAs', full: 'Contract accounts' },
  { short: 'dApps', full: 'Decentralized applications' },
  { short: 'ECDSA', full: 'Elliptic Curve Digital Signature Algorithm' },
  { short: 'EdDSA', full: 'Edwards-curve Digital Signature Algorithm' },
  { short: 'EOAs', full: 'Externally Owned Accounts' },
  { short: 'EVM', full: 'Ethereum Virtual Machine' },
  { short: 'HH', full: 'Homomorphic hiding' },
  { short: 'PoS', full: 'Proof of stake' },
  { short: 'PoW', full: 'Proof of work' },
  { short: 'QAP', full: 'Quadratic arithmetic program' },
  { short: 'R1CS', full: 'Rank 1 Constraint System' },
  { short: 'RPC', full: 'Remote Procedure Call' },
  { short: 'UserOp', full: 'User Operation' },
  { short: 'ZKPs', full: 'Zero knowledge proofs' },
  { short: 'zk-SNARK', full: 'Zero-Knowledge Succinct Non-Interactive Argument of Knowledge' },
];

export default function Abbreviation(props: DivProps) {
  return <AbbreviationBox data={data} {...props} />;
}
