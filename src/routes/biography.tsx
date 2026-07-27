import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/works/portrait.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/biography")({
  head: () => ({
    meta: [
      { title: "Biography — Sta (Emoghene Augusta Ademi)" },
      {
        name: "description",
        content:
          "Sta (Ademi Emoghene Augusta) — visual artist based in Benin City, Nigeria. Self-taught, trained in History. Faceless figures as emotional documentation.",
      },
      {
        property: "og:title",
        content: "Biography — Sta (Emoghene Augusta Ademi)",
      },
      {
        property: "og:description",
        content:
          "Self-taught visual artist based in Benin City. Emotional documentation and the beautiful world theory.",
      },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
      { property: "og:url", content: "/biography" },
    ],
    links: [{ rel: "canonical", href: "/biography" }],
  }),
  component: Bio,
});

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-ink/10">
      <div className="md:col-span-3 font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-brand-blue">
        {label}
      </div>
      <div className="md:col-span-9 space-y-4 font-sans text-base leading-relaxed">
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
            The body, not the face, carries the truest record.
          </h1>
        </div>
        <div className="md:col-span-5 md:mt-16">
          <img
            src={portrait}
            alt="Sta painting in her studio, Benin City"
            width={1200}
            height={1504}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/50 mt-3">
            Studio · Benin City, Nigeria
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <Section label="(01) Bio">
          <p>
            Sta (Ademi Emoghene Augusta) is a visual artist based in Benin
            City, Nigeria, working in acrylic on canvas, wood, and paper. Her
            practice centers on surreal, emotionally charged imagery featuring
            faceless figures — a deliberate formal choice rooted in her
            conviction that the body, not the face, carries the truest record
            of emotional experience.
          </p>
          <p>
            Through gesture, posture, and symbolic composition, she documents
            the psychological interior of systemic conditions: invisible
            suffering, inherited trauma, the exhausting performance of identity
            as survival strategy.
          </p>
          <p>
            Self-taught and trained in History rather than fine art, Sta
            approaches painting as emotional documentation — personal
            experience reframed as collective evidence. Her work is anchored by
            the "beautiful world theory": the observation that beauty and
            suffering coexist without resolution, and that this tension is not
            a contradiction to escape but a condition to inhabit.
          </p>
          <p>
            She is currently developing a mixed-media body of work exploring
            ancestral creative practice and the democratization of artistic
            materials.
          </p>
        </Section>

        <Section label="(02) Artist Statement">
          <p>
            This body of work uses personal experience as an entry point into
            larger social realities. Each painting documents a specific
            emotional state — hunger beyond food, isolation as
            self-preservation, the exhaustion of performing identity. Alas,
            these are not merely individual experiences. They are symptoms of
            systemic conditions: mental health crises in under-resourced
            communities, cultural erasure, the survival strategies of
            marginalized people, intergenerational trauma.
          </p>
          <p>
            My approach is rooted in "emotional documentation." The figures in
            my paintings are faceless, from my belief that emotions are better
            read through bodies, not just facial expressions — a skill
            developed in environments where facial performance is mandatory but
            bodily truth leaks through. This focus on gesture and posture
            creates space for viewers to project their own experiences onto the
            work, transforming personal documentation into collective witness.
          </p>
          <p>
            Central to this work is the "beautiful world theory": the
            recognition that even in moments of profound suffering, the
            external world remains beautiful. The sky stays clear, flowers
            bloom. This isn't toxic positivity — it's an observation about
            resilience, the human capacity to create beauty, find meaning, and
            survive even when circumstances seem designed to crush us. Despite
            the cruelty of suffering in a world that continues, indifferent to
            individual pain.
          </p>
          <p>
            The surreal visual language reflects how overwhelming emotions
            distort reality. To the anxious person, the world is a series of
            unnameable threats. To the isolated person, they are the only real
            figure in a dreamlike landscape. To the traumatized person, time
            collapses and childhood coexists with adulthood. My paintings
            literalize these subjective experiences, making the invisible
            visible.
          </p>
        </Section>

        <Section label="(03) Current Project — Hungry Series">
          <p>
            <em className="font-serif not-italic">Hungry</em> is an ongoing
            body of work exploring desire, consumption, absence, and the many
            forms of hunger that shape human experience. The project examines
            hunger beyond food, considering emotional, social, spiritual,
            economic, and psychological forms of longing.
          </p>
          <p>
            Drawing from personal observations and experiences, the series
            investigates the ways people seek fulfillment, connection,
            recognition, comfort, and survival. Through portraiture and
            symbolic imagery, the work asks what it means to live with unmet
            needs and how those needs influence identity, relationships, and
            behavior.
          </p>
          <p>
            The series is currently in development and will expand through
            multiple paintings that explore different manifestations of
            hunger, each approaching the subject from a distinct perspective
            while contributing to a larger conversation about desire and human
            vulnerability.
          </p>
        </Section>

        <Section label="(04) Practice">
          <p>Painting — acrylic on canvas, wood, and paper.</p>
          <p>Drawing — pencil on paper.</p>
          <p>Digital works using oil paint, pencil, charcoal, and chalk.</p>
        </Section>
      </section>

      <SiteFooter />
    </div>
  );
}
