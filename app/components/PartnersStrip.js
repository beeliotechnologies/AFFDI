import Image from "next/image";

export default function PartnersStrip({ partners }) {
  const movingPartners = [...partners, ...partners];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white py-3 shadow-sm sm:py-4">
      <div className="flex w-max gap-2.5 animate-[partnersMarquee_30s_linear_infinite] hover:[animation-play-state:paused] sm:gap-3">
        {movingPartners.map((partner, index) => (
          <article key={`${partner.name}-${index}`} className="w-36 flex-none rounded-xl border border-slate-200 bg-[#fbfdff] p-2.5 shadow-sm sm:w-44 sm:p-3">
            <div className="relative h-12 w-full rounded-lg bg-white sm:h-14">
              <Image src={partner.logo} alt={partner.name} fill sizes="176px" className="object-contain" />
            </div>
            <p className="mt-2 text-center text-[11px] font-medium text-slate-600">{partner.name}</p>
          </article>
        ))}
      </div>
    </div>
  );
}