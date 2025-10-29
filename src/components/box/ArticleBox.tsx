'use client';

import { MathJaxProps } from 'better-react-mathjax';
import dynamic from 'next/dynamic';
import { ComponentProps, Fragment } from 'react';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

const MathJax = dynamic(() => import('better-react-mathjax').then((mod) => mod.MathJax), {
  ssr: false,
});

type CommonProps = {
  isMath?: boolean;
  isFirst?: boolean;
  mathProp?: MathJaxProps;
};

export function AppArticle({
  isMath = false,
  isFirst = false,
  mathProp,
  ...props
}: DivProps & CommonProps) {
  return (
    <div {...props} className={cn('text-justify', isFirst ? 'my-4' : 'mb-4', props.className)}>
      <Fragment>
        {isMath ? <MathJax {...mathProp}>{props.children}</MathJax> : props.children}
      </Fragment>
    </div>
  );
}

export function ArticleUL({
  isFirst = false,
  ...props
}: Omit<ComponentProps<'ul'> & CommonProps, 'isMath' | 'mathProp'>) {
  return (
    <ul {...props} className={cn(`${isFirst ? 'my-4' : 'mb-4'}`, props.className)}>
      {props.children}
    </ul>
  );
}

export function ArticleLI({
  isMath = false,
  isFirst = false,
  mathProp,
  ...props
}: ComponentProps<'li'> & CommonProps) {
  return (
    <li {...props} className={cn('ml-4', isFirst ? 'my-4' : 'mb-4', props.className)}>
      <Fragment>
        {isMath ? <MathJax {...mathProp}>{props.children}</MathJax> : props.children}
      </Fragment>
    </li>
  );
}
