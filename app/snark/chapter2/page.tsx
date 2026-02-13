import { Metadata } from 'next';
import Link from 'next/link';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import BlindEvaluation from 'src/views/snark/BlindEvaluation';

export const metadata: Metadata = {
  title: 'SNARK | Blind Evaluation',
};

export default function Chapter2() {
  return (
    <div className="container">
      <TopicHeader
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 2: Blind Evaluation of Polynomials' },
          ],
        }}
        tabProps={{ index: 0 }}
      />
      <Link href="/snark/chapter1" className="inline-block">
        <div className="flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <LeftArrowIcon />
          <p className="whitespace-nowrap">Part 1</p>
        </div>
      </Link>
      <BlindEvaluation />
      <Link href="/snark/chapter3" className="inline-block">
        <div className="mt-4 flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <p className="whitespace-nowrap">Part 3</p>
          <RightArrowIcon />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain2/"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://electriccoin.co/blog/snark-explain2/
        </Link>
      </div>
    </div>
  );
}
