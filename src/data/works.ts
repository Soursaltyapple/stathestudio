import ladiKwali from "@/assets/works/ladi-kwali.jpg";
import notHungry from "@/assets/works/not-hungry.jpg";
import theSelf from "@/assets/works/the-self.jpg";
import isItCoolToWorry from "@/assets/works/is-it-cool-to-worry.jpg";
import awakening2 from "@/assets/works/awakening-2.jpg";
import elonia from "@/assets/works/elonia.jpg";
import spoonsAndForks from "@/assets/works/spoons-and-forks.jpg";
import awakening from "@/assets/works/awakening.jpg";
import selfPortrait1 from "@/assets/works/self-portrait-1.jpg";
import selfPortrait2 from "@/assets/works/self-portrait-2.jpg";
import eyes from "@/assets/works/eyes.jpg";

export type Work = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  additionalImages?: string[];
  alt: string;
  short: string;
  description: string[];
  price?: string;
  availability?: "Available" | "Sold" | "On loan" | "Reserved" | "Not for sale";
};

export const works: Work[] = [
  {
    slug: "ladi-kwali",
    title: "Ladi Kwali",
    year: "2025",
    medium: "Acrylic on canvas",
    dimensions: "41cm × 86cm",
    image: ladiKwali,
    alt: "Painting of Ladi Kwali and another artist working at a table",
    short: "Two women, two eras, one table.",
    description: [
      "Two figures share a table, working in silence. On the left, Ladi Kwali grinds clay, her image drawn from the twenty naira note, where she remains one of the only artists and the only woman ever honored on Nigerian currency. Her pottery carried Nigerian craft onto the global stage, work born from repetition and skill rather than institution. On the right, the artist works pigment drawn from Benin City earth, seated in the same light, at the same table, absorbed in her own hands.",
      "The painting places her beside a living artist, working the same soil, if by different name and different material. It is two women occupying one frame across time that should have kept them apart, proof that the lineage Kwali began did not end with her, that new hands are still doing the same essential work: taking raw material from the earth and making it matter. Paying not only homage but continuity.",
    ],
  },
  {
    slug: "not-hungry",
    title: "Not Hungry",
    year: "2026",
    medium: "Acrylic on canvas — Hungry series",
    dimensions: "64cm × 88cm",
    image: notHungry,
    alt: "A figure sitting at a table with a feast, facing the ocean",
    short: "A feast that cannot answer the hunger.",
    description: [
      "A figure sits before an abundant feast yet remains consumed by hunger that food cannot satisfy. This painting explores the crisis of invisible suffering, the mental and emotional starvation that exists even in the presence of material comfort, challenging the assumption that physical provision equals wellbeing.",
    ],
  },
  {
    slug: "the-self",
    title: "The Self",
    year: "2025",
    medium: "Acrylic on canvas",
    dimensions: "41cm × 86cm",
    image: theSelf,
    alt: "A reclining figure with a pot-like head against a landscape, framed in ornate gold",
    short: "Creative chi, reclining.",
    description: [
      "This painting personifies the creative 'chi', the Igbo concept of personal divinity, as a reclining figure. It reclaims creativity as ancestral spiritual practice rather than elite commodity, challenging colonial frameworks that have severed art from its roots as a birthright accessible to all.",
      "This piece also visualizes rebellion and original thought and practice, in arts and beyond, as alluring and attractive.",
    ],
  },
  {
    slug: "is-it-cool-to-worry",
    title: "Is It Cool to Worry?",
    year: "2024",
    medium: "Acrylic paint on wood",
    dimensions: "29cm × 23cm",
    image: isItCoolToWorry,
    alt: "Two cloud-headed figures sit on a bench with flowers in the foreground",
    short: "Small hands holding a whole community upright.",
    description: [
      "Two figures sit together as one seeks reassurance from the other. This painting documents the informal mental health support that exists in communities where professional care is inaccessible — the emotional labor performed daily by mothers, grandmothers, and friends who serve as the only available infrastructure for collective wellbeing.",
      "'Is it cool to worry?' captures the meta-anxiety of those who have been told their struggles are illegitimate, who have internalized the idea that their pain is excessive or undeserving of attention.",
    ],
  },
  {
    slug: "awakening-2",
    title: "Awakening (second edition)",
    year: "2025",
    medium: "Acrylic on canvas — large format remake of Awakening (2024)",
    dimensions: "97cm × 122cm",
    image: awakening2,
    alt: "A figure nestled inside the layers of a red onion",
    short: "Necessary isolation, beginning to unfurl.",
    description: [
      "A figure nestles within the layers of a red onion, exploring what I call 'necessary isolation' — the protective withdrawal that many experience not as choice but as self-preservation in environments that feel unsafe or incapable of holding their authentic selves. The slightly opened layers suggest that transcendence is possible even while the need for boundaries remains.",
      "The shift from the original Awakening (2024) to this second edition reflects growth: from being trapped and withdrawn to beginning to unfurl. This painting asks: How do we create a world where people don't have to hide their core selves to survive?",
    ],
  },
  {
    slug: "elonia",
    title: "Elonia",
    year: "2025",
    medium: "Acrylic on canvas",
    dimensions: "29cm × 23cm",
    image: elonia,
    alt: "A figure in a can, a glowing ethereal figure, and symbolic elements in a landscape",
    short: "The freedom people can no longer accept.",
    description: [
      "This piece explores the psychology of systemic entrapment, what happens when people have been confined so long by poverty, trauma, or oppression that they cannot accept freedom even when offered.",
      "The light represents 'divine alchemy': the capacity to create meaning within suffering without romanticizing it.",
    ],
  },
  {
    slug: "spoons-and-forks",
    title: "Spoons and Forks",
    year: "2025",
    medium: "Acrylic paint on paper",
    dimensions: "29cm × 42cm",
    image: spoonsAndForks,
    alt: "Five elongated hands standing as utensils in a glass container",
    short: "Our own spoons and forks.",
    description: [
      "Five elongated hands stand as utensils in a glass container, a sardonic response to cultural colonialism that demonizes POC practices while commodifying POC aesthetics. This work confronts the hypocrisy of systems that prefer 'POC art' over POC people, collecting our culture while excluding our living, actual selves.",
      "Eating with hands is an ancestral practice across many colored cultures, yet it has been framed as primitive, dirty, or uncivilized by the same Western gaze that eagerly collects 'colored art' for museum walls and auction houses. By literalizing 'our own spoons and forks,' this work reclaims cultural practice with defiant humor.",
    ],
  },
  {
    slug: "awakening",
    title: "Awakening",
    year: "2024",
    medium: "Acrylic on paper",
    dimensions: "42cm × 29cm",
    image: awakening,
    alt: "A figure curled inside an onion surrounded by discarded layers",
    short: "The cost of a survivable self.",
    description: [
      "A figure sits curled within an onion surrounded by discarded layers, exploring the performance of identity as survival strategy. For many navigating hostile environments, authenticity is not safe.",
      "This painting asks: at what cost, and who gets the privilege of living without layers?",
    ],
  },
  {
    slug: "self-portrait-1",
    title: "Self Portrait 1",
    year: "2024",
    medium: "Pencil on paper",
    dimensions: "23cm × 23cm",
    image: selfPortrait1,
    alt: "Pencil drawing of a child's face with hair in knots and sunglasses",
    short: "Looking back at a child who did not know yet.",
    description: [
      "A child's face, eyes wide with curiosity and innocence, unaware of the danger present in the moment this image captures. This self-portrait, recreated from a childhood photograph, explores the temporal rupture of trauma: the moment when harm occurs and the decades spent recovering from it.",
      "This work asks uncomfortable questions: Who is responsible for protecting children when systems fail? What do we owe to those who spend decades healing from childhoods they didn't choose? And how do we break cycles of harm when entire communities are trapped in intergenerational trauma?",
      "This piece stands in for the countless others who look back at their childhood selves with grief, tenderness, and the aching wish that damage could be undone.",
    ],
  },
  {
    slug: "self-portrait-2",
    title: "Self Portrait 2 (opens camera)",
    year: "2024",
    medium: "Digital: oil paint, pencil, charcoal, chalk",
    dimensions: "23cm × 23cm",
    image: selfPortrait2,
    alt: "Digital self-portrait against a blue water-like background",
    short: "The face the front-facing camera keeps finding.",
    description: [
      "Inspired by the accidental activation of phone cameras, this piece reflects on distorted self-perception and digital discomfort. It captures that raw, distorted glimpse of self we rarely intend to see.",
    ],
  },
  {
    slug: "eyes",
    title: "Eyes",
    year: "2024",
    medium: "Pencil on paper",
    dimensions: "42cm × 14cm",
    image: eyes,
    alt: "Close-up pencil drawing of a pair of open, unguarded eyes",
    short: "The moment before the lesson lands.",
    description: [
      "This piece shows a pair of vulnerable, open, almost infatuated eyes caught in a moment of unguarded looking, staring in awe of something. There's an almost unsettling honesty in these eyes, radiating the kind of attention that belongs to people who still allow themselves to be fully affected by the world.",
      "The quiet vulnerability of someone who hasn't yet decided to look away. Society has a way of teaching us that openness is exposure — that to look at something with this much feeling is to make yourself available to be hurt by it. We learn to guard our eyes the same way we guard everything else.",
      "This piece refuses that. It holds the moment before the lesson lands, the calm before the hurt. The naivety that isn't ignorance, the vulnerability that isn't weakness. Just a person, eyes wide, bewitched and still willing to be moved.",
    ],
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
