'use client';

import { useEffect } from 'react';
import { useConfigStore } from 'src/states/config.store';

export default function EffectLayout() {
  const { theme } = useConfigStore();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.dataset.theme = theme;
      if (theme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <></>;
}
