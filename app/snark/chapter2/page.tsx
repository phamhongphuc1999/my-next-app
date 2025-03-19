import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import BlindEvaluation from 'src/views/snark/BlindEvaluation';

export default function Chapter2() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'SNARK | Blind Evaluation' }}
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
        <div className="flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <LeftArrowIcon style={{ width: '1rem', height: '1rem' }} />
          <p className="whitespace-nowrap">Part 1</p>
        </div>
      </Link>
      <BlindEvaluation />
      <Link href="/snark/chapter3" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p className="whitespace-nowrap">Part 3</p>
          <RightArrowIcon style={{ width: '1rem', height: '1rem' }} />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain2/"
          target="_blank"
          className="mt-[1rem] break-words"
        >
          https://electriccoin.co/blog/snark-explain2/
        </Link>
      </div>
    </CommonContainer>
  );
}
