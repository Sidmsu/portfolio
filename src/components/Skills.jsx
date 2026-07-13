import { skills } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const Skills = () => (
  <section id="skills" className="scroll-mt-20 py-24 md:py-32">
    <div className="section-shell">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title="The toolkit."
        description="What I reach for to design, build, and ship."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-white/10 bg-ink-900/50 p-6 transition-colors hover:border-white/20">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-accent/30 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
