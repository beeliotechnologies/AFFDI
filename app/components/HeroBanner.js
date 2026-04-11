"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function HeroBanner({ slides = [], intervalMs = 6000 }) {
  const normalizedSlides = useMemo(() => {
    if (slides.length > 0) return slides;
    return [
      {
        eyebrow: "Alliance For Fundamental Development Initiative",
        title: "Improving Community Resilience",
        description:
          "We are committed to save lives, alleviate suffering, and build resilience in vulnerable communities across Uganda.",
        backgroundImage: "/WhatsApp%20Image%202026-04-05%20at%201.16.51%20PM.jpeg",
      },
    ];
  }, [slides]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (normalizedSlides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % normalizedSlides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [normalizedSlides.length, intervalMs]);

  const current = normalizedSlides[activeIndex];

  return (
    <section
      className="relative flex min-h-[72vh] w-full items-end overflow-hidden bg-slate-100 transition-all duration-700 md:min-h-[86vh]"
    >
      <div className="absolute inset-0">
        <Image
          src={current.backgroundImage}
          alt={current.title}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-slate-900/30" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-20 sm:px-6 md:px-8 md:pb-16 md:pt-28">
        <div className="max-w-4xl rounded-2xl border border-white/60 bg-white/92 p-5 shadow-[0_18px_40px_rgba(13,42,79,0.16)] backdrop-blur-sm sm:p-6 md:p-9">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d4f8f] md:mb-5 md:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#ef8b1e]" />
            {current.eyebrow}
          </div>

          <h1 className="font-display mb-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:mb-5 md:text-5xl">
            {current.title}
          </h1>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base md:mb-8 md:text-lg">
            {current.description}
          </p>

          {current.highlights?.length ? (
            <div className="mb-5 flex flex-wrap gap-2 md:mb-6">
              {current.highlights.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#123a6a]"
                >
                  {point}
                </span>
              ))}
            </div>
          ) : null}

          <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            {current.actionHref && current.actionLabel && (
              <a
                href={current.actionHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17] sm:px-7 sm:py-3"
              >
                {current.actionLabel}
              </a>
            )}
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:px-7 sm:py-3"
            >
              Why AFFDI
            </a>
          </div>

          <p className="mt-5 max-w-2xl text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 md:mt-6">
            Community-led delivery • Transparent reporting • Long-term resilience
          </p>
        </div>

        {normalizedSlides.length > 1 && (
          <div aria-label="Slide navigation" className="mt-6 flex items-center gap-2">
            {normalizedSlides.map((slide, index) => (
              <button
                key={`${slide.title}-${index}`}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer border-0 ${
                  index === activeIndex
                    ? "h-2 w-8 bg-[#1d4f8f]"
                    : "h-2 w-2 bg-slate-300 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}