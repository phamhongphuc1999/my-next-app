import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { SpecialTabBox } from 'src/components/box/TabBox';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { TabType } from 'src/global';

export const metadata: Metadata = {
  title: 'Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof',
};

const MasterThesisPage = dynamic(() => import('src/views/master-thesis'), {
  loading: () => (
    <div className="flex min-h-[50vh] items-center justify-center">
      <p className="text-muted-foreground">Loading thesis...</p>
    </div>
  ),
});

export default function MasterThesis() {
  return (
    <>
      <div className="my-4">
        <CssBreadcrumbs configs={[{ label: 'Home', link: '/' }, { label: 'Master Thesis' }]} />
        <SpecialTabBox
          className="mt-4"
          tabs={[TabType.ellipticCurve, TabType.zeroKnowledgeProof, TabType.accountAbstraction]}
        />
      </div>
      <MasterThesisPage />
    </>
  );
}
