import { DetailedHTMLProps, HTMLAttributes, SVGProps } from 'react';

export type AppHTMLProps<T = unknown> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type DivProps = AppHTMLProps<HTMLDivElement>;
export type AppSvgProps = SVGProps<SVGSVGElement>;

export type ThemeMode = 'dark' | 'light';
