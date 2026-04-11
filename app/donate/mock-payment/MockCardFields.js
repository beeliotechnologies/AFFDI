"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

function formatCardNumber(value) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function MockCardFields({ completeHref, cancelHref, defaultName = "" }) {
  const router = useRouter();
  const [name, setName] = useState(defaultName);
  const [cardNumber, setCardNumber] = useState("4111 1111 1111 1111");
  const [expiry, setExpiry] = useState("12/30");
  const [cvv, setCvv] = useState("123");
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const next = {};
    if (name.trim().length < 3) next.name = "Cardholder name is required.";
    if (cardNumber.replace(/\s/g, "").length !== 16) next.cardNumber = "Use a 16-digit card number.";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) next.expiry = "Expiry must be in MM/YY format.";
    if (!/^\d{3,4}$/.test(cvv)) next.cvv = "CVV must be 3 or 4 digits.";
    return next;
  }, [name, cardNumber, expiry, cvv]);

  const canProceed = Object.keys(errors).length === 0;

  const onProceed = () => {
    setTouched(true);
    if (!canProceed) return;
    router.push(completeHref);
  };

  return (
    <div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          placeholder="Cardholder name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="cc-name"
        />
        <input
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          placeholder="Card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          inputMode="numeric"
          autoComplete="cc-number"
        />
        <input
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(formatExpiry(e.target.value))}
          inputMode="numeric"
          autoComplete="cc-exp"
        />
        <input
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
          inputMode="numeric"
          autoComplete="cc-csc"
        />
      </div>

      {touched && !canProceed ? (
        <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
          {errors.name || errors.cardNumber || errors.expiry || errors.cvv}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onProceed}
          className="inline-flex rounded-xl bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-[#de7f17]"
        >
          Complete Payment
        </button>
        <a href={cancelHref} className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Cancel
        </a>
      </div>
    </div>
  );
}
