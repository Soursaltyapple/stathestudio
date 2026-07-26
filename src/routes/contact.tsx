import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Information — Sta (Emoghene Augusta Ademi)" },
      {
        name: "description",
        content:
          "Studio, inquiries, and press contact for Sta (Ademi Emoghene Augusta), visual artist based in Benin City, Nigeria.",
      },
      {
        property: "og:title",
        content: "Information — Sta (Emoghene Augusta Ademi)",
      },
      {
        property: "og:description",
        content:
          "Studio inquiries, exhibitions, commissions and press for the practice of Sta, based in Benin City, Nigeria.",
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
        <Block label="(01) Studio" title="Studio Sta">
          <p>Benin City, Nigeria</p>
          <p className="pt-3">
            <a
              href="mailto:stathestudio@gmail.com"
              className="underline decoration-brand-blue underline-offset-4 hover:text-brand-blue"
            >
              stathestudio@gmail.com
            </a>
          </p>
        </Block>

        <Block label="(02) Elsewhere" title="Instagram">
          <p>
            <a
              href="https://instagram.com/staisart_studio/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-brand-blue underline-offset-4 hover:text-brand-blue"
            >
              @staisart_studio
            </a>
          </p>
        </Block>

        <Block label="(03) Inquiries" title="Send a message">
          <p>
            For studio inquiries, exhibitions, commissions, and press — the
            form below opens in your mail client.
          </p>
          <div className="pt-6">
            <ContactForm />
          </div>
        </Block>

        <div className="border-t border-ink/10 pt-16 mt-4 flex flex-col md:flex-row justify-between gap-6">
          <span className="font-display font-extrabold text-6xl md:text-8xl text-brand-yellow leading-none">
            STA
          </span>
          <p className="font-sans text-xs tracking-[0.24em] uppercase text-ink/50 self-end max-w-xs text-right">
            Portfolio submissions are not accepted. Please write only about the
            work.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
