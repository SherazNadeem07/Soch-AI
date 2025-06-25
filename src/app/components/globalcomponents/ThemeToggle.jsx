'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xl text-gray-600 dark:text-gray-300 text-primary">Dark Mode</span>

      <button
        onClick={toggleTheme}
        className={`w-12 h-6 flex items-center rounded-full px-1 duration-300 ${
          isDark ? 'bg-[#007bff]' : 'bg-[#DCDCDC]'
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
            isDark ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></div>
      </button>
    </div>
  );
}
