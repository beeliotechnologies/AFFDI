import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programs } from "../../data/programs";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export function generateMetadata({ params }) {
  const program = programs.find((item) => item.slug === params.slug);

  if (!program) {
    return {};
  }

  return {
    title: `${program.title} | AFFDI Programs`,
    description: program.overview,
  };
}

export default function ProgramDetailPage({ params }) {
  const program = programs.find((item) => item.slug === params.slug);
  const relatedPrograms = programs.filter((item) => item.slug !== params.slug).slice(0, 3);

  if (!program) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fbff] text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <Link href="/#programs" className="text-sm font-semibold text-[#1d4f8f] hover:underline">
          ← Back to programs
        </Link>

        <article className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-72 w-full md:h-96">
            <Image src={program.image} alt={program.title} fill sizes="100vw" className="object-cover" />
          </div>

          <div className="space-y-5 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-[#eef4fb] px-2.5 py-1 font-semibold uppercase tracking-[0.08em] text-[#123a6a]">
                {program.focus}
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 font-semibold uppercase tracking-[0.08em] text-slate-700">
                {program.coverage}
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {program.title}
            </h1>

            <p className="text-base leading-relaxed text-slate-700">{program.overview}</p>

            <section className="rounded-xl border border-slate-200 bg-[#eef4fb] p-4">
              <h2 className="font-display text-xl font-semibold text-slate-900">Program snapshot</h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Beneficiaries</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{program.beneficiaries ?? 'Not specified'}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Timeframe</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{program.timeframe ?? 'Ongoing'}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{program.location ?? 'Eastern Uganda'}</p>
                </div>
              </div>
            </section>

            <div className="grid gap-4 md:grid-cols-2">
              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="font-display text-xl font-semibold text-slate-900">Core activities</h2>
                <ul className="mt-3 space-y-2">
                  {program.activities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1d4f8f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="font-display text-xl font-semibold text-slate-900">Expected outcomes</h2>
                <ul className="mt-3 space-y-2">
                  {program.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1d4f8f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[#eef4fb] p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Current progress signal</p>
              <p className="mt-1">{program.result}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/donate" className="inline-flex rounded-lg bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-[#de7f17]">
                Support this program
              </Link>
              <Link href="/#programs" className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Back to all programs
              </Link>
            </div>

            {relatedPrograms.length ? (
              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="font-display text-xl font-semibold text-slate-900">Explore related programs</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {relatedPrograms.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-[#1d4f8f]/30 hover:bg-[#eef4fb]"
                    >
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.beneficiaries ?? item.coverage}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </article>
      </section>
    </main>
  );
}
