import Image from 'next/image';
import Link from 'next/link';
import MobXFlowExampleImg from 'public/images/mobx/flow-example.webp';
import MobxLazyImg from 'public/images/mobx/lazy.webp';
import MobXFlowImg from 'public/images/mobx/mobx-flow2.webp';
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import CodeBlock from 'src/components/box/CodeBlock';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/shadcn-ui/dialog';
import { Code1, ComputedImplement, ProxyImplement } from 'src/configs/mobx-code';

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
      <p className="text-[20px] font-[500]">1. Observable state and derivations</p>
      <AppArticle isFirst>
        Store state in MobX can be any structure like: plain objects, arrays, classes, cyclic data
        structures or references, it does not matter in MobX. MobX track state change through
        observables. By default, MobX{' '}
        <Link
          href="https://mobx.js.org/configuration.html#proxy-support"
          target="_blank"
          className="underline"
        >
          use proxies to make array and plain object observables.
        </Link>
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI>
          <span className="font-[500]">Observable state</span>: any value that can be mutated and
          might serve as source for computed values is state. MobX can make most types of values
          (primitives, arrays, classes, objects, etc.) and even (potentially cyclic) references
          observable out of the box.
        </ArticleLI>
        <ArticleLI>
          <span className="font-[500]">Computed value</span>: Any value that can be computed by
          using a function that purely operates on other observable values. Computed values can
          range from the concatenation of a few strings up to deriving complex object graphs and
          visualizations. Because computed values are observable themselves, even the rendering of a
          complete user interface can be derived from the observable state. Computed values might
          evaluate either lazily or in reaction to state changes.
        </ArticleLI>
        <ArticleLI>
          <span className="font-[500]">Reaction</span>: A reaction is a bit similar to a computed
          value, but instead of producing a new value it produces a side effect. Reactions bridge
          reactive and imperative programming for things like printing to the console, making
          network requests, incrementally updating the React component tree to patch the DOM, etc.
        </ArticleLI>
        <ArticleLI>
          <span className="font-[500]">Action</span>: All piece of code that modify state.
        </ArticleLI>
      </ArticleUL>
      <AppArticle>
        In above figure, a action change observable state, computed value observes this change and
        re-compute if{' '}
        <Dialog>
          <DialogTrigger>
            <span className="cursor-pointer underline">necessary</span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Lazy mode of computed value</DialogTitle>
              <DialogDescription>
                Mobx always minimizes the number of calculations. Computed value only re-compute if
                necessary when others need it as dependency.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </AppArticle>
      <AppArticle>
        <CodeBlock language="javascript" code={Code1} />
      </AppArticle>
      <div className="flex flex-wrap items-center gap-[1rem]">
        <Image src={MobXFlowExampleImg} alt="mob-flow-example" />
        <Image src={MobxLazyImg} alt="mob-lazy" />
      </div>
      <AppArticle>
        Above figures illustrate how observable state, computed value and reaction interact with
        each other and how <span className="font-[500]">fullName</span> state become lazy mode
        because profile view does not depends on it, so re-computation is unnecessary.
      </AppArticle>
      <AppArticle>
        MobX primarily use proxies to implement its feature. Below is an example code that how proxy
        can track state change.
      </AppArticle>
      <AppArticle>
        <CodeBlock code={ProxyImplement} language="javascript" />
      </AppArticle>
      <AppArticle>Below is the computed implementation example</AppArticle>
      <AppArticle>
        <CodeBlock code={ComputedImplement} language="javascript" />
      </AppArticle>
    </div>
  );
}
