import { Metadata } from 'next';
import TopicHeader from 'src/components/TopicHeader';
import SimpleSnarkPage from 'src/views/simple-snark';

export const metadata: Metadata = {
  title: 'Simple SNARK',
};

export default function SimpleSnark() {
  return (
    <div className="container">
      <TopicHeader
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Simple SNARK' }],
        }}
        tabProps={{ index: 8 }}
      />
      <SimpleSnarkPage />
    </div>
  );
}
