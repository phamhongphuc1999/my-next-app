import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';

export default function StateManagement() {
  return (
    <CommonContainer>
      <AppNextSeo title="State management" />
      <CssBreadcrumbs
        configs={[{ label: 'Home', link: '/' }, { label: 'State management' }]}
        className="mb-[1rem]"
      />
    </CommonContainer>
  );
}
