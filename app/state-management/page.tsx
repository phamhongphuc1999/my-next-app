import Link from 'next/link';
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
      State management is the crucial part that frontend must consider when implement apps.
      Selecting state management library or architecture directly interfere the performance. In this
      topic, i will introduce some state management i know and have chance to use them in real
      projects.
      <div className="mt-[1rem]">
        <Link href="/state-management/mobx" className="hover:underline">
          1. MobX
        </Link>
      </div>
    </CommonContainer>
  );
}
