import Image from "next/image";
import Link from "next/link";

export default function ProgramGrid({ items = [] }) {
  if (!items.length) {
    return (
      <p className="py-12 text-center text-sm text-slate-500">
        No programs to display yet.
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.id ?? index}
          className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b8cde8] hover:shadow-md"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-2.5 p-4">
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="rounded-full bg-[#eef4fb] px-2.5 py-1 font-semibold uppercase tracking-[0.08em] text-[#123a6a]">
                {item.focus ?? "Program"}
              </span>
              {item.coverage && (
                <span className="font-medium text-slate-500">{item.coverage}</span>
              )}
            </div>

            <h3 className="font-display text-base font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>

            {item.result && (
              <p className="border-t border-slate-100 pt-3 text-sm font-medium text-[#123a6a]">
                {item.result}
              </p>
            )}

            {item.href && (
              <Link
                href={item.href}
                className="inline-flex rounded-lg border border-[#d9e3ef] bg-[#eef4fb] px-3.5 py-1.5 text-sm font-semibold text-[#1d4f8f] transition hover:bg-[#dfeaf7]"
              >
                Learn more
                <span className="sr-only"> about {item.title}</span>
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}