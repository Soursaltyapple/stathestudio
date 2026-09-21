import { createFileRoute, Link } from "@tanstack/react-router";

import { ShopFooter } from "@/components/shop-footer";
import { ShopNav } from "@/components/shop-nav";

export const Route = createFileRoute("/shop/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Sta Shop" },
      { name: "description", content: "Terms of service for Sta Shop purchases." },
      { property: "og:title", content: "Terms of Service — Sta Shop" },
      { property: "og:description", content: "Terms of service for Sta Shop purchases." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ShopTermsPage,
});

function ShopTermsPage() {
  return (
    <ShopInfoShell title="Terms of Service">
      Shop purchases are made directly from Sta the Studio. Product details, availability,
      and delivery timing are confirmed at checkout or by studio correspondence.
    </ShopInfoShell>
  );
}

function ShopInfoShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-ink">
      <ShopNav />
      <section className="px-6 pb-24 pt-40 md:px-10">
        <Link to="/shop" className="font-sans text-[10px] uppercase tracking-[0.24em] text-ink/60 hover:text-brand-blue">
          ← Sta Shop
        </Link>
        <h1 className="mt-12 max-w-4xl font-serif text-7xl italic leading-[0.88] md:text-9xl">{title}</h1>
        <p className="mt-12 max-w-2xl font-serif text-3xl italic leading-snug text-ink/75">{children}</p>
      </section>
      <ShopFooter />
    </div>
  );
}