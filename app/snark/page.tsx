import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';

export default function Snark() {
  return (
    <CommonContainer>
      <CssBreadcrumbs configs={[{ label: 'SNARK' }]} />
    </CommonContainer>
  );
}
