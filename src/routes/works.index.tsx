import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WorkCard } from "@/components/work-card";
import { works } from "@/data/works";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      { title: "Selected Works — Sta (Emoghene Augusta Ademi)" },
      {
        name: "description",
        content:
          "A survey of paintings and works on paper by Sta (Ademi Emoghene Augusta), 2024 to 2026 — surreal, emotionally charged figures rendered in acrylic and pencil.",
      },
      {
        property: "og:title",
        content: "Selected Works — Sta (Emoghene Augusta Ademi)",
      },
      {
        property: "og:description",
        content:
          "Acrylic on canvas, wood and paper. Emotional documentation as collective witness.",
      },
      { property: "og:url", content: "/works" },
    ],
    links: [{ rel: "canonical", href: "/works" }],
  }),
  component: WorksIndex,
});

function WorksIndex() {
  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-40 pb-16 border-b border-ink/10">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
          Index — 2024 / 2026
        </span>
        <h1 className="font-serif italic text-6xl md:text-9xl leading-[0.9] mt-6 max-w-5xl text-balance">
          Selected Works.
        </h1>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {works.map((w, i) => (
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
      </section>

      <SiteFooter />
    </div>
  );
}