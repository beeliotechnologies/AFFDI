export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-7 max-w-3xl md:mb-10">
      <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-[#d7e2f0] bg-white/75 px-3 py-1.5 backdrop-blur-sm">
        <span className="h-px w-8 bg-[#090E58]/70" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#090E58]">AFFDI</p>
      </div>
      <h2 className="font-display text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:mt-4 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}