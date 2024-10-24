import { DivProps } from 'src/global';
import { twMerge } from 'tailwind-merge';

export default function CommonContainer(params: DivProps) {
  return (
    <div
      {...params}
      className={twMerge('container mx-auto p-[1rem] md:max-w-[80rem] md:p-5', params.className)}
    >
      {params?.children}
    </div>
  );
}
