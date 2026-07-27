export type Event = {
  slug: string;
  org: string;
  title: string;
  role: string;
  year: string;
  date: string;
  location: string;
  short: string;
  description: string[];
  gallery: string[];
};

export const events: Event[] = [
  {
    slug: "hue-create-childrens-day",
    org: "HUE CREATE",
    title: "Children's Day — Face Painting",
    role: "Volunteer face-painter",
    year: "TBD",
    date: "Children's Day (TBD)",
    location: "Benin City, Nigeria",
    short:
      "Painted the faces of 100+ children — a slow afternoon of color, patience and small mirrors held up to small faces.",
    description: [
      "Volunteered with HUE CREATE for their Children's Day celebration, hand-painting the faces of over one hundred children across a single afternoon.",
      "The engagement turned a public holiday into an extended studio held in the open — every face a small, temporary canvas, every child a brief collaborator.",
    ],
    gallery: [],
  },
  {
    slug: "arteria",
    org: "ARTERIA",
    title: "Volunteer Artist Programme",
    role: "Volunteer artist",
    year: "TBD",
    date: "TBD",
    location: "TBD",
    short:
      "Studio time and hands contributed to ARTERIA's ongoing volunteer artist programme.",
    description: [
      "Contributed as a volunteer artist within ARTERIA's ongoing programme — offering studio time, hands and quiet collaboration on the collective's projects.",
    ],
    gallery: [],
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
