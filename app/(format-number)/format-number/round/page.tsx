import { Metadata } from 'next';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import RoundPage from 'src/views/format-number-page/round';

export const metadata: Metadata = {
  title: 'Format number | Round',
};

export default function Round() {
  return (
    <div className="container">
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'round' }]}
      />
      <Separator className="my-2" />
      <RoundPage />
    </div>
  );
}
