'use client';

import { ReactNode } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

interface Props extends DivProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function AppendixBox({ id, title, children, ...props }: Props) {
  const appendix = useThesisObject(`appendix_${id}`, 'appendix');

  return (
    <div
      {...props}
      id={`appendix_${id}`}
      className={cn(THESIS_CLASS.appendix, 'mt-4', props.className)}
    >
      <p id={`appendix_${id}_title`} className="text-center text-[20px] font-semibold uppercase">
        {appendix?.index ? `${appendix.index}. ` : ''}
        {title}
      </p>
      {children}
    </div>
  );
}
