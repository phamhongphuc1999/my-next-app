import { Suspense } from 'react';
import AppNextSeo from 'src/components/AppNextSeo';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import HomePage from 'src/views/HomePage';

export default function Home() {
  return (
    <Suspense>
      <div className="container">
        <AppNextSeo title="Home" />
        <CssBreadcrumbs configs={[{ label: 'Home' }]} className="mb-4" />
        <HomePage />
      </div>
    </Suspense>
  );
}
