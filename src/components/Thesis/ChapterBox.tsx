'use client';

import { ReactNode } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

interface Props extends DivProps {
  id: string;
  title: string;
  prefix?: string;
  children: ReactNode;
}

export default function ChapterBox({ id, title, prefix = 'Chapter', children, ...props }: Props) {
  const chapter = useThesisObject(`chapter_${id}`, 'chapter');

  return (
    <div
      {...props}
      id={`chapter_${id}`}
      className={cn(THESIS_CLASS.chapter, 'mt-4', props.className)}
    >
      <p id={`chapter_${id}_title`} className="text-center text-[20px] font-semibold uppercase">
        {chapter?.index ? `${prefix} ${chapter.index}. ` : ''}
        {title}
      </p>
      {children}
    </div>
  );
}
