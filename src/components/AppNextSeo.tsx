import { Fragment } from 'react';

const Description = '';

export interface AppNextSeoProps {
  title?: string;
  description?: string;
}

export default function AppNextSeo({
  title = 'My Next App',
  description = Description,
}: AppNextSeoProps) {
  return (
    <Fragment>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="ogdescription" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My Next App" />
      <meta name="application-name" content="My Next App" />
    </Fragment>
  );
}
