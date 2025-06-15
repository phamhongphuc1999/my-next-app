'use client';

import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';
import CodeBlock, { CodeBlockProps } from '../box/CodeBlock';

interface Props extends DivProps {
  id: string;
  title: string;
  code: CodeBlockProps;
}

export default function ProgramBox({ id, title, code, ...props }: Props) {
  const program = useThesisObject(`program_${id}`, 'program');

  return (
    <div
      {...props}
      id={`program_${id}`}
      className={cn(THESIS_CLASS.program, 'mt-[1rem] flex flex-col items-center', props.className)}
    >
      <CodeBlock {...code} />
      <p id={`program_${id}_title`} className="text-[14px]">
        {program?.index ? `Program ${program.index}: ` : ''}
        {title}
      </p>
    </div>
  );
}
