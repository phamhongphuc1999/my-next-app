import { Metadata } from 'next';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import IOPage from 'src/views/format-number-page/io';

export const metadata: Metadata = {
  title: 'Format number | IO',
};

export default function Format() {
  return (
    <div className="container">
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'io' }]}
      />
      <Separator className="my-2" />
      <IOPage />
    </div>
  );
}
