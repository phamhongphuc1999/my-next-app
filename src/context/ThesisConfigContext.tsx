'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import {
  ThesisChapterType,
  ThesisEquationType,
  ThesisFigureType,
  ThesisObjectModeType,
  ThesisObjectType,
} from 'src/global';

export type ThesisConfigContextType = {
  chapters: { [key: string]: ThesisChapterType };
  figures: { [key: string]: ThesisFigureType };
  equations: { [key: string]: ThesisEquationType };
};

const ThesisConfigContext = createContext<ThesisConfigContextType>({
  chapters: {},
  figures: {},
  equations: {},
});

interface Props {
  id: string;
  children: ReactNode;
}

export default function ThesisConfigProvider({ id, children }: Props) {
  const [chapters, setChapters] = useState<{ [key: string]: ThesisChapterType }>({});
  const [figures, setFigures] = useState<{ [key: string]: ThesisFigureType }>({});
  const [equations, setEquations] = useState<{ [key: string]: ThesisEquationType }>({});

  useEffect(() => {
    const container = document.getElementById(id);
    if (container) {
      const elements = container.querySelectorAll(`.${THESIS_CLASS.chapter}`);
      const chapterResult: { [key: string]: ThesisChapterType } = {};
      const figureResult: { [key: string]: ThesisFigureType } = {};
      const equationResult: { [key: string]: ThesisEquationType } = {};
      let counter = 1;
      for (const element of elements) {
        const id = element.id;
        const titleComponent = element.querySelector(`#${id}_title`);
        const title = titleComponent?.textContent;

        // figure
        const figures = element.querySelectorAll(`.${THESIS_CLASS.figure}`);
        let imgCounter = 1;
        for (const _image of figures) {
          const imageId = _image.id;
          const imgTitleComponent = element.querySelector(`#${imageId}_title`);
          const imgTitle = imgTitleComponent?.textContent;
          figureResult[imageId] = {
            id: imageId,
            title: imgTitle || '',
            index: `${counter}.${imgCounter++}`,
          };
        }
        // end figure

        // equation
        const equations = element.querySelectorAll(`.${THESIS_CLASS.equation}`);
        let equationCounter = 1;
        for (const _equation of equations) {
          const equationId = _equation.id;
          equationResult[equationId] = {
            id: equationId,
            index: `${counter}.${equationCounter++}`,
          };
        }
        // end equation
        chapterResult[id] = { id, title: title || '', index: counter++ };
      }

      setChapters(chapterResult);
      setFigures(figureResult);
      setEquations(equationResult);
    }
  }, [id]);

  const contextData = useMemo<ThesisConfigContextType>(() => {
    return { chapters, figures, equations };
  }, [chapters, figures, equations]);

  return (
    <ThesisConfigContext.Provider value={contextData}>
      <div id={id}>{children}</div>
    </ThesisConfigContext.Provider>
  );
}

export function useThesisConfigContext() {
  return useContext(ThesisConfigContext);
}

export function useThesisChapter(chapterId: string): ThesisChapterType | undefined {
  const state = useThesisConfigContext();
  return state.chapters[chapterId];
}

export function useThesisFigure(imgId: string): ThesisFigureType | undefined {
  const state = useThesisConfigContext();
  return state.figures[imgId];
}

export function useThesisObject(
  id: string,
  mode?: ThesisObjectModeType
): Partial<ThesisObjectType> | undefined {
  const state = useThesisConfigContext();
  return useMemo(() => {
    if (mode == 'chapter') return state.chapters[id];
    else if (mode == 'equation') return state.equations[id];
    return state.figures[id];
  }, [id, mode, state.chapters, state.figures, state.equations]);
}
