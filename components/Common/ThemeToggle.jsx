"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  function toggleTheme() {
    setTheme((current) => current === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-pressed={isDark}
      className="
        relative flex items-center justify-center
        w-10 h-10 rounded-full
        border border-border
        bg-background text-foreground
        transition-colors duration-200 ease-out
        hover:bg-muted hover:text-primary
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
        active:scale-95
      "
    >
      {isDark ? (
        <Sun size={18} weight="fill" aria-hidden="true" />
      ) : (
        <Moon size={18} weight="fill" aria-hidden="true" />
      )}
      <span className="sr-only">
        {isDark ? "Modo oscuro activo" : "Modo claro activo"}
      </span>
    </button>
  );
}
