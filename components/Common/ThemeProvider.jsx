"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "diegoseg:theme";
const THEME_EVENT = "diegoseg:theme-change";

function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw === "light" || raw === "dark" ? raw : null;
  } catch {
    return null;
  }
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme ?? getStoredTheme() ?? getSystemTheme();
}

function getServerThemeSnapshot() {
  return "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function setTheme(value) {
  const next = typeof value === "function" ? value(getThemeSnapshot()) : value;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // La selección sigue funcionando durante esta visita sin almacenamiento.
  }
  applyTheme(next);
  window.dispatchEvent(new Event(THEME_EVENT));
}

function subscribeTheme(onChange) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const syncPreference = () => {
    applyTheme(getStoredTheme() ?? getSystemTheme());
    onChange();
  };
  const onSystemChange = () => {
    if (!getStoredTheme()) syncPreference();
  };
  const onStorage = (event) => {
    if (event.key === STORAGE_KEY || event.key === null) syncPreference();
  };
  media.addEventListener("change", onSystemChange);
  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_EVENT, onChange);
  return () => {
    media.removeEventListener("change", onSystemChange);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_EVENT, onChange);
  };
}

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return ctx;
}
