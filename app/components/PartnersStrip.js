import Image from "next/image";

export default function PartnersStrip({
  partners = [],
  durationSeconds = 30,
}) {
  if (!partners.length) return null;

  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white py-3 shadow-sm sm:py-4"
      aria-label="Our partners"
    >
      <div
        className="flex w-max gap-2.5 sm:gap-3"
        style={{
          animation: `partnersMarquee ${durationSeconds}s linear infinite`,
          willChange: "transform",
        }}
        // Pause on hover via inline style — Tailwind's hover arbitrary variant
        // can't target a child's animation-play-state reliably across browsers
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {/* Original set — visible to screen readers */}
        {partners.map((partner, index) => (
          <PartnerCard key={index} partner={partner} />
        ))}

        {/* Duplicate set — hidden from screen readers, creates seamless loop */}
        <div className="contents" aria-hidden="true">
          {partners.map((partner, index) => (
            <PartnerCard key={`dup-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ partner }) {
  const content = (
    <article className="w-36 flex-none rounded-xl border border-slate-200 bg-[#fbfdff] p-2.5 shadow-sm sm:w-44 sm:p-3">
      <div className="relative h-12 w-full rounded-lg bg-white sm:h-14">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          sizes="(min-width: 640px) 176px, 144px"
          className="object-contain"
        />
      </div>
      <p className="mt-2 text-center text-[11px] font-medium text-slate-600">
        {partner.name}
      </p>
    </article>
  );

  if (partner.href) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4f8f] focus-visible:ring-offset-2 rounded-xl"
        aria-label={`Visit ${partner.name}`}
      >
        {content}
      </a>
    );
  }

  return content;
}