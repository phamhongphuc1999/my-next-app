'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ThemeMode } from 'src/global';

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

  function switchTheme() {
    setThemeMode((preValue) => {
      const newTheme = preValue == 'dark' ? 'light' : 'dark';
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
