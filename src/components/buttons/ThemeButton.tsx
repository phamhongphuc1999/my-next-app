'use client';

import { useAppContext } from 'src/context';
import { MoonIcon, SunIcon } from '../icons';
import IconButton from './IconButton';

export default function ThemeButton() {
  const { themeMode, fn } = useAppContext((state) => state.config);

  return (
    <IconButton className="h-[30px] w-[30px]" onClick={() => fn.switchTheme()}>
      {themeMode === 'dark' ? <SunIcon style={{ color: '#ffffff' }} /> : <MoonIcon />}
    </IconButton>
  );
}
