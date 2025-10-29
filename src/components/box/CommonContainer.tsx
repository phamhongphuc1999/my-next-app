import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

export default function CommonContainer(params: DivProps) {
  return (
    <div {...params} className={cn('container mx-auto p-4 md:max-w-7xl md:p-5', params.className)}>
      {params?.children}
    </div>
  );
}
