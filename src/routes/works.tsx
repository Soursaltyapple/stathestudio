import { createFileRoute } from "@tanstack/react-router";
import workTelephone from "@/assets/work-telephone.jpg";
import workChair from "@/assets/work-chair-pool.jpg";
import workInflatable from "@/assets/work-inflatable.jpg";
import workNeon from "@/assets/work-neon.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WorkCard } from "@/components/work-card";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Selected Works — Alison Vane" },
      {
        name: "description",
        content:
          "A survey of sculpture, photography, and installation works by Alison Vane, 2019 to present.",
      },
      { property: "og:title", content: "Selected Works — Alison Vane" },
      {
        property: "og:description",
        content:
          "Sculpture, photography and installation. Selected works 2019 to present.",
      },
      { property: "og:url", content: "/works" },
    ],
    links: [{ rel: "canonical", href: "/works" }],
  }),
  component: Works,
});

const works = [
  {
    src: workTelephone,
    title: "The Silent Call",
    meta: "2024 · Resin, Enamel",
    alt: "Blue resin telephone melting on marble",
  },
  {
    src: workChair,
    title: "Deep Seating",
    meta: "2023 · C-Print, Ed. of 5",
    alt: "Yellow chair submerged in blue pool",
    offset: true,
  },
  {
    src: workInflatable,
    title: "The Weight of Yellow",
    meta: "2024 · Nylon, Air",
    alt: "Yellow inflatable form pressing against a gallery ceiling",
  },
  {
    src: workNeon,
    title: "Letters to No One",
    meta: "2022 · Neon on Concrete",
    alt: "Blue neon cursive script glowing on a raw concrete wall",
    offset: true,
  },
];

function Works() {
  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-40 pb-16 border-b border-ink/10">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
          Index — 2019 / 2026
        </span>
        <h1 className="font-serif italic text-6xl md:text-9xl leading-[0.9] mt-6 max-w-5xl text-balance">
          Selected Works.
        </h1>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {works.map((w) => (
            <WorkCard
              key={w.title}
              src={w.src}
              alt={w.alt}
              title={w.title}
              meta={w.meta}
              offset={w.offset}
              width={1200}
              height={1600}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
