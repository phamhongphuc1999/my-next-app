import Link from 'next/link';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import Computation from 'src/views/snark/Computations';

export default function Chapter5() {
  return (
    <div className="container">
      <TopicHeader
        seoProps={{ title: 'SNARK | From Computations to Polynomials' }}
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 5: From Computations to Polynomials' },
          ],
        }}
        tabProps={{ index: 0 }}
      />
      <Link href="/snark/chapter4" className="inline-block">
        <div className="flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <LeftArrowIcon />
          <p className="whitespace-nowrap">Part 4</p>
        </div>
      </Link>
      <Computation />
      <Link href="/snark/chapter6" className="inline-block">
        <div className="mt-4 flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <p className="whitespace-nowrap">Part 6</p>
          <RightArrowIcon />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain5/"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://electriccoin.co/blog/snark-explain5/
        </Link>
      </div>
    </div>
  );
}
