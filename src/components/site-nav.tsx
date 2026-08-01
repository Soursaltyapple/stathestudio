import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav({ invert = false }: { invert?: boolean }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 pointer-events-none">
      <div className="flex justify-between items-start gap-4">
        <div
          className={
            "pointer-events-auto " +
            (invert ? "text-ink" : "mix-blend-difference text-white")
          }
        >
          <Link
            to="/"
            className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase"
          >
            Sta — Emoghene Augusta Ademi
          </Link>
        </div>

        <div className="flex flex-col items-end gap-3 pointer-events-auto">
          <ThemeToggle />
          <nav
            aria-label="Main"
            className={
              "flex flex-col gap-1 items-end font-sans text-[10px] font-medium tracking-[0.24em] uppercase " +
              (invert ? "text-ink" : "mix-blend-difference text-white")
            }
          >
            <Link to="/works" className="hover:text-brand-yellow transition-colors">
              Selected Works
            </Link>
            <Link
              to="/exhibitions"
              className="hover:text-brand-yellow transition-colors"
            >
              Exhibitions
            </Link>
            <Link
              to="/biography"
              className="hover:text-brand-yellow transition-colors"
            >
              Biography
            </Link>
            <Link
              to="/community"
              className="hover:text-brand-yellow transition-colors"
            >
              Community
            </Link>
            <Link to="/contact" className="hover:text-brand-yellow transition-colors">
              Information
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
