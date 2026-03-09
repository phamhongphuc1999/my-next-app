import { ThemeMode } from 'src/global';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ConfigStateType = {
  theme: ThemeMode;
  switchTheme: () => void;
};

export const useConfigStore = create<ConfigStateType>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      switchTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark';
        set({ theme: newTheme });

        if (typeof document !== 'undefined') {
          document.body.dataset.theme = newTheme;
          if (newTheme === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        }
      },
    }),
    { name: 'blog.config.v1' }
  )
);
