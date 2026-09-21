import { ShoppingBag, UserRound } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function ShopNav() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-ink/10 bg-background/95 px-6 py-5 backdrop-blur md:px-10">
      <div className="flex items-center justify-between gap-6">
        <Link
          to="/"
          className="min-w-0 font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-ink transition-colors hover:text-brand-blue"
          aria-label="Sta the Studio home"
        >
          Sta — Emoghene Augusta Ademi
        </Link>
        <nav aria-label="Shop controls" className="flex shrink-0 items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            className="snipcart-customer-signin h-9 rounded-none px-2 font-sans text-[10px] uppercase tracking-[0.16em] text-ink hover:bg-brand-yellow"
          >
            <UserRound aria-hidden="true" className="mr-2 size-4" />
            <span className="hidden sm:inline">Sign in</span>
            <span className="sr-only">Sign in to your shop account</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="snipcart-checkout h-9 rounded-none border-ink px-3 font-sans text-[10px] uppercase tracking-[0.16em] text-ink hover:bg-brand-yellow"
          >
            <ShoppingBag aria-hidden="true" className="mr-2 size-4" />
            Cart
            <span className="ml-2 border-l border-current/30 pl-2 snipcart-items-count">0</span>
            <span className="sr-only">items in cart</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}