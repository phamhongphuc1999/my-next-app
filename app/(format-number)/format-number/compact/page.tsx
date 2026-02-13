import { Metadata } from 'next';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import CompactPage from 'src/views/format-number-page/compact';

export const metadata: Metadata = {
  title: 'Format number | Compact',
};

export default function Compact() {
  return (
    <div className="container">
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'compact' }]}
      />
      <Separator className="my-2" />
      <CompactPage />
    </div>
  );
}
