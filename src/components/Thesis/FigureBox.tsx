/* eslint-disable jsx-a11y/alt-text */
'use client';

import Image, { ImageProps } from 'next/image';
import { ReactNode } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

interface Props extends Omit<ImageProps, 'title'> {
  id: string;
  title: ReactNode;
  divProps?: DivProps;
  containerProps?: DivProps;
  mode?: 'center' | 'start';
}

export default function FigureBox({ id, title, divProps, containerProps, mode, ...props }: Props) {
  const realMode = mode == 'start' ? 'start' : 'center';
  const figure = useThesisObject(`figure_${id}`, 'figure');

  return (
    <div
      {...divProps}
      id={`figure_${id}`}
      className={cn(
        THESIS_CLASS.figure,
        'mt-[1rem] flex flex-col',
        realMode == 'center' && 'items-center',
        divProps?.className
      )}
    >
      <Image {...props} className={cn('h-auto w-[80%] sm:w-[60%] md:w-[40%]', props.className)} />
      <div
        {...containerProps}
        id={`figure_${id}_title`}
        className={cn('flex gap-1 text-[14px]', containerProps?.className)}
      >
        {figure?.index ? `Figure ${figure.index}: ` : ''}
        {title}
      </div>
    </div>
  );
}
