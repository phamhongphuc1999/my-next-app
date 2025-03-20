import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import HomePage from 'src/views/home-page';

export default function Home() {
  return (
    <CommonContainer>
      <AppNextSeo title="Home" />
      <CssBreadcrumbs configs={[{ label: 'Home' }]} className="mb-[1rem]" />
      <HomePage />
    </CommonContainer>
  );
}
