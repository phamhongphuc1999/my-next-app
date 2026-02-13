import { Metadata } from 'next';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import FormatPage from 'src/views/format-number-page/format';

export const metadata: Metadata = {
  title: 'Format number | Format',
};

export default function Format() {
  return (
    <div className="container">
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'format' }]}
      />
      <Separator className="my-2" />
      <FormatPage />
    </div>
  );
}
