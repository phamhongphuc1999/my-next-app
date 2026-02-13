import { Metadata } from 'next';
import TopicHeader from 'src/components/TopicHeader';

export const metadata: Metadata = {
  title: 'Google tab manager and Google analytic',
};

export default function GtmGa() {
  return (
    <TopicHeader
      breadcrumbProps={{
        configs: [
          { label: 'Home', link: '/' },
          { label: 'Google tab manager and Google analytic' },
        ],
      }}
      tabProps={{ index: 5 }}
    />
  );
}
