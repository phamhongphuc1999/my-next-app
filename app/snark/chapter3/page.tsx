import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Typography } from '@mui/material';
import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import NextSeo from 'src/components/NextSeo';
import KnowledgeCoefficient from 'src/views/snark/KnowledgeCoefficient';

export default function Chapter3() {
  return (
    <CommonContainer>
      <NextSeo title="SNARK || The Knowledge of Coefficient Test and Assumption" />
      <CssBreadcrumbs
        configs={[
          { label: 'SNARK', link: '/snark' },
          { label: 'Part 3: The Knowledge of Coefficient Test and Assumption' },
        ]}
      />
      <Link href="/snark/chapter2" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <KeyboardDoubleArrowLeftIcon />
          <p>Part 2</p>
        </div>
      </Link>
      <KnowledgeCoefficient />
      <Link href="/snark/chapter4" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 4</p>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </Link>
      <div className="mt-4">
        <Typography variant="h4">References</Typography>
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
