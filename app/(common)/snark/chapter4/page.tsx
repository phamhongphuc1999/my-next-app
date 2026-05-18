import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import { ReferenceType } from 'src/global';

export const metadata: Metadata = {
  title: 'SNARK | How to make Blind Evaluation of Polynomials Verifiable',
};

const MakeBlindEvaluation = dynamic(() => import('src/views/snark/MakeBlindEvaluation'), {
  loading: () => (
    <div className="flex min-h-[30vh] items-center justify-center">
      <p className="text-muted-foreground">Loading...</p>
    </div>
  ),
});

export default function Chapter4() {
  return (
    <>
      <TopicHeader
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 4: How to make Blind Evaluation of Polynomials Verifiable' },
          ],
        }}
        tabProps={{ referenceId: ReferenceType.snark }}
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
    </>
  );
}
