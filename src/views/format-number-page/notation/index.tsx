'use client';

import { Separator } from 'src/components/shadcn-ui/separator';
import Scientific from './scientific';
import Subscript from './subscript';

export default function NotationPage() {
  return (
    <div>
      <Subscript />
      <Separator className="my-2" />
      <Scientific />
    </div>
  );
}
