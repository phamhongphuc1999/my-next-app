import Link from 'next/link';
import { RightArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import HomomorphicHidings from 'src/views/snark/HomomorphicHidings';

export default function Chapter1() {
  return (
    <div className="container">
      <TopicHeader
        seoProps={{ title: 'SNARK | Homomorphic Hidings' }}
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 1: Homomorphic Hidings' },
          ],
        }}
        tabProps={{ index: 0 }}
      />
      <HomomorphicHidings />
      <Link href="/snark/chapter2" className="inline-block">
        <div className="flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <p className="whitespace-nowrap">Part 2</p>
          <RightArrowIcon />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain/"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://electriccoin.co/blog/snark-explain/
        </Link>
      </div>
    </div>
  );
}
