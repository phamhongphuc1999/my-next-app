import Link from 'next/link';
import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import Computation from 'src/views/snark/Computations';

export default function Chapter5() {
  return (
    <CommonContainer>
      <AppNextSeo title="SNARK || From Computations to Polynomials" />
      <CssBreadcrumbs
        configs={[
          { label: 'SNARK', link: '/snark' },
          { label: 'Part 5: From Computations to Polynomials' },
        ]}
      />
      <Link href="/snark/chapter4" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <LeftArrowIcon />
          <p>Part 4</p>
        </div>
      </Link>
      <Computation />
      <Link href="/snark/chapter6" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 6</p>
          <RightArrowIcon />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain5/"
          target="_blank"
          className="mt-[1rem] break-words"
        >
          https://electriccoin.co/blog/snark-explain5/
        </Link>
      </div>
    </CommonContainer>
  );
}
