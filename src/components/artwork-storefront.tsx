import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { works } from "@/data/works";

const SAMPLE_PRICES = [
  "2400",
  "3200",
  "2800",
  "1800",
  "4600",
  "1800",
  "1200",
  "1600",
  "900",
  "900",
  "700",
] as const;

const artworkProducts = works.map((work, index) => ({
  id: work.slug,
  title: work.title,
  description: work.short,
  price: SAMPLE_PRICES[index] ?? "900",
  image: work.image,
  alt: work.alt,
  thumbnailFit: work.thumbnailFit,
  detailPath: `/works/${work.slug}` as const,
}));

function ArtworkProductCard({
  product,
  itemUrl,
}: {
  product: (typeof artworkProducts)[number];
  itemUrl: string;
}) {
  return (
    <article className="group flex min-w-0 flex-col">
      <Link
        to={product.detailPath}
        className="block min-w-0 cursor-pointer overflow-hidden bg-neutral-50 outline outline-1 -outline-offset-1 outline-black/5 transition-shadow duration-500 hover:shadow-2xl"
        aria-label={`View ${product.title} details`}
      >
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.alt}
            width={1200}
            height={1600}
            loading="lazy"
            className={
              "h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] " +
              (product.thumbnailFit === "natural"
                ? "object-contain p-4"
                : "object-cover")
            }
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="min-w-0 font-serif text-3xl leading-none italic group-hover:text-brand-blue">
            {product.title}
          </h2>
          <span className="shrink-0 font-sans text-[10px] tracking-[0.16em] text-ink/60">
            ${product.price}
          </span>
        </div>
        <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-ink/65">
          {product.description}
        </p>
        <button
          type="button"
          className="snipcart-add-item mt-6 inline-flex w-full items-center justify-center border border-ink px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-yellow"
          data-item-id={product.id}
          data-item-name={product.title}
          data-item-price={product.price}
          data-item-url={itemUrl}
          data-item-description={product.description}
          data-item-image={product.image}
          data-item-currency="usd"
        >
          Acquire Artwork
        </button>
      </div>
    </article>
  );
}

export function ArtworkStorefront() {
  const [itemUrl, setItemUrl] = useState("");

  useEffect(() => {
    setItemUrl(window.location.href);
  }, []);

  return (
    <div className="grid min-w-0 grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-3 md:gap-y-24">
      {artworkProducts.map((product) => (
        <ArtworkProductCard key={product.id} product={product} itemUrl={itemUrl} />
      ))}
    </div>
  );
}