import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography — Alison Vane" },
      {
        name: "description",
        content:
          "Alison Vane (b. 1978, Milan) lives and works in Rome. Education, awards, and selected collections.",
      },
      { property: "og:title", content: "Biography — Alison Vane" },
      {
        property: "og:description",
        content:
          "Alison Vane (b. 1978, Milan). Sculpture, photography, installation. Studio in Rome.",
      },
      { property: "og:url", content: "/biography" },
    ],
    links: [{ rel: "canonical", href: "/biography" }],
  }),
  component: Bio,
});

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-ink/10">
      <div className="md:col-span-3 font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-brand-blue">
        {label}
      </div>
      <div className="md:col-span-9 space-y-2 font-sans text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-40 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
            Biography
          </span>
          <h1 className="font-serif italic text-6xl md:text-8xl leading-[0.9] mt-6 text-balance">
            She makes things that keep asking questions after you leave.
          </h1>
        </div>
        <div className="md:col-span-5 md:mt-16">
          <img
            src={portrait}
            alt="Alison Vane in her studio, Rome"
            width={1200}
            height={1504}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/50 mt-3">
            Photo · Marcello Rossi
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <Section label="(01) Practice">
          <p>
            Alison Vane (b. 1978, Milan) works between sculpture, photography and
            installation. Her practice interrogates the small comedy of weight —
            what an object owes to gravity, and what we ask it to pretend.
          </p>
          <p>
            Since 2019 she has lived and worked in Rome, in a former printer's
            workshop in Rione Monti.
          </p>
        </Section>

        <Section label="(02) Education">
          <p>2005 — MFA, Royal College of Art, London</p>
          <p>2002 — BA (Hons), Accademia di Belle Arti, Brera, Milan</p>
        </Section>

        <Section label="(03) Awards">
          <p>2024 — Hugo Boss Prize, shortlist</p>
          <p>2022 — Preis der Nationalgalerie, nominee</p>
          <p>2019 — MAXXI Bulgari Prize, winner</p>
        </Section>

        <Section label="(04) Collections">
          <p>Tate, London — Musée National d'Art Moderne, Paris</p>
          <p>MoMA, New York — Fondazione Prada, Milan</p>
          <p>M+, Hong Kong — Astrup Fearnley, Oslo</p>
        </Section>
      </section>

      <SiteFooter />
    </div>
  );
}
