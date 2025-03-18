'use client';

import { MathJaxContext } from 'better-react-mathjax';
import { Fira_Code } from 'next/font/google';
import IconImg from 'public/star.svg';
import ThumbImg from 'public/thumbnail.webp';
import { ReactNode } from 'react';
import LayoutWrapper from 'src/components/wrapper/LayoutWrapper';
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
      <head>
        <title>My Next App</title>
        <meta property="og:type" content="website" />
        <link rel="icon" href={IconImg.src} />
        <meta property="og:url" content="https://my-next-app-one-topaz.vercel.app/" />
        <meta name="description" content="" key="description" />
        <meta property="og:title" content="My Next App" key="title" />
        <meta property="og:description" content="" key="ogdescription" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="My Next App" />
        <meta name="application-name" content="My Next App" />
        <meta property="og:image" content={ThumbImg.src} key="ogimage" />
        <meta name="twitter:image" content={ThumbImg.src} key="twitterimage" />
        <meta name="twitter:image:alt" content="cover image" key="twitteralt" />
        <meta name="twitter:site" content="https://x.com/PhamHon08928762" key="twittersite" />
        <meta name="twitter:card" content="summary_large_image" key="twittercard" />
        <meta name="twitter:title" content="My Next App" key="twittertitle" />
        <meta name="twitter:description" content="" key="twitterdescription" />
        <meta name="keywords" key="keywords" content={''} />
      </head>
      <body data-theme="light" className={`${fira.className} antialiased`}>
        <AppContextProvider>
          <MathJaxContext
            version={2}
            config={config}
            onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
          >
            <LayoutWrapper>{children}</LayoutWrapper>
          </MathJaxContext>
        </AppContextProvider>
      </body>
    </html>
  );
}
