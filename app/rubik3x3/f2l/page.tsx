import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';
import F2lView from 'src/views/rubik3x3/F2lView';

export default function F2L() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'Rubik 3x3 | F2L' }}
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'Rubik 3x3', link: '/rubik3x3' },
            { label: 'f2l' },
          ],
        }}
        tabProps={{ index: 9 }}
      />
      <F2lView />
    </CommonContainer>
  );
}
