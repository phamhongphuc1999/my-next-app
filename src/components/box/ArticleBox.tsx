'use client';

import dynamic from 'next/dynamic';
import { AppHTMLProps } from 'src/global';
import { cn } from 'src/lib/utils';

const MathJax = dynamic(() => import('better-react-mathjax').then((mod) => mod.MathJax), {
  ssr: false,
});

type CommonProps = {
  isMath?: boolean;
  isFirst?: boolean;
};

export function AppArticle({
  isMath = false,
  isFirst = false,
  ...props
}: AppHTMLProps<HTMLParagraphElement> & CommonProps) {
  return (
    <div
      {...props}
      className={cn(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'} text-justify`, props.className)}
    >
      <>{isMath ? <MathJax>{props.children}</MathJax> : <>{props.children}</>}</>
    </div>
  );
}

export function ArticleUL({
  isFirst = false,
  ...props
}: Omit<AppHTMLProps<HTMLUListElement> & CommonProps, 'isMath'>) {
  return (
    <ul {...props} className={cn(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'}`, props.className)}>
      {props.children}
    </ul>
  );
}

export function ArticleLI({
  isMath = false,
  isFirst = false,
  ...props
}: AppHTMLProps<HTMLLIElement> & CommonProps) {
  return (
    <li
      {...props}
      className={cn(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'} ml-[1rem]`, props.className)}
    >
      <>{isMath ? <MathJax>{props.children}</MathJax> : <>{props.children}</>}</>
    </li>
  );
}
