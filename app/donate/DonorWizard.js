"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhone(value) {
  const trimmed = value.replace(/[^\d+\s]/g, "");
  if (!trimmed) return "";
  if (trimmed.startsWith("+")) {
    return `+${trimmed.slice(1).replace(/\+/g, "")}`;
  }
  return trimmed.replace(/\+/g, "");
}

export default function DonorWizard({ selectedCause, focus, bankDetails }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState("50");
  const [currency, setCurrency] = useState("USD");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const paymentMethodLabel =
    paymentMethod === "card"
      ? "Card"
      : paymentMethod === "mobile-money"
        ? "Mobile Money"
        : "Bank Transfer";

  const status = useMemo(
    () => [
      { number: 1, title: "Amount", done: step > 1 },
      { number: 2, title: "Your details", done: step > 2 },
      { number: 3, title: "Payment", done: step > 3 },
      { number: 4, title: "Review", done: step > 4 },
    ],
    [step]
  );

  const validateStep = (targetStep) => {
    const nextErrors = {};

    if (targetStep === 1) {
      if (!amount || Number(amount) <= 0) nextErrors.amount = "Please enter a valid donation amount.";
    }

    if (targetStep === 2) {
      if (fullName.trim().length < 3) nextErrors.fullName = "Please enter your full name.";
      if (!emailPattern.test(email.trim())) nextErrors.email = "Please enter a valid email address.";
      if (phone && !/^\+?[0-9 ]{7,20}$/.test(phone.trim())) nextErrors.phone = "Use a valid phone number format.";
    }

    if (targetStep === 3) {
      if (!agreed) nextErrors.agreed = "Please confirm consent before continuing.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((value) => Math.min(value + 1, 4));
  };

  const back = () => {
    setStep((value) => Math.max(value - 1, 1));
  };

  const finish = () => {
    if (!validateStep(3)) return;
    const params = new URLSearchParams();
    params.set("amount", amount || "0");
    params.set("currency", currency);
    params.set("cause", selectedCause || "unrestricted");
    params.set("fullName", fullName.trim());
    params.set("email", email.trim());
    if (phone.trim()) params.set("phone", phone.trim());
    if (country.trim()) params.set("country", country.trim());
    params.set("frequency", frequency);
    params.set("paymentMethod", paymentMethod);

    router.push(`/donate/checkout?${params.toString()}`);
  };

  const formattedAmount = `${amount ? `${amount}` : "0"}`;

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-3">
          {status.map((item) => (
            <div
              key={item.number}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                step === item.number
                  ? "bg-[#1d4f8f] text-white"
                  : item.done
                    ? "bg-[#eef4fb] text-[#123a6a]"
                    : "bg-slate-100 text-slate-500"
              }`}
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-[11px] font-bold">
                {item.number}
              </span>
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
        {step === 1 ? (
          <section className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Step 1 of 4</p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-slate-900">Enter your donation amount</h2>
              <p className="mt-2 text-sm text-slate-600">Choose how much you want to give and the frequency that works for you.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <input type="radio" name="frequency" value="one-time" checked={frequency === "one-time"} onChange={(e) => setFrequency(e.target.value)} className="h-4 w-4" />
                <span><strong className="text-slate-900">One-time</strong> donation</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <input type="radio" name="frequency" value="monthly" checked={frequency === "monthly"} onChange={(e) => setFrequency(e.target.value)} className="h-4 w-4" />
                <span><strong className="text-slate-900">Monthly</strong> donation</span>
              </label>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_160px]">
              <input
                name="amount"
                type="number"
                min="1"
                step="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter donation amount"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
                required
              />
              <select
                name="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              >
                <option value="USD">USD</option>
                <option value="UGX">UGX</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            {errors.amount ? <p className="text-xs text-red-600">{errors.amount}</p> : null}

            <div className="flex justify-end">
              <button type="button" onClick={next} className="inline-flex rounded-xl bg-[#ef8b1e] px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17]">
                Continue
              </button>
            </div>
          </section>
        ) : null}

        {step === 2 ? (
          <section className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Step 2 of 4</p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-slate-900">Tell us about you</h2>
              <p className="mt-2 text-sm text-slate-600">We’ll use these details to issue your donation confirmation and follow up if needed.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="fullName"
                required
                minLength={3}
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full name"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              />
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              />
              <input
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                pattern="^\+?[0-9 ]{7,20}$"
                value={phone}
                onChange={(e) => setPhone(normalizePhone(e.target.value))}
                placeholder="Phone number (optional)"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              />
              <input
                name="country"
                autoComplete="country-name"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
              />
            </div>
            {errors.fullName ? <p className="text-xs text-red-600">{errors.fullName}</p> : null}
            {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
            {errors.phone ? <p className="text-xs text-red-600">{errors.phone}</p> : null}

            <div className="flex items-center justify-between gap-3">
              <button type="button" onClick={back} className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Back
              </button>
              <button type="button" onClick={next} className="inline-flex rounded-xl bg-[#ef8b1e] px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17]">
                Continue
              </button>
            </div>
          </section>
        ) : null}

        {step === 3 ? (
          <section className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Step 3 of 4</p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-slate-900">Choose payment method</h2>
              <p className="mt-2 text-sm text-slate-600">Select how you want to complete the donation.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <input type="radio" name="paymentMethod" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4" />
                <span>Card</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <input type="radio" name="paymentMethod" value="mobile-money" checked={paymentMethod === "mobile-money"} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4" />
                <span>Mobile Money</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <input type="radio" name="paymentMethod" value="bank-transfer" checked={paymentMethod === "bank-transfer"} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4" />
                <span>Bank Transfer</span>
              </label>
            </div>

            <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 h-4 w-4" />
              <span>I confirm that the information above is accurate and I agree to proceed to checkout.</span>
            </label>
            {errors.agreed ? <p className="text-xs text-red-600">{errors.agreed}</p> : null}

            <div className="flex items-center justify-between gap-3">
              <button type="button" onClick={back} className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Back
              </button>
              <button type="button" onClick={next} className="inline-flex rounded-xl bg-[#ef8b1e] px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17]">
                Review donation
              </button>
            </div>
          </section>
        ) : null}

        {step === 4 ? (
          <section className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4f8f]">Step 4 of 4</p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-slate-900">Review and pay</h2>
              <p className="mt-2 text-sm text-slate-600">You are about to continue to secure checkout with the following donation details.</p>
            </div>

            <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
              <div><span className="font-semibold text-slate-900">Amount:</span> {currency} {formattedAmount}</div>
              <div><span className="font-semibold text-slate-900">Frequency:</span> {frequency.replace("-", " ")}</div>
              <div><span className="font-semibold text-slate-900">Focus:</span> {focus.title}</div>
              <div><span className="font-semibold text-slate-900">Method:</span> {paymentMethodLabel}</div>
              <div><span className="font-semibold text-slate-900">Donor:</span> {fullName}</div>
              <div><span className="font-semibold text-slate-900">Email:</span> {email}</div>
            </div>

            {bankDetails ? (
              <div className="rounded-xl border border-slate-200 bg-[#eef4fb] p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">If card payment fails at checkout</p>
                <p className="mt-1">Bank transfer details will be shown automatically. You can also use these details directly:</p>
                <dl className="mt-3 grid gap-2 text-sm">
                  <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Bank</dt><dd>{bankDetails.bankName}</dd></div>
                  <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Account Name</dt><dd>{bankDetails.accountName}</dd></div>
                  <div className="grid grid-cols-[120px_1fr] gap-2"><dt className="font-semibold">Account No.</dt><dd>{bankDetails.accountNumber}</dd></div>
                </dl>
              </div>
            ) : null}

            <div className="flex items-center justify-between gap-3">
              <button type="button" onClick={back} className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Back
              </button>
              <button type="button" onClick={finish} className="inline-flex rounded-xl bg-[#ef8b1e] px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17]">
                Continue to secure checkout
              </button>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
