import weDirectoryLogo from "@/assets/wedirectory-logo.svg";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white px-6 md:px-10 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs space-y-4">
          <div className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-white/40">
            Studio
          </div>
          <p className="font-sans text-sm leading-relaxed text-white/80">
            Sta / Ademi Emoghene Augusta
            <br />
            Benin City, Nigeria
          </p>
        </div>

        <div className="max-w-xs space-y-4">
          <div className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-white/40">
            Contact
          </div>
          <p className="font-sans text-sm leading-relaxed text-white/80">
            <a
              href="mailto:stathestudio@gmail.com"
              className="hover:text-brand-yellow"
            >
              stathestudio@gmail.com
            </a>
          </p>
        </div>

        <div className="max-w-xs space-y-4">
          <div className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-white/40">
            Elsewhere
          </div>
          <ul className="font-sans text-sm leading-relaxed text-white/80 space-y-1">
            <li>
              <a
                href="https://instagram.com/staisart_studio/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-yellow"
              >
                Instagram · @staisart_studio
              </a>
            </li>
          </ul>
          <a
            href="https://we.directory/stathestudio-lovable"
            target="_blank"
            rel="noopener"
            className="group block pt-4 border-t border-white/10"
            aria-label="Featured on WeDirectory — best talents and brands"
          >
            <img
              src={weDirectoryLogo}
              alt="WeDirectory"
              loading="lazy"
              className="h-7 w-auto opacity-80 transition-opacity group-hover:opacity-100"
            />
            <span className="mt-3 block font-sans text-[10px] tracking-[0.16em] uppercase text-white/50 group-hover:text-brand-yellow transition-colors">
              Featured on WeDirectory — best talents and brands
            </span>
          </a>
        </div>

        <div className="flex items-end">
          <span className="font-display font-extrabold text-6xl md:text-7xl text-brand-yellow leading-none">
            STA
          </span>
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-white/10 flex justify-between text-[10px] uppercase tracking-[0.24em] text-white/30">
        <span>© 2026 Studio Sta</span>
        <span>All images courtesy of the artist</span>
      </div>
    </footer>
  );
}
