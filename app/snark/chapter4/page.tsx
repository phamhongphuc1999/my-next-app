import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Typography } from '@mui/material';
import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import NextSeo from 'src/components/NextSeo';
import MakeBlindEvaluation from 'src/views/snark/MakeBlindEvaluation';

export default function Chapter4() {
  return (
    <CommonContainer>
      <NextSeo title="SNARK || How to make Blind Evaluation of Polynomials Verifiable" />
      <CssBreadcrumbs
        configs={[
          { label: 'SNARK', link: '/snark' },
          { label: 'Part 4: How to make Blind Evaluation of Polynomials Verifiable' },
        ]}
      />
      <Link href="/snark/chapter3" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <KeyboardDoubleArrowLeftIcon />
          <p>Part 3</p>
        </div>
      </Link>
      <MakeBlindEvaluation />
      <Link href="/snark/chapter5" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 5</p>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </Link>
      <div className="mt-4">
        <Typography variant="h4">References</Typography>
        <Link
          href="https://electriccoin.co/blog/snark-explain4/"
          target="_blank"
          className="mt-[1rem]"
        >
          https://electriccoin.co/blog/snark-explain4/
        </Link>
      </div>
    </CommonContainer>
  );
}