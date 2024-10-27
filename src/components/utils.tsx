import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function ContrastLink({
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a {...props} className={twMerge('cursor-pointer font-[500] text-black-350', props?.className)}>
      {props?.children}
    </a>
  );
}
