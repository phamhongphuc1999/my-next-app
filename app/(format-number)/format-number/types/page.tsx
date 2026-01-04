import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import TypesPage from 'src/views/format-number-page/types';

export default function Types() {
  return (
    <CommonContainer>
      <AppNextSeo title="Format number | Types" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'types' }]}
      />
      <Separator className="my-2" />
      <TypesPage />
    </CommonContainer>
  );
}
