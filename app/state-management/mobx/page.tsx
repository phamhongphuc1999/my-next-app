import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';
import MobXPage from 'src/views/state-management-page/MobXPage';

export default function MobX() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'State management | MobX' }}
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'State management', link: '/state-management' },
            { label: 'MobX' },
          ],
        }}
        tabProps={{ index: 1 }}
      />
      <MobXPage />
      <div>
        <p className="text-[20px] font-[500]">References</p>
        <Link
          href="https://hackernoon.com/the-fundamental-principles-behind-mobx-7a725f71f3e8"
          target="_blank"
          className="mt-[1rem] break-words"
        >
          https://hackernoon.com/the-fundamental-principles-behind-mobx-7a725f71f3e8
        </Link>
        <Link
          target="_blank"
          href="https://mobx.js.org/README.html"
          className="mt-[1rem] block break-words"
        >
          https://mobx.js.org/README.html
        </Link>
        <Link
          target="_blank"
          href="https://medium.com/hackernoon/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254"
          className="mt-[1rem] block break-words"
        >
          https://medium.com/hackernoon/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254
        </Link>
      </div>
    </CommonContainer>
  );
}
