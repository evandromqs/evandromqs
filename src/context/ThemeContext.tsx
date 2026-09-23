import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const isManual = localStorage.getItem('theme_user_choice');
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (isManual && (savedTheme === 'light' || savedTheme === 'dark')) {
        return savedTheme;
      }
      // Detecta automaticamente o tema do aparelho do usuário como padrão
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    // Update meta theme-color tag
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'light' ? '#ffffff' : '#0a0a0a');
    }
  }, [theme]);

  // Listener para acompanhar mudanças do sistema/aparelho automaticamente
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const isManual = localStorage.getItem('theme_user_choice');
      if (!isManual) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', nextTheme);
      localStorage.setItem('theme_user_choice', 'true');
      return nextTheme;
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('theme_user_choice', 'true');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
