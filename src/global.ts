import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type AppHTMLProps<T = unknown> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type DivProps = AppHTMLProps<HTMLDivElement>;

export type ThemeMode = 'dark' | 'light';
