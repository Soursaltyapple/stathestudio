export type Theme = "original" | "dark" | "contrast";

export const THEMES: { value: Theme; label: string; short: string }[] = [
  { value: "original", label: "Original theme", short: "Original" },
  { value: "dark", label: "Dark theme", short: "Dark" },
  { value: "contrast", label: "High contrast theme", short: "Contrast" },
];

export const THEME_STORAGE_KEY = "sta-theme";

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("theme-dark", "theme-contrast");
  if (theme === "dark") root.classList.add("theme-dark");
  if (theme === "contrast") root.classList.add("theme-contrast");
  root.dataset.theme = theme;
  root.style.colorScheme = theme === "original" ? "light" : "dark";
}

export function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "original";
  try {
    const v = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "dark" || v === "contrast" || v === "original") return v;
  } catch {
    /* ignore */
  }
  return "original";
}

/** Inline script that applies the stored theme before paint (no flash). */
export const themeBootstrapScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"){document.documentElement.classList.add("theme-dark")}else if(t==="contrast"){document.documentElement.classList.add("theme-contrast")}if(t){document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t==="original"?"light":"dark"}}catch(e){}})();`;
