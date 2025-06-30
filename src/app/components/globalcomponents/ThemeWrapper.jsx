// "use client";
// import { useSelector } from "react-redux";

// export default function ThemeWrapper({ children }) {
//   const theme = useSelector((state) => state.theme.theme);

//   return (
//     <html lang="en" className={theme === "dark" ? "dark" : ""}>
//       <body>{children}</body>
//     </html>
//   );
// }


"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ThemeWrapper({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;

    // Clean previous class
    root.classList.remove("dark", "light");

    // Apply current theme
    if (theme === "dark") {
      root.classList.add("dark");
      console.log("Theme set to dark");
    } else {
      root.classList.add("light");
      console.log("Theme set to light");
    }
  }, [theme]);

  return <>{children}</>;
}
