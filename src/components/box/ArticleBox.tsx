'use client';

import { MathJax } from 'better-react-mathjax';
import { DivProps } from 'src/global';
import { twMerge } from 'tailwind-merge';

interface Props extends DivProps {
  mode?: 'div' | 'p';
  isMath?: boolean;
  isFirst?: boolean;
}

export default function ArticleBox({
  mode = 'p',
  isMath = false,
  isFirst = false,
  ...props
}: Props) {
  return mode == 'p' ? (
    <p {...props} className={twMerge(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'}`, props.className)}>
      <>{isMath ? <MathJax>{props.children}</MathJax> : <>{props.children}</>}</>
    </p>
  ) : (
    <div {...props} className={twMerge(`${isFirst ? 'my-[1rem]' : 'mb-[1rem]'}`, props.className)}>
      <>{isMath ? <MathJax>{props.children}</MathJax> : <>{props.children}</>}</>
    </div>
  );
}
