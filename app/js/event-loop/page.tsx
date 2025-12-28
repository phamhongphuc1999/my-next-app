import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';

export default function EventLoop() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'Event loop' }}
        breadcrumbProps={{ configs: [{ label: 'Home', link: '/' }, { label: 'Event loop' }] }}
        tabProps={{ index: 3 }}
      />
      <div>
        <p className="text-[20px]">References</p>
        <Link
          href="https://medium.com/@burak.bburuk/what-is-the-event-loop-in-javascript-and-why-is-it-essential-to-understand-b11af520a28b#:~:text=Event%20loop%20manages%20asynchronous%20operations,other%20code%20to%20continue%20executing."
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://medium.com/@burak.bburuk/what-is-the-event-loop-in-javascript-and-why-is-it-essential-to-understand-b11af520a28b#:~:text=Event%20loop%20manages%20asynchronous%20operations,other%20code%20to%20continue%20executing.
        </Link>
      </div>
    </CommonContainer>
  );
}
