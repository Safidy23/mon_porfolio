import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import Icon from './IconRegistry';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-container py-8 sm:py-12">
      <Reveal>
        <p className="font-mono text-sm font-medium text-accent">02. Compétences</p>
        <h2 className="section-heading mt-2">Mes compétences</h2>
        <p className="section-subheading">
          Les technologies et outils que j’utilise au quotidien pour concevoir et développer des
          applications web.
        </p>
      </Reveal>

      <div className="mt-14 space-y-14">
        {portfolio.skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-5 text-lg font-semibold text-zinc-900 dark:text-white">
              {group.category}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            >
              {group.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group glass-panel flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon name={skill.icon} size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      {skill.name}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-zinc-500 dark:text-zinc-400">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
