import Image from "next/image";

const DEFAULTS = {
  title: "Your support changes lives",
  points: [
    "Fund emergency food assistance for vulnerable families",
    "Support clean water access in underserved communities",
    "Help build long-term resilience through skills training",
  ],
  actionLabel: "Donate Today",
  actionHref: "#donate",
  image: "",
};

export default function DonateBanner({
  id,
  title = DEFAULTS.title,
  points = DEFAULTS.points,
  actionHref = DEFAULTS.actionHref,
  actionLabel = DEFAULTS.actionLabel,
  image = DEFAULTS.image,
}) {
  const isExternal =
    actionHref.startsWith("http://") || actionHref.startsWith("https://");

  return (
    <section
      id={id}
      className="relative my-10 overflow-hidden rounded-2xl"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/50" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="max-w-3xl rounded-2xl border border-white/60 bg-white/95 p-5 shadow-[0_18px_40px_rgba(13,42,79,0.14)] backdrop-blur-sm sm:p-6 md:p-9">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d4f8f]">
            Support AFFDI
          </p>

          <h2 className="font-display text-xl font-bold leading-tight text-slate-900 sm:text-2xl md:text-3xl">
            {title}
          </h2>

          {points.length > 0 && (
            <ul className="mt-6 space-y-3 text-slate-700" aria-label="Reasons to donate">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#1d4f8f]"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          )}

          <a
            href={actionHref}
            className="mt-7 inline-flex rounded-xl bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17] sm:px-6 sm:py-3"
            aria-label={`${actionLabel} — ${title}`}
            {...(isExternal && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {actionLabel}
          </a>
        </div>
      </div>
    </section>
  );
}