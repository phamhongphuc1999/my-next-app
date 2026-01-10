import Link from 'next/link';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import KnowledgeCoefficient from 'src/views/snark/KnowledgeCoefficient';

export default function Chapter3() {
  return (
    <div className="container">
      <TopicHeader
        seoProps={{ title: 'SNARK | The Knowledge of Coefficient Test and Assumption' }}
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 3: The Knowledge of Coefficient Test and Assumption' },
          ],
        }}
        tabProps={{ index: 0 }}
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
    </div>
  );
}
