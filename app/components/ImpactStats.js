export default function ImpactStats({ stats }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="AFFDI impact highlights">
      {stats.map((stat) => (
        <article key={stat.value} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <strong className="block text-2xl font-extrabold leading-none text-[#1d4f8f]">{stat.value}</strong>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{stat.label}</p>
        </article>
      ))}
    </section>
  );
}