export function WorkCard({
  src,
  alt,
  title,
  meta,
  offset = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  title: string;
  meta: string;
  offset?: boolean;
  width: number;
  height: number;
}) {
  return (
    <div className={"space-y-6 " + (offset ? "md:mt-48" : "")}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="w-full h-auto aspect-[3/4] object-cover bg-neutral-50 outline outline-1 -outline-offset-1 outline-black/5"
      />
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="font-serif italic text-3xl md:text-4xl leading-none">{title}</h3>
        <span className="font-sans text-[10px] tracking-[0.24em] text-neutral-500 uppercase text-right shrink-0">
          {meta}
        </span>
      </div>
    </div>
  );
}
