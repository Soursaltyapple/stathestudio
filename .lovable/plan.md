## Design lock

White base, vibrant yellow (#FFD400) and bright blue (#1E4FFF) accents, Bricolage Grotesque (display) + Instrument Serif Italic (titles) + Inter (meta). Full-image hero with the artist's name broken into corners. Composition from the chosen prototype is authoritative — do not substitute components or add sections.

## Routes

- `/` — Home (hero + intro chapter + Selected Works preview + venue marquee + upcoming exhibitions preview + footer)
- `/works` — Full Selected Works index
- `/exhibitions` — Full exhibitions list (upcoming + past)
- `/biography` — Bio / CV
- `/contact` — Representation, press, inquiries

Each route gets its own `head()` with unique title / description / og tags. Nav lives in `__root.tsx` with fixed `mix-blend-difference` treatment matching the prototype.

## Design tokens (src/styles.css)

- `--background: #ffffff`, `--foreground: #0a0a0a`
- `--brand-yellow: #FFD400`, `--brand-blue: #1E4FFF`
- Fonts loaded via `<link>` in `__root.tsx` head (Bricolage Grotesque 800, Instrument Serif italic, Inter 400/500)
- Keyframes: `slide-up`, `marquee` — carried verbatim from prototype
- No shadows, no gradients, no rounded corners beyond default

## Sections to build (composition locked to prototype)

1. **Fixed nav** — artist name left, three links stacked right, `mix-blend-difference`
2. **Hero** — full-bleed generated artwork image, artist name broken into 4 corner glyphs (AL / IS / ON / VANE), yellow/blue alternating, staggered slide-up
3. **Chapter break** — full-bleed yellow band, `(01) Selected Works` label + italic serif headline
4. **Works grid** — 2-column, staggered vertical offset, 2 works on home (4 on `/works`), each with generated image + italic serif title + meta line
5. **Marquee** — bright blue band, uppercase display type, infinite scroll of venue names
6. **Exhibitions list** — year column + italic serif title + venue + status pill, hover shifts title right
7. **Footer** — black band, studio address + representation + oversized yellow VANE mark

## Images

Generate 5 hero/work images via imagegen and import them (replace every `data-lov-image-placeholder`). Prompts from the prototype: banana hero, blue telephone sculpture, yellow chair in pool — extend with 2 more works for `/works`.

## Placeholder rewrite

`src/routes/index.tsx` is the template placeholder — rewrite it to the home page. No sibling route for home.

## Technical notes

- Font `<link>` tags go in `__root.tsx` `head()` (never `@import` in styles.css)
- Marquee + slide-up animations declared as `@utility` in styles.css
- All colors reference semantic tokens; no hardcoded `text-white`/`bg-black`
- Content is static (no Cloud), artist is fictional ("Alison Vane")
