import { SvgIconProps } from '@mui/material';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SvgComponent = React.FC<SvgIconProps>;
export type AppHTMLProps<T = unknown> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type DivProps = AppHTMLProps<HTMLDivElement>;

export type ThemeMode = 'dark' | 'light';
