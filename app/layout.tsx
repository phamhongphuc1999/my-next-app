'use client';

import { MathJaxContext } from 'better-react-mathjax';
import { Fira_Code } from 'next/font/google';
import { ReactNode } from 'react';
import NextSeo from 'src/components/NextSeo';
import LayoutWrapper from 'src/components/wrapper/LayoutWrapper';
import ThemeWrapper from 'src/components/wrapper/ThemeWrapper';
import AppContextProvider from 'src/context';
import 'src/styles/globals.css';

const config = {
  'fast-preview': { disabled: true },
  tex2jax: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
  },
  messageStyle: 'none',
};

const fira = Fira_Code({ subsets: ['latin'] });
type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <NextSeo />
      <body data-theme="dark" className={`${fira.className} antialiased`}>
        <AppContextProvider>
          <MathJaxContext
            version={2}
            config={config}
            onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
          >
            <ThemeWrapper>
              <LayoutWrapper>{children}</LayoutWrapper>
            </ThemeWrapper>
          </MathJaxContext>
        </AppContextProvider>
      </body>
    </html>
  );
}
