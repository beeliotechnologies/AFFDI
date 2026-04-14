"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_SLIDES = [
  {
    eyebrow: "Humanitarian Action",
    title: "Improving Community Resilience",
    description:
      "We are committed to saving lives, alleviating suffering, and building resilience in vulnerable communities across Uganda.",
    backgroundImage: "/WhatsApp%20Image%202026-04-05%20at%201.16.51%20PM.jpeg",
    secondaryLabel: "Why AFFDI",
    secondaryHref: "#about",
  },
];

export default function HeroBanner({
  slides = [],
  intervalMs = 6000,
}) {
  const normalizedSlides = useMemo(
    () => (slides.length > 0 ? slides : DEFAULT_SLIDES),
    [slides]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const announceRef = useRef(null);

  useEffect(() => {
    if (normalizedSlides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % normalizedSlides.length;
        setPrevIndex(prev);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [normalizedSlides.length, intervalMs]);

  // Announce slide changes to screen readers
  useEffect(() => {
    if (announceRef.current) {
      announceRef.current.textContent = normalizedSlides[activeIndex].title;
    }
  }, [activeIndex, normalizedSlides]);

  const handleDotClick = (index) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <section className="relative flex min-h-[72vh] w-full items-end overflow-hidden bg-slate-900 md:min-h-[86vh]">
      {/* Screen reader live region */}
      <p
        ref={announceRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Slide backgrounds — crossfade via opacity */}
      <div className="absolute inset-0">
        {normalizedSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            {slide.backgroundVideo ? (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={slide.backgroundImage}
              >
                <source src={slide.backgroundVideo} type="video/mp4" />
              </video>
            ) : slide.backgroundImage ? (
              <Image
                src={slide.backgroundImage}
                alt=""
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className="object-cover"
              />
            ) : null}
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-20 sm:px-6 md:px-8 md:pb-16 md:pt-28">
        <div
          key={activeIndex}
          className="max-w-3xl animate-[fadeUp_0.6s_ease_both]"
        >
          {normalizedSlides[activeIndex].eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-sm md:mb-5 md:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#ef8b1e]" />
              {normalizedSlides[activeIndex].eyebrow}
            </div>
          )}

          <h1 className="mb-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:mb-5 md:text-5xl">
            {normalizedSlides[activeIndex].title}
          </h1>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:mb-8 md:text-lg">
            {normalizedSlides[activeIndex].description}
          </p>

          {normalizedSlides[activeIndex].highlights?.length ? (
            <div className="mb-5 flex flex-wrap gap-2 md:mb-6">
              {normalizedSlides[activeIndex].highlights.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/70 backdrop-blur-sm"
                >
                  {point}
                </span>
              ))}
            </div>
          ) : null}

          <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            {normalizedSlides[activeIndex].actionHref &&
              normalizedSlides[activeIndex].actionLabel && (
                <a
                  href={normalizedSlides[activeIndex].actionHref}
                  className="inline-flex items-center justify-center rounded-xl bg-[#ef8b1e] px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-[#de7f17] sm:px-7 sm:py-3"
                >
                  {normalizedSlides[activeIndex].actionLabel}
                </a>
              )}
            {normalizedSlides[activeIndex].secondaryHref &&
              normalizedSlides[activeIndex].secondaryLabel && (
                <a
                  href={normalizedSlides[activeIndex].secondaryHref}
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-7 sm:py-3"
                >
                  {normalizedSlides[activeIndex].secondaryLabel}
                </a>
              )}
          </div>

          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/40 md:mt-6">
            Community-led delivery · Transparent reporting · Long-term resilience
          </p>
        </div>

        {/* Slide dots */}
        {normalizedSlides.length > 1 && (
          <nav aria-label="Slide navigation" className="mt-8 flex items-center gap-2">
            {normalizedSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => handleDotClick(index)}
                className={`rounded-full border-0 transition-all duration-300 ${
                  index === activeIndex
                    ? "h-2 w-8 bg-[#ef8b1e]"
                    : "h-2 w-2 cursor-pointer bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </nav>
        )}
      </div>

      {/* Keyframe — add to globals.css if not already present */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}