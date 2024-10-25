import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Typography } from '@mui/material';
import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import NextSeo from 'src/components/NextSeo';
import BlindEvaluation from 'src/views/snark/BlindEvaluation';

export default function Chapter2() {
  return (
    <CommonContainer>
      <NextSeo title="SNARK || Blind Evaluation" />
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
      <Link href="/snark/chapter3" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 3</p>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </Link>
      <div className="mt-4">
        <Typography variant="h4">References</Typography>
        <Link
          href="https://electriccoin.co/blog/snark-explain2/"
          target="_blank"
          className="mt-[1rem]"
        >
          https://electriccoin.co/blog/snark-explain2/
        </Link>
      </div>
    </CommonContainer>
  );
}
