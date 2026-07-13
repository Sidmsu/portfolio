import { useRef } from 'react';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Truck,
  CalendarCheck,
  UtensilsCrossed,
} from 'lucide-react';
import { projects } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const icons = { truck: Truck, calendar: CalendarCheck, utensils: UtensilsCrossed };

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const Icon = icons[project.icon] ?? Truck;

  // Cursor-tracked spotlight: update CSS vars so the glow follows the pointer.
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={index * 0.06}>
      <article
        ref={ref}
        onMouseMove={onMouseMove}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
      >
        {/* spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(340px circle at var(--x) var(--y), rgba(52,211,153,0.10), transparent 60%)',
          }}
          aria-hidden
        />

        {/* visual header */}
        <div className={`relative h-28 overflow-hidden bg-gradient-to-br ${project.tint}`}>
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
              maskImage: 'linear-gradient(to bottom, #000, transparent)',
            }}
            aria-hidden
          />
          <Icon
            className="absolute -bottom-3 right-4 text-white/10 transition-transform duration-500 group-hover:scale-110"
            size={96}
            strokeWidth={1.25}
          />
          <div className="absolute left-5 top-5">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-ink-950/60 text-accent backdrop-blur-sm">
              <Icon size={20} />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="relative flex flex-1 flex-col p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-1 font-mono text-xs text-accent">{project.blurb}</p>
            </div>
            <div className="flex gap-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Github size={16} />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live`}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-zinc-400">
                <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-accent" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Projects = () => (
  <section id="projects" className="scroll-mt-20 py-24 md:py-32">
    <div className="section-shell">
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="Things I've built."
        description="A few things I've built, from real-time telemetry to apps that are in students' hands right now."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 text-center">
        <a
          href="https://github.com/Sidmsu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-accent"
        >
          <Github size={16} /> See more on GitHub
          <ArrowUpRight size={14} />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Projects;
