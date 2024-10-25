import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Typography } from '@mui/material';
import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import NextSeo from 'src/components/NextSeo';
import HomomorphicHidings from 'src/views/snark/HomomorphicHidings';

export default function Chapter1() {
  return (
    <CommonContainer>
      <NextSeo title="SNARK || Homomorphic Hidings" />
      <CssBreadcrumbs
        configs={[{ label: 'SNARK', link: '/snark' }, { label: 'Part 1: Homomorphic Hidings' }]}
      />
      <HomomorphicHidings />
      <Link href="/snark/chapter2" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 2</p>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </Link>
      <div className="mt-4">
        <Typography variant="h4">References</Typography>
        <Link
          href="https://electriccoin.co/blog/snark-explain/"
          target="_blank"
          className="mt-[1rem]"
        >
          https://electriccoin.co/blog/snark-explain/
        </Link>
      </div>
    </CommonContainer>
  );
}
