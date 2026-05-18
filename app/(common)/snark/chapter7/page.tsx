import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { LeftArrowIcon } from 'src/components/icons';
import TopicHeader from 'src/components/TopicHeader';
import { ReferenceType } from 'src/global';

const EllipticCurve = dynamic(() => import('src/views/snark/EllipticCurve'), {
  loading: () => (
    <div className="flex min-h-[30vh] items-center justify-center">
      <p className="text-muted-foreground">Loading...</p>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'SNARK | Pairings of Elliptic Curves',
};

export default function Chapter7() {
  return (
    <>
      <TopicHeader
        breadcrumbProps={{
          configs: [
            { label: 'Home', link: '/' },
            { label: 'SNARK', link: '/snark' },
            { label: 'Part 7: Pairings of Elliptic Curves' },
          ],
        }}
        tabProps={{ referenceId: ReferenceType.snark }}
      />
      <Link href="/snark/chapter6" className="inline-block">
        <div className="mt-6 flex cursor-pointer items-center gap-1 border-b text-[18px]">
          <LeftArrowIcon />
          <p className="whitespace-nowrap">Part 6</p>
        </div>
      </Link>
      <EllipticCurve />
      <div className="mt-4">
        <p className="text-[20px]">References</p>
        <Link
          href="https://electriccoin.co/blog/snark-explain7/"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://electriccoin.co/blog/snark-explain7/
        </Link>
      </div>
    </>
  );
}
