


"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../service/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3 bg-background text-text">
      <span className="text-xl font-medium ">Dark mode</span>
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
          isDark ? "bg-[#007BFF]" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-whiteFixed transition-transform duration-300 ${
            isDark ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
