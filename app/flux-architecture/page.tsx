import { Metadata } from 'next';
import Link from 'next/link';
import TopicHeader from 'src/components/TopicHeader';
import FluxArchitecturePage from 'src/views/flux-architecture-page';

export const metadata: Metadata = {
  title: 'Flux architecture',
};

export default function FluxArchitecture() {
  return (
    <div className="container">
      <TopicHeader
        breadcrumbProps={{
          configs: [{ label: 'Home', link: '/' }, { label: 'Flux architecture' }],
        }}
        tabProps={{ index: 4 }}
      />
      <FluxArchitecturePage />
      <div>
        <p className="text-[20px]">References</p>
        <Link
          href="https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/"
          target="_blank"
          className="mt-4 wrap-break-word"
        >
          https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/
        </Link>
      </div>
    </div>
  );
}
