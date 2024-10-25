import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import SnarkMainLayout from 'src/views/snark/MainLayout';

export default function Snark() {
  return (
    <CommonContainer>
      <CssBreadcrumbs
        configs={[{ label: 'Home', link: '/' }, { label: 'SNARK' }]}
        className="mb-[1rem]"
      />
      <SnarkMainLayout />
    </CommonContainer>
  );
}
