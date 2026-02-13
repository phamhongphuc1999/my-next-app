'use client';

import { LS } from 'src/configs/constance';

export const ThemeScript = () => {
  const code = `
    (function() {
      try {
        const theme = localStorage.getItem('${LS.THEME}') || 'dark';
        document.body.dataset.theme = theme;
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
};
