import { Briefcase } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section-container py-8 sm:py-12">
      <Reveal>
        <p className="font-mono text-sm font-medium text-accent">04. Parcours</p>
        <h2 className="section-heading mt-2">Expérience</h2>
        <p className="section-subheading">Les étapes clés de mon parcours professionnel.</p>
      </Reveal>

      <ol className="relative mt-14 space-y-10 border-l border-zinc-200 pl-8 dark:border-white/10 sm:pl-10">
        {portfolio.experiences.map((experience, index) => (
          <Reveal
            as="li"
            key={`${experience.role}-${index}`}
            delay={index * 0.1}
            className="relative"
          >
            <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white dark:bg-surface" />
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {experience.period}
                </span>
              </div>
              <h3 className="mt-3 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white">
                <Briefcase size={18} className="text-accent" />
                {experience.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {experience.organization}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {experience.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-600 dark:bg-white/5 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
