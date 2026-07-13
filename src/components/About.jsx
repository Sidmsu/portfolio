import { GraduationCap } from 'lucide-react';
import { about } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const About = () => (
  <section id="about" className="scroll-mt-20 py-24 md:py-32">
    <div className="section-shell">
      <SectionHeading index="01" eyebrow="About" title="Turning manual workflows into systems that scale." />

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-zinc-400 md:text-lg">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap size={20} />
              </div>
              <span className="eyebrow">Education</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">
              {about.education.school}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{about.education.degree}</p>
            <p className="mt-1 font-mono text-xs text-accent">{about.education.date}</p>
            <p className="text-xs text-zinc-500">{about.education.location}</p>

            <div className="mt-5 border-t border-white/5 pt-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Relevant coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {about.education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
