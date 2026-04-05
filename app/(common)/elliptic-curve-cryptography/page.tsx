import { Metadata } from 'next';
import TopicHeader from 'src/components/TopicHeader';
import { ReferenceType } from 'src/global';
import EllipticCurveCryptographyPage from 'src/views/elliptic-curve-cryptography';

export const metadata: Metadata = { title: 'Elliptic Curve Cryptography' };

export default function EllipticCurveCryptography() {
  return (
    <>
      <TopicHeader
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Elliptic Curve Cryptography' }],
        }}
        tabProps={{ referenceId: ReferenceType.ellipticCurve }}
      />
      <EllipticCurveCryptographyPage />
    </>
  );
}
