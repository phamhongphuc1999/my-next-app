'use client';

import { MathJaxContext } from 'better-react-mathjax';
import { ReactNode } from 'react';
import { mathJaxConfig } from 'src/configs/mathJaxConfig';

interface Props {
  children: ReactNode;
}

export default function MathJaxProvider({ children }: Props) {
  return (
    <MathJaxContext
      version={2}
      config={mathJaxConfig}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
      {children}
    </MathJaxContext>
  );
}
