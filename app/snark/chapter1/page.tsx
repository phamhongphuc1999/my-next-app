import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import HomomorphicHidings from 'src/views/snark/HomomorphicHidings';

export default function HomomorphicHidingsPage() {
  return (
    <CommonContainer>
      <CssBreadcrumbs
        configs={[{ label: 'SNARK', link: '/snark' }, { label: 'Part 1: Homomorphic Hidings' }]}
      />
      <HomomorphicHidings />
      <Link href="/snark/chapter2" className="inline-block">
        <div className="mt-[1.5rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p>Part 2</p>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </Link>
    </CommonContainer>
  );
}
