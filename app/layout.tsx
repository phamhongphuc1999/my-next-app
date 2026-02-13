import { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { ReactNode } from 'react';
import { Providers } from 'src/components/Providers';
import { ThemeScript } from 'src/components/ThemeScript';
import { GoogleTagManager } from 'src/components/analytics/GoogleTagManager';
import { siteMetadata } from 'src/configs/siteMetadata';
import 'src/styles/globals.css';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.siteName}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.siteName,
    images: [
      {
        url: siteMetadata.image,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: `@${siteMetadata.twitterHandle}`,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.image],
  },
  icons: {
    icon: siteMetadata.icon,
  },
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${firaCode.className} antialiased`}>
        <GoogleTagManager id="GTM-NDT23XFV" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
