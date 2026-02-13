import { Metadata } from 'next';
import TopicHeader from 'src/components/TopicHeader';
import F2lView from 'src/views/rubik3x3/F2lView';

export const metadata: Metadata = {
  title: 'Rubik 3x3 | F2L',
};

export default function F2L() {
  return (
    <div className="container">
      <TopicHeader
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
    </div>
  );
}
