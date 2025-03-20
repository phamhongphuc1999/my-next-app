/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import AsyncWriteImg from 'public/images/flux-architecture/async-store-write.png';
import FluxPatternImg from 'public/images/flux-architecture/flux-pattern.png';
import ReadImg from 'public/images/flux-architecture/store-reads.png';
import SyncWriteImg from 'public/images/flux-architecture/sync-store-write.png';
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from 'src/components/shadcn-ui/collapsible';
import DomainStateDialog from './DomainStateDialog';
import UIStateDialog from './UIStateDialog';

export default function FluxArchitecturePage() {
  return (
    <div className="mt-[1rem]">
      <Image src={FluxPatternImg} alt="flex-pattern" />
      <AppArticle isFirst>
        Flux is an architectural pattern proposed by Facebook for building SPAs (Single Page
        Applications). Flux is not library or framework, it just a design pattern. It suggests to
        split the application into the following parts:
      </AppArticle>
      <Collapsible className="mt-[1rem]">
        <CollapsibleTrigger className="text-[20px] font-[500] underline">Stores</CollapsibleTrigger>
        <CollapsibleContent>
          Store manages the state. It can store both <DomainStateDialog /> and <UIStateDialog />.
          Store just is used for storing states and does not have setter method. It means there are
          no way to change state on the store. You only change state by passing actions to the
          dispatcher.
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="mt-[1rem]">
        <CollapsibleTrigger className="text-[20px] font-[500] underline">
          Dispatcher
        </CollapsibleTrigger>
        <CollapsibleContent>
          Dispatcher is a single object that broadcasts actions/events to all registered stores.
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="mt-[1rem]">
        <CollapsibleTrigger className="text-[20px] font-[500] underline">View</CollapsibleTrigger>
        <CollapsibleContent>
          View is the user interface component. It is responsible for rendering the user interface
          and for handling the user interaction. Views are in a tree structure. Views listen for
          store changes and re-render. Views can be further split in{' '}
          <span className="font-[500] italic">Presentation</span> and{' '}
          <span className="font-[500] italic">Container Views</span>.
          <ArticleUL className="list-disc">
            <ArticleLI>
              Presentation views don't connect to dispatcher or stores. They communicate only
              through their own properties.
            </ArticleLI>
            <ArticleLI>
              Container views are connected to stores and dispatcher. They listen for events from
              stores and provide the data for presentation components. They get the new data using
              the stores' public getter methods and then pass that data down the views tree.
            </ArticleLI>
          </ArticleUL>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="mt-[1rem]">
        <CollapsibleTrigger className="text-[20px] font-[500] underline">Action</CollapsibleTrigger>
        <CollapsibleContent>
          An action is a plain object that contains all information necessary to do that action. An
          action can be emitted by user interaction, initialization code, where data may be taken
          from a Web API and actions are fired to update the views.
        </CollapsibleContent>
      </Collapsible>
      In the very simple way, you can divide flux into three situations
      <Collapsible className="mt-[1rem]" open={true}>
        <CollapsibleTrigger className="text-[20px] font-[500] underline">
          Read state
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Image src={ReadImg} alt="read" />
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="mt-[1rem]" open={true}>
        <CollapsibleTrigger className="text-[20px] font-[500] underline">
          Store Writes in synchronous actions
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Image src={SyncWriteImg} alt="read" />
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="mt-[1rem]" open={true}>
        <CollapsibleTrigger className="text-[20px] font-[500] underline">
          Store Writes in asynchronous actions
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Image src={AsyncWriteImg} alt="read" />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
