import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://stathestudio.lovable.app";

const publicPaths = [
  "/",
  "/works",
  "/biography",
  "/exhibitions",
  "/community",
  "/contact",
  "/works/ladi-kwali",
  "/works/not-hungry",
  "/works/the-self",
  "/works/is-it-cool-to-worry",
  "/works/awakening-2",
  "/works/elonia",
  "/works/spoons-and-forks",
  "/works/awakening",
  "/works/self-portrait-1",
  "/works/self-portrait-2",
  "/works/eyes",
  "/exhibitions/rongo-artist-residency-open-studio",
  "/exhibitions/the-gravity-of-levity",
  "/exhibitions/weightless-waterlogged",
  "/community/hue-create-childrens-day",
  "/community/arteria",
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = publicPaths
          .map(
            (path) =>
              `  <url>\n    <loc>${escapeXml(`${BASE_URL}${path}`)}</loc>\n  </url>`,
          )
          .join("\n");
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          urls,
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});