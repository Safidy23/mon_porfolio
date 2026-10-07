import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import Icon from './IconRegistry';

export default function Education() {
  return (
    <section id="education" className="section-container py-8 sm:py-12">
      <Reveal>
        <p className="font-mono text-sm font-medium text-accent">05. Formation</p>
        <h2 className="section-heading mt-2">Formation</h2>
        <p className="section-subheading">Mon parcours académique et mes diplômes.</p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {portfolio.education.map((edu, index) => (
          <Reveal key={`${edu.degree}-${index}`} delay={index * 0.1}>
            <div className="glass-panel flex h-full items-start gap-4 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name={edu.icon} size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {edu.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {edu.institution}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {edu.field}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
