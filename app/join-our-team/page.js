import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { CheckCircle2 } from "lucide-react";

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

export const metadata = {
  title: "Join Our Team | AFFDI",
  description: "Explore career opportunities and join the AFFDI team committed to sustainable community development.",
  openGraph: {
    title: "Join Our Team | AFFDI",
    description: "Build your career at AFFDI and contribute to measurable community outcomes.",
    url: "/join-our-team",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Team | AFFDI",
    description: "Explore career opportunities with AFFDI.",
  },
};

const teamRoles = [
  {
    title: "Program Coordinators",
    department: "Programs",
    description: "Lead community engagement, monitoring, and implementation of water, education, shelter, and food security programs.",
    level: "Mid-level",
  },
  {
    title: "Monitoring & Evaluation Officer",
    department: "Systems",
    description: "Design and manage data collection systems, analyze program outcomes, and support evidence-based decision making.",
    level: "Mid to Senior",
  },
  {
    title: "Community Engagement Specialists",
    department: "Programs",
    description: "Facilitate household dialogues, community mobilization, and capacity building activities.",
    level: "Entry to Mid-level",
  },
  {
    title: "Finance & Administration Manager",
    department: "Operations",
    description: "Manage financial systems, donor compliance, and operational administration.",
    level: "Mid to Senior",
  },
  {
    title: "Geographic Information Systems (GIS) Analyst",
    department: "Systems",
    description: "Support spatial analysis, program mapping, and data visualization.",
    level: "Mid-level",
  },
  {
    title: "Community Health Facilitators",
    department: "Programs",
    description: "Coordinate health promotion, nutrition, and WASH behavior change activities.",
    level: "Entry to Mid-level",
  },
];

const coreValues = [
  {
    value: "Community-Led",
    description: "We place household and community agency at the center of everything we do.",
  },
  {
    value: "Evidence-Driven",
    description: "We use data and learning to improve program quality and community outcomes.",
  },
  {
    value: "Accountability",
    description: "We remain transparent and accountable to communities, partners, and stakeholders.",
  },
  {
    value: "Collaboration",
    description: "We work alongside local leaders, partners, and households as co-implementers.",
  },
  {
    value: "Excellence",
    description: "We pursue quality in relationships, systems, programs, and individual contributions.",
  },
  {
    value: "Learning Culture",
    description: "We embrace reflection, adaptation, and continuous professional growth.",
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

export default function JoinOurTeamPage() {
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
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-14 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <Link href="/" className="mb-5 inline-flex items-center text-sm text-blue-200 hover:text-white">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Join the AFFDI Team</h1>
          <p className="max-w-2xl text-base text-blue-100 sm:text-lg">
            Build your career with an organization committed to measurable community outcomes and professional growth.
          </p>
        </div>
      </section>

      {/* About Working with AFFDI */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">Why Work with AFFDI</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Impact-Focused:</strong> Contribute directly to household outcomes in water access, education, shelter, and food security.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Professional Development:</strong> Grow your skills in development, leadership, technical systems, and community engagement.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Collaborative Culture:</strong> Work with a team that values learning, reflection, and evidence-based decision making.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Structured Support:</strong> Benefit from regular supervision, capacity building, and mentorship.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mt-1 mr-4 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-slate-700"><strong>Community Connection:</strong> Work alongside household members and leaders driving their own development.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Core Values</h3>
            <div className="space-y-3">
              {coreValues.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide">{item.value}</h4>
                  <p className="text-slate-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-slate-100 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Team Roles & Opportunities</h2>
          <div className="space-y-4">
            {teamRoles.map((role, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{role.title}</h3>
                    <p className="text-slate-600 mb-2">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {role.department}
                      </span>
                      <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {role.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-center mt-8 italic">
            Don't see your ideal role? We're always looking for talented professionals. Send us your CV and areas of interest.
          </p>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <h2 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl">Our Hiring Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Application", desc: "Submit your CV and motivation letter" },
            { step: "2", title: "Screening", desc: "We review your background and fit" },
            { step: "3", title: "Interview", desc: "Meet with the hiring team and discuss the role" },
            { step: "4", title: "Onboarding", desc: "Join AFFDI with comprehensive orientation" },
          ].map((process, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">{process.step}</div>
                <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                <p className="text-blue-100 text-sm">{process.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-300 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">Ready to Make Impact with AFFDI?</h2>
          <p className="mb-8 text-base text-blue-100 sm:text-lg">
            Send your CV and a brief note about your interests and experience. We'll review your application and be in touch about opportunities that align with your profile.
          </p>
          <a
            href="mailto:info@affdi.org?subject=Job%20Application%20-%20AFFDI"
            className="inline-flex w-full justify-center rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition-colors duration-200 hover:bg-orange-600 sm:w-auto sm:px-8"
          >
            Submit Your Application
          </a>
          <p className="text-blue-200 text-sm mt-6">
            Questions? Contact: <a href="tel:+256752764415" className="underline">+256 752 764 415</a> | <a href="mailto:info@affdi.org" className="underline">info@affdi.org</a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SiteFooter links={footerLinks} contact={footerContact} copyright={footerCopyright} />
      </section>
    </main>
  );
}
