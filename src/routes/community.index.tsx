import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { events } from "@/data/events";

export const Route = createFileRoute("/community/")({
  head: () => ({
    meta: [
      { title: "Community Engagements — Sta (Emoghene Augusta Ademi)" },
      {
        name: "description",
        content:
          "Volunteer work and community engagements by Sta — face-painting with HUE CREATE and volunteer artistry with ARTERIA.",
      },
      {
        property: "og:title",
        content: "Community Engagements — Sta (Emoghene Augusta Ademi)",
      },
      {
        property: "og:description",
        content:
          "Where the studio practice meets the street: face-painting for children with HUE CREATE, volunteer artistry with ARTERIA.",
      },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: Community,
});

function Community() {
  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-40 pb-16 border-b border-ink/10">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
          (04) Off the canvas
        </span>
        <h1 className="font-serif italic text-6xl md:text-9xl leading-[0.9] mt-6 max-w-5xl text-balance">
          Community Engagements.
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl leading-snug text-ink/70 mt-8 max-w-3xl">
          Studio practice held in public — hours given to children,
          collectives, and the room around the work.
        </p>
      </section>

      <section className="px-6 md:px-10 py-16">
        <ul className="divide-y divide-ink/10 border-b border-ink/10">
          {events.map((e) => (
            <li key={e.slug}>
              <Link
                to="/community/$slug"
                params={{ slug: e.slug }}
                className="grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 group cursor-pointer transition-all duration-500 ease-out hover:bg-ink/[0.02] hover:-translate-y-0.5 -mx-4 md:-mx-6 px-4 md:px-6"
              >
                <div className="col-span-12 md:col-span-2 font-sans text-[10px] tracking-[0.24em] uppercase text-ink/50 pt-2">
                  {e.year}
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h2 className="font-serif italic text-4xl md:text-6xl leading-[1] transition-transform duration-500 ease-out md:group-hover:translate-x-4 group-hover:text-brand-blue">
                    {e.org}
                  </h2>
                  <p className="font-sans text-sm text-ink/70 mt-3">{e.role}</p>
                  <p className="font-sans text-base leading-relaxed text-ink mt-5 max-w-2xl">
                    {e.short}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right font-sans text-[10px] tracking-[0.24em] uppercase text-ink/50 pt-2">
                  <div className="overflow-hidden mb-4 bg-neutral-100 outline outline-1 -outline-offset-1 outline-black/5">
                    <img
                      src={e.cover}
                      alt={`${e.org} — ${e.title}`}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  {e.location}
                  <div className="mt-2 text-brand-blue opacity-0 md:group-hover:opacity-100 transition-opacity">
                    View →
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/40 mt-10">
          More documentation to follow.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
