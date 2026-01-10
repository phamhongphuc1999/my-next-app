import AppNextSeo from 'src/components/AppNextSeo';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import GettingStartedPage from 'src/views/format-number-page/getting-started';

export default function GettingStarted() {
  return (
    <div className="container">
      <AppNextSeo title="Format number | Getting started" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'Getting started' }]}
      />
      <Separator className="my-2" />
      <GettingStartedPage />
    </div>
  );
}
