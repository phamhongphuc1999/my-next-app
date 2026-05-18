import { ReactNode } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { AppArticle } from '../box/ArticleBox';
import IndexLabel from './IndexLabel';

interface Props {
  id: string;
  children: ReactNode;
}

export default function EquationBox({ id, children }: Props) {
  return (
    <AppArticle id={id} isMath className={THESIS_CLASS.equation}>
      <div className="flex items-center justify-center gap-1">
        <div>{children}</div>
        <IndexLabel id={id} mode="equation" prefix="(" suffix=")" />
      </div>
    </AppArticle>
  );
}
