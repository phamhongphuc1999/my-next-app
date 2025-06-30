import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import { LeftArrowIcon, RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import Pinocchio from 'src/views/snark/Pinocchio';

export default function Chapter6() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'SNARK | The Pinocchio Protocol' }}
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 6: The Pinocchio Protocol' },
          ],
        }}
        tabProps={{ index: 0 }}
      />
      <Link href="/snark/chapter5" className="inline-block">
        <div className="flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <LeftArrowIcon />
          <p className="whitespace-nowrap">Part 5</p>
        </div>
      </Link>
      <Pinocchio />
      <Link href="/snark/chapter7" className="inline-block">
        <div className="mt-[1rem] flex cursor-pointer items-center gap-1 border-b-[1px] text-[18px]">
          <p className="whitespace-nowrap">Part 7</p>
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
