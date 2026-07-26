export function VenueMarquee() {
  const line =
    "Emotional Documentation · Beautiful World Theory · Faceless Figures · Ancestral Practice · Hungry Series · Benin City · ";
  return (
    <div className="border-y border-ink bg-brand-blue text-white overflow-hidden py-6">
      <div className="marquee-track font-display font-extrabold uppercase text-3xl md:text-4xl tracking-tight">
        <span className="pr-12 shrink-0">{line.repeat(2)}</span>
        <span className="pr-12 shrink-0" aria-hidden>
          {line.repeat(2)}
        </span>
      </div>
    </div>
  );
}
