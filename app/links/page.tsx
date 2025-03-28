import Link from 'next/link';
import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';

const linkConfig: Array<{ link: string; title: string }> = [
  {
    link: 'https://medium.com/@lavrton/how-to-optimise-rendering-of-a-set-of-elements-in-react-ad01f5b161ae#.6nhaj6npf',
    title: 'Tips to optimise rendering of a set of elements in React',
  },
  {
    link: 'https://hackernoon.com/an-artificial-example-where-mobx-really-shines-and-redux-is-not-really-suited-for-it-1a58313c0c70?ref=hackernoon.com#.42tpw3uw9',
    title: 'An artificial example where MobX really shines and Redux is not really suited for it',
  },
];

export default function LinksPage() {
  return (
    <CommonContainer>
      <AppNextSeo title="Fascinating links" />
      <CssBreadcrumbs configs={[{ label: 'Home', link: '/' }, { label: 'Fascinating links' }]} />
      {linkConfig.map((item, index) => {
        return (
          <Link
            key={item.link}
            target="_blank"
            className="mt-[1rem] block break-words"
            href={item.link}
          >
            {index + 1} {item.title}
          </Link>
        );
      })}
    </CommonContainer>
  );
}
