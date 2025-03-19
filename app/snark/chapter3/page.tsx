import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import KnowledgeCoefficient from 'src/views/snark/KnowledgeCoefficient';

export default function Chapter3() {
  return (
    <CommonContainer>
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
        <div className="flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <LeftArrowIcon style={{ width: '1rem', height: '1rem' }} />
          <p className="whitespace-nowrap">Part 2</p>
        </div>
      </Link>
      <KnowledgeCoefficient />
      <Link href="/snark/chapter4" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p className="whitespace-nowrap">Part 4</p>
          <RightArrowIcon style={{ width: '1rem', height: '1rem' }} />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain3/"
          target="_blank"
          className="mt-[1rem] break-words"
        >
          https://electriccoin.co/blog/snark-explain3/
        </Link>
      </div>
    </CommonContainer>
  );
}
