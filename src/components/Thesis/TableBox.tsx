import { ReactNode } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';
import IndexLabel from './IndexLabel';

interface Props extends DivProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function TableBox({ id, title, children, ...props }: Props) {
  return (
    <div
      {...props}
      id={`table_${id}`}
      className={cn(THESIS_CLASS.table, 'mt-4 flex flex-col items-center', props.className)}
    >
      {children}
      <p id={`table_${id}_title`} className="text-[14px]">
        <IndexLabel id={`table_${id}`} mode="table" prefix="Table " suffix=". " />
        {title}
      </p>
    </div>
  );
}
