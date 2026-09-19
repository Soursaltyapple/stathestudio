import { createFileRoute, Link } from "@tanstack/react-router";

import { ShopFooter } from "@/components/shop-footer";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/shop/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Sta Shop" },
      { name: "description", content: "Frequently asked questions about Sta Shop." },
      { property: "og:title", content: "FAQ — Sta Shop" },
      { property: "og:description", content: "Frequently asked questions about Sta Shop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ShopFaqPage,
});

function ShopFaqPage() {
  return (
    <ShopInfoShell title="FAQ">
      Original works, editions, and studio objects ship from Nigeria. For a custom delivery
      question, a recommission, or an international order, contact stathestudio@gmail.com
      before purchasing.
    </ShopInfoShell>
  );
}

function ShopInfoShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteNav invert />
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