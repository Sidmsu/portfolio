import Reveal from './Reveal.jsx';

// Consistent eyebrow + title block used above each section.
const SectionHeading = ({ index, eyebrow, title, description }) => (
  <Reveal className="mb-12 md:mb-16">
    <div className="flex items-center gap-3">
      {index && <span className="font-mono text-sm text-accent">{index}</span>}
      <span className="eyebrow">{eyebrow}</span>
    </div>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400">
        {description}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
