import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section id="process" className="section-container py-8 sm:py-12">
      <Reveal>
        <p className="font-mono text-sm font-medium text-accent">07. Méthode</p>
        <h2 className="section-heading mt-2">Mon processus</h2>
        <p className="section-subheading">
          Une méthode de travail claire, du premier échange à la mise en ligne.
        </p>
      </Reveal>

      <div className="relative mt-14">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-zinc-200 dark:bg-white/10 sm:block lg:left-1/2" />

        <div className="space-y-6 lg:space-y-0">
          {portfolio.process.map((step, index) => (
            <Reveal
              key={step.step}
              delay={index * 0.08}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className={`relative flex items-start gap-5 lg:w-1/2 ${
                index % 2 === 0 ? 'lg:ml-0 lg:pr-10' : 'lg:ml-auto lg:pl-10 lg:text-right'
              } ${index !== 0 ? 'lg:-mt-4' : ''}`}
            >
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white font-mono text-sm font-bold text-accent dark:bg-surface lg:absolute lg:top-0 ${
                  index % 2 === 0 ? 'lg:-right-6' : 'lg:-left-6'
                }`}
              >
                {step.step}
              </div>
              <div className="glass-panel flex-1 rounded-2xl p-5 lg:mt-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
