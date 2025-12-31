import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import FormatNumberPage from 'src/views/format-number-page';

export default function FormatNumber() {
  return (
    <CommonContainer>
      <AppNextSeo title="Format number" />
      <CssBreadcrumbs configs={[{ label: 'Format number' }]} />
      <FormatNumberPage />
    </CommonContainer>
  );
}
