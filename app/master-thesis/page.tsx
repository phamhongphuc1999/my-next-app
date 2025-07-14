import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import { SpecialTabBox } from 'src/components/box/TabBox';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import MasterThesisPage from 'src/views/master-thesis';

export default function MasterThesis() {
  return (
    <CommonContainer>
      <div className="my-4">
        <AppNextSeo title="Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof" />
        <CssBreadcrumbs configs={[{ label: 'Home', link: '/' }, { label: 'Master Thesis' }]} />
        <SpecialTabBox
          className="mt-4"
          tabs={['elliptic-curve', 'zero-knowledge-proof', 'account-abstraction']}
        />
      </div>
      <MasterThesisPage />
    </CommonContainer>
  );
}
