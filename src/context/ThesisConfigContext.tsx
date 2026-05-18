'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
  tables: {},
  algorithms: {},
  appendixes: {},
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
    // Slightly defer DOM query to avoid layout shift
    const timer = requestAnimationFrame(() => {
      const result = buildContent(id, firstLevel);
      if (result) setState(result);
    });
    return () => cancelAnimationFrame(timer);
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

/**
 * Optimized hook that uses individual selectors to minimize re-renders.
 * Each component only re-renders when its specific slice of state changes.
 */
export function useThesisObject<T extends ThesisObjectType>(
  id: string,
  mode?: ThesisObjectModeType
): T | undefined {
  const state = useThesisConfigContext();

  // Select only the relevant slice of state based on mode
  const selector = useCallback(
    (s: ContentType) => {
      if (mode == 'chapter') return s.chapters;
      else if (mode == 'section') return s.sections;
      else if (mode == 'subsection') return s.subsections;
      else if (mode == 'equation') return s.equations;
      else if (mode == 'program') return s.programs;
      else if (mode == 'table') return s.tables;
      else if (mode == 'algorithm') return s.algorithms;
      else if (mode == 'cite') return s.cites;
      else if (mode == 'appendix') return s.appendixes;
      return s.figures;
    },
    [mode]
  );

  const selectedSlice = selector(state);

  // Compare only the specific key ID to prevent re-renders when other keys change
  const prevRef = useRef<T | undefined>(undefined);
  const currentValue = useMemo(() => selectedSlice[id] as T | undefined, [selectedSlice, id]);

  // Only update ref if value actually changed (reference comparison)
  if (currentValue !== prevRef.current) {
    prevRef.current = currentValue;
  }

  return prevRef.current;
}
