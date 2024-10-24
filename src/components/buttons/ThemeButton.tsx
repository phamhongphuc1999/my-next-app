'use client';

import { IconButton } from '@mui/material';
import { useAppContext } from 'src/context';
import { MoonIcon, SunIcon } from '../icons';

export default function ThemeButton() {
  const { themeMode, fn } = useAppContext((state) => state.config);

  return (
    <IconButton size="small" onClick={() => fn.switchTheme()}>
      {themeMode === 'dark' ? <SunIcon sx={{ color: '#ffffff' }} /> : <MoonIcon />}
    </IconButton>
  );
}
