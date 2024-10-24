'use client';

import { MathJax } from 'better-react-mathjax';
import { DivProps } from 'src/global';
import { twMerge } from 'tailwind-merge';

interface Props extends DivProps {
  mode?: 'div' | 'p';
  isMath?: boolean;
}

export default function ArticleBox({ mode = 'p', isMath = false, ...props }: Props) {
  return mode == 'p' ? (
    <p {...props} className={twMerge('mb-[1rem]', props.className)}>
      <>{isMath ? <MathJax>{props.children}</MathJax> : <>{props.children}</>}</>
    </p>
  ) : (
    <div {...props} className={twMerge('mb-[1rem]', props.className)}>
      <>{isMath ? <MathJax>{props.children}</MathJax> : <>{props.children}</>}</>
    </div>
  );
}
