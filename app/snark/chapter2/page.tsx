import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import BlindEvaluation from 'src/views/snark/BlindEvaluation';

export default function BlindEvaluationPage() {
  return (
    <CommonContainer>
      <CssBreadcrumbs
        configs={[
          { label: 'SNARK', link: '/snark' },
          { label: 'Part 2: Blind Evaluation of Polynomials' },
        ]}
      />
      <Link href="/snark/chapter1" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <KeyboardDoubleArrowLeftIcon />
          <p>Part 1</p>
        </div>
      </Link>
      <BlindEvaluation />
      <Link href="/snark/chapter1" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 3</p>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </Link>
    </CommonContainer>
  );
}
