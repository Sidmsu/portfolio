import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Download } from 'lucide-react';
import { profile, stats } from '../data/content.js';
import profileImg from '../assets/images/Screenshot_2024-06-11_at_9.40.08_PM-removebg-preview.png';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
    {/* backdrop */}
    <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
    <div
      className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
      aria-hidden
    />

    <div className="section-shell relative grid items-center gap-12 pb-20 md:grid-cols-[1.35fr_1fr] md:pb-28">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="eyebrow">Open to SWE roles · 2027</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          <span className="text-zinc-200">{profile.role}</span> — {profile.tagline}{' '}
          {profile.blurb}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/10"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-4 text-zinc-400">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
            <Github size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-accent">
            <Mail size={20} />
          </a>
          <span className="ml-1 hidden font-mono text-xs text-zinc-600 sm:inline">
            {profile.location}
          </span>
        </motion.div>
      </motion.div>

      {/* portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-xs md:max-w-sm"
      >
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/25 to-transparent blur-2xl" aria-hidden />
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900">
          <img
            src={profileImg}
            alt={profile.name}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </div>

    {/* stats strip */}
    <div className="section-shell relative">
      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-ink-950 p-5 md:p-6">
            <dt className="text-2xl font-bold text-white md:text-3xl">{s.value}</dt>
            <dd className="mt-1 text-xs text-zinc-500 md:text-sm">{s.label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Hero;
