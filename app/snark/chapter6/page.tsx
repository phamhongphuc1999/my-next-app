import Link from 'next/link';
import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import Pinocchio from 'src/views/snark/Pinocchio';

export default function Chapter6() {
  return (
    <CommonContainer>
      <AppNextSeo title="SNARK | The Pinocchio Protocol" />
      <CssBreadcrumbs
        configs={[
          { label: 'Home', link: '/' },
          { label: 'SNARK', link: '/snark' },
          { label: 'Part 6: The Pinocchio Protocol' },
        ]}
      />
      <Link href="/snark/chapter5" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <LeftArrowIcon style={{ width: '1rem', height: '1rem' }} />
          <p className="whitespace-nowrap">Part 5</p>
        </div>
      </Link>
      <Pinocchio />
      <Link href="/snark/chapter7" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p className="whitespace-nowrap">Part 7</p>
          <RightArrowIcon style={{ width: '1rem', height: '1rem' }} />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain6/"
          target="_blank"
          className="mt-[1rem] break-words"
        >
          https://electriccoin.co/blog/snark-explain6/
        </Link>
      </div>
    </CommonContainer>
  );
}
