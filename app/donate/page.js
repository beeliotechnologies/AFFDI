import Link from "next/link";
import Image from "next/image";
import DonorWizard from "./DonorWizard";

export const metadata = {
  title: "Donate | AFFDI",
  description: "Support AFFDI programs for clean water, education, shelter, food security, and community resilience.",
  openGraph: {
    title: "Donate | AFFDI",
    description: "Support clean water, education, shelter, and food security interventions led by AFFDI.",
    url: "/donate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | AFFDI",
    description: "Support clean water, education, shelter, and food security interventions led by AFFDI.",
  },
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

const bankDetails = {
  bankName: "Centenary Bank Uganda",
  accountName: "Alliance for Fundamental Development Initiative",
  accountNumber: "012345678901",
  branch: "Mbale Branch",
  swift: "CERBUGKA",
};

const campaignStory = [
  "In communities across Eastern Uganda, families are still walking long distances for safe water, school continuity, and shelter support.",
  "Your gift helps us work alongside local leaders to respond quickly where needs are highest — and to stay accountable after the first response.",
  "Use the steps on the right to complete your donation. If payment fails, bank transfer details will appear instantly as a fallback.",
];

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

        <div className="mt-5 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-56 w-full sm:h-64">
                <Image src="/WhatsApp Image 2026-04-05 at 1.17.08 PM (1).jpeg" alt="AFFDI community support campaign" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-slate-900/30" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">Fundraising campaign</p>
                  <h1 className="font-display mt-2 text-3xl font-bold leading-tight">Stand with families facing crisis</h1>
                </div>
              </div>

              <div className="flex-1 space-y-5 p-5 sm:p-6">
                <div className="rounded-xl border border-slate-200 bg-[#eef4fb] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1d4f8f]">Selected focus</p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-slate-900">{focus.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{focus.note}</p>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                  {campaignStory.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">Need help before donating?</p>
                  <p className="mt-1">Email <a className="font-semibold text-[#1d4f8f] hover:underline" href="mailto:info@affdi.org">info@affdi.org</a> or call <a className="font-semibold text-[#1d4f8f] hover:underline" href="tel:+256700000000">+256 700 000 000</a>.</p>
                </div>
              </div>
            </div>
          </aside>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Donation steps</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Complete your donation in four steps
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              The left panel stays visible while the right side advances step by step through amount, donor details, payment, and review.
            </p>

            <div className="mt-5 rounded-xl border border-[#d9e3ef] bg-[#eef4fb] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1d4f8f]">Chosen campaign</p>
              <p className="mt-1 text-sm text-slate-600">{focus.title} — {focus.note}</p>
            </div>

            <DonorWizard focus={focus} bankDetails={bankDetails} />
          </article>
        </div>
      </section>
    </main>
  );
}
