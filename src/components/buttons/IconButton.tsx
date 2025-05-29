import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';

export default function IconButton(props: DivProps) {
  return (
    <div
      {...props}
      className={cn(
        'cursor-pointer rounded-[50%] p-[5px] hover:bg-[#0000000f] dark:hover:bg-[#ffffff0f]',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
