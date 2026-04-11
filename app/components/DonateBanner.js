import Image from "next/image";

export default function DonateBanner({ id, title, points, actionHref, actionLabel, image }) {
  return (
    <section
      id={id}
      className="relative my-10 overflow-hidden rounded-none"
    >
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-slate-900/28" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="max-w-3xl rounded-2xl border border-white/70 bg-white/92 p-5 shadow-[0_18px_40px_rgba(13,42,79,0.14)] backdrop-blur-sm sm:p-6 md:p-9">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d4f8f]">Support AFFDI</p>
          <h2 className="font-display text-xl font-bold leading-tight text-slate-900 sm:text-2xl md:text-3xl">{title}</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1d4f8f]" />
              <span>{point}</span>
            </li>
          ))}
          </ul>
          <a
            className="mt-7 inline-flex rounded-xl bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17] sm:px-6 sm:py-3"
            href={actionHref}
          >
            {actionLabel}
          </a>
        </div>
      </div>
    </section>
  );
}