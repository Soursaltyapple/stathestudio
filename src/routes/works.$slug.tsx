import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getWork, works, type Work } from "@/data/works";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const work = getWork(params.slug);
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Work not found — Sta" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { work } = loaderData;
    const title = `${work.title}, ${work.year} — Sta`;
    return {
      meta: [
        { title },
        { name: "description", content: work.short },
        { property: "og:title", content: title },
        { property: "og:description", content: work.short },
        { property: "og:image", content: work.image },
        { name: "twitter:image", content: work.image },
        { property: "og:url", content: `/works/${work.slug}` },
      ],
      links: [{ rel: "canonical", href: `/works/${work.slug}` }],
    };
  },
  component: WorkDetail,
});

function WorkDetail() {
  const { work } = Route.useLoaderData() as { work: Work };
  const index = works.findIndex((w) => w.slug === work.slug);
  const prev = works[(index - 1 + works.length) % works.length];
  const next = works[(index + 1) % works.length];
  const gallery = work.additionalImages ?? [];

  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-32 pb-6">
        <Link
          to="/works"
          className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-brand-blue"
        >
          ← Selected Works
        </Link>
      </section>

      <section className="px-6 md:px-10 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-7">
          <img
            src={work.image}
            alt={work.alt}
            width={1600}
            height={2000}
            className="w-full h-auto object-contain bg-neutral-50 outline outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
        <div className="md:col-span-5 md:pt-8">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
            ({String(index + 1).padStart(2, "0")}) {work.year}
          </span>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            {work.title}
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl leading-snug text-ink/70 mt-6">
            {work.short}
          </p>

          <dl className="mt-10 border-t border-ink/10 divide-y divide-ink/10 font-sans text-sm">
            <div className="flex py-3">
              <dt className="w-32 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
                Medium
              </dt>
              <dd className="flex-1">{work.medium}</dd>
            </div>
            <div className="flex py-3">
              <dt className="w-32 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
                Dimensions
              </dt>
              <dd className="flex-1">{work.dimensions}</dd>
            </div>
            <div className="flex py-3">
              <dt className="w-32 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
                Year
              </dt>
              <dd className="flex-1">{work.year}</dd>
            </div>
            <div className="flex py-3">
              <dt className="w-32 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
                Availability
              </dt>
              <dd className="flex-1">{work.availability ?? "Available"}</dd>
            </div>
            <div className="flex py-3">
              <dt className="w-32 text-[10px] tracking-[0.24em] uppercase text-ink/70 pt-0.5">
                Price
              </dt>
              <dd className="flex-1">{work.price ?? "Price on request"}</dd>
            </div>
          </dl>

          <div className="mt-10 space-y-5 font-sans text-base leading-relaxed">
            {work.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-ink/10">
            <a
              href="mailto:stathestudio@gmail.com?subject=Inquiry — {work.title}"
              className="font-sans text-[11px] tracking-[0.24em] uppercase border-b border-ink pb-1 hover:text-brand-blue hover:border-brand-blue transition-colors"
            >
              Inquire about this work →
            </a>
          </div>
        </div>
      </section>

      {gallery.length > 0 ? (
        <section className="px-6 md:px-10 py-16 border-t border-ink/10">
          <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-ink/10">
            <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
              Additional Views
            </span>
            <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70">
              {String(gallery.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${work.title} — view ${i + 2}`}
                loading="lazy"
                className="w-full h-auto object-cover bg-neutral-50 outline outline-1 -outline-offset-1 outline-black/5"
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="px-6 md:px-10 py-16 border-t border-ink/10 flex justify-between items-center">
        <Link
          to="/works/$slug"
          params={{ slug: prev.slug }}
          className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-brand-blue"
        >
          ← {prev.title}
        </Link>
        <Link
          to="/works/$slug"
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
