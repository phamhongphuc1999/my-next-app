import { Metadata } from 'next';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import NotationPage from 'src/views/format-number-page/notation';

export const metadata: Metadata = {
  title: 'Format number | Notation',
};

export default function Format() {
  return (
    <div className="container">
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'notation' }]}
      />
      <Separator className="my-2" />
      <NotationPage />
    </div>
  );
}
