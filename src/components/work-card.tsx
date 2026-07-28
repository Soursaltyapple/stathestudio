import { Link } from "@tanstack/react-router";

export function WorkCard({
  slug,
  src,
  alt,
  title,
  meta,
  offset = false,
  width,
  height,
}: {
  slug: string;
  src: string;
  alt: string;
  title: string;
  meta: string;
  offset?: boolean;
  width: number;
  height: number;
}) {
  return (
    <Link
      to="/works/$slug"
      params={{ slug }}
      className={
        "block group space-y-6 cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-1 " +
        (offset ? "md:mt-48" : "")
      }
    >
      <div className="overflow-hidden bg-neutral-50 outline outline-1 -outline-offset-1 outline-black/5 transition-shadow duration-500 group-hover:shadow-2xl">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
  );
}
