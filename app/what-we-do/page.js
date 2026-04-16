import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { programs } from "../data/programs";

const brand = {
  name: "AFFDI",
  mark: "AF",
  tagline: "Alliances for Fundamental Development Initiative",
};

const serviceItems = [
  { label: "All Services", href: "/what-we-do" },
  { label: "Safe Water Projects", href: "/programs/safe-water-projects" },
  { label: "Shelter Support", href: "/programs/shelter-support" },
  { label: "Education & School Infrastructure", href: "/programs/education-school-infrastructure" },
  { label: "Household Support", href: "/programs/household-support" },
  { label: "Food Security", href: "/programs/food-security" },
  { label: "Community Empowerment", href: "/programs/community-empowerment" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Impact", href: "/#impact" },
  {
    label: "What We Do",
    href: "/what-we-do",
    items: serviceItems,
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
    items: serviceItems,
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
  { label: "What We Do", href: "/what-we-do" },
  { label: "Safe Water Projects", href: "/programs/safe-water-projects" },
  { label: "Shelter Support", href: "/programs/shelter-support" },
  { label: "Education & School Infrastructure", href: "/programs/education-school-infrastructure" },
  { label: "Food Security", href: "/programs/food-security" },
  { label: "Community Empowerment", href: "/programs/community-empowerment" },
  { label: "Contact", href: "/#contact" },
];

const footerContact = {
  address: "Kibuku District, Eastern Uganda",
  email: "info@affdi.org",
  phone: "+256 752 764 415",
};

export const metadata = {
  title: "What We Do | AFFDI",
  description: "Explore AFFDI services and program areas across water access, shelter, education, household support, food security, and community empowerment.",
};

export default function WhatWeDoPage() {
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
        learnMoreHref="/what-we-do"
      />

      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-14 text-white sm:py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <Link href="/" className="mb-5 inline-flex items-center text-sm text-blue-200 hover:text-white">← Back to Home</Link>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">What We Do</h1>
          <p className="mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
            AFFDI delivers practical services that improve household resilience and community wellbeing across Eastern Uganda.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#090E58]">
                <HeartPulse className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#090E58]">{service.focus}</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              <div className="mt-4 space-y-1 text-xs text-slate-500">
                <p><span className="font-semibold">Coverage:</span> {service.coverage}</p>
                <p><span className="font-semibold">Beneficiaries:</span> {service.beneficiaries}</p>
                <p><span className="font-semibold">Location:</span> {service.location}</p>
              </div>
              <Link href={service.href} className="mt-5 inline-flex items-center text-sm font-semibold text-[#090E58] hover:underline">
                View service
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
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
