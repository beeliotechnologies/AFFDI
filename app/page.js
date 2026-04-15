import CauseGrid from './components/CauseGrid';
import { causes } from './data/causes';
import { partners } from './data/partners';
import { programs } from './data/programs';
import DonateBanner from './components/DonateBanner';
import HeroBanner from './components/HeroBanner';
import ImpactStats from './components/ImpactStats';
import Image from 'next/image';
import PartnersStrip from './components/PartnersStrip';
import ProgramGrid from './components/ProgramGrid';
import SectionHeading from './components/SectionHeading';
import SiteFooter from './components/SiteFooter';
import SiteNav from './components/SiteNav';

const navLinks = [
  { label: 'Home', href: '#main-content' },
  { label: 'Impact', href: '#impact' },
  { label: 'Our Work', href: '#programs' },
  {
    label: 'About Us',
    href: '/about-us/who-we-are',
    items: [
      { label: 'Who We Are', href: '/about-us/who-we-are' },
      { label: 'History', href: '/about-us/history' },
      { label: 'Mission, Vision & Values', href: '/about-us/mission-vision-and-values' },
      { label: 'Founder', href: '/about-us/founder' },
    ],
  },
  {
    label: 'Get Involved',
    href: '#get-involved',
    items: [
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Join Our Team', href: '/join-our-team' },
      { label: 'Partner With Us', href: '/partner-with-us' },
    ],
  },
  { label: 'Contact', href: '#contact' },
];

const navSections = [
  {
    id: 'about-us',
    label: 'About Us',
    title: 'About Us at AFFDI',
    items: [
      { label: 'Who We Are', href: '/about-us/who-we-are' },
      { label: 'History', href: '/about-us/history' },
      { label: 'Mission, Vision & Values', href: '/about-us/mission-vision-and-values' },
      { label: 'Founder', href: '/about-us/founder' },
    ],
  },
  {
    id: 'what-we-do',
    label: 'What We Do',
    title: 'Programs & Causes',
    items: [
      { label: 'Water & Sanitation', href: '#programs' },
      { label: 'Education & Shelter', href: '#programs' },
      { label: 'Food Security', href: '#programs' },
      { label: 'Our Causes', href: '/#programs' },
    ],
  },
  {
    id: 'where-we-work',
    label: 'Where We Work',
    title: 'Locations',
    items: [
      { label: 'Kibuku District', href: '#about' },
      { label: 'Tirinyi Town Council', href: '#about' },
      { label: 'Community Partnerships', href: '#partner' },
    ],
  },
  {
    id: 'get-involved',
    label: 'Get Involved',
    title: 'Get Involved',
    items: [
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Join Our Team', href: '/join-our-team' },
      { label: 'Partner With Us', href: '/partner-with-us' },
    ],
  },
  {
    id: 'news-stories',
    label: 'News & Stories',
    title: 'Knowledge Hub',
    items: [
      { label: 'Impact Stories', href: '#updates' },
      { label: 'Program Updates', href: '#updates' },
      { label: 'Reports', href: '#updates' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
];

const gallery = [
  '/WhatsApp%20Image%202026-04-05%20at%201.16.51%20PM.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.16.52%20PM%20%281%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.16.52%20PM.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.16.53%20PM%20%281%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.16.53%20PM%20%282%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.16.53%20PM.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.06%20PM.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.07%20PM%20%281%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.07%20PM%20%282%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.07%20PM.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.08%20PM%20%281%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.08%20PM%20%282%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.08%20PM.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.10%20PM%20%281%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.10%20PM%20%282%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.10%20PM.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.11%20PM%20%281%29.jpeg',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.11%20PM.jpeg',
  '/SchoolOutreachActivity.webp',
  '/WhatsApp%20Image%202026-04-05%20at%201.17.12%20PM.jpeg',
];

const heroImages = [
  'https://images.unsplash.com/photo-1580684828580-d5a9a5d6079e?q=90&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?q=90&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1547226706-af7e2c20bcea?q=90&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
const fieldMoments = [
  {
    src: gallery[17],
    title: 'Household Follow-Up Visit',
    note: 'Field team checking post-support living conditions with caregivers.',
  },
  {
    src: gallery[18],
    title: 'Community Planning Session',
    note: 'Local leaders and volunteers aligning priorities for the next cycle.',
  },
  {
    src: gallery[19],
    title: 'School Outreach Activity',
    note: 'Learners and teachers engaged in practical support conversations.',
  },
  {
    src: gallery[6],
    title: 'Program Delivery Day',
    note: 'On-site coordination for household and community assistance.',
  },
];

const fieldVideos = [
  {
    src: '/videos/water.mp4',
    title: 'Water Access in Action',
    note: 'Short field clip from water-point support activities.',
    poster: gallery[10],
  },
  {
    src: '/videos/water2.mp4',
    title: 'Community Water Session',
    note: 'Community engagement and practical service coordination.',
    poster: gallery[11],
  },
  {
    src: '/videos/water3.mp4',
    title: 'Household Impact Story',
    note: 'A quick update from ongoing household support work.',
    poster: gallery[12],
  },
];

const donateImage = 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?q=90&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const heroSlides = [
  {
    eyebrow: 'Alliance For Fundamental Development Initiative',
    title: 'Improving Community Resilience in 12+ Eastern Uganda Communities',
    description:
      'AFFDI delivers practical water, shelter, education, and household recovery programs that have reached over 30,000 people across Kibuku and surrounding districts.',
    backgroundImage: heroImages[0],
    actionHref: '#programs',
    actionLabel: 'Explore Our Programs',
    highlights: ['Kibuku District', 'Community-Led Delivery', 'Transparent Reporting'],
  },
  {
    eyebrow: 'Water, Education, Shelter',
    title: 'From Water Access to Safer Schools, We Support Families End-to-End',
    description:
      'Our teams work with local leaders to restore water points, strengthen classrooms, and improve shelter safety for vulnerable households.',
    backgroundImage: heroImages[1],
    actionHref: '#about',
    actionLabel: 'Learn More About AFFDI',
    highlights: ['Women & Children First', 'School-Centered Support', 'Long-Term Outcomes'],
  },
  {
    eyebrow: 'Impact For Vulnerable Families',
    title: 'See Measurable Progress Across Water, Schools, and Households',
    description:
      'Follow AFFDI outcomes from safer water access and stronger school environments to practical household resilience in high-risk communities.',
    backgroundImage: heroImages[2],
    actionHref: '#impact',
    actionLabel: 'View Impact Areas',
    highlights: ['Field Monitoring', 'Outcome Tracking', 'Community Resilience'],
  },
];

const approach = [
  {
    title: 'Listen First',
    detail: 'We co-design each intervention with community councils, teachers, and women-led groups before launch.',
  },
  {
    title: 'Act Practically',
    detail: 'Programs prioritize immediate relief and durable infrastructure that communities can maintain locally.',
  },
  {
    title: 'Report Clearly',
    detail: 'We track outputs, outcomes, and lessons learned to improve delivery and accountability every cycle.',
  },
];

const stats = [
  { value: '12+', label: 'Years of community service in Eastern Uganda' },
  { value: '30K+', label: 'People reached through water, education, and relief support' },
  { value: '120+', label: 'Local volunteers and partner leaders mobilized' },
  { value: '40+', label: 'Schools and communities supported with practical programs' },
];

const trustSignals = [
  'Community verification with local councils',
  'Quarterly activity summaries for partners',
  'Safeguarding-first field implementation',
];

const updates = [
  {
    tag: 'Operations',
    title: 'Quarter 1 Community Update',
    summary: 'Water access repairs completed in priority villages, alongside ongoing household assessments and education support.',
    href: '#updates',
    label: 'Read update',
  },
  {
    tag: 'People',
    title: 'Volunteer Intake Window',
    summary: 'AFFDI is onboarding local and remote volunteers for community outreach, documentation, and partner coordination.',
    href: '#volunteer',
    label: 'Express interest',
  },
  {
    tag: 'Partnership',
    title: 'Partner Collaboration Brief',
    summary: 'New collaboration brief available for organizations interested in supporting WASH, education, and resilience programs.',
    href: '#partner',
    label: 'View brief',
  },
];

const engagementPaths = [
  {
    title: 'Donate with Purpose',
    text: 'Fund priority interventions with direct relevance to water, shelter, and child wellbeing.',
    href: '/donate',
    cta: 'Make a donation',
  },
  {
    title: 'Volunteer Your Skills',
    text: 'Support communication, field coordination, and learning documentation with the AFFDI team.',
    href: '/volunteer',
    cta: 'Join as volunteer',
  },
  {
    title: 'Partner Institutionally',
    text: 'Collaborate on program design, co-funding, and long-term development initiatives in Eastern Uganda.',
    href: '/partner-with-us',
    cta: 'Start a partnership',
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-x-clip bg-[radial-gradient(140%_140%_at_50%_0%,#f6fbff_0%,#eef5ff_48%,#f8fbff_100%)] pb-24 text-slate-800 md:pb-0">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-44 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky-200/55 blur-3xl" />
        <div className="absolute -left-16 top-[18rem] h-[22rem] w-[22rem] rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute right-0 top-[28rem] h-[30rem] w-[30rem] rounded-full bg-indigo-200/55 blur-3xl" />
      </div>

      <SiteNav
        brand={{ mark: 'AF', name: 'AFFDI', tagline: 'Improving Community Resilience' }}
        links={navLinks}
        donateHref="#get-involved"
        primaryActionLabel="Get Involved"
        menuSections={navSections}
        phone="+256 752 764 415"
        email="info@affdi.org"
        learnMoreHref="/about-us/who-we-are"
      />

      <div className="relative z-10">
        <HeroBanner
          slides={heroSlides}
          intervalMs={5500}
        />

        <section id="overview" className="mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 md:pt-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_20px_55px_rgba(15,38,74,0.09)] backdrop-blur-sm md:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d4f8f]">Overview</p>
              <h2 className="font-display mb-4 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">Community-first response with long-term impact</h2>
              <p className="text-slate-600">
                AFFDI supports vulnerable households with practical programs that solve urgent
                needs and strengthen future resilience. From safe water points and school support
                to shelter and household recovery, our work is rooted in trust, local partnership,
                and measurable outcomes for families across Kibuku and surrounding communities.
              </p>
            </article>

            <aside className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_20px_55px_rgba(15,38,74,0.09)] backdrop-blur-sm md:p-9">
              <h3 className="font-display text-lg font-semibold text-slate-900">Why partners trust AFFDI</h3>
              <ul className="mt-4 space-y-3">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1d4f8f]" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs uppercase tracking-[0.14em] text-slate-500">Tirinyi Town Council • Kibuku District</p>
            </aside>
          </div>
        </section>

        <section id="impact" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="Impact at a Glance"
            subtitle="Built with local leaders, sustained through partnerships, and focused on dignity for every family we serve."
          />
          <ImpactStats stats={stats} />
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="Our Mission"
            subtitle="To promote education and health-related services for sustainable community development."
          />
          <div className="rounded-3xl border border-[#d9e6f5] bg-gradient-to-br from-[#f4f8ff] to-[#ebf3ff] p-7 text-slate-700 shadow-[0_18px_42px_rgba(13,42,79,0.08)] md:p-9">
            <p>
              We build community resilience through water projects, safe shelter, school support,
              food assistance, and empowerment programs designed for long-term impact.
            </p>
          </div>
        </section>

        <section id="how-we-work" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="How We Work"
            subtitle="A field-tested approach designed for dignity, ownership, and measurable progress."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {approach.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(13,42,79,0.12)]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Step 0{index + 1}</p>
                <h3 className="font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="Our Programs"
            subtitle="We deliver practical projects that create better living conditions and stronger local communities."
          />
          <ProgramGrid items={programs} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="Our Causes"
            subtitle="Be part of the change by supporting one of our priority community causes."
          />
          <CauseGrid causes={causes} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="Field Moments"
            subtitle="Recent snapshots from AFFDI community activities and outreach visits."
          />
          <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-600">
            These images show the work as it happens — visits, community engagement, and the
            practical delivery that turns plans into visible progress.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fieldMoments.map((moment, index) => (
              <figure key={`${moment.src}-${index}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(13,42,79,0.12)]">
                <div className="relative h-44 w-full">
                  <Image
                    src={moment.src}
                    alt={moment.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="space-y-1 border-t border-slate-100 p-3">
                  <p className="text-sm font-semibold text-slate-900">{moment.title}</p>
                  <p className="text-xs leading-relaxed text-slate-600">{moment.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="Field Videos"
            subtitle="Short clips from the field — best viewed with sound on."
          />
          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <article className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_45px_rgba(13,42,79,0.12)]">
              <video
                className="h-72 w-full bg-slate-900 object-cover md:h-80"
                controls
                playsInline
                preload="metadata"
                poster={fieldVideos[0].poster}
              >
                <source src={fieldVideos[0].src} type="video/mp4" />
              </video>
              <div className="space-y-2 border-t border-slate-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1d4f8f]">Featured clip</p>
                <p className="text-base font-semibold text-slate-900">{fieldVideos[0].title}</p>
                <p className="text-sm leading-relaxed text-slate-600">{fieldVideos[0].note}</p>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {fieldVideos.slice(1).map((video) => (
                <article key={video.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(13,42,79,0.12)]">
                  <video
                    className="h-52 w-full bg-slate-900 object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="space-y-1 border-t border-slate-100 p-3">
                    <p className="text-sm font-semibold text-slate-900">{video.title}</p>
                    <p className="text-xs leading-relaxed text-slate-600">{video.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_56px_rgba(13,42,79,0.14)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[280px]">
              <Image
                src={gallery[5]}
                alt="AFFDI community engagement story"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#1d4f8f]">This Month In Focus</p>
              <h3 className="font-display text-2xl font-semibold leading-tight text-slate-900">From household visits to school support, consistent presence creates trust.</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Our teams work alongside communities beyond one-time interventions. Regular follow-ups,
                local coordination, and practical support help families move from emergency needs toward
                stability and long-term resilience.
              </p>
            </div>
          </div>
        </section>

        <section id="updates" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="Latest From AFFDI"
            subtitle="Short updates for supporters, partners, and volunteers who want to stay informed."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(13,42,79,0.12)]">
                <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1d4f8f]">
                  {item.tag}
                </p>
                <h3 className="font-display mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1d4f8f] hover:underline"
                >
                  {item.label} <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="get-involved" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="rounded-3xl border border-[#d9e6f5] bg-gradient-to-br from-[#f5f9ff] to-[#ebf3ff] p-6 shadow-[0_20px_44px_rgba(13,42,79,0.09)] md:p-8">
            <SectionHeading
              title="Get Involved"
              subtitle="Contribute your time, expertise, partnerships, or resources to accelerate measurable outcomes in the communities we serve."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {engagementPaths.map((path, index) => (
                <article key={path.title} className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(13,42,79,0.12)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Path 0{index + 1}</p>
                  <h3 className="font-display mt-2 text-lg font-semibold text-slate-900">{path.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{path.text}</p>
                  <a
                    href={path.href}
                    className="mt-5 inline-flex rounded-lg bg-[#1d4f8f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#123a6a]"
                  >
                    {path.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <SectionHeading
            title="Our Partners & Donors"
            subtitle="AFFDI works with trusted community institutions, donors, and technical allies to deliver accountable local impact."
          />
          <PartnersStrip partners={partners} />
          <div className="mt-5">
            <a
              href="/partners"
              className="inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              View Partner Stories
            </a>
          </div>
        </section>

        <DonateBanner
          id="donate"
          eyebrow="Impact Priorities"
          title="Give Today to Protect Water, Learning, and Family Wellbeing"
          points={[
            'Restore and protect safe water access in underserved communities.',
            'Keep children in safer learning spaces with school and shelter support.',
            'Strengthen vulnerable households with food and resilience assistance.',
          ]}
          actionHref="#get-involved"
          actionLabel="Explore Involvement Paths"
          image={donateImage}
        />

        <section id="volunteer" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <article id="join-team" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(13,42,79,0.12)]">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1d4f8f]">Volunteer</p>
              <h3 className="font-display text-xl font-semibold text-slate-900">Join AFFDI field and impact teams</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Help with outreach, documentation, logistics, and community coordination. We welcome local and remote volunteers.
              </p>
              <a
                href="mailto:info@affdi.org?subject=Volunteer%20Interest%20-%20AFFDI"
                className="mt-5 inline-flex rounded-lg bg-[#1d4f8f] px-5 py-2 text-sm font-semibold text-white hover:bg-[#123a6a]"
              >
                Email Volunteer Team
              </a>
            </article>

            <article id="partner" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(13,42,79,0.12)]">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1d4f8f]">Partnerships</p>
              <h3 className="font-display text-xl font-semibold text-slate-900">Collaborate with AFFDI programs</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Institutions and organizations can partner on co-funding, implementation support, and strategic collaboration.
              </p>
              <a
                href="mailto:info@affdi.org?subject=Partnership%20Inquiry%20-%20AFFDI"
                className="mt-5 inline-flex rounded-lg bg-[#1d4f8f] px-5 py-2 text-sm font-semibold text-white hover:bg-[#123a6a]"
              >
                Start Partnership Inquiry
              </a>
            </article>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-[0_22px_52px_rgba(13,42,79,0.12)] backdrop-blur-sm md:p-8">
            <SectionHeading
              title="Contact AFFDI"
              subtitle="Reach our team directly for impact updates, volunteer onboarding, and program partnerships."
            />
            <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-3">
              <a href="mailto:info@affdi.org" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 hover:border-[#1d4f8f]/40">info@affdi.org</a>
              <a href="tel:+256752764415" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 hover:border-[#1d4f8f]/40">+256 752 764 415</a>
              <a href="#get-involved" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 hover:border-[#1d4f8f]/40">View involvement options</a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 md:pb-12 md:pt-14 lg:px-8">
          <SiteFooter
            links={navLinks}
            contact={{
              address: 'Tirinyi Town Council, Kibuku District, Uganda',
              email: 'info@affdi.org',
              phone: '+256 752 764 415',
            }}
            copyright="© 2026 Alliance For Fundamental Development Initiative"
          />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(13,42,79,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2">
          <a href="#get-involved" className="inline-flex items-center justify-center rounded-xl bg-[#ef8b1e] px-3 py-3 text-center text-xs font-bold text-slate-900">
            Get Involved
          </a>
          <a href="#programs" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-3 text-center text-xs font-semibold text-slate-700">
            Programs
          </a>
          <a href="tel:+256752764415" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-3 text-center text-xs font-semibold text-slate-700">
            Call Us
          </a>
        </div>
      </div>
    </main>
  );
}
