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

export default function TableBox({ id, title, children, ...props }: Props) {
  const table = useThesisObject(`table_${id}`, 'table');

  return (
    <div
      {...props}
      id={`table_${id}`}
      className={cn(THESIS_CLASS.table, 'mt-4 flex flex-col items-center', props.className)}
    >
      {children}
      <p id={`table_${id}_title`} className="text-[14px]">
        {table?.index ? `Table ${table.index}. ` : ''}
        {title}
      </p>
    </div>
  );
}
