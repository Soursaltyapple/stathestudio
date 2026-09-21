import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { ShopFooter } from "@/components/shop-footer";
import { ShopNav } from "@/components/shop-nav";
import { formatShopPrice, getShopProduct, printPrices, type ShopProduct } from "@/data/shop";

export const Route = createFileRoute("/shop/product/$id")({
  loader: ({ params }) => {
    const product = getShopProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Product not found — Sta Shop" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.product.title} — Sta Shop` },
        { name: "description", content: loaderData.product.description },
        { property: "og:title", content: `${loaderData.product.title} — Sta Shop` },
        { property: "og:description", content: loaderData.product.description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/shop/product/${loaderData.product.id}` }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: ShopProduct };
  const [material, setMaterial] = useState(product.materials?.[0] ?? "");
  const [size, setSize] = useState(product.sizes?.[0] ?? "");
  const [color, setColor] = useState(product.colors?.[0] ?? "");
  const printPrice = useMemo(() => printPrices[material]?.[size] ?? product.price, [material, size, product.price]);
  const isArtwork = product.category === "Artworks";
  const isClothing = product.category === "Clothing";
  const isVariable = isArtwork || isClothing;
  const itemPrice = isArtwork ? printPrice : product.price;

  return (
    <div className="min-h-screen bg-background text-ink">
        <ShopNav />
      <section className="px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <Link to="/shop" className="font-sans text-[10px] uppercase tracking-[0.24em] text-ink/60 hover:text-brand-blue">← Sta Shop</Link>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="flex min-h-[420px] items-center justify-center overflow-hidden bg-neutral-100 md:min-h-[680px]">
              {product.image ? <img src={product.image} alt={product.title} className="h-full max-h-[780px] w-full object-contain" /> : <div className="flex h-full min-h-[420px] w-full flex-col justify-between bg-brand-yellow p-8 text-ink md:min-h-[680px]"><ShirtMark label={product.title} /><span className="font-display text-[25vw] font-extrabold leading-[0.75] md:text-[16rem]">STA</span></div>}
            </div>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-brand-blue">{product.category}</span>
            <h1 className="mt-4 font-serif text-6xl italic leading-[0.9] md:text-8xl">{product.title}</h1>
            <p className="mt-7 font-serif text-2xl italic leading-snug text-ink/70">{product.description}</p>
            <div className="mt-10 border-y border-ink/10 py-5 font-sans text-sm">
              <div className="flex justify-between gap-6"><span className="uppercase tracking-[0.18em] text-ink/60">{isArtwork ? "From" : "Price"}</span><span>{formatShopPrice(itemPrice)}</span></div>
              {isArtwork ? <div className="mt-3 flex justify-between gap-6"><span className="uppercase tracking-[0.18em] text-ink/60">Original</span><span>One available</span></div> : null}
            </div>

            {isArtwork ? <ArtworkOptions material={material} size={size} setMaterial={setMaterial} setSize={setSize} /> : null}
            {isClothing ? <ClothingOptions color={color} size={size} setColor={setColor} setSize={setSize} /> : null}

            <div className="mt-10 flex flex-col gap-4">
              {isArtwork ? <SnipcartButton product={product} label="Buy Original" price={2500} stock={1} tone="original" /> : null}
              {isVariable ? <SnipcartButton product={product} label={isArtwork ? "Add Fine Art Print to Cart" : "Add to Cart"} price={itemPrice} tone="edition" customFields={isArtwork ? { name1: "Material", options1: product.materials?.join("|") ?? "", name2: "Size", options2: product.sizes?.join("|") ?? "" } : { name1: "Size", options1: product.sizes?.join("|") ?? "", name2: "Color", options2: product.colors?.join("|") ?? "" }} /> : null}
              {isArtwork ? <a href={`mailto:stathestudio@gmail.com?subject=Recommission ${product.title}`} className="border border-ink px-4 py-4 text-center font-sans text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white">Recommission this Artwork →</a> : null}
              {!isVariable ? <SnipcartButton product={product} label="Add to Cart" price={product.price} tone="direct" /> : null}
            </div>
            <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.18em] text-ink/60">Secure checkout powered by Snipcart</p>
          </div>
        </div>
      </section>
      <ShopFooter />
    </div>
  );
}

function ArtworkOptions({ material, size, setMaterial, setSize }: { material: string; size: string; setMaterial: (value: string) => void; setSize: (value: string) => void }) {
  return <div className="mt-8 grid grid-cols-2 gap-4"><SelectField label="Print Material" value={material} onChange={setMaterial} options={["Canvas", "Archival Paper"]} /><SelectField label="Size" value={size} onChange={setSize} options={["8x10", "11x14"]} /></div>;
}

function ClothingOptions({ color, size, setColor, setSize }: { color: string; size: string; setColor: (value: string) => void; setSize: (value: string) => void }) {
  return <div className="mt-8 grid grid-cols-2 gap-4"><SelectField label="Size" value={size} onChange={setSize} options={["S", "M", "L", "XL"]} /><SelectField label="Color" value={color} onChange={setColor} options={["Ink", "Paper", "Yellow"]} /></div>;
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return <label className="block"><span className="font-sans text-[10px] uppercase tracking-[0.16em] text-ink/60">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 font-sans text-sm outline-none focus:border-brand-blue">{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

function SnipcartButton({ product, label, price, stock, tone = "direct", customFields }: { product: ShopProduct; label: string; price: number; stock?: number; tone?: "original" | "edition" | "direct"; customFields?: { name1: string; options1: string; name2: string; options2: string } }) {
  const toneClass = tone === "original"
    ? "bg-brand-yellow text-ink hover:bg-ink hover:text-white"
    : tone === "edition"
      ? "bg-brand-blue text-white hover:bg-ink"
      : "bg-ink text-white hover:bg-brand-blue";
  return <Button className={`snipcart-add-item w-full rounded-none py-6 font-sans text-[11px] uppercase tracking-[0.2em] ${toneClass}`} data-item-id={product.id} data-item-name={product.title} data-item-price={price} data-item-url={`/shop/product/${product.id}`} data-item-description={product.description} data-item-image={product.image} data-item-stock={stock} data-item-custom1-name={customFields?.name1} data-item-custom1-options={customFields?.options1} data-item-custom2-name={customFields?.name2} data-item-custom2-options={customFields?.options2}>{label} ↗</Button>;
}

function ShirtMark({ label }: { label: string }) {
  return <span className="font-sans text-[10px] font-medium uppercase tracking-[0.24em]">{label} / STUDIO OBJECT</span>;
}