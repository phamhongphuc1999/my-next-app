import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import GettingStartedPage from 'src/views/format-number-page/getting-started';

export default function GettingStarted() {
  return (
    <CommonContainer>
      <AppNextSeo title="Format number | Getting started" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'Getting started' }]}
      />
      <Separator className="mt-2" />
      <GettingStartedPage />
    </CommonContainer>
  );
}
