import { Suspense } from 'react';
import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import HomePage from 'src/views/HomePage';

export default function Home() {
  return (
    <Suspense>
      <CommonContainer>
        <AppNextSeo title="Home" />
        <CssBreadcrumbs configs={[{ label: 'Home' }]} className="mb-4" />
        <HomePage />
      </CommonContainer>
    </Suspense>
  );
}
