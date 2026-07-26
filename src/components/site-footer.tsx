export function SiteFooter() {
  return (
    <footer className="bg-ink text-white px-6 md:px-10 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs space-y-4">
          <div className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-white/40">
            Studio
          </div>
          <p className="font-sans text-sm leading-relaxed text-white/80">
            Studio Vane
            <br />
            Via dei Capocci, 12
            <br />
            00184 Roma, IT
          </p>
        </div>

        <div className="max-w-xs space-y-4">
          <div className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-white/40">
            Representation
          </div>
          <p className="font-sans text-sm leading-relaxed text-white/80">
            Gagosian, Worldwide
            <br />
            White Cube, London / HK
            <br />
            Art Projects Asia, Tokyo
          </p>
        </div>

        <div className="max-w-xs space-y-4">
          <div className="font-sans text-[10px] font-medium tracking-[0.24em] uppercase text-white/40">
            Elsewhere
          </div>
          <ul className="font-sans text-sm leading-relaxed text-white/80 space-y-1">
            <li>Instagram</li>
            <li>Artsy</li>
            <li>Press Archive</li>
          </ul>
        </div>

        <div className="flex items-end">
          <span className="font-display font-extrabold text-6xl md:text-7xl text-brand-yellow leading-none">
            VANE
          </span>
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-white/10 flex justify-between text-[10px] uppercase tracking-[0.24em] text-white/30">
        <span>© 2026 Studio Vane</span>
        <span>All images courtesy of the artist</span>
      </div>
    </footer>
  );
}
