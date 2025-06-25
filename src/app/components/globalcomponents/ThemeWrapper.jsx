"use client";
import { useSelector } from "react-redux";

export default function ThemeWrapper({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body>{children}</body>
    </html>
  );
}
