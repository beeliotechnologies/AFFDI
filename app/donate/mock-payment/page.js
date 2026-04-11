import Link from "next/link";

export const metadata = {
  title: "Mock Payment | AFFDI",
  description: "Demo checkout page for AFFDI donations. No real payment is processed.",
};

const impactOptions = {
  "clean-water-access": "Clean Water Access",
  "education-and-shelter": "Education & Shelter",
  "food-and-care": "Food & Care",
};

const bankDetails = {
  bankName: "Centenary Bank Uganda",
  accountName: "Alliance for Fundamental Development Initiative",
  accountNumber: "012345678901",
  branch: "Mbale Branch",
  swift: "CERBUGKA",
};

export default function MockPaymentPage({ searchParams }) {
  const amount = searchParams?.amount || "Custom";
  const causeSlug = searchParams?.cause;
  const causeLabel = causeSlug ? impactOptions[causeSlug] || causeSlug : "Unrestricted donation";
  const isSuccess = searchParams?.status === "success";

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fbff] text-slate-800">
      <section className="mx-auto max-w-4xl px-6 py-10 md:py-14">
        <Link href="/donate" className="text-sm font-semibold text-[#1d4f8f] hover:underline">
          ← Back to donate page
        </Link>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Demo only</p>
          <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Mock Payment Checkout
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            This is a simulation page for donor experience testing. No real transaction is processed.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Amount</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">
                {amount === "Custom" ? amount : `$${amount}`}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Donation focus</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">{causeLabel}</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-[#eef4fb] p-4">
            <h2 className="font-display text-xl font-semibold text-slate-900">Enter payment details (mock)</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" placeholder="Cardholder name" />
              <input className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" placeholder="Card number" />
              <input className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" placeholder="MM/YY" />
              <input className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" placeholder="CVV" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`/donate/mock-payment?amount=${encodeURIComponent(amount)}${causeSlug ? `&cause=${encodeURIComponent(causeSlug)}` : ""}&status=success`}
                className="inline-flex rounded-lg bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-[#de7f17]"
              >
                Complete Demo Payment
              </Link>
              <Link href="/donate" className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Cancel
              </Link>
            </div>
          </div>

          {isSuccess ? (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              <p className="font-semibold">Demo payment successful.</p>
              <p className="mt-1">Thank you for testing the donor flow. This confirmation is simulated only.</p>
            </div>
          ) : null}

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            <h2 className="font-display text-lg font-semibold text-slate-900">Prefer bank transfer?</h2>
            <dl className="mt-3 grid gap-2">
              <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Bank</dt><dd>{bankDetails.bankName}</dd></div>
              <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Account Name</dt><dd>{bankDetails.accountName}</dd></div>
              <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Account No.</dt><dd>{bankDetails.accountNumber}</dd></div>
              <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Branch</dt><dd>{bankDetails.branch}</dd></div>
              <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">SWIFT</dt><dd>{bankDetails.swift}</dd></div>
            </dl>
          </div>
        </article>
      </section>
    </main>
  );
}
