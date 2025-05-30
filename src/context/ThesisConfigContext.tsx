'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { ThesisChapterType, ThesisFigureType, ThesisObjectType } from 'src/global';

export type ThesisConfigContextType = {
  chapters: { [key: string]: ThesisChapterType };
  figures: { [key: string]: ThesisFigureType };
};

const ThesisConfigContext = createContext<ThesisConfigContextType>({ chapters: {}, figures: {} });

interface Props {
  id: string;
  children: ReactNode;
}

export default function ThesisConfigProvider({ id, children }: Props) {
  const [chapters, setChapters] = useState<{ [key: string]: ThesisChapterType }>({});
  const [figures, setFigures] = useState<{ [key: string]: ThesisFigureType }>({});

  useEffect(() => {
    const container = document.getElementById(id);
    if (container) {
      const elements = container.querySelectorAll(`.${THESIS_CLASS.chapter}`);
      const chapterResult: { [key: string]: ThesisChapterType } = {};
      const figureResult: { [key: string]: ThesisFigureType } = {};
      let counter = 1;
      for (const element of elements) {
        const id = element.id;
        const titleComponent = element.querySelector(`#${id}_title`);
        const title = titleComponent?.textContent;
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
        chapterResult[id] = { id, title: title || '', index: counter++ };
      }
      setChapters(chapterResult);
      setFigures(figureResult);
    }
  }, [id]);

  const contextData = useMemo<ThesisConfigContextType>(() => {
    return { chapters, figures };
  }, [chapters, figures]);

  return (
    <ThesisConfigContext.Provider value={contextData}>
      <div id={id}>{children}</div>
    </ThesisConfigContext.Provider>
  );
}

export function useThesisConfigContext() {
  return useContext(ThesisConfigContext);
}

export function useThesisChapter(chapterId: string) {
  const state = useThesisConfigContext();
  return state.chapters[chapterId] || { id: '', title: '', index: -1 };
}

export function useThesisFigure(imgId: string) {
  const state = useThesisConfigContext();
  return state.figures[imgId] || { id: '', title: '', index: -1 };
}

export function useThesisObject(id: string, mode?: ThesisObjectType) {
  const state = useThesisConfigContext();
  return useMemo(() => {
    if (mode == 'chapter') return state.chapters[id];
    return state.figures[id];
  }, [id, mode, state.chapters, state.figures]);
}
