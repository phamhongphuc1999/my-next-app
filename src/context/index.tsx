'use client';

import { ReactNode } from 'react';
import ConfigProvider, { ConfigContextType, useConfigContext } from './ConfigContext';

export type AppContextType = {
  config: ConfigContextType;
};

export function useAppContext<T = unknown>(selectorFn: (data: AppContextType) => T) {
  const configData = useConfigContext();

  return selectorFn({ config: configData });
}

type Props = {
  children?: ReactNode;
};

export default function AppContextProvider({ children }: Props) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
