import { ReactNode } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { DivProps, ThesisSameChapterType } from 'src/global';
import { cn } from 'src/lib/utils';

const configs: { [key in ThesisSameChapterType]: { class: string; title: string } } = {
  acknowledgement: { class: THESIS_CLASS.acknowledgement, title: 'Acknowledgement' },
  abstract: { class: THESIS_CLASS.abstract, title: 'Abstract' },
  reference: { class: THESIS_CLASS.reference, title: 'References' },
  appendix: { class: THESIS_CLASS.appendix, title: 'Appendix' },
};

interface Props extends DivProps {
  mode: ThesisSameChapterType;
  children: ReactNode;
}

export default function SameChapterBox({ mode, children, ...props }: Props) {
  const config = configs[mode];

  return (
    <div {...props} id={mode} className={cn(config.class, 'mt-[1rem]', props.className)}>
      <p id={`${mode}_title`} className="text-center text-[20px] font-[600]">
        {config.title}
      </p>
      {children}
    </div>
  );
}
