import Link from "next/link";
import Image from "next/image";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { CheckCircle2 } from "lucide-react";

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

export const metadata = {
  title: "Volunteer | AFFDI",
  description: "Join AFFDI volunteers making direct impact in water access, education, shelter, and food security programs.",
  openGraph: {
    title: "Volunteer | AFFDI",
    description: "Join AFFDI volunteers making direct impact in Eastern Uganda communities.",
    url: "/volunteer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer | AFFDI",
    description: "Volunteer with AFFDI and contribute to sustainable community outcomes.",
  },
};

const volunteerRoles = [
  {
    title: "Field Coordinators",
    description: "Support community assessments, household outreach, and program monitoring in villages.",
    time: "Flexible (part-time or full-time)",
  },
  {
    title: "Community Mobilizers",
    description: "Engage households, conduct awareness sessions, and facilitate community dialogues on priority issues.",
    time: "2-4 days/week",
  },
  {
    title: "Technical Specialists",
    description: "Support water system repairs, construction oversight, and maintenance training.",
    time: "Project-based",
  },
  {
    title: "Program Support",
    description: "Assist with data collection, reporting, and administrative support at our coordination hubs.",
    time: "Flexible scheduling",
  },
];

const impactAreas = [
  {
    area: "Clean Water Access",
    contribution: "Help communities implement and maintain safe water points.",
  },
  {
    area: "Education Support",
    contribution: "Strengthen school programs and learning environments.",
  },
  {
    area: "Shelter & Safety",
    contribution: "Support vulnerable households with housing improvements.",
  },
  {
    area: "Food Security",
    contribution: "Facilitate livelihood and nutrition programming.",
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Impact", href: "/#impact" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "About Us", href: "/about-us/who-we-are" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Join Our Team", href: "/join-our-team" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Contact", href: "/#contact" },
];

const footerContact = {
  address: "Kibuku District, Eastern Uganda",
  email: "info@affdi.org",
  phone: "+256 752 764 415",
};

const footerCopyright = `© ${new Date().getFullYear()} AFFDI. All rights reserved.`;

const volunteerHeroImage =
  "https://plus.unsplash.com/premium_photo-1681152790486-62ed5ef2055a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
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

      {/* Header */}
      <section className="relative overflow-hidden text-white py-14 sm:py-16 md:py-24">
        <Image
          src={volunteerHeroImage}
          alt="AFFDI volunteers supporting communities"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/75" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="relative z-10">
          <Link href="/" className="mb-5 inline-flex items-center text-sm text-blue-200 hover:text-white">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Join Our Volunteer Community</h1>
          <p className="max-w-2xl text-base text-blue-100 sm:text-lg">
            Make direct impact alongside community members, local leaders, and AFFDI teams across Eastern Uganda.
          </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">Why Volunteer With AFFDI</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Direct Impact:</strong> See tangible outcomes in household water access, school quality, and family resilience.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Skills Development:</strong> Build experience in development, community facilitation, and technical programs.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Community Connection:</strong> Work alongside local leaders and household members driving change in their own communities.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Flexible Engagement:</strong> Volunteer roles range from regular part-time to project-based opportunities.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Meaningful Team:</strong> Join dedicated professionals committed to measurable community outcomes.</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 border border-blue-100">
            <h3 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">Volunteer Roles Available</h3>
            <div className="space-y-4">
              {volunteerRoles.map((role, idx) => (
                <div key={idx} className="pb-4 border-b border-blue-100 last:border-b-0">
                  <h4 className="font-bold text-slate-900 text-lg">{role.title}</h4>
                  <p className="text-slate-600 text-sm mt-1">{role.description}</p>
                  <p className="text-orange-600 text-xs font-semibold mt-2">Time: {role.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="bg-slate-100 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Impact Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {impactAreas.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.area}</h3>
                <p className="text-slate-600">{item.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">Volunteer Requirements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <CheckCircle2 className="mb-3 h-8 w-8 text-blue-600" aria-hidden="true" />
            <h3 className="font-bold text-slate-900 mb-2">Commitment</h3>
            <p className="text-slate-700 text-sm">Reliable availability for your chosen volunteer role and willingness to complete assigned activities.</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
            <CheckCircle2 className="mb-3 h-8 w-8 text-orange-600" aria-hidden="true" />
            <h3 className="font-bold text-slate-900 mb-2">Community Focus</h3>
            <p className="text-slate-700 text-sm">Genuine interest in household outcomes and community-driven approaches to development.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6">
            <CheckCircle2 className="mb-3 h-8 w-8 text-slate-600" aria-hidden="true" />
            <h3 className="font-bold text-slate-900 mb-2">Orientation</h3>
            <p className="text-slate-700 text-sm">Completion of AFFDI volunteer orientation and commitment to program values and protocols.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">Ready to Make a Difference?</h2>
          <p className="mb-8 text-base text-blue-100 sm:text-lg">
            Send us your volunteer inquiry with a bit about your interests and availability. We'll get in touch with current opportunities that match your profile.
          </p>
          <a
            href="mailto:info@affdi.org?subject=Volunteer%20Interest%20-%20AFFDI"
            className="inline-flex w-full justify-center rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition-colors duration-200 hover:bg-orange-600 sm:w-auto sm:px-8"
          >
            Express Volunteer Interest
          </a>
          <p className="text-blue-200 text-sm mt-6">
            Contact: <a href="tel:+256752764415" className="underline">+256 752 764 415</a> | <a href="mailto:info@affdi.org" className="underline">info@affdi.org</a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SiteFooter links={footerLinks} contact={footerContact} copyright={footerCopyright} />
      </section>
    </main>
  );
}
