import { ReactNode } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { AppArticle } from '../box/ArticleBox';

interface Props {
  id: string;
  children: ReactNode;
}

export default function EquationBox({ id, children }: Props) {
  const equation = useThesisObject(id, 'equation');

  return (
    <AppArticle id={id} isMath className={THESIS_CLASS.equation}>
      <div className="flex items-center justify-center gap-1">
        <div>{children}</div>
        {equation?.index && <div>({equation.index})</div>}
      </div>
    </AppArticle>
  );
}
