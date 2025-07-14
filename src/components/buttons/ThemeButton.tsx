'use client';

import { switchTheme } from 'src/services';
import { MoonIcon, SunIcon } from '../icons';
import IconButton from './IconButton';

export default function ThemeButton() {
  return (
    <IconButton className="h-[30px] w-[30px]" onClick={switchTheme}>
      <SunIcon className="dark:hidden" />
      <MoonIcon className="hidden dark:block" />
    </IconButton>
  );
}
