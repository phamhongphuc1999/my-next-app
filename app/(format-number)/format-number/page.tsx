import AppNextSeo from 'src/components/AppNextSeo';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import FormatNumberPage from 'src/views/format-number-page';

export default function FormatNumber() {
  return (
    <div className="container">
      <AppNextSeo title="Format number" />
      <CssBreadcrumbs configs={[{ label: 'Format number' }]} />
      <FormatNumberPage />
    </div>
  );
}
