import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function WorkCard({
  slug,
  src,
  alt,
  title,
  meta,
  offset = false,
  width,
  height,
  thumbnailFit = "cover",
}: {
  slug: string;
  src: string;
  alt: string;
  title: string;
  meta: string;
  offset?: boolean;
  width: number;
  height: number;
  thumbnailFit?: "cover" | "natural";
}) {
  return (
    <div className={offset ? "md:mt-48" : ""}>
      <Link
        to="/works/$slug"
        params={{ slug }}
        className="group block cursor-pointer space-y-6 transition-transform duration-500 ease-out hover:-translate-y-1"
      >
        <div className="overflow-hidden bg-neutral-50 outline outline-1 -outline-offset-1 outline-black/5 transition-shadow duration-500 group-hover:shadow-2xl">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className={
              "w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03] " +
              (thumbnailFit === "natural"
                ? "object-contain"
                : "aspect-[3/4] object-cover")
            }
          />
        </div>
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="font-serif italic text-3xl md:text-4xl leading-none group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          <span className="font-sans text-[10px] tracking-[0.24em] text-neutral-500 uppercase text-right shrink-0">
            {meta}
          </span>
        </div>
      </Link>
      <div className="mt-5 flex justify-end">
        <Button asChild variant="outline" size="sm" className="rounded-none border-ink px-4 font-sans text-[10px] uppercase tracking-[0.2em] hover:bg-brand-yellow hover:text-ink">
          <Link to="/shop/product/$id" params={{ id: `artwork-${slug}` }}>
            Acquire Artwork ↗
          </Link>
        </Button>
      </div>
    </div>
  );
}
