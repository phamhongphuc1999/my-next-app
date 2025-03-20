'use client';

import { MathJax } from 'better-react-mathjax';
import { AppHTMLProps } from 'src/global';
import { twMerge } from 'tailwind-merge';

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
    <p
      {...props}
      className={twMerge(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'} text-justify`, props.className)}
    >
      <>{isMath ? <MathJax>{props.children}</MathJax> : <>{props.children}</>}</>
    </p>
  );
}

export function ArticleUL({
  isFirst = false,
  ...props
}: Omit<AppHTMLProps<HTMLUListElement> & CommonProps, 'isMath'>) {
  return (
    <ul {...props} className={twMerge(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'}`, props.className)}>
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
      className={twMerge(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'} ml-[1rem]`, props.className)}
    >
      <>{isMath ? <MathJax>{props.children}</MathJax> : <>{props.children}</>}</>
    </li>
  );
}
