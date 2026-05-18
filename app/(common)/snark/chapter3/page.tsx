import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import { ReferenceType } from 'src/global';

const KnowledgeCoefficient = dynamic(() => import('src/views/snark/KnowledgeCoefficient'), {
  loading: () => (
    <div className="flex min-h-[30vh] items-center justify-center">
      <p className="text-muted-foreground">Loading...</p>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'SNARK | The Knowledge of Coefficient Test and Assumption',
};

export default function Chapter3() {
  return (
    <>
      <TopicHeader
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 3: The Knowledge of Coefficient Test and Assumption' },
          ],
        }}
        tabProps={{ referenceId: ReferenceType.snark }}
      />
      <Link href="/snark/chapter2" className="inline-block">
        <div className="flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <LeftArrowIcon />
          <p className="whitespace-nowrap">Part 2</p>
        </div>
      </Link>
      <KnowledgeCoefficient />
      <Link href="/snark/chapter4" className="inline-block">
        <div className="mt-4 flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <p className="whitespace-nowrap">Part 4</p>
          <RightArrowIcon />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain3/"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://electriccoin.co/blog/snark-explain3/
        </Link>
      </div>
    </>
  );
}
