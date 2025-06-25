'use client';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Redux/Slices/themeSlice';

export default function ThemeToggleButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded border"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
