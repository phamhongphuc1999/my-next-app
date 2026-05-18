import { THESIS_CLASS } from 'src/configs/constance';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';
import CodeBlock, { CodeBlockProps } from '../box/CodeBlock';
import IndexLabel from './IndexLabel';

interface Props extends DivProps {
  id: string;
  title: string;
  code: CodeBlockProps;
}

export default function ProgramBox({ id, title, code, ...props }: Props) {
  return (
    <div
      {...props}
      id={`program_${id}`}
      className={cn(THESIS_CLASS.program, 'mt-4 flex flex-col items-center', props.className)}
    >
      <CodeBlock {...code} />
      <p id={`program_${id}_title`} className="text-[14px]">
        <IndexLabel id={`program_${id}`} mode="program" prefix="Program " suffix=": " />
        {title}
      </p>
    </div>
  );
}
