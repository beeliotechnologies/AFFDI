import Link from "next/link";

export const metadata = {
  title: "Donate | AFFDI",
  description: "Support AFFDI programs for clean water, education, shelter, food security, and community resilience.",
};

const impactOptions = {
  "clean-water-access": {
    title: "Clean Water Access",
    note: "Your support helps repair and expand safe water points in underserved villages.",
  },
  "education-and-shelter": {
    title: "Education & Shelter",
    note: "Your contribution supports safer classrooms and housing support for vulnerable households.",
  },
  "food-and-care": {
    title: "Food & Care",
    note: "Your gift helps provide essential food and care support to at-risk families.",
  },
};

const givingLevels = [
  { amount: "$25", impact: "Contributes to hygiene and household essentials for vulnerable families." },
  { amount: "$50", impact: "Supports school materials and targeted child support activities." },
  { amount: "$100", impact: "Helps fund water-point repair inputs and local coordination costs." },
  { amount: "$250", impact: "Supports multi-household relief and resilience support packages." },
];

export default function DonatePage({ searchParams }) {
  const selectedCause = searchParams?.cause;
  const focus = selectedCause ? impactOptions[selectedCause] : null;

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fbff] text-slate-800">
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <Link href="/#main-content" className="text-sm font-semibold text-[#1d4f8f] hover:underline">
          ← Back to home
        </Link>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Donate</p>
            <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Support AFFDI Community Programs
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Thank you for choosing to support Alliance For Fundamental Development Initiative.
              Every contribution strengthens practical action in water access, education, shelter,
              and household resilience.
            </p>

            {focus ? (
              <div className="mt-5 rounded-xl border border-[#d9e3ef] bg-[#eef4fb] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1d4f8f]">Selected cause</p>
                <h2 className="mt-1 font-display text-xl font-semibold text-slate-900">{focus.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{focus.note}</p>
              </div>
            ) : null}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {givingLevels.map((level) => (
                <div key={level.amount} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-display text-xl font-semibold text-slate-900">{level.amount}</p>
                  <p className="mt-1 text-sm text-slate-600">{level.impact}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:info@affdi.org?subject=${encodeURIComponent(
                  focus ? `Donation Pledge - ${focus.title}` : "Donation Pledge - AFFDI"
                )}`}
                className="inline-flex rounded-lg bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-[#de7f17]"
              >
                Confirm Donation by Email
              </a>
              <a
                href="tel:+256700000000"
                className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Call Donations Team
              </a>
            </div>
          </article>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-semibold text-slate-900">How giving works</h2>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <strong className="text-slate-900">1. Select your focus</strong>
                <p className="mt-1">Choose a cause or make an unrestricted gift for highest-priority needs.</p>
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <strong className="text-slate-900">2. Confirm your pledge</strong>
                <p className="mt-1">Use the email option to share your preferred amount and giving schedule.</p>
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <strong className="text-slate-900">3. Receive follow-up</strong>
                <p className="mt-1">AFFDI will contact you with payment instructions and accountability updates.</p>
              </li>
            </ol>

            <div className="mt-6 rounded-xl border border-slate-200 bg-[#eef4fb] p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Need institutional giving support?</p>
              <p className="mt-1">Email our team for partnership and grant-aligned contribution options.</p>
              <a href="mailto:info@affdi.org?subject=Institutional%20Giving%20-%20AFFDI" className="mt-3 inline-flex font-semibold text-[#1d4f8f] hover:underline">
                Contact partnerships desk
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
