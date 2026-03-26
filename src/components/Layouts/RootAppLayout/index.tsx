import { PropsWithChildren } from 'react';
import EffectLayout from './EffectLayout';

export default function RootAppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <EffectLayout />
      {children}
    </>
  );
}
