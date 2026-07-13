import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Download, MapPin } from 'lucide-react';
import { profile, stats } from '../data/content.js';
import heroImg from '../assets/images/hero-sf.jpg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
  >
    {/* backdrop */}
    <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
    <div
      className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]"
      aria-hidden
    />

    <div className="section-shell relative grid flex-1 items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
      {/* ---- copy ---- */}
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="eyebrow">Open to SWE roles · 2027</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
        >
          Siddhesh
          <br />
          Kulkarni
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400"
        >
          <span className="font-medium text-white">Software Engineer</span> building{' '}
          <span className="bg-gradient-to-r from-accent-soft to-accent bg-clip-text font-medium text-transparent">
            reliable, scalable systems
          </span>{' '}
          — from LLM microservices to real-time telemetry at 500+ writes/sec.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-accent/30"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/10"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-9 flex items-center gap-5 text-zinc-400">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
            <Github size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-accent">
            <Mail size={20} />
          </a>
          <span className="h-4 w-px bg-white/10" />
          <span className="font-mono text-xs text-zinc-600">CS @ Michigan State</span>
        </motion.div>
      </motion.div>

      {/* ---- portrait ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-sm"
      >
        <div
          className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent/25 via-accent/5 to-transparent blur-2xl"
          aria-hidden
        />
        <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-black/50">
          <img
            src={heroImg}
            alt={`${profile.name} in San Francisco`}
            className="h-full w-full object-cover object-[58%_30%] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          {/* bottom scrim for chip legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          {/* inner ring */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
          {/* glass location chip */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <MapPin size={12} className="text-accent" /> San Francisco, CA
          </div>
        </div>
      </motion.div>
    </div>

    {/* ---- stats strip ---- */}
    <div className="section-shell relative pb-16">
      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="group bg-ink-950 p-5 transition-colors hover:bg-ink-900 md:p-6">
            <dt className="text-2xl font-bold text-white transition-colors group-hover:text-accent md:text-3xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs text-zinc-500 md:text-sm">{s.label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Hero;
