import Link from 'next/link';
import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import TopicHeader from 'src/components/TopicHeader';

export default function Rubik3x3() {
  return (
    <div className="container">
      <TopicHeader
        seoProps={{ title: 'Rubik 3x3' }}
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Rubik 3x3' }],
        }}
        tabProps={{ index: 9 }}
      />
      <ArticleUL className="list-disc">
        <ArticleLI className="w-fit hover:underline">
          <Link href="/rubik3x3/f2l" className='className="hover:underline"'>
            41 F2L
          </Link>
        </ArticleLI>
      </ArticleUL>
    </div>
  );
}
