import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { VenueMarquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";
import { ContactForm } from "@/components/contact-form";
import { works } from "@/data/works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sta — Emoghene Augusta Ademi, Visual Artist" },
      {
        name: "description",
        content:
          "Sta (Ademi Emoghene Augusta) is a visual artist based in Benin City, Nigeria. Surreal, emotionally charged paintings of faceless figures — emotional documentation as collective witness.",
      },
      {
        property: "og:title",
        content: "Sta — Emoghene Augusta Ademi, Visual Artist",
      },
      {
        property: "og:description",
        content:
          "Selected works, exhibitions and studio inquiries. Currently developing the Hungry series.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const heroWork = works.find((w) => w.slug === "not-hungry")!;
  const gridWorks = works.filter((w) => w.slug !== "not-hungry");

  return (
    <div className="bg-background text-ink">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <Link
          to="/works/$slug"
          params={{ slug: heroWork.slug }}
          className="absolute inset-0 block group"
          aria-label={`Open ${heroWork.title}`}
        >
          <img
            src={heroWork.image}
            alt={heroWork.alt}
            width={1600}
            height={2200}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </Link>
        <div className="absolute inset-0 flex flex-col justify-between p-3 md:p-5 pointer-events-none">
          <div className="flex justify-between items-start">
            <span className="font-display font-extrabold text-[22vw] leading-[0.7] text-brand-yellow animate-slide-up [animation-delay:200ms]">
              EM
            </span>
            <span className="font-display font-extrabold text-[22vw] leading-[0.7] text-brand-blue animate-slide-up [animation-delay:400ms]">
              OG
            </span>
          </div>
          <div className="flex justify-between items-end">
            <span className="font-display font-extrabold text-[22vw] leading-[0.7] text-brand-blue animate-slide-up [animation-delay:600ms]">
              HE
            </span>
            <span className="font-display font-extrabold text-[22vw] leading-[0.7] text-brand-yellow animate-slide-up [animation-delay:800ms]">
              NE
            </span>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-white mix-blend-difference">
            Not Hungry, 2026 — Hungry series
          </span>
        </div>
      </section>

      {/* CHAPTER BREAK */}
      <section className="bg-brand-yellow px-6 md:px-10 py-24 md:py-32 flex flex-col md:flex-row items-baseline gap-6 md:gap-12">
        <span className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-ink/50 shrink-0">
          (01) Selected Works
        </span>
        <h2 className="font-serif italic text-5xl md:text-8xl lg:text-9xl text-ink max-w-5xl text-balance leading-[0.95]">
          Emotions read through bodies, not faces.
        </h2>
      </section>

      {/* WORKS GRID — all clickable */}
      <section className="bg-background px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {gridWorks.map((w, i) => (
            <WorkCard
              key={w.slug}
              slug={w.slug}
              src={w.image}
              alt={w.alt}
              title={w.title}
              meta={`${w.year} · ${w.medium.split("—")[0].trim()}`}
              offset={i % 2 === 1}
              width={1200}
              height={1600}
            />
          ))}
        </div>
        <div className="mt-24 flex justify-end">
          <Link
            to="/works"
            className="font-sans text-[11px] tracking-[0.24em] uppercase border-b border-ink pb-1 hover:text-brand-blue hover:border-brand-blue transition-colors"
          >
            Full Index →
          </Link>
        </div>
      </section>


      <VenueMarquee />

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="px-6 md:px-10 py-24 md:py-32 border-t border-ink/10"
      >
        <div className="flex items-baseline justify-between mb-12 border-b border-ink/10 pb-4">
          <span className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-brand-blue">
            (02) Write, please
          </span>
          <Link
            to="/contact"
            className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-ink"
          >
            Full Information →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="font-serif italic text-5xl md:text-7xl leading-[0.95] text-balance">
              Say something honest.
            </h2>
            <p className="font-sans text-sm leading-relaxed text-ink/70 mt-6 max-w-sm">
              Studio inquiries, exhibitions, commissions, press. Messages are
              read personally.
            </p>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
