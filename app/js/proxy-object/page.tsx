import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';

export default function ProxyObject() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'Proxy in Javascript' }}
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Proxy in Javascript' }],
        }}
        tabProps={{ index: 6 }}
      />
      <div>
        <p className="text-[20px] font-medium">References</p>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
        </Link>
      </div>
    </CommonContainer>
  );
}
