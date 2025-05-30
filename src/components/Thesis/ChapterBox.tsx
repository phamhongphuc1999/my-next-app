'use client';

import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisChapter } from 'src/context/ThesisConfigContext';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

interface Props extends DivProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function ChapterBox({ id, title, children, ...props }: Props) {
  const chapter = useThesisChapter(`chapter_${id}`);

  return (
    <div
      {...props}
      id={`chapter_${id}`}
      className={cn(THESIS_CLASS.chapter, 'mt-[1rem]', props.className)}
    >
      <p id={`chapter_${id}_title`} className="text-[20px] font-[500]">
        {chapter.index}. {title}
      </p>
      {children}
    </div>
  );
}
