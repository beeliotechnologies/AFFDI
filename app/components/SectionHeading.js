export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6 max-w-3xl md:mb-9">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-10 bg-[#1d4f8f]" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d4f8f]">AFFDI</p>
      </div>
      <h2 className="font-display text-xl font-bold leading-tight text-slate-900 sm:text-2xl md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:mt-3 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}