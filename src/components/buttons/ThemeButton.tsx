'use client';

import { useConfigStore } from 'src/states/config.store';
import { MoonIcon, SunIcon } from '../icons';
import IconButton from './IconButton';

export default function ThemeButton() {
  const { switchTheme } = useConfigStore();

  return (
    <IconButton className="h-[30px] w-[30px]" onClick={switchTheme}>
      <SunIcon className="dark:hidden" />
      <MoonIcon className="hidden dark:block" />
    </IconButton>
  );
}
