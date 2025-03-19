'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { LS } from 'src/configs/constance';
import { ThemeMode } from 'src/global';
import { LocalStorage } from 'src/services';

export type ConfigContextType = {
  themeMode: ThemeMode;
  themeLabel: string;
  fn: {
    switchTheme(): void;
  };
};

const ConfigContext = createContext<ConfigContextType>({
  themeMode: 'light',
  themeLabel: 'light',
  fn: {
    switchTheme: () => {},
  },
});

interface Props {
  children: ReactNode;
}

export default function ConfigProvider({ children }: Props) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const theme = LocalStorage.get(LS.THEME);
    if (theme)
      setThemeMode((_) => {
        const _theme = theme as ThemeMode;
        document.body.dataset.theme = _theme;
        return _theme;
      });
  }, []);

  function switchTheme() {
    setThemeMode((preValue) => {
      const newTheme = preValue == 'dark' ? 'light' : 'dark';
      LocalStorage.set(LS.THEME, newTheme);
      document.body.dataset.theme = newTheme;
      return newTheme;
    });
  }

  const contextData = useMemo<ConfigContextType>(() => {
    return {
      themeMode,
      themeLabel: themeMode == 'dark' ? 'dark' : 'light',
      fn: { switchTheme },
    };
  }, [themeMode]);

  return <ConfigContext.Provider value={contextData}>{children}</ConfigContext.Provider>;
}

export function useConfigContext() {
  return useContext(ConfigContext);
}
