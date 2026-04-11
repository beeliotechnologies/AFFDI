import Link from "next/link";
import Image from "next/image";

export default function CauseGrid({ causes }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {causes.map((cause) => (
        <article key={cause.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300">
          <div className="relative h-44 w-full overflow-hidden">
            <Image
              src={cause.image}
              alt={cause.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2.5 p-4">
            <div className="flex items-center justify-between gap-3 text-xs">
              {cause.urgency ? <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold uppercase tracking-[0.08em] text-amber-800">{cause.urgency}</span> : <span />}
              {cause.goal ? <span className="font-medium text-slate-500">{cause.goal}</span> : null}
            </div>
            <h3 className="font-display text-base font-semibold text-slate-900">{cause.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{cause.description}</p>
            <Link
              className="inline-flex items-center rounded-lg border border-[#d9e3ef] bg-[#eef4fb] px-3.5 py-1.5 text-sm font-semibold text-[#1d4f8f] transition hover:bg-[#dfeaf7]"
              href={cause.href}
            >
              Read story
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}