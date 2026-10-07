import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-white/10 dark:bg-surface-raised"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer la fenêtre"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-zinc-700 shadow-md transition-colors hover:text-accent dark:bg-zinc-800/90 dark:text-zinc-200"
            >
              <X size={18} />
            </button>

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-56 w-full object-cover sm:h-72"
            />

            <div className="p-6 sm:p-8">
              <h3
                id="project-modal-title"
                className="text-2xl font-bold text-zinc-900 dark:text-white"
              >
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.details}
              </p>

              {project.features?.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Fonctionnalités
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Technologies
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2.5 text-sm"
                >
                  <Github size={16} />
                  Code source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-2.5 text-sm"
                >
                  <ExternalLink size={16} />
                  Voir la démo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
