import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';
import SimpleSnarkPage from 'src/views/simple-snark';

export default function SimpleSnark() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'Simple SNARK' }}
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Simple SNARK' }],
        }}
        tabProps={{ index: 8 }}
      />
      <SimpleSnarkPage />
    </CommonContainer>
  );
}
