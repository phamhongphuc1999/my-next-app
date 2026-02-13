import { Metadata } from 'next';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import TypesPage from 'src/views/format-number-page/types';

export const metadata: Metadata = {
  title: 'Format number | Types',
};

export default function Types() {
  return (
    <div className="container">
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'types' }]}
      />
      <Separator className="my-2" />
      <TypesPage />
    </div>
  );
}
