import Link from "next/link";
import Image from "next/image";
import { Compass, Eye, Gem, Goal, LineChart, Shield } from "lucide-react";
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

const values = [
  "Community-centered design and delivery",
  "Accountability and transparent reporting",
  "Partnership and co-creation",
  "Continuous learning and adaptation",
  "Dignity, inclusion, and equity",
  "Practical, sustainable impact",
];

const strategicPriorities = [
  {
    title: "Outcome-Oriented Program Delivery",
    text: "Design and execute interventions that move beyond activity completion toward measurable household and community improvements.",
    icon: Goal,
  },
  {
    title: "Strengthened Local Systems",
    text: "Work with local leadership and partner institutions so communities can sustain progress after direct project support.",
    icon: Shield,
  },
  {
    title: "Data-Driven Adaptation",
    text: "Use monitoring, feedback, and evidence to continuously improve implementation quality and resource efficiency.",
    icon: LineChart,
  },
];

const valuesInAction = [
  {
    title: "In Planning",
    text: "Community voices shape priorities, scope, and sequencing of interventions.",
  },
  {
    title: "In Delivery",
    text: "Teams coordinate with local actors to ensure relevance, inclusion, and ownership.",
  },
  {
    title: "In Reporting",
    text: "Performance is reviewed transparently with attention to both progress and gaps.",
  },
  {
    title: "In Learning",
    text: "Programs are refined through structured reflection and evidence-based adjustments.",
  },
];

export const metadata = {
  title: "Mission, Vision & Values | AFFDI",
  description: "AFFDI mission, vision, core values, and strategic priorities guiding our community development work.",
};

const missionHeroImage =
  "https://images.unsplash.com/photo-1574465636377-7781c5117a0c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function MissionVisionValuesPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-800">
      <SiteNav
        brand={brand}
        links={navLinks}
        donateHref="/donate"
        primaryActionLabel="Get Involved"
        menuSections={navSections}
        phone="0752764415"
        email="info@affdi.org"
        learnMoreHref="/about-us/mission-vision-and-values"
      />

      <section className="relative overflow-hidden py-14 text-white sm:py-16 md:py-24">
        <Image
          src={missionHeroImage}
          alt="Mission and vision leadership"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/75" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="relative z-10">
          <Link href="/about-us/who-we-are" className="mb-5 inline-flex items-center text-sm text-blue-200 hover:text-white">← Back to About Us</Link>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Mission, Vision & Values</h1>
          <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
            The principles that shape AFFDI strategy, partnerships, and day-to-day delivery.
          </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:px-8 md:py-20">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#090E58]">
            <Compass className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            To improve community resilience by delivering practical, inclusive, and accountable interventions in water access, education, shelter, and household wellbeing.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#090E58]">
            <Eye className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Vision</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Thriving communities in Eastern Uganda where households access essential services, participate in local development, and sustain long-term wellbeing.
          </p>
        </article>

        <article className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#090E58]">
            <Gem className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Core Values</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {values.map((value) => (
              <li key={value} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {value}
              </li>
            ))}
          </ul>
        </article>

        <article className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-slate-900">Strategic Priorities</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {strategicPriorities.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#EEF0FF] text-[#090E58]">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
          <h2 className="text-2xl font-semibold text-slate-900">Values in Action</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            AFFDI values are not abstract statements. They are used as practical standards for planning, implementation, review, and institutional learning.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {valuesInAction.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </article>
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
