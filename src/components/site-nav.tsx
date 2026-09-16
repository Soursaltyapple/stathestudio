import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav(_props: { invert?: boolean } = {}) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 pointer-events-none mix-blend-difference text-white">
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
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("sta:open-newsletter"))
              }
              className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase hover:text-brand-yellow transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </nav>
          <button
            type="button"
            aria-label="Open shopping bag"
            title="Open shopping bag"
            className="snipcart-checkout relative flex h-8 w-8 items-center justify-center text-current transition-colors hover:text-brand-yellow"
          >
            <ShoppingBag aria-hidden="true" focusable="false" size={17} strokeWidth={1.5} />
            <span className="snipcart-items-count absolute -right-1 -top-1 min-w-4 text-center font-sans text-[9px] leading-4 text-brand-yellow" />
          </button>
        </div>
      </div>
    </header>
  );
}

