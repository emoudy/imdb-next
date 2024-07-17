"use client";

import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const dark = "dark";
  const light = "light";

  // To be able to capture the theme from the system, we need to wait for
  // the component to be mounted. Otherwise, the theme will load to the default theme
  // and it could be incorrect if the user is has dark mode enabled on their system.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing until the component is mounted
  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => setTheme(theme === dark ? light : dark)}
      className="text-xl cursor-pointer hover:text-amber-500"
    >
      {resolvedTheme === dark ? <MdDarkMode /> : <MdLightMode />}
    </div>
  );
}
