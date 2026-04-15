import Link from "next/link";
import Image from "next/image";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { BarChart3, Handshake, Leaf, Lightbulb, ShieldCheck, Target } from "lucide-react";

const brand = {
  name: "AFFDI",
  mark: "AF",
  tagline: "Alliances for Fundamental Development Initiative",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Impact", href: "/#impact" },
  { label: "Our Work", href: "/#programs" },
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
  title: "Partner With Us | AFFDI",
  description: "Explore partnership opportunities to co-design and co-fund sustainable community development interventions.",
  openGraph: {
    title: "Partner With Us | AFFDI",
    description: "Co-design and co-fund sustainable interventions with AFFDI.",
    url: "/partner-with-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With Us | AFFDI",
    description: "Explore partnership opportunities with AFFDI.",
  },
};

const partnershipModels = [
  {
    title: "Co-Funded Programs",
    description: "Share project costs and governance with AFFDI in specific geographic zones or thematic areas.",
    benefits: ["Joint decision-making", "Aligned budgets", "Shared monitoring", "Community accountability"],
  },
  {
    title: "Technical Partnerships",
    description: "Provide specialized expertise in health, education, water engineering, or other technical domains.",
    benefits: ["Capacity building", "Quality assurance", "Knowledge sharing", "Peer learning"],
  },
  {
    title: "Research & Learning",
    description: "Collaborate on evaluations, evidence generation, and learning studies to improve program quality.",
    benefits: ["Evidence-based insights", "Impact documentation", "Peer publications", "Innovation learning"],
  },
  {
    title: "Resource Provision",
    description: "Provide materials, equipment, or services that strengthen AFFDI program delivery.",
    benefits: ["Direct impact", "Cost efficiency", "Sustainability", "Community benefit"],
  },
];

const partnerTypes = [
  {
    type: "NGOs & Social Enterprises",
    description: "Co-implement complementary programs in water access, education, health, livelihoods, or protection.",
  },
  {
    type: "Government & Local Authorities",
    description: "Align programming with district development plans and strengthen local systems.",
  },
  {
    type: "Corporations & Foundations",
    description: "Fund specific programs or geographic zones aligned with corporate social responsibility objectives.",
  },
  {
    type: "Academic & Research Institutions",
    description: "Conduct evaluations, pilot innovations, and generate evidence on program effectiveness.",
  },
  {
    type: "Professional & Trade Associations",
    description: "Provide technical expertise, training, and quality assurance in specialized areas.",
  },
];

const whyPartner = [
  {
    icon: Target,
    title: "Measurable Outcomes",
    desc: "Partner with an organization deeply committed to documenting and improving community outcomes.",
  },
  {
    icon: Handshake,
    title: "Community-Centered",
    desc: "All programs center household agency and community-driven approaches, not top-down solutions.",
  },
  {
    icon: BarChart3,
    title: "Evidence-Based",
    desc: "We use rigorous data, learning, and reflection to adapt and improve programs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Friendly",
    desc: "We test new approaches, learn from failures, and scale what works.",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    desc: "Programs are designed to strengthen local systems and household behaviors for lasting change.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Governance",
    desc: "Clear roles, decision-making processes, and accountability mechanisms for all partners.",
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Impact", href: "/#impact" },
  { label: "Our Work", href: "/#programs" },
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

const partnerHeroImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFydG5lcnNoaXB8ZW58MHx8MHx8fDA%3D";

export default function PartnerWithUsPage() {
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
          src={partnerHeroImage}
          alt="AFFDI partnership collaboration"
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
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Partner With AFFDI</h1>
          <p className="max-w-2xl text-base text-blue-100 sm:text-lg">
            Co-design and co-fund sustainable interventions that strengthen water access, education, shelter, food security, and community resilience.
          </p>
          </div>
        </div>
      </section>

      {/* Partnership Vision */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">Our Partnership Philosophy</h2>
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg border border-blue-200 p-6 sm:p-8 md:p-12">
          <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            AFFDI partners with organizations, government, foundations, and institutions that share our commitment to community agency and measurable outcomes. We believe the strongest partnerships are those where partners:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-3 flex-shrink-0">•</span>
              <span className="text-slate-700">Center household and community voices in program design, implementation, and decision-making</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-3 flex-shrink-0">•</span>
              <span className="text-slate-700">Align on monitoring household outcomes, not just activity completion</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-3 flex-shrink-0">•</span>
              <span className="text-slate-700">Commit to transparent governance with clear roles and decision-making processes</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-3 flex-shrink-0">•</span>
              <span className="text-slate-700">Embrace learning, adaptation, and continuous improvement</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-slate-100 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Why Partner With AFFDI</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyPartner.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef4fb] text-[#1d4f8f]">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <h2 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl">Partnership Models</h2>
        <div className="space-y-6">
          {partnershipModels.map((model, idx) => (
            <div key={idx} className="border-l-4 border-orange-500 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{model.title}</h3>
              <p className="text-slate-600 mb-4">{model.description}</p>
              <div className="flex flex-wrap gap-2">
                {model.benefits.map((benefit, bidx) => (
                  <span key={bidx} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Types of Partners We Work With</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((partner, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{partner.type}</h3>
                <p className="text-slate-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">Partnership Development Process</h2>
        <div className="grid md:grid-cols-4 gap-4 md:gap-2">
          {[
            { step: "1", title: "Inquiry", desc: "Share your partnership interests and objectives" },
            { step: "2", title: "Alignment", desc: "Explore shared values and program alignment" },
            { step: "3", title: "Design", desc: "Co-develop partnership terms and implementation plan" },
            { step: "4", title: "Implementation", desc: "Execute with transparent governance and monitoring" },
          ].map((process, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 text-center min-h-full flex flex-col justify-between">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{process.step}</div>
                  <h3 className="font-bold text-base md:text-lg mb-1">{process.title}</h3>
                </div>
                <p className="text-blue-100 text-xs md:text-sm">{process.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-slate-300 text-xl">
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">Ready to Explore Partnership?</h2>
          <p className="mb-8 text-base text-blue-100 sm:text-lg">
            Tell us about your organization, partnership vision, and objectives. We'll review your inquiry and schedule a discussion to explore mutual fit and opportunities.
          </p>
          <a
            href="mailto:info@affdi.org?subject=Partnership%20Inquiry%20-%20AFFDI"
            className="inline-flex w-full justify-center rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition-colors duration-200 hover:bg-orange-600 sm:w-auto sm:px-8"
          >
            Start Partnership Inquiry
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
