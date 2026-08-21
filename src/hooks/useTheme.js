import { useEffect, useState } from 'react';

/**
 * useTheme — manages 'dark' / 'light' with localStorage persistence.
 * Toggles the 'light' class on <html>; dark is the default (no class needed).
 */
export default function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial = stored === 'light' || stored === 'dark' ? stored : 'dark';
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
