import { Metadata } from 'next';
import TopicHeader from 'src/components/TopicHeader';
import EllipticCurveCryptographyPage from 'src/views/elliptic-curve-cryptography';

export const metadata: Metadata = {
  title: 'Elliptic Curve Cryptography',
};

export default function EllipticCurveCryptography() {
  return (
    <div className="container">
      <TopicHeader
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Elliptic Curve Cryptography' }],
        }}
        tabProps={{ index: 7 }}
      />
      <EllipticCurveCryptographyPage />
    </div>
  );
}
