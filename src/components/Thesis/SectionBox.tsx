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
      className={cn(THESIS_CLASS.section, 'mt-5', props.className)}
    >
      <p id={`section_${id}_title`} className="text-[20px] font-medium">
        {section?.index ? `${section.index} ` : ''}
        {title}
      </p>
      {children}
    </div>
  );
}

export function SubsectionBox({ id, title, children, ...props }: Props) {
  const subsection = useThesisObject(`subsection_${id}`, 'subsection');

  return (
    <div
      {...props}
      id={`subsection_${id}`}
      className={cn(THESIS_CLASS.subsection, 'mt-4', props.className)}
    >
      <p id={`subsection_${id}_title`} className="text-[20px] font-medium">
        {subsection?.index ? `${subsection.index} ` : ''}
        {title}
      </p>
      {children}
    </div>
  );
}
