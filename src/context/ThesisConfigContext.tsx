'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import TableOfContent from 'src/components/Thesis/TableOfContent';
import { ContentType, ThesisObjectModeType, ThesisObjectType } from 'src/global';
import { buildContent } from 'src/services/index-system';

const defaultContent: ContentType = {
  chapters: {},
  sections: {},
  subsections: {},
  figures: {},
  equations: {},
  cites: {},
  programs: {},
};

const ThesisConfigContext = createContext<ContentType>(defaultContent);

interface Props {
  id: string;
  firstLevel: 'chapter' | 'section';
  isTableOfContents?: boolean;
  children: ReactNode;
}

export default function ThesisConfigProvider({
  id,
  firstLevel,
  isTableOfContents = true,
  children,
}: Props) {
  const [state, setState] = useState<ContentType>(defaultContent);

  useEffect(() => {
    const result = buildContent(id, firstLevel);
    if (result) setState(result);
  }, [firstLevel, id]);

  const contextData = useMemo<ContentType>(() => {
    return state;
  }, [state]);

  return (
    <ThesisConfigContext.Provider value={contextData}>
      {isTableOfContents ? (
        <TableOfContent id={id} firstLevel={firstLevel}>
          <div id={id}>{children}</div>
        </TableOfContent>
      ) : (
        <div id={id}>{children}</div>
      )}
    </ThesisConfigContext.Provider>
  );
}

export function useThesisConfigContext() {
  return useContext(ThesisConfigContext);
}

export function useThesisObject<T extends ThesisObjectType>(
  id: string,
  mode?: ThesisObjectModeType
): T | undefined {
  const state = useThesisConfigContext();
  return useMemo(() => {
    if (mode == 'chapter') return state.chapters[id] as T;
    else if (mode == 'section') return state.sections[id] as T;
    else if (mode == 'subsection') return state.subsections[id] as T;
    else if (mode == 'equation') return state.equations[id] as T;
    else if (mode == 'program') return state.programs[id] as T;
    else if (mode == 'cite') return state.cites[id] as T;
    return state.figures[id] as T;
  }, [id, mode, state]);
}
