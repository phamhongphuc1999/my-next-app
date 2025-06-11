import { ComponentProps } from 'react';

export type DivProps = ComponentProps<'div'>;
export type AppSvgProps = ComponentProps<'svg'>;

export type ThemeMode = 'dark' | 'light';
export type TabType =
  | 'all'
  | 'frontend'
  | 'zero-knowledge'
  | 'javascript'
  | 'state-management'
  | 'architecture'
  | 'seo'
  | 'elliptic-curve'
  | 'account-abstraction';

export type TabItemType = { id: TabType; title: string };
export type TabListType = { [id in TabType]: TabItemType };

export type TopicType = { id: string; title: string; tabs: Array<TabType>; link: string };

export type ThesisSameChapterType = 'acknowledgement' | 'abstract' | 'reference';

export type ThesisObjectModeType =
  | ThesisSameChapterType
  | 'chapter'
  | 'section'
  | 'subsection'
  | 'figure'
  | 'equation'
  | 'cite';
export type ThesisObjectType = { id: string; title: string; index: number | string };
export type ThesisChapterType = ThesisObjectType;
export type ThesisSectionType = ThesisObjectType;
export type ThesisSubsectionType = ThesisObjectType;
export type ThesisFigureType = ThesisObjectType;
export type ThesisEquationType = Omit<ThesisObjectType, 'title'>;
export type ThesisCiteIndexType = { id: string; index: number | string };
export type ThesisCiteType = {
  id: string;
  author: string;
  title: string;
  journal: string;
  volume?: string;
  number?: string;
  pages?: string;
  year: number;
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
};
