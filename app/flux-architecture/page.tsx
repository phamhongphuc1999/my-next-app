import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import TopicHeader from 'src/components/TopicHeader';
import FluxArchitecturePage from 'src/views/flux-architecture-page';

export default function FluxArchitecture() {
  return (
    <CommonContainer>
      <TopicHeader
        seoProps={{ title: 'Flux architecture' }}
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
    </CommonContainer>
  );
}
