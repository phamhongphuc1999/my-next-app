import Image from 'next/image';
import { AppArticle } from 'src/components/box/ArticleBox';
import MobXFlowImg from 'public/images/mobx/mobx-flow2.webp';

export default function MobXPage() {
  return (
    <div className="mt-[1rem]">
      <AppArticle>
        MobX is a state management library for JS applications that simplifies managing application
        states in <span className="italic underline">reactive way</span>.
      </AppArticle>
      <Image src={MobXFlowImg} alt="mobx" />
      <AppArticle className="mt-[1rem]">
        MobX has three important concepts: <span className="italic underline">State</span>,{' '}
        <span className="italic underline">Actions</span> and{' '}
        <span className="italic underline">Derivations</span>
      </AppArticle>
      <p className="text-[20px] font-[500]">1. Make state observable</p>
      <AppArticle>
        Store state in MobX can be any structure like: plain objects, arrays, classes, cyclic data
        structures or references, it does not matter in MobX.
      </AppArticle>
    </div>
  );
}
