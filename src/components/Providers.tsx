'use client';

import { MathJaxContext } from 'better-react-mathjax';
import { ReactNode } from 'react';
import { mathJaxConfig } from 'src/configs/mathJaxConfig';
import LayoutWrapper from 'src/components/LayoutWrapper';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MathJaxContext
      version={2}
      config={mathJaxConfig}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
      <LayoutWrapper>{children}</LayoutWrapper>
    </MathJaxContext>
  );
}
