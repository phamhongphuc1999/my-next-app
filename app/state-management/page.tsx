import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';

export default function StateManagement() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'State management' }}
        breadcrumbProps={{ configs: [{ label: 'Home', link: '/' }, { label: 'State management' }] }}
        tabProps={{ index: 1 }}
      />
    </CommonContainer>
  );
}
