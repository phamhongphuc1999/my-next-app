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

export default function SectionBox({ id, title, children, ...props }: Props) {
  const section = useThesisObject(`section_${id}`, 'section');

  return (
    <div
      {...props}
      id={`section_${id}`}
      className={cn(THESIS_CLASS.section, 'mt-[1rem]', props.className)}
    >
      <p id={`section_${id}_title`} className="text-[20px] font-[500]">
        {section?.index ? `${section.index} ` : ''}
        {title}
      </p>
      {children}
    </div>
  );
}
