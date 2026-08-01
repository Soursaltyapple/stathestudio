import hueCreate1 from "@/assets/events/hue-create-1.jpg";
import arteria1 from "@/assets/events/arteria-1.jpg";

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
  cover: string;
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
    cover: hueCreate1,
    gallery: [hueCreate1],
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
      "Studio time and hands contributed to ARTERIA's ongoing volunteer artist programme — including a collaborative outdoor mural.",
    description: [
      "Contributed as a volunteer artist within ARTERIA's ongoing programme — offering studio time, hands and quiet collaboration on the collective's projects.",
      "Among them, a large collaborative mural painted outdoors with other artists and passers-by: sunrise, baobab, and figures at work, built panel by panel over the course of the day.",
    ],
    cover: arteria1,
    gallery: [arteria1],
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
