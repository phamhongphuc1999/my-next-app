import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Separator } from 'src/components/shadcn-ui/separator';
import ExamplePage from 'src/views/format-number-page/example';

export default function Example() {
  return (
    <CommonContainer>
      <AppNextSeo title="Format number | Example" />
      <CssBreadcrumbs
        configs={[{ label: 'Format number', link: '/format-number' }, { label: 'example' }]}
      />
      <Separator className="mt-2" />
      <ExamplePage />
    </CommonContainer>
  );
}
