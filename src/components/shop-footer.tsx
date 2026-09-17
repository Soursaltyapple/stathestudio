import { Link } from "@tanstack/react-router";

export function ShopFooter() {
  return (
    <footer className="border-t border-ink/10 px-6 py-12 md:px-10 md:py-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-brand-blue">
            Sta Shop
          </span>
          <p className="mt-4 max-w-sm font-serif text-2xl italic leading-tight text-ink/80">
            Objects, editions, and small pieces from the studio.
          </p>
        </div>
        <nav
          aria-label="Shop information"
          className="flex flex-col gap-2 font-sans text-[10px] uppercase tracking-[0.2em] md:items-end"
        >
          <Link to="/shop/terms" className="hover:text-brand-blue">
            Terms of Service
          </Link>
          <Link to="/shop/returns" className="hover:text-brand-blue">
            Return Policy
          </Link>
          <Link to="/shop/faq" className="hover:text-brand-blue">
            FAQ
          </Link>
        </nav>
      </div>
      <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-5 font-sans text-[10px] uppercase tracking-[0.2em] text-ink/60 md:flex-row md:justify-between">
        <span>Snipcart checkout</span>
        <span>© 2026 Studio Sta</span>
      </div>
    </footer>
  );
}