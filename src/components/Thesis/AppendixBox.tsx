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

export default function AppendixBox({ id, title, children, ...props }: Props) {
  return (
    <div
      {...props}
      id={`appendix_${id}`}
      className={cn(THESIS_CLASS.appendix, 'mt-4', props.className)}
    >
      <p id={`appendix_${id}_title`} className="text-center text-[20px] font-semibold uppercase">
        <IndexLabel id={`appendix_${id}`} mode="appendix" suffix=". " />
        {title}
      </p>
      {children}
    </div>
  );
}
