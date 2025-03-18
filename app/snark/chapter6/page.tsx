import Link from 'next/link';
import AppNextSeo from 'src/components/AppNextSeo';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import Pinocchio from 'src/views/snark/Pinocchio';

export default function Chapter6() {
  return (
    <CommonContainer>
      <AppNextSeo title="SNARK || The Pinocchio Protocol" />
      <CssBreadcrumbs
        configs={[{ label: 'SNARK', link: '/snark' }, { label: 'Part 6: The Pinocchio Protocol' }]}
      />
      <Link href="/snark/chapter5" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <LeftArrowIcon />
          <p>Part 5</p>
        </div>
      </Link>
      <Pinocchio />
      <Link href="/snark/chapter7" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 7</p>
          <RightArrowIcon />
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
