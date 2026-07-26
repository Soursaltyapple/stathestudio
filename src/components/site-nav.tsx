import { Link } from "@tanstack/react-router";

export function SiteNav({ invert = false }: { invert?: boolean }) {
  return (
    <nav
      className={
        "fixed top-0 left-0 w-full z-50 flex justify-between items-start p-6 md:p-8 " +
        (invert
          ? "text-ink"
          : "mix-blend-difference text-white")
      }
    >
      <Link
        to="/"
        className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase"
      >
        Alison Vane
      </Link>
      <div className="flex flex-col gap-1 items-end font-sans text-[10px] font-medium tracking-[0.24em] uppercase">
        <Link to="/works" className="hover:text-brand-yellow transition-colors">
          Selected Works
        </Link>
        <Link to="/exhibitions" className="hover:text-brand-yellow transition-colors">
          Exhibitions
        </Link>
        <Link to="/biography" className="hover:text-brand-yellow transition-colors">
          Biography
        </Link>
        <Link to="/contact" className="hover:text-brand-yellow transition-colors">
          Information
        </Link>
      </div>
    </nav>
  );
}
