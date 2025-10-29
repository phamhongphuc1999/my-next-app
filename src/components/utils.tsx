import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { cn } from 'src/lib/utils';

export function ContrastLink({
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a {...props} className={cn('text-black-350 cursor-pointer font-medium', props?.className)}>
      {props?.children}
    </a>
  );
}
