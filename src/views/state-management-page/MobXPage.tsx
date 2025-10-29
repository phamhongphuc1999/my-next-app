import Link from 'next/link';
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
    <div className="mt-4">
      <AppArticle>
        MobX is a state management library for JS applications that simplifies managing application
        states in <span className="italic underline">reactive way</span>.
      </AppArticle>
      <img src="images/mobx/mobx-flow2.webp" alt="mobx" />
      <AppArticle className="mt-4">
        MobX has three important concepts: <span className="italic underline">State</span>,{' '}
        <span className="italic underline">Actions</span> and{' '}
        <span className="italic underline">Derivations</span>
      </AppArticle>
      <p className="text-[20px] font-medium">1. Overview</p>
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
          <span className="font-medium">Observable state</span>: any value that can be mutated and
          might serve as source for computed values is state. MobX can make most types of values
          (primitives, arrays, classes, objects, etc.) and even (potentially cyclic) references
          observable out of the box.
        </ArticleLI>
        <ArticleLI>
          <span className="font-medium">Computed value</span>: Any value that can be computed by
          using a function that purely operates on other observable values. Computed values can
          range from the concatenation of a few strings up to deriving complex object graphs and
          visualizations. Because computed values are observable themselves, even the rendering of a
          complete user interface can be derived from the observable state. Computed values might
          evaluate either lazily or in reaction to state changes.
        </ArticleLI>
        <ArticleLI>
          <span className="font-medium">Reaction</span>: A reaction is a bit similar to a computed
          value, but instead of producing a new value it produces a side effect. Reactions bridge
          reactive and imperative programming for things like printing to the console, making
          network requests, incrementally updating the React component tree to patch the DOM, etc.
        </ArticleLI>
        <ArticleLI>
          <span className="font-medium">Action</span>: All piece of code that modify state.
        </ArticleLI>
        <ArticleLI>
          <span className="font-medium">Derivations</span>: derivations is anything can derivate
          from the state without any further interaction, in other word, derivations are computed
          values and reaction.
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
                <AppArticle>
                  Mobx always minimizes the number of calculations. Computed value only re-compute
                  if necessary when others need it as dependency.
                </AppArticle>
                <AppArticle>
                  In my opinion, it is simply that re-call get (the function that calculate computed
                  value when necessary). Off course, we are discussing in pure javascript, how MobX
                  integrate to React will be mentioned later.
                </AppArticle>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </AppArticle>
      <AppArticle>
        <CodeBlock language="javascript" code={Code1} />
      </AppArticle>
      <div className="flex flex-wrap items-center gap-4">
        <img src="images/mobx/flow-example.webp" alt="mob-flow-example" />
        <img src="images/mobx/lazy.webp" alt="mob-lazy" />
      </div>
      <AppArticle>
        Above figures illustrate how observable state, computed value and reaction interact with
        each other and how <span className="font-medium">fullName</span> state become lazy mode
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
