import Link from "next/link";
import CheckoutCardFields from "./CheckoutCardFields";

export const metadata = {
  title: "Checkout | AFFDI",
  description: "Secure donation checkout for AFFDI supporters.",
};

const impactOptions = {
  unrestricted: "Unrestricted Support",
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

const paymentMethodLabels = {
  card: "Card",
  "mobile-money": "Mobile Money",
  "bank-transfer": "Bank Transfer",
};

const getParam = (value, fallback = "") => (Array.isArray(value) ? value[0] : (value ?? fallback));

export default function CheckoutPage({ searchParams }) {
  const amount = getParam(searchParams?.amount, "50");
  const currency = getParam(searchParams?.currency, "USD");
  const causeSlug = getParam(searchParams?.cause, "unrestricted");
  const fullName = getParam(searchParams?.fullName, "Donor");
  const email = getParam(searchParams?.email, "");
  const phone = getParam(searchParams?.phone, "");
  const country = getParam(searchParams?.country, "");
  const frequency = getParam(searchParams?.frequency, "one-time");
  const paymentMethod = getParam(searchParams?.paymentMethod, "card");
  const causeLabel = impactOptions[causeSlug] || "Unrestricted Support";

  const computedAmount = Number(amount || 0);
  const formattedAmount = computedAmount > 0 ? `${currency} ${computedAmount.toLocaleString()}` : `${currency} Custom`;

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fbff] text-slate-800">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <Link href="/donate" className="text-sm font-semibold text-[#1d4f8f] hover:underline">
          ← Back to donate page
        </Link>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Secure checkout</p>
              <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Complete Your Donation
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Review your donation details and complete payment through the selected method.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Donation amount</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">{formattedAmount}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Frequency</p>
                  <p className="mt-1 text-xl font-semibold capitalize text-slate-900">{frequency.replace("-", " ")}</p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Donation focus</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{causeLabel}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Payment method</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{paymentMethodLabels[paymentMethod] ?? "Card"}</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-[#eef4fb] p-4">
                <h2 className="font-display text-xl font-semibold text-slate-900">Donor information</h2>
                <dl className="mt-3 grid gap-2 text-sm text-slate-700">
                  <div className="grid grid-cols-[110px_1fr] gap-2"><dt className="font-semibold">Name</dt><dd>{fullName}</dd></div>
                  {email ? <div className="grid grid-cols-[110px_1fr] gap-2"><dt className="font-semibold">Email</dt><dd>{email}</dd></div> : null}
                  {phone ? <div className="grid grid-cols-[110px_1fr] gap-2"><dt className="font-semibold">Phone</dt><dd>{phone}</dd></div> : null}
                  {country ? <div className="grid grid-cols-[110px_1fr] gap-2"><dt className="font-semibold">Country</dt><dd>{country}</dd></div> : null}
                </dl>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
                <h2 className="font-display text-xl font-semibold text-slate-900">Payment details</h2>
                <CheckoutCardFields cancelHref="/donate" defaultName={fullName} bankDetails={bankDetails} />
              </div>
            </div>

            <aside className="space-y-4">
              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <h2 className="font-display text-lg font-semibold text-slate-900">Security notice</h2>
                <p className="mt-2">Your donation details are handled in a secure checkout flow and routed by the selected payment method.</p>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Need support before completing?</p>
                <a className="mt-2 inline-flex font-semibold text-[#1d4f8f] hover:underline" href="mailto:info@affdi.org?subject=Donation%20Support%20-%20AFFDI">Contact donations desk</a>
              </section>
            </aside>
          </div>
        </article>
      </section>
    </main>
  );
}
