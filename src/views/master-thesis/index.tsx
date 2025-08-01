import ThesisConfigProvider from 'src/context/ThesisConfigContext';
import Abbreviation from './Abbreviation';
import Abstract from './Abstract';
import Acknowledgement from './Acknowledgement';
import Appendix from './appendix';
import Chapter1 from './chapter1';
import Chapter2 from './chapter2';
import Chapter3 from './chapter3';
import Chapter4 from './chapter4';
import Chapter5 from './chapter5';
import Chapter6 from './chapter6';
import References from './References';

export default function MasterThesisPage() {
  return (
    <ThesisConfigProvider id="master-thesis" firstLevel="chapter">
      <Abbreviation className="mb-5" />
      <p className="text-center text-2xl font-bold">
        Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof
      </p>
      <div className="mt-[1rem]">
        <Acknowledgement />
        <Abstract />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
        <Chapter6 />
        <References />
        <Appendix />
      </div>
    </ThesisConfigProvider>
  );
}
