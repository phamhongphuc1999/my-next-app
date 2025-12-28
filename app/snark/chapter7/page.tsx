import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import { LeftArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import EllipticCurve from 'src/views/snark/EllipticCurve';

export default function Chapter7() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'SNARK | Pairings of Elliptic Curves' }}
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 7: Pairings of Elliptic Curves' },
          ],
        }}
        tabProps={{ index: 0 }}
      />
      <Link href="/snark/chapter6" className="inline-block">
        <div className="mt-6 flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <LeftArrowIcon />
          <p className="whitespace-nowrap">Part 6</p>
        </div>
      </Link>
      <EllipticCurve />
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain7/"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://electriccoin.co/blog/snark-explain7/
        </Link>
      </div>
    </CommonContainer>
  );
}
