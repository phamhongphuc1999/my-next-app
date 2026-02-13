import { Metadata } from 'next';
import Link from 'next/link';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import MakeBlindEvaluation from 'src/views/snark/MakeBlindEvaluation';

export const metadata: Metadata = {
  title: 'SNARK | How to make Blind Evaluation of Polynomials Verifiable',
};

export default function Chapter4() {
  return (
    <div className="container">
      <TopicHeader
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 4: How to make Blind Evaluation of Polynomials Verifiable' },
          ],
        }}
        tabProps={{ index: 0 }}
      />
      <Link href="/snark/chapter3" className="inline-block">
        <div className="flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <LeftArrowIcon />
          <p className="whitespace-nowrap">Part 3</p>
        </div>
      </Link>
      <MakeBlindEvaluation />
      <Link href="/snark/chapter5" className="inline-block">
        <div className="mt-4 flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <p className="whitespace-nowrap">Part 5</p>
          <RightArrowIcon />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain4/"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://electriccoin.co/blog/snark-explain4/
        </Link>
      </div>
    </div>
  );
}
