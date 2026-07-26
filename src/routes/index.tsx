import { createFileRoute, Link } from "@tanstack/react-router";
import heroBanana from "@/assets/hero-banana.jpg";
import workTelephone from "@/assets/work-telephone.jpg";
import workChair from "@/assets/work-chair-pool.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { VenueMarquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alison Vane — Studio" },
      {
        name: "description",
        content:
          "Alison Vane is a Roman contemporary artist working across sculpture, photography, and installation. Selected works, exhibitions, and studio information.",
      },
      { property: "og:title", content: "Alison Vane — Studio" },
      {
        property: "og:description",
        content:
          "Sculpture, photography, installation. New solo exhibition The Gravity of Levity opens Autumn 2026 at Gagosian, New York.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-ink">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <img
          src={heroBanana}
          alt="Installation view: a suspended gilded form beneath a cobalt beam in a white gallery"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-3 md:p-5 pointer-events-none">
          <div className="flex justify-between items-start">
            <span className="font-display font-extrabold text-[22vw] leading-[0.7] text-brand-yellow animate-slide-up [animation-delay:200ms]">
              AL
            </span>
            <span className="font-display font-extrabold text-[22vw] leading-[0.7] text-brand-blue animate-slide-up [animation-delay:400ms]">
              IS
            </span>
          </div>
          <div className="flex justify-between items-end">
            <span className="font-display font-extrabold text-[22vw] leading-[0.7] text-brand-blue animate-slide-up [animation-delay:600ms]">
              ON
            </span>
            <span className="font-display font-extrabold text-[22vw] leading-[0.7] text-brand-yellow animate-slide-up [animation-delay:800ms]">
              VANE
            </span>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-white mix-blend-difference">
            The Gravity of Levity, 2024 — Installation view
          </span>
        </div>
      </section>

      {/* CHAPTER BREAK */}
      <section className="bg-brand-yellow px-6 md:px-10 py-24 md:py-32 flex flex-col md:flex-row items-baseline gap-6 md:gap-12">
        <span className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-ink/50 shrink-0">
          (01) Selected Works
        </span>
        <h2 className="font-serif italic text-5xl md:text-8xl lg:text-9xl text-ink max-w-5xl text-balance leading-[0.95]">
          Objects that demand to be ignored.
        </h2>
      </section>

      {/* WORKS PREVIEW */}
      <section className="bg-background px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <WorkCard
            src={workTelephone}
            alt="The Silent Call, 2024 — blue resin telephone melting on a marble plinth"
            title="The Silent Call"
            meta="2024 · Resin, Enamel"
            width={1200}
            height={1600}
          />
          <WorkCard
            src={workChair}
            alt="Deep Seating, 2023 — yellow chair submerged in a bright blue pool"
            title="Deep Seating"
            meta="2023 · C-Print, Ed. of 5"
            offset
            width={1200}
            height={1600}
          />
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

      {/* EXHIBITIONS PREVIEW */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-baseline justify-between mb-12 border-b border-ink/10 pb-4">
          <span className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-brand-blue">
            (02) Now &amp; Next
          </span>
          <Link
            to="/exhibitions"
            className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-ink"
          >
            All Exhibitions
          </Link>
        </div>

        <ul className="flex flex-col">
          {[
            {
              year: "2026",
              title: "The Gravity of Levity",
              venue: "Gagosian, New York, NY",
              status: "Upcoming",
              highlight: true,
            },
            {
              year: "2025",
              title: "Blue Period Redux",
              venue: "White Cube, London, UK",
              status: "On View",
            },
            {
              year: "2025",
              title: "Objects (Not) To Be Held",
              venue: "Palais de Tokyo, Paris",
              status: "",
            },
          ].map((e) => (
            <li
              key={e.title}
              className="flex flex-col md:flex-row border-b border-ink/10 py-8 group hover:bg-brand-yellow/10 transition-colors px-2"
            >
              <div
                className={
                  "w-32 font-sans text-[10px] font-medium tracking-[0.24em] uppercase py-2 " +
                  (e.highlight ? "text-brand-blue" : "text-neutral-400")
                }
              >
                {e.year}
              </div>
              <div className="flex-1">
                <h4 className="font-serif italic text-4xl md:text-5xl leading-none group-hover:pl-4 transition-all duration-500">
                  {e.title}
                </h4>
                <p className="font-sans text-xs tracking-[0.24em] uppercase text-ink/60 mt-3">
                  {e.venue}
                </p>
              </div>
              <div className="w-32 text-right self-end md:self-center mt-4 md:mt-0">
                {e.status ? (
                  <span
                    className={
                      "font-sans text-[10px] uppercase font-bold border px-2 py-1 tracking-[0.16em] " +
                      (e.highlight
                        ? "text-brand-blue border-brand-blue"
                        : "text-ink border-ink/40")
                    }
                  >
                    {e.status}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}
