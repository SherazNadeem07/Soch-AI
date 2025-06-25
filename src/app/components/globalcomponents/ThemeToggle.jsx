// src/components/globalcomponents/ThemeToggle.jsx
"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../service/themeSlice";
import ToggleRow from "./ToggleRow";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const isDark = theme === "dark";

  return (
    <ToggleRow
      label="Dark Mode"
      value={isDark}
      onToggle={() => dispatch(toggleTheme())}
    />
  );
}
