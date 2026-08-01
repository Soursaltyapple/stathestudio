import { useEffect, useState } from "react";
import { applyTheme, readStoredTheme, THEMES, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

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
    setAnnounce(`${THEMES.find((t) => t.value === next)?.short} theme enabled`);
  }

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={
        "flex items-center gap-1 border border-current/40 p-0.5 " + className
      }
    >
      {THEMES.map((t) => {
        const active = theme === t.value;
        return (
          <button
            key={t.value}
            type="button"
            onClick={() => choose(t.value)}
            aria-pressed={active}
            aria-label={t.label}
            className={
              "font-sans text-[10px] font-medium tracking-[0.16em] uppercase px-2 py-1.5 min-h-8 transition-colors " +
              (active
                ? "bg-current text-background"
                : "opacity-80 hover:opacity-100 underline-offset-4 hover:underline")
            }
          >
            <span className={active ? "mix-blend-normal" : undefined}>{t.short}</span>
          </button>
        );
      })}
      <span aria-live="polite" className="sr-only">
        {announce}
      </span>
    </div>
  );
}
