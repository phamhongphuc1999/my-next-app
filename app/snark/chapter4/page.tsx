import Link from 'next/link';
import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import MakeBlindEvaluation from 'src/views/snark/MakeBlindEvaluation';

export default function Chapter4() {
  return (
    <CommonContainer>
      <AppNextSeo title="SNARK || How to make Blind Evaluation of Polynomials Verifiable" />
      <CssBreadcrumbs
        configs={[
          { label: 'SNARK', link: '/snark' },
          { label: 'Part 4: How to make Blind Evaluation of Polynomials Verifiable' },
        ]}
      />
      <Link href="/snark/chapter3" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <LeftArrowIcon />
          <p>Part 3</p>
        </div>
      </Link>
      <MakeBlindEvaluation />
      <Link href="/snark/chapter5" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 5</p>
          <RightArrowIcon />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain4/"
          target="_blank"
          className="mt-[1rem] break-words"
        >
          https://electriccoin.co/blog/snark-explain4/
        </Link>
      </div>
    </CommonContainer>
  );
}
