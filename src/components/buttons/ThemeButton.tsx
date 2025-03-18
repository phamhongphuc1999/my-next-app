'use client';

import { useAppContext } from 'src/context';
import { MoonIcon, SunIcon } from '../icons';

export default function ThemeButton() {
  const { themeMode, fn } = useAppContext((state) => state.config);

  return (
    <div onClick={() => fn.switchTheme()}>{themeMode === 'dark' ? <SunIcon /> : <MoonIcon />}</div>
  );
}
