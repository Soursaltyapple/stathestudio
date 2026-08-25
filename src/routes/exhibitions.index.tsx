import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { exhibitions, type Exhibition } from "@/data/exhibitions";

export const Route = createFileRoute("/exhibitions/")({
  head: () => ({
    meta: [
      { title: "Exhibitions — Sta (Emoghene Augusta Ademi)" },
      {
        name: "description",
        content:
          "Exhibitions and open studios by Sta — including the Rongo Artist Residency Open Studio, plus upcoming presentations.",
      },
      {
        property: "og:title",
        content: "Exhibitions — Sta (Emoghene Augusta Ademi)",
      },
      {
        property: "og:description",
        content:
          "Rooms the work has been in — open studios, group presentations and upcoming exhibitions.",
      },
      { property: "og:url", content: "/exhibitions" },
    ],
    links: [{ rel: "canonical", href: "/exhibitions" }],
  }),
  component: Exhibitions,
});

function Row({ e, highlight }: { e: Exhibition; highlight?: boolean }) {
  return (
    <li className="border-b border-ink/10 group hover:bg-brand-yellow/10 transition-colors">
      <Link
        to="/exhibitions/$slug"
        params={{ slug: e.slug }}
        className="flex flex-col md:flex-row py-8 px-2 cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-0.5"
      >
        <div
          className={
            "w-24 shrink-0 font-sans text-[10px] font-medium tracking-[0.24em] uppercase py-2 " +
            (highlight ? "text-brand-blue" : "text-neutral-600")
          }
        >
          {e.year}
        </div>
        <div className="flex-1">
          <h3 className="font-serif italic text-4xl md:text-5xl leading-none transition-all duration-500 md:group-hover:pl-4 group-hover:text-brand-blue">
            {e.title}
          </h3>
          <p className="font-sans text-xs tracking-[0.24em] uppercase text-ink/60 mt-3">
            {e.venue}
          </p>
          {e.cover ? (
            <div className="overflow-hidden mt-5 max-w-md bg-neutral-100 outline outline-1 -outline-offset-1 outline-black/5">
              <img
                src={e.cover}
                alt={`${e.title} — ${e.venue}`}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          ) : null}
        </div>
        <div className="w-24 shrink-0 text-left md:text-right self-start md:self-center mt-3 md:mt-0">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-ink/70">
            {e.kind}
          </span>
          <div className="mt-2 font-sans text-[10px] uppercase tracking-[0.16em] text-brand-blue opacity-0 md:group-hover:opacity-100 transition-opacity">
            View →
          </div>
        </div>
      </Link>
    </li>
  );
}

function Exhibitions() {
  const upcoming = exhibitions.filter((e) => e.status === "upcoming");
  const past = exhibitions.filter((e) => e.status === "past");

  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-40 pb-16 border-b border-ink/10">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
          Exhibitions
        </span>
        <h1 className="font-serif italic text-6xl md:text-9xl leading-[0.9] mt-6 max-w-5xl text-balance">
          Rooms she was briefly in.
        </h1>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="mb-8 flex items-baseline justify-between border-b border-ink/10 pb-4">
          <h2 className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase">
            Past
          </h2>
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-ink/70">
            Documented
          </span>
        </div>
        <ul>
          {past.map((e) => (
            <Row key={e.slug} e={e} />
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="mb-8 flex items-baseline justify-between border-b border-ink/10 pb-4">
          <h2 className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-brand-blue">
            Coming Up
          </h2>
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-ink/70">
            Dates to follow
          </span>
        </div>
        <ul>
          {upcoming.map((e) => (
            <Row key={e.slug} e={e} highlight />
          ))}
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}
