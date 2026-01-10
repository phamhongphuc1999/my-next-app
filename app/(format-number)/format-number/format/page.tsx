import AppNextSeo from 'src/components/AppNextSeo';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import FormatPage from 'src/views/format-number-page/format';

export default function Format() {
  return (
    <div className="container">
      <AppNextSeo title="Format number | Format" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'format' }]}
      />
      <Separator className="my-2" />
      <FormatPage />
    </div>
  );
}
