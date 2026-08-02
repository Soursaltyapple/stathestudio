import { useEffect, useState } from "react";
import { Sun, Moon, Contrast } from "lucide-react";
import {
  applyTheme,
  readStoredTheme,
  THEMES,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

const THEME_ICONS: Record<Theme, typeof Sun> = {
  original: Sun,
  dark: Moon,
  contrast: Contrast,
};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("original");
  const [announce, setAnnounce] = useState("");

  useEffect(() => {
    const stored = readStoredTheme();
    setTheme(stored);
    applyTheme(stored);
  }, []);

  function choose(next: Theme) {
    setTheme(next);
    applyTheme(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setAnnounce(`${THEMES.find((t) => t.value === next)?.label} enabled`);
  }

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={
        "flex items-center gap-0.5 border border-ink/40 bg-background/90 p-0.5 backdrop-blur-sm " +
        className
      }
    >
      {THEMES.map((t) => {
        const active = theme === t.value;
        const Icon = THEME_ICONS[t.value];
        return (
          <button
            key={t.value}
            type="button"
            onClick={() => choose(t.value)}
            aria-pressed={active}
            className={
              "flex items-center justify-center p-1.5 min-h-8 min-w-8 transition-colors " +
              (active
                ? "bg-brand-yellow text-ink"
                : "text-ink hover:bg-ink/10")
            }
          >
            <span className="sr-only">{t.label}</span>
            <Icon
              aria-hidden="true"
              focusable="false"
              size={16}
              strokeWidth={1.5}
            />
          </button>
        );
      })}
      <span aria-live="polite" className="sr-only">
        {announce}
      </span>
    </div>
  );
}
