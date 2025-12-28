import Link from 'next/link';
import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';

const linkConfig: Array<{ link: string; title: string }> = [
  {
    link: 'https://upcommons.upc.edu/handle/2117/367941',
    title: 'Smart registration in Blockchain using zk-SNARKs',
  },
  {
    link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8976179',
    title: 'Smart Contract: Attacks and Protections',
  },
  {
    link: 'https://eprint.iacr.org/2021/289.pdf',
    title: 'Reactive Key-Loss Protection in Blockchains',
  },
  { link: 'https://arxiv.org/pdf/2202.06877', title: 'A Review of zk-SNARKs' },
  {
    link: 'https://www.di.ens.fr/~nitulesc/files/Survey-SNARKs.pdf',
    title: 'zk-SNARKs: A Gentle Introduction',
  },
  {
    link: 'https://arxiv.org/pdf/2309.03480',
    title: 'An Anonymous yet Accountable Contract Wallet System using Account Abstraction',
  },
  {
    link: 'https://eprint.iacr.org/2023/191.pdf',
    title: 'Beyond the Blockchain Address: Zero-Knowledge Address Abstraction',
  },
  { link: 'https://arxiv.org/pdf/2309.00448', title: 'Account Abstraction, Analysed' },
  {
    link: 'https://sci-hub.se/downloads/2020-09-02/45f9/wang2018.pdf',
    title: 'An Overview of Smart Contract: Architecture, Applications, and Future Trends',
  },
];

export default function SciencePage() {
  return (
    <CommonContainer>
      <AppNextSeo title="Fascinating links | Scientific links" />
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
            className="mt-4 block wrap-break-word hover:underline"
            href={item.link}
          >
            {index + 1}. {item.title}
          </Link>
        );
      })}
    </CommonContainer>
  );
}
