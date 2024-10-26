'use client';

import Link from 'next/link';
import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import NextSeo from 'src/components/NextSeo';

export default function Home() {
  return (
    <CommonContainer>
      <NextSeo title="Home" />
      <CssBreadcrumbs configs={[{ label: 'Home' }]} className="mb-[1rem]" />
      <ArticleUL className="list-decimal">
        <ArticleLI>
          <Link href="/snark" className="hover:underline">
            SNARK
          </Link>
        </ArticleLI>
      </ArticleUL>
    </CommonContainer>
  );
}
