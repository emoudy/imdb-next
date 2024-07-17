"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="text-xl cursor hover:text-amber-500"
    >
      {currentTheme === "dark" ? <MdDarkMode /> : <MdLightMode />}
    </div>
  );
}
