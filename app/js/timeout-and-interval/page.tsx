import { Metadata } from 'next';
import { AppArticle } from 'src/components/box/ArticleBox';
import TopicHeader from 'src/components/TopicHeader';

export const metadata: Metadata = {
  title: 'setTimeout and setInterval',
};

export default function JsTimeoutAndInterval() {
  return (
    <div className="container">
      <TopicHeader
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'setTimeout and setInterval' }],
        }}
        tabProps={{ index: 2 }}
      />
      <AppArticle isMath className="mt-4">
        {
          'In Js, $\\textbf{setTimeout}$ and $\\textbf{setInterval}$ are asynchronous functions provided by brower (or Nodejs) that allow executing code non-blocking.'
        }
      </AppArticle>
    </div>
  );
}
