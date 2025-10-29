import { Fragment, ReactNode } from 'react';
import { GoogleTagManager } from './GoogleTagManager';

// This allows for easy swapping of analytics providers
type AnalyticsStrategy = 'gtm' | 'ga4' | 'none';

interface Props {
  strategy: AnalyticsStrategy;
  id: string;
  children: ReactNode;
}

export function AnalyticsProvider({ strategy, id, children }: Props) {
  return (
    <Fragment>
      {strategy === 'gtm' && <GoogleTagManager id={id} />}
      {children}
    </Fragment>
  );
}
