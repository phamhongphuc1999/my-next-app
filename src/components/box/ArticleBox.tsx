'use client';

import { MathJaxProps } from 'better-react-mathjax';
import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';
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
    <div
      {...props}
      className={cn(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'} text-justify`, props.className)}
    >
      <>{isMath ? <MathJax {...mathProp}>{props.children}</MathJax> : <>{props.children}</>}</>
    </div>
  );
}

export function ArticleUL({
  isFirst = false,
  ...props
}: Omit<ComponentProps<'ul'> & CommonProps, 'isMath' | 'mathProp'>) {
  return (
    <ul {...props} className={cn(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'}`, props.className)}>
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
    <li
      {...props}
      className={cn(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'} ml-[1rem]`, props.className)}
    >
      <>{isMath ? <MathJax {...mathProp}>{props.children}</MathJax> : <>{props.children}</>}</>
    </li>
  );
}
