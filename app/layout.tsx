'use client';

import { MathJaxContext } from 'better-react-mathjax';
import { Fira_Code } from 'next/font/google';
import { ReactNode, useEffect } from 'react';
import LayoutWrapper from 'src/components/LayoutWrapper';
import { MetadataHead } from 'src/components/MetadataHead';
import { GoogleTagManager } from 'src/components/analytics/GoogleTagManager';
import { LS } from 'src/configs/constance';
import { mathJaxConfig } from 'src/configs/mathJaxConfig';
import { LocalStorage } from 'src/services';
import 'src/styles/globals.css';

const firaCode = Fira_Code({ subsets: ['latin'] });

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  useEffect(() => {
    const theme = LocalStorage.get(LS.THEME) || 'dark';
    LocalStorage.set(LS.THEME, theme);
    document.body.dataset.theme = theme;
    if (theme == 'dark') document.documentElement.classList.toggle('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  return (
    <html lang="en">
      <MetadataHead />
      <body data-theme="light" className={`${firaCode.className} antialiased`}>
        <GoogleTagManager id="GTM-NDT23XFV" />
        <MathJaxContext
          version={2}
          config={mathJaxConfig}
          onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </MathJaxContext>
      </body>
    </html>
  );
}
