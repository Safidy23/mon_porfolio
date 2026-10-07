import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import Icon from './IconRegistry';

export default function Services() {
  return (
    <section id="services" className="section-container py-8 sm:py-12">
      <Reveal>
        <p className="font-mono text-sm font-medium text-accent">06. Services</p>
        <h2 className="section-heading mt-2">Ce que je peux faire</h2>
        <p className="section-subheading">
          Un aperçu des services que je propose pour donner vie à vos projets web.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08}>
            <div className="group glass-panel h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <Icon name={service.icon} size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
