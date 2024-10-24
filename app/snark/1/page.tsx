import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import HomomorphicHidings from 'src/views/snark/HomomorphicHidings';

export default function HomomorphicHidingsPage() {
  return (
    <CommonContainer>
      <CssBreadcrumbs
        configs={[{ label: 'SNARK', link: '/snark' }, { label: 'Part I: Homomorphic Hidings' }]}
      />
      <HomomorphicHidings />
    </CommonContainer>
  );
}
