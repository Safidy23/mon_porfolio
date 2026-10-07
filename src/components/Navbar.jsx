import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download, Mail, Sun, Moon, Monitor } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const THEME_OPTIONS = [
  { value: 'light', label: 'Clair', icon: Sun },
  { value: 'dark', label: 'Sombre', icon: Moon },
  { value: 'system', label: 'Système', icon: Monitor },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Choix du thème"
      className="flex items-center gap-0.5 rounded-full border border-zinc-200 bg-zinc-100 p-1 dark:border-white/10 dark:bg-white/5"
    >
      {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={`Thème ${label}`}
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
          className={`relative rounded-full p-1.5 transition-colors duration-200 ${
            theme === value
              ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-accent'
              : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
          }`}
        >
          <Icon size={15} strokeWidth={2.2} />
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    document.body.style.overflow = '';
    setMobileOpen(false);
  };

  const handleMobileNavClick = (event, href) => {
    event.preventDefault();
    closeMobile();
    const target = document.querySelector(href);
    if (target) {
      window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 10);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-zinc-200/80 bg-white/75 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-surface/70 dark:shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="group font-mono text-lg font-bold tracking-tight text-zinc-900 transition-transform duration-200 hover:scale-[1.03] dark:text-white"
        >
          <span className="text-accent transition-colors group-hover:text-accent-light">&lt;</span>
          {portfolio.personal.name.split(' ')[0] || 'Portfolio'}
          <span className="text-accent transition-colors group-hover:text-accent-light">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={portfolio.personal.cv}
            download
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-white/15 dark:text-zinc-300"
          >
            <Download size={15} />
            CV
          </a>
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm shadow-lg shadow-accent/20">
            <Mail size={15} />
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-zinc-700 transition-colors duration-200 hover:border-accent/40 hover:text-accent active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-zinc-200/80 bg-white/95 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-surface/95 lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(event) => handleMobileNavClick(event, link.href)}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-zinc-700 transition-all duration-200 hover:bg-zinc-100 hover:pl-5 hover:text-zinc-900 active:scale-[0.98] dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
                  >
                    {link.label}
                    <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </a>
                </motion.li>
              ))}
              <li className="mt-2 flex gap-3 px-3">
                <a
                  href={portfolio.personal.cv}
                  download
                  onClick={closeMobile}
                  className="btn-secondary flex-1 !py-2.5 text-sm"
                >
                  <Download size={15} />
                  CV
                </a>
                <a
                  href="#contact"
                  onClick={(event) => handleMobileNavClick(event, '#contact')}
                  className="btn-primary flex-1 !py-2.5 text-sm"
                >
                  <Mail size={15} />
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
