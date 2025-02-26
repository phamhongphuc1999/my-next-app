import { Typography } from '@mui/material';
import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import NextSeo from 'src/components/NextSeo';

export default function EventLoop() {
  return (
    <CommonContainer>
      <NextSeo title="Event loop" />
      <CssBreadcrumbs
        configs={[{ label: 'Home', link: '/' }, { label: 'Event loop' }]}
        className="mb-[1rem]"
      />
      <div className="mt-4">
        <Typography variant="h4">References</Typography>
        <Link
          href="https://medium.com/@burak.bburuk/what-is-the-event-loop-in-javascript-and-why-is-it-essential-to-understand-b11af520a28b#:~:text=Event%20loop%20manages%20asynchronous%20operations,other%20code%20to%20continue%20executing."
          target="_blank"
          className="mt-[1rem] break-words"
        >
          https://medium.com/@burak.bburuk/what-is-the-event-loop-in-javascript-and-why-is-it-essential-to-understand-b11af520a28b#:~:text=Event%20loop%20manages%20asynchronous%20operations,other%20code%20to%20continue%20executing.
        </Link>
      </div>
    </CommonContainer>
  );
}
