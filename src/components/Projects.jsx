import { forwardRef, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';

const FILTERS = ['Tous', 'Web', 'React', 'Laravel', 'PHP', 'Autres'];

const ProjectCard = forwardRef(function ProjectCard({ project, onOpen }, ref) {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-panel flex flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/5"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative aspect-video w-full overflow-hidden text-left"
        aria-label={`Voir les détails du projet ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900 transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
            Voir le projet
          </span>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
          <span className="whitespace-nowrap rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
            {project.category}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-600 dark:bg-white/5 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-zinc-200/70 pt-4 dark:border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-accent dark:text-zinc-400"
          >
            <Github size={15} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-accent dark:text-zinc-400"
          >
            <ExternalLink size={15} />
            Démo
          </a>
        </div>
      </div>
    </motion.div>
  );
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Tous') return portfolio.projects;
    if (activeFilter === 'Autres') {
      return portfolio.projects.filter(
        (project) => !['Web', 'React', 'Laravel', 'PHP'].includes(project.category)
      );
    }
    return portfolio.projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-container py-8 sm:py-12">
      <Reveal>
        <p className="font-mono text-sm font-medium text-accent">03. Réalisations</p>
        <h2 className="section-heading mt-2">Mes projets</h2>
        <p className="section-subheading">
          Une sélection de projets sur lesquels j’ai travaillé, illustrant mes compétences
          techniques et ma manière de résoudre des problèmes.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-white"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeFilter === filter
                    ? 'text-white dark:text-zinc-900'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {filter}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Aucun projet dans cette catégorie pour le moment.
        </p>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
