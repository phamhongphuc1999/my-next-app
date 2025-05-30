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
  | 'elliptic-curve';

export type TabItemType = { id: TabType; title: string };
export type TabListType = { [id in TabType]: TabItemType };

export type TopicType = { id: string; title: string; tabs: Array<TabType>; link: string };

export type ThesisObjectType = 'figure' | 'chapter';
export type ThesisChapterType = { id: string; title: string; index: number };
export type ThesisFigureType = { id: string; title: string; index: number | string };
