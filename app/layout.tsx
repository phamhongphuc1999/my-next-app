'use client';

import { MathJaxContext } from 'better-react-mathjax';
import { Fira_Code } from 'next/font/google';
import { ReactNode } from 'react';
import LayoutWrapper from 'src/components/LayoutWrapper';
import { MetadataHead } from 'src/components/MetadataHead';
import { GoogleTagManager } from 'src/components/analytics/GoogleTagManager';
import { mathJaxConfig } from 'src/configs/mathJaxConfig';
import AppContextProvider from 'src/context';
import 'src/styles/globals.css';

const firaCode = Fira_Code({ subsets: ['latin'] });

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <MetadataHead />
      <body data-theme="light" className={`${firaCode.className} antialiased`}>
        <GoogleTagManager id="GTM-NDT23XFV" />
        <AppContextProvider>
          <MathJaxContext
            version={2}
            config={mathJaxConfig}
            onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
          >
            <LayoutWrapper>{children}</LayoutWrapper>
          </MathJaxContext>
        </AppContextProvider>
      </body>
    </html>
  );
}
