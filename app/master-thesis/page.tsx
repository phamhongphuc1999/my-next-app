import { Metadata } from 'next';
import { SpecialTabBox } from 'src/components/box/TabBox';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import MasterThesisPage from 'src/views/master-thesis';

export const metadata: Metadata = {
  title: 'Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof',
};

export default function MasterThesis() {
  return (
    <div className="container">
      <div className="my-4">
        <CssBreadcrumbs configs={[{ label: 'Home', link: '/' }, { label: 'Master Thesis' }]} />
        <SpecialTabBox
          className="mt-4"
          tabs={['elliptic-curve', 'zero-knowledge-proof', 'account-abstraction']}
        />
      </div>
      <MasterThesisPage />
    </div>
  );
}
