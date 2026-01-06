import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import NotationPage from 'src/views/format-number-page/notation';

export default function Format() {
  return (
    <CommonContainer>
      <AppNextSeo title="Format number | Notation" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'notation' }]}
      />
      <Separator className="my-2" />
      <NotationPage />
    </CommonContainer>
  );
}
