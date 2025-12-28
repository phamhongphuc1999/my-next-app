import { ComponentProps } from 'react';

export type DivProps = ComponentProps<'div'>;
export type AppSvgProps = ComponentProps<'svg'>;

export type ThemeMode = 'dark' | 'light';
export type TabType =
  | 'all'
  | 'frontend'
  | 'zero-knowledge-proof'
  | 'javascript'
  | 'state-management'
  | 'architecture'
  | 'seo'
  | 'elliptic-curve'
  | 'account-abstraction'
  | 'rubik';

export type TabItemType = { id: TabType; title: string };
export type TabListType = { [id in TabType]: TabItemType };

export type TopicType = { id: string; title: string; tabs: Array<TabType>; link: string };

export type ThesisSameChapterType = 'acknowledgement' | 'abstract' | 'reference' | 'appendix';

export type ThesisObjectModeType =
  | ThesisSameChapterType
  | 'chapter'
  | 'section'
  | 'subsection'
  | 'figure'
  | 'equation'
  | 'cite'
  | 'program'
  | 'table'
  | 'algorithm';
export type ThesisObjectType = { id: string; title: string; index: number | string };
export type ThesisChapterType = ThesisObjectType;
export type ThesisSectionType = ThesisObjectType;
export type ThesisSubsectionType = ThesisObjectType;
export type ThesisFigureType = ThesisObjectType;
export type ThesisEquationType = Omit<ThesisObjectType, 'title'>;
export type ThesisProgramType = ThesisObjectType;
export type ThesisTableType = ThesisObjectType;
export type ThesisAlgorithmType = ThesisObjectType;
export type ThesisAppendixType = ThesisObjectType;
export type ThesisCiteIndexType = { id: string; index: number | string };
export type ThesisCiteType = {
  id: string;
  author: string;
  title: string;
  journal?: string;
  volume?: string;
  number?: string;
  pages?: string;
  year?: number | string;
  DOI?: string;
  keywords?: string;
  url?: string;
};

export type TableOfContentType = Array<{
  id: string;
  title: string;
  index: number | string;
  type: ThesisObjectModeType;
  content: TableOfContentType;
}>;

export type ContentType = {
  chapters: { [key: string]: ThesisChapterType };
  sections: { [key: string]: ThesisSectionType };
  subsections: { [key: string]: ThesisSubsectionType };
  figures: { [key: string]: ThesisFigureType };
  equations: { [key: string]: ThesisEquationType };
  cites: { [key: string]: ThesisCiteIndexType };
  programs: { [key: string]: ThesisProgramType };
  tables: { [key: string]: ThesisTableType };
  algorithms: { [key: string]: ThesisAlgorithmType };
  appendixes: { [key: string]: ThesisAppendixType };
};
