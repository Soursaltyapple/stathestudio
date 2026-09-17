import { createFileRoute, Link } from "@tanstack/react-router";
import { ShopFooter } from "@/components/shop-footer";
import { SiteNav } from "@/components/site-nav";

const copy = {
  "/shop/terms": {
    title: "Terms of Service",
    text: "Shop purchases are made directly from Sta the Studio. Product details, availability, and delivery timing are confirmed at checkout or by studio correspondence.",
  },
  "/shop/returns": {
    title: "Return Policy",
    text: "Because many studio objects are made in small editions or are one-of-one works, please contact the studio before purchase if you need clarification about an item. Return eligibility is confirmed case by case.",
  },
  "/shop/faq": {
    title: "FAQ",
    text: "Original works, editions, and studio objects ship from Nigeria. For a custom delivery question, a recommission, or an international order, contact stathestudio@gmail.com before purchasing.",
  },
} as const;

export const Route = createFileRoute("/shop/info")({
  head: () => ({
    meta: [
      { title: "Shop Information — Sta the Studio" },
      { name: "description", content: "Shop information from Sta the Studio." },
      { property: "og:title", content: "Shop Information — Sta the Studio" },
      { property: "og:description", content: "Shop information from Sta the Studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ShopInfo,
});

function ShopInfo() {
  const path = window.location.pathname as keyof typeof copy;
  const page = copy[path] ?? copy["/shop/faq"];
  return <div className="min-h-screen bg-background text-ink"><SiteNav invert /><section className="px-6 pb-24 pt-40 md:px-10"><Link to="/shop" className="font-sans text-[10px] uppercase tracking-[0.24em] text-ink/60 hover:text-brand-blue">← Sta Shop</Link><h1 className="mt-12 max-w-4xl font-serif text-7xl italic leading-[0.88] md:text-9xl">{page.title}</h1><p className="mt-12 max-w-2xl font-serif text-3xl italic leading-snug text-ink/75">{page.text}</p></section><ShopFooter /></div>;
}