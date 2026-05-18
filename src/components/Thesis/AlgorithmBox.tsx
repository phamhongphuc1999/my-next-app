import { THESIS_CLASS } from 'src/configs/constance';
import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';
import { AppArticle } from '../box/ArticleBox';
import IndexLabel from './IndexLabel';

interface Props extends DivProps {
  id: string;
  title: string;
  algorithm: string;
}

export default function AlgorithmBox({ id, title, algorithm, ...props }: Props) {
  return (
    <div
      {...props}
      id={`algorithm_${id}`}
      className={cn(THESIS_CLASS.algorithm, 'mt-4 flex flex-col items-center', props.className)}
    >
      <AppArticle isMath>{`\\(${algorithm}\\)`}</AppArticle>
      <p id={`algorithm_${id}_title`} className="text-[14px]">
        <IndexLabel id={`algorithm_${id}`} mode="algorithm" prefix="Algorithm " suffix=". " />
        {title}
      </p>
    </div>
  );
}
