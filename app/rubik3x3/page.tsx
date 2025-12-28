import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';

export default function Rubik3x3() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'Rubik 3x3' }}
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Rubik 3x3' }],
        }}
        tabProps={{ index: 9 }}
      />
      <div className="flex flex-col gap-1">
        <Link href="/rubik3x3/f2l" className='className="hover:underline"'>
          41 F2L
        </Link>
      </div>
    </CommonContainer>
  );
}
