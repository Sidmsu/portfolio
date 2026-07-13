import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/content.js';
import Reveal from './Reveal.jsx';

const Contact = () => (
  <section id="contact" className="scroll-mt-20 py-24 md:py-32">
    <div className="section-shell">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-850 to-ink-900 px-6 py-16 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
            aria-hidden
          />
          <div className="relative">
            <span className="eyebrow">Contact</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let's build something worth shipping.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              I'm open to software engineering roles and internships for 2027. Have a team, a
              project, or just want to talk shop? My inbox is open.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone size={16} /> {profile.phone}
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-zinc-400">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-accent">
                <Github size={18} /> GitHub
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-accent">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-accent">
                Resume <ArrowUpRight size={14} />
              </a>
            </div>

            <p className="mt-8 flex items-center justify-center gap-1.5 font-mono text-xs text-zinc-600">
              <MapPin size={12} /> {profile.location}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
