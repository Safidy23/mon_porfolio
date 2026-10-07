import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { useReducedMotion } from '../hooks/useReducedMotion';

const TERMINAL_LINES = [
  { prompt: '~/portfolio', command: 'whoami' },
  { output: portfolio.personal.name },
  { prompt: '~/portfolio', command: 'cat role.txt' },
  { output: portfolio.personal.title },
  { prompt: '~/portfolio', command: 'npm run build' },
  { output: '✓ build ready in 420ms', accent: true },
];

function AnimatedTerminal() {
  const reducedMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reducedMotion ? TERMINAL_LINES.length : 0);

  useEffect(() => {
    if (reducedMotion) return undefined;
    if (visibleCount >= TERMINAL_LINES.length) return undefined;

    const timer = setTimeout(() => setVisibleCount((prev) => prev + 1), 550);
    return () => clearTimeout(timer);
  }, [visibleCount, reducedMotion]);

  return (
    <div className="glass-panel glow relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
      <div className="flex items-center gap-2 border-b border-zinc-200/70 bg-zinc-100/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <Terminal size={12} />
          terminal
        </span>
      </div>
      <div className="min-h-[220px] space-y-2 p-5 font-mono text-sm">
        {TERMINAL_LINES.slice(0, visibleCount).map((line, index) =>
          line.command ? (
            <div key={index} className="flex flex-wrap gap-2 text-zinc-500 dark:text-zinc-400">
              <span className="text-accent">{line.prompt} ❯</span>
              <span className="text-zinc-800 dark:text-zinc-200">{line.command}</span>
            </div>
          ) : (
            <div
              key={index}
              className={
                line.accent
                  ? 'pl-1 text-emerald-500 dark:text-emerald-400'
                  : 'pl-1 text-zinc-700 dark:text-zinc-300'
              }
            >
              {line.output}
            </div>
          )
        )}
        <span className="inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden pt-24 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/10 blur-[100px] dark:bg-accent/10" />

      <div className="section-container relative grid items-center gap-12 pb-8 pt-8 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 flex items-center gap-5"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-cyan-500 opacity-70 blur-md" />
              <img
                src={portfolio.personal.avatar}
                alt={portfolio.personal.name}
                className="relative h-20 w-20 rounded-full border-2 border-white object-cover object-[50%_35%] shadow-xl dark:border-zinc-950 sm:h-24 sm:w-24"
              />
              <span className="absolute bottom-0.5 right-0.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-400 dark:border-zinc-950" />
              </span>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Bonjour, je suis</p>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">
                  {portfolio.personal.name}
                </span>
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-2xl"
          >
            {portfolio.personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
          >
            {portfolio.personal.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Disponible pour de nouveaux projets
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              Voir mes projets
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Me contacter
            </a>
            <a href={portfolio.personal.cv} download className="btn-secondary">
              <Download size={16} />
              Télécharger mon CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float">
            <AnimatedTerminal />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
