import { Metadata } from 'next';
import { Suspense } from 'react';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import HomePage from 'src/views/HomePage';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <Suspense>
      <div className="container">
        <CssBreadcrumbs configs={[{ label: 'Home' }]} className="mb-4" />
        <HomePage />
      </div>
    </Suspense>
  );
}
