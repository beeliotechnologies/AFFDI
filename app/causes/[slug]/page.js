import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { causes } from "../../data/causes";

export function generateStaticParams() {
  return causes.map((cause) => ({ slug: cause.slug }));
}

export function generateMetadata({ params }) {
  const cause = causes.find((item) => item.slug === params.slug);

  if (!cause) {
    return {};
  }

  return {
    title: `${cause.title} | AFFDI Causes`,
    description: cause.description,
  };
}

export default function CauseStoryPage({ params }) {
  const cause = causes.find((item) => item.slug === params.slug);
  const relatedCauses = causes.filter((item) => item.slug !== params.slug).slice(0, 3);

  if (!cause) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fbff] text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <Link href="/#main-content" className="text-sm font-semibold text-[#1d4f8f] hover:underline">
          ← Back to home
        </Link>

        <article className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-72 w-full md:h-96">
            <Image src={cause.image} alt={cause.title} fill sizes="100vw" className="object-cover" />
          </div>

          <div className="space-y-5 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold uppercase tracking-[0.08em] text-amber-800">
                {cause.urgency}
              </span>
              <span className="rounded-full bg-[#eef4fb] px-2.5 py-1 font-semibold uppercase tracking-[0.08em] text-[#123a6a]">
                {cause.goal}
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {cause.storyTitle}
            </h1>

            <p className="text-base leading-relaxed text-slate-700">{cause.storyIntro}</p>

            <div className="space-y-3">
              {cause.story.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="font-display text-xl font-semibold text-slate-900">Expected impact</h2>
              <ul className="mt-3 space-y-2">
                {cause.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1d4f8f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/donate?cause=${encodeURIComponent(cause.slug)}`}
                className="inline-flex rounded-lg bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-[#de7f17]"
              >
                Support this cause
              </Link>
              <Link
                href="/donate"
                className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Go to donation page
              </Link>
            </div>

            {relatedCauses.length ? (
              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="font-display text-xl font-semibold text-slate-900">Explore related causes</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {relatedCauses.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-[#1d4f8f]/30 hover:bg-[#eef4fb]"
                    >
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.goal}</p>
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
