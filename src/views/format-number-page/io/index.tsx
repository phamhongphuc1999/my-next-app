'use client';

import { Separator } from 'src/components/shadcn-ui/separator';
import ParseNumPage from './ParseNumPage';
import TrailingZeroPage from './TrailingZeroPage';

export default function IOPage() {
  return (
    <div>
      <ParseNumPage />
      <Separator className="my-2" />
      <TrailingZeroPage />
    </div>
  );
}
