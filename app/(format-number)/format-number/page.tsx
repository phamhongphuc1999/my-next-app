import AppNextSeo from 'src/components/AppNextSeo';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import GettingStartedPage from 'src/views/format-number-page/getting-started';

export default function FormatNumber() {
  return (
    <div className="container">
      <AppNextSeo title="Format number" />
      <CssBreadcrumbs configs={[{ label: 'Format number' }]} />
      <GettingStartedPage />
    </div>
  );
}
