'use client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ThemeWrapper() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }, [theme]);

  return null;
}
