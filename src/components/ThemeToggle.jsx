// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full border border-[#2D2A26]/20 dark:border-[#2D2A26] bg-[#EAE3D9] dark:bg-[#1E1B18] text-[#121110] dark:text-[#FAF6F0] hover:scale-105 transition cursor-pointer"
      title="Cambiar tema"
    >
      {darkMode ? <FiSun className="h-5 w-5 text-[#C85A32]" /> : <FiMoon className="h-5 w-5 text-[#C85A32]" />}
    </button>
  );
}