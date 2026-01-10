import AppNextSeo from 'src/components/AppNextSeo';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import IOPage from 'src/views/format-number-page/io';

export default function Format() {
  return (
    <div className="container">
      <AppNextSeo title="Format number | IO" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'io' }]}
      />
      <Separator className="my-2" />
      <IOPage />
    </div>
  );
}
