## Two changes

### 1. Fix images for external hosting

**Problem.** Every artwork image is stored as a `.asset.json` pointer whose `url` is `/__l5e/assets-v1/{id}/{file}`. That path is only served by Lovable's CDN infrastructure — on an external host (Vercel, Netlify, your own server, etc.) that route returns 404, so every `<img>` breaks.

**Fix.** Pull the binaries back into the repo as real files under `src/assets/works/` and import them through Vite so the bundler fingerprints and copies them into `dist/assets/` at build time. Every deployment target serves them correctly.

Steps:
1. Download each of the 13 images referenced from `src/assets/works/*.asset.json` from their current CDN URLs into `src/assets/works/*.jpg` (real binary files).
2. Delete the `.asset.json` pointer files.
3. Update `src/data/works.ts` to `import ladiKwali from "@/assets/works/ladi-kwali.jpg"` (etc.) — same variable names, no `.url`, just the imported string.
4. Do the same for the studio portrait used on `/biography` and any hero/OG image references.
5. Audit `src/routes/index.tsx`, `src/routes/biography.tsx`, `src/routes/__root.tsx`, and `SiteFooter`/`SiteNav` for any remaining `/__l5e/...` strings or `.asset.json` imports and convert them the same way.
6. Run `bun run build` and confirm the built `dist/` contains hashed image files and no `/__l5e/` URLs remain in the output HTML/JS.

Result: images resolve on any static host with no code changes per deploy target.

### 2. New Community Engagements page

- Add route `src/routes/community.tsx` with its own `head()` (unique title, description, og tags).
- Add "Community" to the nav list in `src/components/site-nav.tsx` (and matching footer link if the footer lists routes).
- Page content (styled to match the existing editorial layout — chapter label, italic serif headline, then engagement entries with year + org + role + short description):
  - **HUE CREATE — Children's Day** · Volunteer face-painter for 100+ children.
  - **ARTERIA** · Volunteer artist.
- Leave dates, locations, and photo slots as visible placeholders you can fill in later (matching how `/exhibitions` handles TBD entries).

No copy/color/layout changes anywhere else.
