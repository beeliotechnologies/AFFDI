import Link from "next/link";
import MockCardFields from "./MockCardFields";

export const metadata = {
  title: "Mock Payment | AFFDI",
  description: "Demo checkout page for AFFDI donations. No real payment is processed.",
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
  card: "Card (Demo)",
  "mobile-money": "Mobile Money (Demo)",
  "bank-transfer": "Bank Transfer",
};

const getParam = (value, fallback = "") => (Array.isArray(value) ? value[0] : (value ?? fallback));

export default function MockPaymentPage({ searchParams }) {
  const amount = getParam(searchParams?.amount, "50");
  const customAmount = getParam(searchParams?.customAmount, "");
  const currency = getParam(searchParams?.currency, "USD");
  const causeSlug = getParam(searchParams?.cause, "unrestricted");
  const fullName = getParam(searchParams?.fullName, "Donor");
  const email = getParam(searchParams?.email, "");
  const phone = getParam(searchParams?.phone, "");
  const country = getParam(searchParams?.country, "");
  const frequency = getParam(searchParams?.frequency, "one-time");
  const paymentMethod = getParam(searchParams?.paymentMethod, "card");
  const causeLabel = impactOptions[causeSlug] || "Unrestricted Support";
  const isSuccess = getParam(searchParams?.status) === "success";

  const computedAmount = Number(customAmount) > 0 ? Number(customAmount) : Number(amount || 0);
  const formattedAmount = computedAmount > 0 ? `${currency} ${computedAmount.toLocaleString()}` : `${currency} Custom`;

  const confirmationQuery = new URLSearchParams();
  confirmationQuery.set("amount", amount);
  if (customAmount) confirmationQuery.set("customAmount", customAmount);
  confirmationQuery.set("currency", currency);
  confirmationQuery.set("cause", causeSlug);
  confirmationQuery.set("fullName", fullName);
  if (email) confirmationQuery.set("email", email);
  if (phone) confirmationQuery.set("phone", phone);
  if (country) confirmationQuery.set("country", country);
  confirmationQuery.set("frequency", frequency);
  confirmationQuery.set("paymentMethod", paymentMethod);
  confirmationQuery.set("status", "success");

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fbff] text-slate-800">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <Link href="/donate" className="text-sm font-semibold text-[#1d4f8f] hover:underline">
          ← Back to donate page
        </Link>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Demo checkout</p>
              <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Secure Donation Payment (Preview)
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                This page simulates a production-grade donation checkout. No real funds are charged in this demo environment.
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
                  <p className="mt-1 text-base font-semibold text-slate-900">{paymentMethodLabels[paymentMethod] ?? "Card (Demo)"}</p>
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
                <h2 className="font-display text-xl font-semibold text-slate-900">Payment details (mock)</h2>
                <MockCardFields
                  completeHref={`/donate/mock-payment?${confirmationQuery.toString()}`}
                  cancelHref="/donate"
                  defaultName={fullName}
                />
              </div>
            </div>

            <aside className="space-y-4">
              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <h2 className="font-display text-lg font-semibold text-slate-900">Security notice</h2>
                <p className="mt-2">This page is a UI simulation for online giving. No payment gateway is connected and no real charges are made.</p>
              </section>

              {paymentMethod === "bank-transfer" ? (
                <section className="rounded-xl border border-slate-200 bg-[#eef4fb] p-4 text-sm text-slate-700">
                  <h2 className="font-display text-lg font-semibold text-slate-900">Bank transfer instructions</h2>
                  <dl className="mt-3 grid gap-2">
                    <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Bank</dt><dd>{bankDetails.bankName}</dd></div>
                    <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Account Name</dt><dd>{bankDetails.accountName}</dd></div>
                    <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Account No.</dt><dd>{bankDetails.accountNumber}</dd></div>
                    <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Branch</dt><dd>{bankDetails.branch}</dd></div>
                    <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">SWIFT</dt><dd>{bankDetails.swift}</dd></div>
                  </dl>
                  <p className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
                    Transfer reference: <span className="font-semibold">AFFDI-{Date.now().toString().slice(-6)}</span>
                  </p>
                </section>
              ) : null}

              {isSuccess ? (
                <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                  <p className="font-semibold">Demo payment successful.</p>
                  <p className="mt-1">Thank you, {fullName}. A simulated confirmation has been generated for this donor flow.</p>
                </section>
              ) : (
                <section className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">Need support before completing?</p>
                  <a className="mt-2 inline-flex font-semibold text-[#1d4f8f] hover:underline" href="mailto:info@affdi.org?subject=Donation%20Support%20-%20AFFDI">Contact donations desk</a>
                </section>
              )}
            </aside>
          </div>
        </article>
      </section>
    </main>
  );
}
