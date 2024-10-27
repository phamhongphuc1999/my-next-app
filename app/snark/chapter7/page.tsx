import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Typography } from '@mui/material';
import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import NextSeo from 'src/components/NextSeo';
import EllipticCurve from 'src/views/snark/EllipticCurve';

export default function Chapter7() {
  return (
    <CommonContainer>
      <NextSeo title="SNARK || Pairings of Elliptic Curves" />
      <CssBreadcrumbs
        configs={[
          { label: 'SNARK', link: '/snark' },
          { label: 'Part 7: Pairings of Elliptic Curves' },
        ]}
      />
      <Link href="/snark/chapter6" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <KeyboardDoubleArrowLeftIcon />
          <p>Part 6</p>
        </div>
      </Link>
      <EllipticCurve />
      <div className="mt-4">
        <Typography variant="h4">References</Typography>
        <Link
          href="https://electriccoin.co/blog/snark-explain7/"
          target="_blank"
          className="mt-[1rem] break-words"
        >
          https://electriccoin.co/blog/snark-explain7/
        </Link>
      </div>
    </CommonContainer>
  );
}
