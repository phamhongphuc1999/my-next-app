import { Metadata } from 'next';
import TopicHeader from 'src/components/TopicHeader';
import { ReferenceType } from 'src/global';
import SimpleSnarkPage from 'src/views/simple-snark';

export const metadata: Metadata = {
  title: 'Simple SNARK',
};

export default function SimpleSnark() {
  return (
    <>
      <TopicHeader
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Simple SNARK' }],
        }}
        tabProps={{ referenceId: ReferenceType['simple-snark'] }}
      />
      <SimpleSnarkPage />
    </>
  );
}
