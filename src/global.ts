import { DetailedHTMLProps, HTMLAttributes, SVGProps } from 'react';

export type AppHTMLProps<T = unknown> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type DivProps = AppHTMLProps<HTMLDivElement>;
export type AppSvgProps = SVGProps<SVGSVGElement>;

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
