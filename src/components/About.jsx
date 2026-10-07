import { Compass, Heart, Quote, Sparkles, Target } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import AnimatedCounter from './AnimatedCounter';
import Reveal from './Reveal';

const ABOUT_POINTS = [
  { icon: Sparkles, label: 'Spécialité', text: portfolio.about.specialty },
  { icon: Compass, label: 'Façon de travailler', text: portfolio.about.approach },
  { icon: Target, label: 'Objectifs', text: portfolio.about.goals },
  { icon: Heart, label: 'Passion', text: portfolio.about.passion },
];

export default function About() {
  return (
    <section id="about" className="section-container py-8 sm:py-12">
      <Reveal>
        <p className="font-mono text-sm font-medium text-accent">01. Présentation</p>
        <h2 className="section-heading mt-2">À propos de moi</h2>
        <p className="section-subheading">{portfolio.personal.description}</p>
      </Reveal>

      {portfolio.personal.quote && (
        <Reveal delay={0.1}>
          <blockquote className="glass-panel mt-10 flex items-start gap-4 rounded-2xl border-l-4 border-l-accent p-6">
            <Quote size={22} className="mt-1 flex-shrink-0 text-accent" />
            <p className="text-lg font-medium italic text-zinc-700 dark:text-zinc-300">
              {portfolio.personal.quote}
            </p>
          </blockquote>
        </Reveal>
      )}

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {ABOUT_POINTS.map((point, index) => (
          <Reveal key={point.label} delay={index * 0.08}>
            <div className="glass-panel h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <point.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {point.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {point.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {portfolio.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.1}>
            <div className="glass-panel rounded-2xl px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1">
              <p className="flex items-center justify-center text-4xl font-extrabold text-zinc-900 dark:text-white">
                +<AnimatedCounter value={stat.value} delay={index * 0.1} />
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
