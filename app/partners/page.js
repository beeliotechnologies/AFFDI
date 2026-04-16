import Image from "next/image";
import Link from "next/link";
import { partners } from "../data/partners";

export const metadata = {
  title: "Partners & Donors | AFFDI",
  description: "Meet the organizations and institutions supporting AFFDI community development work in Uganda.",
  openGraph: {
    title: "Partners & Donors | AFFDI",
    description: "Meet the organizations and institutions supporting AFFDI community development work in Uganda.",
    url: "/partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners & Donors | AFFDI",
    description: "Meet the organizations and institutions supporting AFFDI community development work in Uganda.",
  },
};

export default function PartnersPage() {
  return (
    <main id="main-content" className="min-h-screen bg-transparent text-slate-800">
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <Link href="/#main-content" className="text-sm font-semibold text-[#090E58] hover:underline">
          ← Back to home
        </Link>

        <header className="mt-5 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#090E58]">Who We Work With</p>
          <h1 className="font-display mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our Partners & Donors</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            AFFDI collaborates with institutions, donors, and technical allies committed to practical,
            accountable community development outcomes.
          </p>
        </header>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {partners.map((partner) => (
            <article key={partner.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="relative h-20 w-full">
                <Image src={partner.logo} alt={partner.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
              </div>

              <h2 className="font-display mt-4 text-xl font-semibold text-slate-900">{partner.name}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#090E58]">{partner.role}</p>
              <p className="mt-2 text-sm text-slate-600">{partner.support}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{partner.story}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
