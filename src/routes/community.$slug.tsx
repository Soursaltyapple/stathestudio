import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getEvent, events, type Event } from "@/data/events";

export const Route = createFileRoute("/community/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Engagement not found — Sta" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { event } = loaderData;
    const title = `${event.org} — ${event.title} — Sta`;
    return {
      meta: [
        { title },
        { name: "description", content: event.short },
        { property: "og:title", content: title },
        { property: "og:description", content: event.short },
        { property: "og:url", content: `/community/${event.slug}` },
      ],
      links: [{ rel: "canonical", href: `/community/${event.slug}` }],
    };
  },
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData() as { event: Event };
  const index = events.findIndex((e) => e.slug === event.slug);
  const prev = events[(index - 1 + events.length) % events.length];
  const next = events[(index + 1) % events.length];

  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-32 pb-6">
        <Link
          to="/community"
          className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-brand-blue"
        >
          ← Community Engagements
        </Link>
      </section>

      <section className="px-6 md:px-10 pb-16 border-b border-ink/10">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
          ({String(index + 1).padStart(2, "0")}) {event.org}
        </span>
        <h1 className="font-serif italic text-5xl md:text-8xl leading-[0.95] mt-6 max-w-5xl text-balance">
          {event.title}
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl leading-snug text-ink/70 mt-6 max-w-3xl">
          {event.short}
        </p>
        <img
          src={event.cover}
          alt={`${event.org} — ${event.title}`}
          className="w-full mt-12 aspect-[16/9] object-cover bg-neutral-100 outline outline-1 -outline-offset-1 outline-black/5"
        />
      </section>

      <section className="px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <dl className="md:col-span-4 border-t border-ink/10 divide-y divide-ink/10 font-sans text-sm h-fit">
          <div className="flex py-3">
            <dt className="w-28 text-[10px] tracking-[0.24em] uppercase text-ink/50 pt-0.5">
              Role
            </dt>
            <dd className="flex-1">{event.role}</dd>
          </div>
          <div className="flex py-3">
            <dt className="w-28 text-[10px] tracking-[0.24em] uppercase text-ink/50 pt-0.5">
              Date
            </dt>
            <dd className="flex-1">{event.date}</dd>
          </div>
          <div className="flex py-3">
            <dt className="w-28 text-[10px] tracking-[0.24em] uppercase text-ink/50 pt-0.5">
              Location
            </dt>
            <dd className="flex-1">{event.location}</dd>
          </div>
          <div className="flex py-3">
            <dt className="w-28 text-[10px] tracking-[0.24em] uppercase text-ink/50 pt-0.5">
              Organisation
            </dt>
            <dd className="flex-1">{event.org}</dd>
          </div>
        </dl>

        <div className="md:col-span-8 space-y-5 font-sans text-base leading-relaxed">
          {event.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-t border-ink/10">
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-ink/10">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
            Photo Gallery
          </span>
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/40">
            {String(event.gallery.length).padStart(2, "0")}
          </span>
        </div>
        {event.gallery.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {event.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${event.title} — photo ${i + 1}`}
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
                <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/40">
                  Photo · to follow
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="px-6 md:px-10 py-16 border-t border-ink/10 flex justify-between items-center">
        <Link
          to="/community/$slug"
          params={{ slug: prev.slug }}
          className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-brand-blue"
        >
          ← {prev.org}
        </Link>
        <Link
          to="/community/$slug"
          params={{ slug: next.slug }}
          className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-brand-blue text-right"
        >
          {next.org} →
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
