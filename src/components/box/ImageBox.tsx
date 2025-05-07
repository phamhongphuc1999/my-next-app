/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DivProps } from 'src/global';
import { twMerge } from 'tailwind-merge';

interface Props extends ImageProps {
  title: string;
  divProps?: DivProps;
  pProps?: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
  mode?: 'center' | 'start';
}

export default function ImageBox({ title, divProps, pProps, mode, ...props }: Props) {
  const realMode = mode == 'start' ? 'start' : 'center';

  return (
    <div
      {...divProps}
      className={twMerge(
        'mt-[1rem] flex flex-col',
        realMode == 'center' && 'items-center',
        divProps?.className
      )}
    >
      <Image
        {...props}
        className={twMerge('h-auto w-[80%] sm:w-[60%] md:w-[40%]', props.className)}
      />
      <p {...pProps} className={twMerge('text-[14px]', pProps?.className)}>
        {title}
      </p>
    </div>
  );
}
