import Link from 'next/link';
import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';

const linkConfig: Array<{ link: string; title: string }> = [
  {
    link: 'https://upcommons.upc.edu/handle/2117/367941',
    title: 'Smart registration in Blockchain using zk-SNARKs',
  },
];

export default function SciencePage() {
  return (
    <CommonContainer>
      <AppNextSeo title="Fascinating links" />
      <CssBreadcrumbs
        configs={[
          { label: 'Home', link: '/' },
          { label: 'Fascinating links', link: '/links' },
          { label: 'Science' },
        ]}
      />
      {linkConfig.map((item, index) => {
        return (
          <Link
            key={item.link}
            target="_blank"
            className="mt-[1rem] block break-words hover:underline"
            href={item.link}
          >
            {index + 1} {item.title}
          </Link>
        );
      })}
    </CommonContainer>
  );
}
