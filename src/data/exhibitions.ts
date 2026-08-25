import rongo1 from "@/assets/exhibitions/rongo-img_0723.jpg";
import rongo2 from "@/assets/exhibitions/rongo-img_0719.jpg";
import rongo3 from "@/assets/exhibitions/rongo-img_0720.jpg";
import rongo4 from "@/assets/exhibitions/rongo-img_0715.jpg";
import rongo5 from "@/assets/exhibitions/rongo-img_0736.jpg";
import rongo6 from "@/assets/exhibitions/rongo-img_0721.jpg";
import rongo7 from "@/assets/exhibitions/rongo-img_0726.jpg";
import rongo8 from "@/assets/exhibitions/rongo-img_0728.jpg";

export type Exhibition = {
  slug: string;
  year: string;
  title: string;
  venue: string;
  kind: string;
  status: "past" | "upcoming";
  date: string;
  location: string;
  short: string;
  description: string[];
  cover?: string;
  gallery: string[];
};

export const exhibitions: Exhibition[] = [
  {
    slug: "rongo-artist-residency-open-studio",
    year: "2025",
    title: "Rongo Artist Residency Open Studio",
    venue: "Rongo Artist Residency",
    kind: "Group",
    status: "past",
    date: "TBD",
    location: "Benin City, Nigeria",
    short:
      "An open studio closing the residency — paintings on easels, artists talking through the work, and the room full of people it was made for.",
    description: [
      "The Rongo Artist Residency Open Studio opened the working space to the public: canvases still on their easels, murals half-dry on the walls, and each resident artist standing beside their work to talk it through.",
      "Sta presented recent paintings from the Hungry series alongside a walkthrough of the wider body of work, speaking to visitors about emotional documentation, necessary isolation, and the practice of taking material from the earth and making it matter.",
      "The day closed with a group presentation and a portrait of every resident in the studio they had shared.",
    ],
    cover: rongo1,
    gallery: [rongo1, rongo2, rongo3, rongo4, rongo5, rongo6, rongo7, rongo8],
  },
  {
    slug: "the-gravity-of-levity",
    year: "TBD",
    title: "The Gravity of Levity",
    venue: "Venue TBD",
    kind: "Solo",
    status: "upcoming",
    date: "TBD",
    location: "TBD",
    short: "Upcoming — details to follow.",
    description: ["Details to follow."],
    gallery: [],
  },
  {
    slug: "weightless-waterlogged",
    year: "TBD",
    title: "Weightless / Waterlogged",
    venue: "Venue TBD",
    kind: "Group",
    status: "upcoming",
    date: "TBD",
    location: "TBD",
    short: "Upcoming — details to follow.",
    description: ["Details to follow."],
    gallery: [],
  },
];

export function getExhibition(slug: string) {
  return exhibitions.find((e) => e.slug === slug);
}
