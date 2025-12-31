import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import CompactPage from 'src/views/format-number-page/compact';

export default function Compact() {
  return (
    <CommonContainer>
      <AppNextSeo title="Format number | Compact" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'compact' }]}
      />
      <Separator className="mt-2" />
      <CompactPage />
    </CommonContainer>
  );
}
