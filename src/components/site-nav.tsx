import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav(_props: { invert?: boolean } = {}) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 24 || currentScrollY < previousScrollY) {
        setVisible(true);
      } else if (currentScrollY > previousScrollY + 8) {
        setVisible(false);
      }
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "transition-colors hover:text-brand-yellow data-[status=active]:text-brand-yellow";

  return (
    <header
      className={
        "fixed left-0 top-0 z-50 w-full p-6 pointer-events-none mix-blend-difference text-white/90 transition-transform duration-500 ease-out md:p-8 " +
        (visible ? "translate-y-0" : "-translate-y-full")
      }
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="pointer-events-auto flex min-w-0 flex-col items-start gap-3">
          <Link
            to="/"
            className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase"
          >
            Sta — Emoghene Augusta Ademi
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-col items-end gap-3 pointer-events-auto shrink-0">
          <nav
            aria-label="Main"
            className="flex flex-col gap-1 items-end text-right font-sans text-[10px] font-medium tracking-[0.24em] uppercase whitespace-nowrap"
          >
            <Link to="/works" className={linkClass}>
              Selected Works
            </Link>
            <Link
              to="/exhibitions"
              className={linkClass}
            >
              Exhibitions
            </Link>
            <Link
              to="/biography"
              className={linkClass}
            >
              Biography
            </Link>
            <Link
              to="/community"
              className={linkClass}
            >
              Community
            </Link>
            <Link
              to="/shop"
              className="mt-2 border border-brand-yellow bg-brand-yellow px-3 py-2 font-display text-[11px] font-extrabold tracking-[0.2em] text-ink transition-transform hover:-translate-x-1 hover:bg-background hover:text-brand-yellow"
            >
              Shop ↗
            </Link>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("sta:open-newsletter"))
              }
              className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase hover:text-brand-yellow transition-colors cursor-pointer"
            >
              Subscribe
            </button>
            <Link to="/shop/faq" className={linkClass}>
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

