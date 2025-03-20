import { AppArticle } from 'src/components/box/ArticleBox';
import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';

export default function JsTimeoutAndInterval() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'setTimeout and setInterval' }}
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'setTimeout and setInterval' }],
        }}
        tabProps={{ index: 2 }}
      />
      <AppArticle isMath className="mt-[1rem]">
        {
          'In Js, $\\textbf{setTimeout}$ and $\\textbf{setInterval}$ are asynchronous functions provided by brower (or Nodejs) that allow executing code non-blocking.'
        }
      </AppArticle>
    </CommonContainer>
  );
}
