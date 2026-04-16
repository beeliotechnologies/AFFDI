"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_STATS = [
  { value: "12,000+", numericValue: 12000, label: "Beneficiaries reached across Uganda", icon: "👥" },
  { value: "48",      numericValue: 48,    label: "Communities served since 2018",       icon: "🏘️" },
  { value: "94%",     numericValue: 94,    label: "Beneficiaries reporting improved resilience", icon: "📈" },
  { value: "6",       numericValue: 6,     label: "Districts with active field teams",   icon: "📍" },
];

// Animates a number from 0 to `target` over `duration`ms once `active` is true
function useCountUp(target, duration = 1400, active = false) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active || target === 0) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);

  return display;
}

function StatCard({ stat, index, visible }) {
  const count = useCountUp(stat.numericValue ?? 0, 1400, visible);

  // Reconstruct the display value with animation if numericValue is provided
  const displayValue = stat.numericValue
    ? stat.value.replace(/[\d,]+/, count.toLocaleString())
    : stat.value;

  return (
    <article
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {stat.icon && (
        <span className="mb-3 block text-2xl" aria-hidden="true">
          {stat.icon}
        </span>
      )}
      <div
        className={`text-3xl font-extrabold leading-none tabular-nums ${stat.accent ?? "text-[#090E58]"}`}
        aria-label={stat.value}
      >
        {displayValue}
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{stat.label}</p>
    </article>
  );
}

export default function ImpactStats({ stats = DEFAULT_STATS }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!stats.length) return null;

  return (
    <section
      ref={sectionRef}
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      aria-label="AFFDI impact highlights"
    >
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} visible={visible} />
      ))}
    </section>
  );
}