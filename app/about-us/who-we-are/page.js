import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Handshake, HeartHandshake, MapPinned, ShieldCheck, Users } from "lucide-react";
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
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Contact", href: "/#contact" },
];

const footerContact = {
  address: "Kibuku District, Eastern Uganda",
  email: "info@affdi.org",
  phone: "+256 752 764 415",
};

export const metadata = {
  title: "Who We Are | AFFDI",
  description: "Learn who AFFDI is and how we work with communities across Eastern Uganda.",
};

const pillars = [
  {
    title: "Community-Led Action",
    text: "We co-design interventions with households, local leaders, and frontline actors.",
    icon: Users,
  },
  {
    title: "Collaborative Delivery",
    text: "We partner with institutions and practitioners for stronger and scalable outcomes.",
    icon: Handshake,
  },
  {
    title: "Evidence & Accountability",
    text: "We use data, feedback, and transparent reporting to improve program quality.",
    icon: BarChart3,
  },
  {
    title: "Human-Centered Impact",
    text: "Our work focuses on dignity, resilience, and practical improvements in daily life.",
    icon: HeartHandshake,
  },
];

const operatingModel = [
  {
    title: "1. Co-Assessment",
    text: "We conduct household and community-level assessments with local stakeholders to identify urgent and structural needs.",
  },
  {
    title: "2. Co-Design",
    text: "Programs are designed with local actors so interventions align with context, social realities, and existing capacities.",
  },
  {
    title: "3. Co-Implementation",
    text: "Delivery combines AFFDI technical support with frontline participation from local leadership and community volunteers.",
  },
  {
    title: "4. Co-Learning",
    text: "We track outcomes, gather feedback, and adapt implementation to improve quality, efficiency, and sustainability.",
  },
];

const footprint = [
  "Kibuku District",
  "Tirinyi Town Council",
  "Neighboring community clusters through local partnership networks",
];

const differentiators = [
  {
    title: "Household-Level Accountability",
    text: "We monitor progress at the household level to ensure interventions produce real and observable improvements.",
    icon: ShieldCheck,
  },
  {
    title: "Partnership-Driven Delivery",
    text: "We intentionally collaborate with local institutions and technical partners instead of running isolated projects.",
    icon: Handshake,
  },
  {
    title: "Data for Decisions",
    text: "Program adaptation is informed by routine monitoring data, feedback loops, and practical field evidence.",
    icon: BarChart3,
  },
];

const whoWeAreHeroImage =
  "https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFzc2lvbmF0ZSUyMGNhcmUlMjBpbiUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D";

export default function WhoWeArePage() {
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
        learnMoreHref="/about-us/who-we-are"
      />

      <section className="relative overflow-hidden py-14 text-white sm:py-16 md:py-24">
        <Image
          src={whoWeAreHeroImage}
          alt="Compassionate community care"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/75" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="relative z-10">
          <Link href="/" className="mb-5 inline-flex items-center text-sm text-blue-200 hover:text-white">← Back to Home</Link>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Who We Are</h1>
          <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
            AFFDI is a community-centered development organization advancing practical and measurable change in water access, education, shelter, and household resilience.
          </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            We work in close partnership with communities across Eastern Uganda to identify priority needs, implement responsive programs, and track outcomes over time. Our model combines local participation, technical support, and transparent reporting so that interventions remain both practical and sustainable.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Beyond direct service delivery, AFFDI also invests in local capability by strengthening leadership structures, implementation routines, and community-led follow-up. This helps ensure progress continues beyond a single project cycle.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pillars.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef4fb] text-[#1d4f8f]">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">How We Work in Practice</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {operatingModel.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef4fb] text-[#1d4f8f]">
              <MapPinned className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Where We Work</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {footprint.map((place) => (
                <li key={place} className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1d4f8f]" aria-hidden="true" />
                  <span>{place}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">What Makes AFFDI Distinct</h3>
            <div className="mt-4 space-y-4">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#eef4fb] text-[#1d4f8f]">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
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
