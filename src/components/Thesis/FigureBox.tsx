/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

interface Props extends ImageProps {
  id: string;
  title: string;
  divProps?: DivProps;
  pProps?: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
  mode?: 'center' | 'start';
}

export default function FigureBox({ id, title, divProps, pProps, mode, ...props }: Props) {
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
      <p {...pProps} id={`figure_${id}_title`} className={cn('text-[14px]', pProps?.className)}>
        {figure?.index ? `${figure.index}: ` : ''}.{title}
      </p>
    </div>
  );
}
