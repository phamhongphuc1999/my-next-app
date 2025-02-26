import { ArticleTitle } from 'src/components/box/ArticleBox';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import NextSeo from 'src/components/NextSeo';

export default function JsTimeoutAndInterval() {
  return (
    <CommonContainer>
      <NextSeo title="setTimeout and setInterval" />
      <CssBreadcrumbs
        configs={[{ label: 'Home', link: '/' }, { label: 'setTimeout and setInterval' }]}
        className="mb-[1rem]"
      />
      <ArticleTitle isMath>
        {
          'In Js, $\\textbf{setTimeout}$ and $\\textbf{setInterval}$ are asynchronous functions provided by brower (or Nodejs) that allow executing code non-blocking.'
        }
      </ArticleTitle>
    </CommonContainer>
  );
}
