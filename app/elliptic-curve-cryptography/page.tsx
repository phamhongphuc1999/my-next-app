import TopicHeader from 'src/components/TopicHeader';
import EllipticCurveCryptographyPage from 'src/views/elliptic-curve-cryptography';

export default function EllipticCurveCryptography() {
  return (
    <div className="container">
      <TopicHeader
        seoProps={{ title: 'Elliptic Curve Cryptography' }}
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Elliptic Curve Cryptography' }],
        }}
        tabProps={{ index: 7 }}
      />
      <EllipticCurveCryptographyPage />
    </div>
  );
}
