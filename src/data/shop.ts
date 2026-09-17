import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Grid2X2,
  Gem,
  Shirt,
  Sparkles,
  SquareDashed,
} from "lucide-react";

import eyes from "@/assets/works/eyes.jpg";
import isItCoolToWorry from "@/assets/works/is-it-cool-to-worry.jpg";
import ladiKwali from "@/assets/works/ladi-kwali.jpg";
import notHungry from "@/assets/works/not-hungry.jpg";
import selfPortrait1 from "@/assets/works/self-portrait-1.jpg";
import { works } from "@/data/works";

export type ShopCategory =
  | "Artworks"
  | "Clothing"
  | "Jewelry"
  | "Tattoo Designs"
  | "Sketches"
  | "4x4 Canvases";

export type ShopProduct = {
  id: string;
  title: string;
  category: ShopCategory;
  image?: string;
  description: string;
  price: number;
  workSlug?: string;
  materials?: string[];
  sizes?: string[];
  colors?: string[];
};

export type ShopCategoryNav = {
  label: ShopCategory;
  icon: LucideIcon;
};

export const shopCategories: ShopCategoryNav[] = [
  { label: "Artworks", icon: Brush },
  { label: "Clothing", icon: Shirt },
  { label: "Jewelry", icon: Gem },
  { label: "Tattoo Designs", icon: Sparkles },
  { label: "Sketches", icon: SquareDashed },
  { label: "4x4 Canvases", icon: Grid2X2 },
];

const artworkProducts: ShopProduct[] = works.map((work) => ({
  id: `artwork-${work.slug}`,
  title: work.title,
  category: "Artworks",
  image: work.image,
  description: work.short,
  price: 2500,
  workSlug: work.slug,
  materials: ["Canvas", "Archival Paper"],
  sizes: ["8x10", "11x14"],
}));

export const shopProducts: ShopProduct[] = [
  ...artworkProducts,
  {
    id: "sta-studio-shirt",
    title: "Sta Studio Shirt",
    category: "Clothing",
    description: "A relaxed studio uniform with room for movement.",
    price: 65,
    materials: ["Cotton"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ink", "Paper", "Yellow"],
  },
  {
    id: "sta-studio-cap",
    title: "Sta Studio Cap",
    category: "Clothing",
    description: "An easy-wearing cap for long days in the studio.",
    price: 42,
    materials: ["Cotton"],
    sizes: ["One size"],
    colors: ["Ink", "Paper"],
  },
  {
    id: "golden-line-earrings",
    title: "Golden Line Earrings",
    category: "Jewelry",
    image: ladiKwali,
    description: "Small sculptural forms inspired by a drawn line.",
    price: 95,
  },
  {
    id: "open-eye-tattoo-sheet",
    title: "Open Eye Tattoo Sheet",
    category: "Tattoo Designs",
    image: eyes,
    description: "A printable tattoo study from the Eyes drawing.",
    price: 35,
  },
  {
    id: "worry-study-print",
    title: "Worry Study",
    category: "Sketches",
    image: isItCoolToWorry,
    description: "A signed study printed from the original drawing.",
    price: 70,
  },
  {
    id: "small-sun-canvas",
    title: "Small Sun Canvas",
    category: "4x4 Canvases",
    image: notHungry,
    description: "A unique small-format canvas for an intimate wall.",
    price: 180,
  },
  {
    id: "portrait-study-canvas",
    title: "Portrait Study Canvas",
    category: "4x4 Canvases",
    image: selfPortrait1,
    description: "A one-of-one 4x4 canvas study from the studio archive.",
    price: 180,
  },
];

export const printPrices: Record<string, Record<string, number>> = {
  Canvas: { "8x10": 120, "11x14": 180 },
  "Archival Paper": { "8x10": 85, "11x14": 125 },
};

export function getShopProduct(id: string) {
  return shopProducts.find((product) => product.id === id);
}

export function formatShopPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}