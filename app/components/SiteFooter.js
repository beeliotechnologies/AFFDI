export default function SiteFooter({ links, contact, copyright }) {
  return (
    <footer id="footer" className="rounded-xl border border-[#090E58]/35 bg-[#090E58] p-5 shadow-sm sm:p-6 md:rounded-2xl md:p-9">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h3 className="font-display text-base font-semibold text-white md:text-lg">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm leading-relaxed text-white/75">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-[#E5A223]">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white md:text-lg">Knowledge Hub</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Newsletters, partner reports, field stories, and impact briefs are shared here to keep
            supporters close to the communities they serve.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white md:text-lg">Contact Info</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            <p>{contact.address}</p>
            <a href={`mailto:${contact.email}`} className="transition hover:text-[#E5A223]">{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="transition hover:text-[#E5A223]">{contact.phone}</a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white md:text-lg">Stay Connected</h3>
          <p className="mt-4 text-sm text-white/75">Follow updates and partnership opportunities with AFFDI.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61570994797291"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-[#E5A223] hover:text-[#E5A223]"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true" fill="currentColor">
                <path d="M13.5 9H16V6h-2.5C10.9 6 9 7.9 9 10.5V13H7v3h2v6h3v-6h2.3l.7-3H12v-2.5c0-.8.7-1.5 1.5-1.5z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@affdi84?_r=1&_t=ZS-95apPjW0k9B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-[#E5A223] hover:text-[#E5A223]"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true" fill="currentColor">
                <path d="M16 3v10.2a3.8 3.8 0 1 0 2 3.3V8.5c1.2 1.1 2.7 1.9 4 2.1V8.4c-2-.4-4-2.2-4-5.4h-2zM9.8 15.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6z" />
              </svg>
              TikTok
            </a>
          </div>
          <a href="/donate" className="mt-5 inline-flex rounded-lg bg-[#E5A223] px-5 py-2 text-sm font-bold text-[#090E58] transition hover:bg-[#C98C1D]">
            Support Now
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-white/20 pt-5 text-xs text-white/65">
        <p>{copyright}</p>
        <p className="mt-1">
          Built by{' '}
          <a
            href="https://beelio.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#E5A223] hover:underline"
          >
            Beelio Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}