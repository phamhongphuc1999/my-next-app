import AppNextSeo from 'src/components/AppNextSeo';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import RoundPage from 'src/views/format-number-page/round';

export default function Round() {
  return (
    <div className="container">
      <AppNextSeo title="Format number | Round" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'round' }]}
      />
      <Separator className="my-2" />
      <RoundPage />
    </div>
  );
}
