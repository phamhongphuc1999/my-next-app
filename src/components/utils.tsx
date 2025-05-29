import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { cn } from 'src/lib/utils';

export function ContrastLink({
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a {...props} className={cn('cursor-pointer font-[500] text-black-350', props?.className)}>
      {props?.children}
    </a>
  );
}
