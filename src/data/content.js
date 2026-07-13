// Single source of truth for the site's content.
// Everything below is derived from Siddhesh's current resume (rev. 2026-07-11).

export const profile = {
  name: 'Siddhesh Kulkarni',
  role: 'Software Engineer',
  tagline: 'I build reliable, scalable systems.',
  blurb:
    'Computer Science student at Michigan State University who likes turning messy, manual workflows into fast automated ones — from an LLM microservice inside an enterprise rules engine to a fleet-telemetry platform holding 500+ writes/sec.',
  location: 'East Lansing, MI',
  email: 'kulka115@msu.edu',
  phone: '+1 (517) 348-7719',
  phoneHref: 'tel:+15173487719',
  resume: '/resume.pdf',
  socials: {
    github: 'https://github.com/Sidmsu',
    linkedin: 'https://www.linkedin.com/in/siddhesh-kulkarni05/',
  },
};

// Headline metrics for the hero strip.
export const stats = [
  { value: '30%', label: 'lower staging latency' },
  { value: '99.9%', label: 'production uptime' },
  { value: '500+', label: 'writes/sec sustained' },
  { value: '200+', label: 'students led at GDG' },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science student at Michigan State University (B.S., May 2027) who cares about the unglamorous parts of software — the pipelines, the latency, the uptime — because that's what turns a demo into something people actually rely on.",
    "Across internships at Delta Dental, UL Solutions, and the MSU College of Engineering I've shipped production code on agile teams: an Azure-hosted LLM microservice, an async parsing pipeline that cut staging latency 30%, and CI/CD pipelines that kept systems at 99.9% uptime.",
    "Outside of work I co-led Google Developer Groups at MSU, running 25+ workshops and hackathons for 200+ students. I like building things end to end and helping other people build too.",
  ],
  education: {
    school: 'Michigan State University',
    degree: 'B.S., Computer Science',
    date: 'Expected May 2027',
    location: 'East Lansing, MI',
    coursework: [
      'Data Structures & Algorithms',
      'Computer Systems',
      'Object-Oriented Programming',
      'Artificial Intelligence',
    ],
  },
};

export const experience = [
  {
    company: 'UL Solutions',
    role: 'Systems Engineer Intern',
    date: 'May 2026 — Present',
    location: 'Fremont, CA',
    current: true,
    points: [
      'Automated SAR compliance testing for wireless devices with Python scripts that execute tests, validate results, and perform device-level debugging — shortening the testing cycle and improving accuracy.',
      'Delivered structured engineering reports on instrumentation data to senior staff and enterprise customers during device certification, using Python and SQL to aggregate and visualize results.',
      'Managed code changes with SVN and collaborated on design discussions to enhance the testing framework, following agile practices.',
    ],
    tags: ['Python', 'SQL', 'SVN', 'Automation', 'Agile'],
  },
  {
    company: 'MSU College of Engineering',
    role: 'Software Engineering Intern',
    date: 'Sep 2024 — Present',
    location: 'East Lansing, MI',
    current: true,
    points: [
      'Built and shipped React.js / Next.js web apps, migrating 15+ legacy templates to a WCAG-compliant system.',
      'Manage frontend CI/CD pipelines with GitHub Actions, handle QA triage, and coordinate production releases — cutting deployment time 30% while keeping uptime at 99.9%.',
      'Contribute front-end and back-end insights in agile ceremonies and design discussions to enhance application features.',
    ],
    tags: ['React', 'Next.js', 'GitHub Actions', 'CI/CD', 'Accessibility'],
  },
  {
    company: 'Delta Dental of Michigan',
    role: 'Software Engineering Intern',
    date: 'May 2025 — Aug 2025',
    location: 'Okemos, MI',
    current: false,
    points: [
      'Architected an Azure-hosted LLM microservice inside an enterprise rules engine, automating a manual document-to-rule parsing workflow end to end.',
      'Re-engineered the TypeScript parsing layer into an async pipeline, cutting staging latency 30% under production load.',
      'Shipped an Angular AI rule-recommender over internal REST APIs with GitHub Actions CI/CD, letting teams generate rules faster with less manual effort.',
      'Normalized structured documents (XML, JSON, CSV) to improve data compatibility across the microservice.',
    ],
    tags: ['Azure', 'TypeScript', 'Angular', 'LLM', 'REST APIs', 'CI/CD'],
  },
];

export const projects = [
  {
    name: 'FleetPulse',
    blurb: 'Real-time fleet-telemetry platform',
    description:
      'Simulates 50 vehicles streaming GPS, diagnostics, and alerts in real time. Concurrent Go workers sustain 500+ writes/sec with no data loss under load, and alert-prioritization logic surfaces critical faults ahead of routine noise.',
    highlights: [
      'Concurrent Go ingestion — 500+ writes/sec, zero data loss under load testing',
      'Alert-prioritization so critical faults surface first',
      'Live dashboards with Leaflet + Chart.js to catch anomalies at a glance',
    ],
    stack: ['Go', 'JavaScript', 'Leaflet', 'Chart.js', 'HTML5/CSS3'],
    links: { github: 'https://github.com/Sidmsu/fleetpulse' },
    featured: true,
  },
  {
    name: 'Attendance Forecast PWA',
    blurb: 'Attendance risk forecasting for 70 students',
    description:
      'A production PWA that 70 students use to track attendance and forecast their absence risk across lectures and labs — showing how upcoming absences push them toward or past eligibility cutoffs, replacing their old spreadsheets.',
    highlights: [
      'Forecasting logic that maps absences against eligibility cutoffs',
      'Supabase Auth + PostgreSQL + Edge Functions for secure storage',
      'Scheduled jobs and Web Push warn students before attendance drops',
    ],
    stack: ['Supabase', 'PostgreSQL', 'Edge Functions', 'SQL', 'PWA'],
    links: { live: 'https://nair-dental-attendance.vercel.app/' },
    featured: true,
  },
  {
    name: 'Campus Menu',
    blurb: 'Dining app for 20,000+ MSU students',
    description:
      'A cross-platform app aimed at 20,000+ MSU students to check dining menus across 10+ campus locations, with nutrition info and dietary filters. Backed by Supabase REST APIs that keep menus updating instantly during meal-time rushes. Published to the Apple App Store.',
    highlights: [
      'Nutrition info + dietary filters for fast, relevant results',
      'Supabase REST backend with instant menu updates',
      'Shipped to the App Store, refined around real student feedback',
    ],
    stack: ['Flutter', 'Supabase', 'REST APIs', 'Dart'],
    links: { live: 'https://apps.apple.com/us/app/campus-menu/id6738099858' },
    featured: true,
  },
];

export const skills = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C++', 'Go', 'TypeScript', 'JavaScript', 'Dart'],
  },
  {
    label: 'Frameworks & Frontend',
    items: ['React', 'Next.js', 'Angular', 'Node.js', 'FastAPI', 'Flutter', 'HTML5', 'CSS3'],
  },
  {
    label: 'Tooling & Practices',
    items: ['Git', 'SVN', 'Docker', 'CI/CD', 'REST APIs', 'Agile'],
  },
  {
    label: 'Cloud & Data',
    items: ['Azure', 'SQL', 'MongoDB', 'Supabase', 'Firebase', 'XML', 'JSON', 'ASN.1'],
  },
  {
    label: 'Concepts',
    items: ['Distributed Systems', 'Microservices', 'Data Structures & Algorithms', 'OOP', 'LLM Integration'],
  },
];

export const leadership = {
  org: 'Google Developer Groups, MSU',
  role: 'Co-Lead',
  date: 'Jul 2024 — Jul 2025',
  points: [
    'Directed 25+ workshops and hackathons, engaging 200+ students in hands-on software engineering and emerging tech.',
    'Partnered with faculty and sponsors on events, outreach, and GDG executive strategy.',
  ],
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
