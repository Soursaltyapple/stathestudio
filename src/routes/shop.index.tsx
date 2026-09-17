import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowLeft, ArrowRight } from "lucide-react";

import { ShopFooter } from "@/components/shop-footer";
import { SiteNav } from "@/components/site-nav";
import {
  formatShopPrice,
  shopCategories,
  shopProducts,
  type ShopCategory,
} from "@/data/shop";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop — Sta the Studio" },
      {
        name: "description",
        content:
          "Acquire original artworks, studio editions, clothing, jewelry, tattoo designs, sketches, and small canvases by Sta.",
      },
      { property: "og:title", content: "Shop — Sta the Studio" },
      {
        property: "og:description",
        content: "Objects, editions, and original works from the studio of Sta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopHome,
});

function ShopHome() {
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState<ShopCategory | "All">("All");
  const slides = [
    { eyebrow: "Original works", title: "Take the feeling home.", image: shopProducts[1].image },
    { eyebrow: "Studio editions", title: "Made for the walls between worlds.", image: shopProducts[0].image },
    { eyebrow: "Small objects", title: "A piece of the practice, held close.", image: shopProducts[shopProducts.length - 1].image },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const products = category === "All"
    ? shopProducts
    : shopProducts.filter((product) => product.category === category);

  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteNav invert />
      <section className="relative min-h-[620px] overflow-hidden bg-ink text-white md:min-h-[720px]">
        {slides.map((currentSlide, index) => (
          <div
            key={currentSlide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === slide ? "opacity-100" : "opacity-0"}`}
            aria-hidden={index !== slide}
          >
            {currentSlide.image ? (
              <img src={currentSlide.image} alt="" className="h-full w-full object-cover opacity-70" />
            ) : null}
            <div className="absolute inset-0 bg-ink/45" />
          </div>
        ))}
        <div className="relative z-10 flex min-h-[620px] flex-col justify-end px-6 pb-12 md:min-h-[720px] md:px-10 md:pb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-brand-yellow">
            {slides[slide].eyebrow} · Sta Shop
          </span>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl italic leading-[0.88] md:text-9xl">
            {slides[slide].title}
          </h1>
          <div className="mt-10 flex items-center justify-between border-t border-white/30 pt-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-white/70">
              {String(slide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button type="button" aria-label="Previous shop highlight" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} className="border border-white/50 p-3 transition-colors hover:bg-brand-yellow hover:text-ink">
                <ArrowLeft aria-hidden="true" className="size-4" />
              </button>
              <button type="button" aria-label="Next shop highlight" onClick={() => setSlide((slide + 1) % slides.length)} className="border border-white/50 p-3 transition-colors hover:bg-brand-yellow hover:text-ink">
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 px-6 py-12 md:px-10 md:py-16">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-brand-blue">Shop by form</span>
            <h2 className="mt-4 font-serif text-5xl italic leading-none md:text-7xl">Find your entry point.</h2>
          </div>
          <ArrowDownRight aria-hidden="true" className="hidden size-10 text-brand-yellow md:block" />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-3 lg:grid-cols-6">
          <button type="button" onClick={() => setCategory("All")} className={`bg-background p-5 text-left transition-colors hover:bg-brand-yellow ${category === "All" ? "bg-brand-yellow" : ""}`}>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em]">All</span>
          </button>
          {shopCategories.map(({ label, icon: Icon }) => (
            <button key={label} type="button" onClick={() => setCategory(label)} className={`group bg-background p-5 text-left transition-colors hover:bg-brand-yellow ${category === label ? "bg-brand-yellow" : ""}`}>
              <Icon aria-hidden="true" className="mb-8 size-6 transition-transform group-hover:rotate-12" />
              <span className="font-sans text-[10px] uppercase tracking-[0.18em]">{label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex items-baseline justify-between border-b border-ink/10 pb-4">
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-brand-blue">The catalogue</span>
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-ink/60">{products.length} objects</span>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} to="/shop/product/$id" params={{ id: product.id }} className="group block">
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-neutral-100 outline outline-1 -outline-offset-1 outline-black/5">
                {product.image ? (
                  <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                ) : (
                  <div className="flex h-full w-full flex-col justify-between bg-brand-yellow p-6 text-ink">
                    <ShirtMark category={product.title.includes("Cap") ? "CAP" : "SHIRT"} />
                    <span className="font-display text-6xl font-extrabold leading-none">STA</span>
                  </div>
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-blue">{product.category}</span>
                  <h3 className="mt-2 font-serif text-3xl italic leading-none transition-colors group-hover:text-brand-blue">{product.title}</h3>
                </div>
                <ArrowDownRight aria-hidden="true" className="mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ShopFooter />
    </div>
  );
}

function ShirtMark({ category }: { category: "CAP" | "SHIRT" }) {
  return <span className="font-sans text-[10px] font-medium uppercase tracking-[0.24em]">{category} / STUDIO OBJECT</span>;
}