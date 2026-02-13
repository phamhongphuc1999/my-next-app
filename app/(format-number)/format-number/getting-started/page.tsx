import { Metadata } from 'next';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import GettingStartedPage from 'src/views/format-number-page/getting-started';

export const metadata: Metadata = {
  title: 'Format number | Getting started',
};

export default function GettingStarted() {
  return (
    <div className="container">
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'Getting started' }]}
      />
      <Separator className="my-2" />
      <GettingStartedPage />
    </div>
  );
}
