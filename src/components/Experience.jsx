import { MapPin } from 'lucide-react';
import { experience, leadership } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const Experience = () => (
  <section id="experience" className="scroll-mt-20 py-24 md:py-32">
    <div className="section-shell">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've shipped."
        description="Production work on agile teams — architecture, pipelines, and the numbers that came with them."
      />

      <div className="relative">
        {/* timeline spine */}
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10 md:left-[9px]" aria-hidden />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="relative pl-8 md:pl-10">
                <span
                  className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 md:h-5 md:w-5 ${
                    job.current ? 'border-accent bg-accent/20' : 'border-white/20 bg-ink-850'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${job.current ? 'bg-accent' : 'bg-zinc-500'}`} />
                </span>

                <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6 transition-colors hover:border-white/20 md:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-white">
                      {job.role} <span className="text-accent">· {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-zinc-500">{job.date}</span>
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                    <MapPin size={12} /> {job.location}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* leadership entry */}
          <Reveal delay={0.1}>
            <div className="relative pl-8 md:pl-10">
              <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-white/20 bg-ink-850 md:h-5 md:w-5">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
              </span>
              <div className="rounded-2xl border border-dashed border-white/10 bg-ink-900/30 p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-white">
                    {leadership.role} <span className="text-accent">· {leadership.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">{leadership.date}</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {leadership.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
