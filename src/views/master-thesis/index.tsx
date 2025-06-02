import ThesisConfigProvider from 'src/context/ThesisConfigContext';
import Chapter1 from './chapter1';

export default function MasterThesisPage() {
  return (
    <ThesisConfigProvider id="master-thesis" firstLevel="chapter">
      <p className="text-center text-2xl font-bold">
        Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof
      </p>
      <div className="mt-[1rem]">
        <Chapter1 />
      </div>
    </ThesisConfigProvider>
  );
}
