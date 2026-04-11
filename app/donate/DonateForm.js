"use client";

import { useMemo, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhone(value) {
  const trimmed = value.replace(/[^\d+\s]/g, "");
  if (!trimmed) return "";
  if (trimmed.startsWith("+")) {
    return `+${trimmed.slice(1).replace(/\+/g, "")}`;
  }
  return trimmed.replace(/\+/g, "");
}

export default function DonateForm({ selectedCause, focus, givingLevels }) {
  const defaultAmount = useMemo(
    () => givingLevels[1]?.amount?.replace(/[^\d]/g, "") || "50",
    [givingLevels]
  );

  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState(defaultAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    const nextErrors = {};
    if (fullName.trim().length < 3) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (phone && !/^\+?[0-9 ]{7,20}$/.test(phone.trim())) {
      nextErrors.phone = "Use a valid phone number format.";
    }
    if (customAmount && Number(customAmount) <= 0) {
      nextErrors.customAmount = "Custom amount must be greater than 0.";
    }
    if (!agreed) {
      nextErrors.agreed = "Please confirm consent before continuing.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      e.preventDefault();
    }
  };

  return (
    <form action="/donate/mock-payment" method="get" className="mt-6 space-y-6" onSubmit={onSubmit}>
      <section>
        <h2 className="font-display text-xl font-semibold text-slate-900">1. Choose donation type</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <input type="radio" name="frequency" value="one-time" checked={frequency === "one-time"} onChange={(e) => setFrequency(e.target.value)} className="h-4 w-4" />
            <span><strong className="text-slate-900">One-time</strong> donation</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <input type="radio" name="frequency" value="monthly" checked={frequency === "monthly"} onChange={(e) => setFrequency(e.target.value)} className="h-4 w-4" />
            <span><strong className="text-slate-900">Monthly</strong> donation</span>
          </label>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-slate-900">2. Select amount</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {givingLevels.map((level) => {
            const numeric = level.amount.replace(/[^\d]/g, "");
            return (
              <label key={level.amount} className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <input
                  type="radio"
                  name="amount"
                  value={numeric}
                  checked={amount === numeric}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1 h-4 w-4"
                />
                <span>
                  <strong className="font-display text-lg text-slate-900">{level.amount}</strong>
                  <span className="mt-1 block text-slate-600">{level.impact}</span>
                </span>
              </label>
            );
          })}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_160px]">
          <input
            name="customAmount"
            type="number"
            min="1"
            step="1"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="Or enter custom amount"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
          />
          <select name="currency" defaultValue="USD" className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm">
            <option value="USD">USD</option>
            <option value="UGX">UGX</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        {errors.customAmount ? <p className="mt-2 text-xs text-red-600">{errors.customAmount}</p> : null}
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-slate-900">3. Tell us about you</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
        {errors.fullName ? <p className="mt-2 text-xs text-red-600">{errors.fullName}</p> : null}
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-slate-900">4. Payment method</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <input type="radio" name="paymentMethod" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4" />
            <span>Card (Demo)</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <input type="radio" name="paymentMethod" value="mobile-money" checked={paymentMethod === "mobile-money"} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4" />
            <span>Mobile Money (Demo)</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <input type="radio" name="paymentMethod" value="bank-transfer" checked={paymentMethod === "bank-transfer"} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4" />
            <span>Bank Transfer</span>
          </label>
        </div>
        <input type="hidden" name="cause" value={selectedCause} />
        <input type="hidden" name="amount" value={amount} />
      </section>

      <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 h-4 w-4" />
        <span>I confirm that the information above is accurate and I agree to proceed to a demo checkout experience.</span>
      </label>
      {errors.agreed ? <p className="text-xs text-red-600">{errors.agreed}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="inline-flex rounded-xl bg-[#ef8b1e] px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17]"
        >
          Proceed to secure checkout (Demo)
        </button>
        <a
          href={`mailto:info@affdi.org?subject=${encodeURIComponent(`Donation Inquiry - ${focus.title}`)}`}
          className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Prefer email support
        </a>
      </div>
    </form>
  );
}
