import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';

export default function GtmGa() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'Google tab manager and Google analytic' }}
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'Google tab manager and Google analytic' },
          ],
        }}
        tabProps={{ index: 5 }}
      />
    </CommonContainer>
  );
}
