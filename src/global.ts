import { SvgIconProps } from '@mui/material';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SvgComponent = React.FC<SvgIconProps>;
export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type ThemeMode = 'dark' | 'light';
