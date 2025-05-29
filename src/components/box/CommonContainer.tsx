import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

export default function CommonContainer(params: DivProps) {
  return (
    <div
      {...params}
      className={cn('container mx-auto p-[1rem] md:max-w-[80rem] md:p-5', params.className)}
    >
      {params?.children}
    </div>
  );
}
