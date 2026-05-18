import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import TopicHeader from 'src/components/TopicHeader';
import { ReferenceType } from 'src/global';

export const metadata: Metadata = {
  title: 'Simple SNARK',
};

const SimpleSnarkPage = dynamic(() => import('src/views/simple-snark'), {
  loading: () => (
    <div className="flex min-h-[30vh] items-center justify-center">
      <p className="text-muted-foreground">Loading...</p>
    </div>
  ),
});

export default function SimpleSnark() {
  return (
    <>
      <TopicHeader
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Simple SNARK' }],
        }}
        tabProps={{ referenceId: ReferenceType.simpleSnark }}
      />
      <SimpleSnarkPage />
    </>
  );
}
