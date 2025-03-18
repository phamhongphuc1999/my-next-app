import Link from 'next/link';
import AppNextSeo from 'src/components/AppNextSeo';
import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { ReferenceConfig } from 'src/configs/constance';

export default function Home() {
  return (
    <CommonContainer>
      <AppNextSeo title="Home" />
      <CssBreadcrumbs configs={[{ label: 'Home' }]} className="mb-[1rem]" />
      <ArticleUL className="list-decimal">
        {ReferenceConfig.map((item, index) => {
          return (
            <ArticleLI key={index}>
              <Link href={item.link} className="hover:underline">
                {item.title}
              </Link>
            </ArticleLI>
          );
        })}
      </ArticleUL>
    </CommonContainer>
  );
}
