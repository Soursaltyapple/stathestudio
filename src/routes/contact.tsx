import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Information — Alison Vane" },
      {
        name: "description",
        content:
          "Studio, representation, press and inquiries for the practice of Alison Vane.",
      },
      { property: "og:title", content: "Information — Alison Vane" },
      {
        property: "og:description",
        content:
          "Studio address, gallery representation, and press contacts for Alison Vane.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Block({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-ink/10 py-12">
      <div className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue mb-4">
        {label}
      </div>
      <h2 className="font-serif italic text-4xl md:text-5xl leading-none mb-6">
        {title}
      </h2>
      <div className="font-sans text-base leading-relaxed space-y-2 max-w-xl">
        {children}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-background text-ink min-h-screen">
      <SiteNav invert />

      <section className="px-6 md:px-10 pt-40 pb-12">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
          Information
        </span>
        <h1 className="font-serif italic text-6xl md:text-9xl leading-[0.9] mt-6 text-balance">
          Write, please.
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-16">
        <Block label="(01) Studio" title="Studio Vane">
          <p>Via dei Capocci, 12</p>
          <p>00184 Roma, IT</p>
          <p className="pt-3">
            <a
              href="mailto:studio@vane.art"
              className="underline decoration-brand-blue underline-offset-4 hover:text-brand-blue"
            >
              studio@vane.art
            </a>
          </p>
        </Block>

        <Block label="(02) Sales &amp; Placement" title="Gallery Representation">
          <p>Gagosian — worldwide</p>
          <p>White Cube — London, Hong Kong</p>
          <p>Art Projects Asia — Tokyo</p>
          <p className="pt-3">
            <a
              href="mailto:sales@vane.art"
              className="underline decoration-brand-blue underline-offset-4 hover:text-brand-blue"
            >
              sales@vane.art
            </a>
          </p>
        </Block>

        <Block label="(03) Press" title="Press & Interviews">
          <p>For press inquiries, review copies, and interviews, please contact:</p>
          <p className="pt-3">
            <a
              href="mailto:press@vane.art"
              className="underline decoration-brand-blue underline-offset-4 hover:text-brand-blue"
            >
              press@vane.art
            </a>
          </p>
        </Block>

        <div className="border-t border-ink/10 pt-16 mt-4 flex flex-col md:flex-row justify-between gap-6">
          <span className="font-display font-extrabold text-6xl md:text-8xl text-brand-yellow leading-none">
            VANE
          </span>
          <p className="font-sans text-xs tracking-[0.24em] uppercase text-ink/50 self-end max-w-xs text-right">
            No unsolicited studio visits, please. Portfolio submissions are not
            accepted.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
