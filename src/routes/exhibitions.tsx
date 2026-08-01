import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Exhibitions — Alison Vane" },
      {
        name: "description",
        content:
          "Solo and group exhibitions of Alison Vane, past and upcoming, from 2019 to 2026.",
      },
      { property: "og:title", content: "Exhibitions — Alison Vane" },
      {
        property: "og:description",
        content:
          "Solo and group exhibitions at Gagosian, White Cube, Palais de Tokyo, Tate Modern, and more.",
      },
      { property: "og:url", content: "/exhibitions" },
    ],
    links: [{ rel: "canonical", href: "/exhibitions" }],
  }),
  component: Exhibitions,
});

const upcoming = [
  {
    year: "2026",
    title: "The Gravity of Levity",
    venue: "Gagosian, New York, NY",
    kind: "Solo",
  },
  {
    year: "2026",
    title: "Weightless / Waterlogged",
    venue: "UCCA, Beijing",
    kind: "Group",
  },
];

const past = [
  { year: "2025", title: "Blue Period Redux", venue: "White Cube, London", kind: "Solo" },
  {
    year: "2025",
    title: "Objects (Not) To Be Held",
    venue: "Palais de Tokyo, Paris",
    kind: "Group",
  },
  { year: "2024", title: "Room Temperature", venue: "Fondation Beyeler, Basel", kind: "Solo" },
  { year: "2023", title: "A Small Loud Room", venue: "Centre Pompidou, Paris", kind: "Group" },
  { year: "2022", title: "Letters to No One", venue: "Tate Modern, London", kind: "Solo" },
  {
    year: "2021",
    title: "Fifty-Ninth Venice Biennale",
    venue: "Arsenale, Venice",
    kind: "Group",
  },
  { year: "2019", title: "Studio Openings", venue: "Studio Vane, Rome", kind: "Solo" },
];

function Row({
  year,
  title,
  venue,
  kind,
  highlight,
}: {
  year: string;
  title: string;
  venue: string;
  kind: string;
  highlight?: boolean;
}) {
  return (
    <li className="flex flex-col md:flex-row border-b border-ink/10 py-8 group hover:bg-brand-yellow/10 transition-colors px-2">
      <div
        className={
          "w-24 font-sans text-[10px] font-medium tracking-[0.24em] uppercase py-2 " +
          (highlight ? "text-brand-blue" : "text-neutral-600")
        }
      >
        {year}
      </div>
      <div className="flex-1">
        <h3 className="font-serif italic text-4xl md:text-5xl leading-none group-hover:pl-4 transition-all duration-500">
          {title}
        </h3>
        <p className="font-sans text-xs tracking-[0.24em] uppercase text-ink/60 mt-3">
          {venue}
        </p>
      </div>
      <div className="w-24 text-right self-end md:self-center mt-3 md:mt-0">
        <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-ink/70">
          {kind}
        </span>
      </div>
    </li>
  );
}

function Exhibitions() {
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
          <h2 className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-brand-blue">
            Upcoming
          </h2>
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-ink/70">
            2026 →
          </span>
        </div>
        <ul>
          {upcoming.map((e) => (
            <Row key={e.title} {...e} highlight />
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="mb-8 flex items-baseline justify-between border-b border-ink/10 pb-4">
          <h2 className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase">
            Past
          </h2>
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-ink/70">
            ← 2019
          </span>
        </div>
        <ul>
          {past.map((e) => (
            <Row key={e.title + e.year} {...e} />
          ))}
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}
