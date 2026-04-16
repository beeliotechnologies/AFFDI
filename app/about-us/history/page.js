import Link from "next/link";
import Image from "next/image";
import { CalendarClock, CircleCheckBig, Flag, Landmark, Milestone, Route } from "lucide-react";
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

const timeline = [
  {
    period: "Foundation Phase",
    title: "Community Needs Mapping",
    text: "AFFDI began by listening to households and local leadership structures to identify practical service gaps.",
    icon: CalendarClock,
  },
  {
    period: "Early Program Delivery",
    title: "Targeted Support Rollout",
    text: "Initial interventions prioritized urgent needs in water, education continuity, and household welfare.",
    icon: Flag,
  },
  {
    period: "Institutional Strengthening",
    title: "Systems, Data, and Partnerships",
    text: "AFFDI strengthened implementation systems, monitoring practices, and cross-sector collaboration.",
    icon: Landmark,
  },
  {
    period: "Current Stage",
    title: "Scale with Accountability",
    text: "The organization is focused on scalable impact with robust reporting, learning cycles, and community ownership.",
    icon: Milestone,
  },
];

const growthSnapshots = [
  {
    year: "2017",
    title: "Listening Before Intervention",
    text: "AFFDI’s earliest phase focused on household listening sessions and local leadership engagement to understand recurring barriers in water access, school attendance, and safety-net support.",
  },
  {
    year: "2019",
    title: "Pilot Delivery in Priority Communities",
    text: "Initial pilots introduced targeted support for vulnerable households and tested simple implementation models that could be managed with local participation.",
  },
  {
    year: "2021",
    title: "Monitoring, Learning, and Quality Controls",
    text: "Program execution became more structured through routine monitoring visits, outcome tracking, and periodic internal review of what worked and what needed redesign.",
  },
  {
    year: "2023",
    title: "Partnership and Systems Consolidation",
    text: "AFFDI expanded collaboration with institutions and community networks while strengthening financial controls, reporting systems, and implementation governance.",
  },
  {
    year: "2025+",
    title: "Scale with Accountability",
    text: "The current stage prioritizes scalable interventions, stronger data transparency, and shared ownership with communities and partner institutions.",
  },
];

const learningMilestones = [
  "Short-term relief is most effective when connected to long-term resilience planning.",
  "Programs improve faster when household feedback is treated as implementation data.",
  "Local partnerships are strongest when roles, responsibilities, and reporting expectations are clear.",
  "Sustainable change requires both infrastructure and behavior-focused support.",
];

const currentPriorities = [
  {
    title: "Program Depth",
    text: "Increase quality and continuity in communities where AFFDI already works, with tighter follow-up and stronger referral systems.",
  },
  {
    title: "Program Breadth",
    text: "Extend tested intervention models to additional communities without weakening accountability standards.",
  },
  {
    title: "Evidence Culture",
    text: "Improve how outcome data is captured, interpreted, and shared with communities and stakeholders.",
  },
];

export const metadata = {
  title: "History | AFFDI",
  description: "Explore the history and growth journey of AFFDI.",
};

const historyHeroImage =
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlzaW9ufGVufDB8fDB8fHww";

export default function HistoryPage() {
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
        learnMoreHref="/about-us/history"
      />

      <section className="relative overflow-hidden py-14 text-white sm:py-16 md:py-24">
        <Image
          src={historyHeroImage}
          alt="Community vision and growth"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/75" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="relative z-10">
          <Link href="/about-us/who-we-are" className="mb-5 inline-flex items-center text-sm text-blue-200 hover:text-white">← Back to About Us</Link>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our History</h1>
          <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
            AFFDI has grown from local response efforts into a structured community development organization focused on measurable outcomes.
          </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <article className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">From Local Response to Structured Institution</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            AFFDI’s journey has been iterative. We began with practical responses to household-level challenges, then progressively built the systems, partnerships, and governance needed for sustained impact. Over time, our focus shifted from activity completion to measurable outcomes — not only what was delivered, but how lives and community capacity improved.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            This evolution shaped our operating culture: listen first, implement with discipline, review evidence, and adapt quickly. The result is a stronger organization able to support both urgent needs and long-term resilience pathways.
          </p>
        </article>

        <div className="space-y-5">
          {timeline.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#090E58]">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#090E58]">{item.period}</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <section className="mt-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#090E58]">
            <Route className="h-3.5 w-3.5" aria-hidden="true" />
            Historical Snapshots
          </div>
          <div className="space-y-4">
            {growthSnapshots.map((item) => (
              <article key={item.year + item.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#090E58]">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Key Lessons We Carry Forward</h3>
            <ul className="mt-4 space-y-3">
              {learningMilestones.map((lesson) => (
                <li key={lesson} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#090E58]" aria-hidden="true" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Current Priorities</h3>
            <div className="mt-4 space-y-4">
              {currentPriorities.map((priority) => (
                <div key={priority.title}>
                  <h4 className="font-semibold text-slate-900">{priority.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{priority.text}</p>
                </div>
              ))}
            </div>
          </article>
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
