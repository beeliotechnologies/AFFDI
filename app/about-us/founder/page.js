import Link from "next/link";
import { BadgeCheck, Building2, ClipboardCheck, Lightbulb, Users } from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

const brand = {
  name: "AFFDI",
  mark: "AF",
  tagline: "Alliances for Fundamental Development Initiative",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Impact", href: "/#impact" },
  {
    label: "What We Do",
    href: "/what-we-do",
    items: [
      { label: "All Services", href: "/what-we-do" },
      { label: "Safe Water Projects", href: "/programs/safe-water-projects" },
      { label: "Shelter Support", href: "/programs/shelter-support" },
      { label: "Education & School Infrastructure", href: "/programs/education-school-infrastructure" },
      { label: "Household Support", href: "/programs/household-support" },
      { label: "Food Security", href: "/programs/food-security" },
      { label: "Community Empowerment", href: "/programs/community-empowerment" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us/who-we-are",
    items: [
      { label: "Who We Are", href: "/about-us/who-we-are" },
      { label: "History", href: "/about-us/history" },
      { label: "Mission, Vision & Values", href: "/about-us/mission-vision-and-values" },
      { label: "Founder", href: "/about-us/founder" },
    ],
  },
  {
    label: "Get Involved",
    href: "#get-involved",
    items: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Join Our Team", href: "/join-our-team" },
      { label: "Partner With Us", href: "/partner-with-us" },
    ],
  },
  { label: "Contact", href: "/#contact" },
];

const navSections = [
  {
    id: "what-we-do",
    label: "What We Do",
    title: "Programs & Services",
    items: [
      { label: "All Services", href: "/what-we-do" },
      { label: "Safe Water Projects", href: "/programs/safe-water-projects" },
      { label: "Shelter Support", href: "/programs/shelter-support" },
      { label: "Education & School Infrastructure", href: "/programs/education-school-infrastructure" },
      { label: "Household Support", href: "/programs/household-support" },
      { label: "Food Security", href: "/programs/food-security" },
      { label: "Community Empowerment", href: "/programs/community-empowerment" },
    ],
  },
  {
    id: "about-us",
    label: "About Us",
    title: "About Us at AFFDI",
    items: [
      { label: "Who We Are", href: "/about-us/who-we-are" },
      { label: "History", href: "/about-us/history" },
      { label: "Mission, Vision & Values", href: "/about-us/mission-vision-and-values" },
      { label: "Founder", href: "/about-us/founder" },
    ],
  },
  {
    id: "get-involved",
    label: "Get Involved",
    title: "Get Involved",
    items: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Join Our Team", href: "/join-our-team" },
      { label: "Partner With Us", href: "/partner-with-us" },
    ],
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about-us/who-we-are" },
  { label: "History", href: "/about-us/history" },
  { label: "Mission, Vision & Values", href: "/about-us/mission-vision-and-values" },
  { label: "Founder", href: "/about-us/founder" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/#contact" },
];

const footerContact = {
  address: "Kibuku District, Eastern Uganda",
  email: "info@affdi.org",
  phone: "+256 752 764 415",
};

export const metadata = {
  title: "Founder | AFFDI",
  description: "Learn about the founder vision behind AFFDI.",
};

const leadershipPrinciples = [
  {
    title: "Community First",
    text: "Sustainable solutions start by listening to people closest to the challenge.",
    icon: Users,
  },
  {
    title: "Practical Innovation",
    text: "Build simple, workable models that communities can maintain and grow.",
    icon: Lightbulb,
  },
  {
    title: "Integrity & Accountability",
    text: "Lead with transparency, measurable outcomes, and responsible stewardship.",
    icon: BadgeCheck,
  },
];

const founderJourney = [
  {
    stage: "Early Motivation",
    title: "Responding to Visible Community Gaps",
    text: "The founder’s work began with direct exposure to households struggling with preventable barriers in water, education continuity, and basic wellbeing.",
  },
  {
    stage: "Organizational Formation",
    title: "Building AFFDI as a Local Platform",
    text: "AFFDI was formed to create a structured, accountable platform capable of coordinated response and long-term community partnership.",
  },
  {
    stage: "Institutional Growth",
    title: "From Initiative to Systems",
    text: "Leadership emphasized governance, team capability, monitoring routines, and partnership standards needed for sustainable program delivery.",
  },
  {
    stage: "Current Era",
    title: "Scale with Integrity",
    text: "Today, founder leadership continues to prioritize quality, transparency, and shared ownership as AFFDI expands its reach.",
  },
];

const legacyCommitments = [
  {
    title: "Build Institutions, Not One-Off Projects",
    text: "Every intervention should contribute to stronger local systems and lasting community capability.",
    icon: Building2,
  },
  {
    title: "Protect Trust Through Accountability",
    text: "Community trust is earned through clarity of purpose, ethical conduct, and transparent reporting.",
    icon: ClipboardCheck,
  },
  {
    title: "Keep Learning Close to the Field",
    text: "Program design must keep evolving through frontline feedback, data, and lived experience.",
    icon: BadgeCheck,
  },
];

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-800">
      <SiteNav
        brand={brand}
        links={navLinks}
        donateHref="/donate"
        primaryActionLabel="Get Involved"
        menuSections={navSections}
        phone="0752764415"
        email="info@affdi.org"
        learnMoreHref="/about-us/founder"
      />

      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-14 text-white sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <Link href="/about-us/who-we-are" className="mb-5 inline-flex items-center text-sm text-blue-200 hover:text-white">← Back to About Us</Link>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Founder</h1>
          <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
            AFFDI was built on the conviction that local partnerships, accountability, and practical action can shift long-term outcomes for families.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Founder’s Note</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            "We created AFFDI to bridge urgent needs and long-term resilience. Our approach is simple: listen deeply, act collaboratively, and remain accountable for results. Every intervention should strengthen local capability and restore dignity to families navigating difficult conditions."
          </p>
          <p className="mt-4 text-sm font-semibold text-[#1d4f8f]">— AFFDI Founding Leadership</p>
        </article>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Leadership Journey</h2>
          <div className="mt-5 space-y-4">
            {founderJourney.map((item) => (
              <article key={item.stage} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1d4f8f]">{item.stage}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {leadershipPrinciples.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef4fb] text-[#1d4f8f]">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Enduring Commitments</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {legacyCommitments.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#eef4fb] text-[#1d4f8f]">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <SiteFooter
          links={footerLinks}
          contact={footerContact}
          copyright={`© ${new Date().getFullYear()} AFFDI. All rights reserved.`}
        />
      </section>
    </main>
  );
}
