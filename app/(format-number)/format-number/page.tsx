import { Metadata } from 'next';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import GettingStartedPage from 'src/views/format-number-page/getting-started';

export const metadata: Metadata = {
  title: 'Format number',
};

export default function FormatNumber() {
  return (
    <div className="container">
      <CssBreadcrumbs configs={[{ label: 'Format number' }]} />
      <GettingStartedPage />
    </div>
  );
}
