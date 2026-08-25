import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  getExhibition,
  exhibitions,
  type Exhibition,
} from "@/data/exhibitions";

export const Route = createFileRoute("/exhibitions/$slug")({
  loader: ({ params }) => {
    const exhibition = getExhibition(params.slug);
    if (!exhibition) throw notFound();
    return { exhibition };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Exhibition not found — Sta" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { exhibition } = loaderData;
    const title = `${exhibition.title} — Sta`;
    return {
      meta: [
        { title },
        { name: "description", content: exhibition.short },
        { property: "og:title", content: title },
        { property: "og:description", content: exhibition.short },
        { property: "og:url", content: `/exhibitions/${exhibition.slug}` },
      ],
      links: [{ rel: "canonical", href: `/exhibitions/${exhibition.slug}` }],
    };
  },
  component: ExhibitionDetail,
});

function ExhibitionDetail() {
  const { exhibition } = Route.useLoaderData() as { exhibition: Exhibition };
  const index = exhibitions.findIndex((e) => e.slug === exhibition.slug);
  const prev = exhibitions[(index - 1 + exhibitions.length) % exhibitions.length];
  const next = exhibitions[(index + 1) % exhibitions.length];

  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-32 pb-6">
        <Link
          to="/exhibitions"
          className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-brand-blue"
        >
          ← Exhibitions
        </Link>
      </section>

      <section className="px-6 md:px-10 pb-16 border-b border-ink/10">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
          {exhibition.status === "upcoming" ? "Coming up" : "Past"} ·{" "}
          {exhibition.kind}
        </span>
        <h1 className="font-serif italic text-5xl md:text-8xl leading-[0.95] mt-6 max-w-5xl text-balance">
          {exhibition.title}
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl leading-snug text-ink/70 mt-6 max-w-3xl">
          {exhibition.short}
        </p>
        {exhibition.cover ? (
          <img
            src={exhibition.cover}
            alt={`${exhibition.title} — ${exhibition.venue}`}
            className="w-full mt-12 aspect-[16/9] object-cover bg-neutral-100 outline outline-1 -outline-offset-1 outline-black/5"
          />
        ) : null}
      </section>

      <section className="px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <dl className="md:col-span-4 border-t border-ink/10 divide-y divide-ink/10 font-sans text-sm h-fit">
          <div className="flex py-3">
            <dt className="w-28 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
              Date
            </dt>
            <dd className="flex-1">{exhibition.date}</dd>
          </div>
          <div className="flex py-3">
            <dt className="w-28 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
              Venue
            </dt>
            <dd className="flex-1">{exhibition.venue}</dd>
          </div>
          <div className="flex py-3">
            <dt className="w-28 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
              Location
            </dt>
            <dd className="flex-1">{exhibition.location}</dd>
          </div>
          <div className="flex py-3">
            <dt className="w-28 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
              Type
            </dt>
            <dd className="flex-1">{exhibition.kind}</dd>
          </div>
        </dl>

        <div className="md:col-span-8 space-y-5 font-sans text-base leading-relaxed">
          {exhibition.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-t border-ink/10">
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-ink/10">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
            Photo Gallery
          </span>
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70">
            {String(exhibition.gallery.length).padStart(2, "0")}
          </span>
        </div>
        {exhibition.gallery.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {exhibition.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${exhibition.title} — photo ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover bg-neutral-50 outline outline-1 -outline-offset-1 outline-black/5"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-neutral-100 outline outline-1 -outline-offset-1 outline-black/5 flex items-center justify-center"
              >
                <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70">
                  Photo · to follow
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="px-6 md:px-10 py-16 border-t border-ink/10 flex justify-between items-center gap-6">
        <Link
          to="/exhibitions/$slug"
          params={{ slug: prev.slug }}
          className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-brand-blue"
        >
          ← {prev.title}
        </Link>
        <Link
          to="/exhibitions/$slug"
          params={{ slug: next.slug }}
          className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-brand-blue text-right"
        >
          {next.title} →
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
