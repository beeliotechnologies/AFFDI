import Link from "next/link";
import DonateForm from "./DonateForm";

export const metadata = {
  title: "Donate | AFFDI",
  description: "Support AFFDI programs for clean water, education, shelter, food security, and community resilience.",
};

const impactOptions = {
  unrestricted: {
    title: "Unrestricted Support",
    note: "Allows AFFDI to allocate support to the most urgent program and household needs.",
  },
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

const bankDetails = {
  bankName: "Centenary Bank Uganda",
  accountName: "Alliance for Fundamental Development Initiative",
  accountNumber: "012345678901",
  branch: "Mbale Branch",
  swift: "CERBUGKA",
};

export default function DonatePage({ searchParams }) {
  const selectedCause = searchParams?.cause && impactOptions[searchParams.cause]
    ? searchParams.cause
    : "unrestricted";
  const focus = impactOptions[selectedCause];

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fbff] text-slate-800">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <Link href="/#main-content" className="text-sm font-semibold text-[#1d4f8f] hover:underline">
          ← Back to home
        </Link>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Donate</p>
            <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Support AFFDI Community Programs
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Thank you for choosing to support Alliance For Fundamental Development Initiative.
              Every contribution strengthens practical action in water access, education, shelter,
              and household resilience.
            </p>

            <div className="mt-5 rounded-xl border border-[#d9e3ef] bg-[#eef4fb] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1d4f8f]">Selected focus</p>
              <h2 className="mt-1 font-display text-xl font-semibold text-slate-900">{focus.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{focus.note}</p>
            </div>

            <DonateForm selectedCause={selectedCause} focus={focus} givingLevels={givingLevels} />
          </article>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h2 className="font-display text-2xl font-semibold text-slate-900">How giving works</h2>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <strong className="text-slate-900">1. Select your focus</strong>
                <p className="mt-1">Choose a cause or make an unrestricted gift for highest-priority needs.</p>
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <strong className="text-slate-900">2. Complete the donation form</strong>
                <p className="mt-1">Provide donor details and choose your preferred method in a standard checkout flow.</p>
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <strong className="text-slate-900">3. Receive confirmation</strong>
                <p className="mt-1">A confirmation summary and next steps are presented on the mock checkout page.</p>
              </li>
            </ol>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h2 className="font-display text-2xl font-semibold text-slate-900">Bank transfer details</h2>
              <p className="mt-2 text-sm text-slate-600">For direct transfers, use the account details below and email proof of payment to <a className="font-semibold text-[#1d4f8f] hover:underline" href="mailto:info@affdi.org">info@affdi.org</a>.</p>
              <dl className="mt-4 grid gap-2 text-sm text-slate-700">
                <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Bank</dt><dd>{bankDetails.bankName}</dd></div>
                <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Account Name</dt><dd>{bankDetails.accountName}</dd></div>
                <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Account No.</dt><dd>{bankDetails.accountNumber}</dd></div>
                <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Branch</dt><dd>{bankDetails.branch}</dd></div>
                <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">SWIFT</dt><dd>{bankDetails.swift}</dd></div>
              </dl>
            </section>

            <section className="rounded-xl border border-slate-200 bg-[#eef4fb] p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Need institutional giving support?</p>
              <p className="mt-1">Email our team for partnership and grant-aligned contribution options.</p>
              <a href="mailto:info@affdi.org?subject=Institutional%20Giving%20-%20AFFDI" className="mt-3 inline-flex font-semibold text-[#1d4f8f] hover:underline">
                Contact partnerships desk
              </a>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
