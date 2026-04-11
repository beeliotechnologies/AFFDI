export default function SiteFooter({ links, contact, copyright }) {
  return (
    <footer id="footer" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:rounded-2xl md:p-9">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h3 className="font-display text-base font-semibold text-slate-900 md:text-lg">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-600">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-[#1d4f8f]">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-slate-900 md:text-lg">Knowledge Hub</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Newsletters, partner reports, field stories, and impact briefs are shared here to keep
            supporters close to the communities they serve.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-slate-900 md:text-lg">Contact Info</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            <p>{contact.address}</p>
            <a href={`mailto:${contact.email}`} className="transition hover:text-[#1d4f8f]">{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="transition hover:text-[#1d4f8f]">{contact.phone}</a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-slate-900 md:text-lg">Stay Connected</h3>
          <p className="mt-4 text-sm text-slate-600">Follow updates and partnership opportunities with AFFDI.</p>
          <a href="/donate" className="mt-5 inline-flex rounded-lg bg-[#ef8b1e] px-5 py-2 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17]">
            Support Now
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500">
        <p>{copyright}</p>
        <p className="mt-1">
          Built by{' '}
          <a
            href="https://beelio.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#1d4f8f] hover:underline"
          >
            Beelio Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}