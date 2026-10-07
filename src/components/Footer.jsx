import { Github, Linkedin, Instagram, Facebook, Mail, ArrowUp } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const NAV_LINKS = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', href: portfolio.social.github },
  { icon: Linkedin, label: 'LinkedIn', href: portfolio.social.linkedin },
  { icon: Facebook, label: 'Facebook', href: portfolio.social.facebook },
  { icon: Instagram, label: 'Instagram', href: portfolio.social.instagram },
  { icon: Mail, label: 'Email', href: `mailto:${portfolio.personal.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/70 dark:border-white/10">
      <div className="section-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <a href="#home" className="font-mono text-lg font-bold text-zinc-900 dark:text-white">
            <span className="text-accent">&lt;</span>
            {portfolio.personal.name.split(' ')[0] || 'Portfolio'}
            <span className="text-accent">/&gt;</span>
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {portfolio.personal.title} — {portfolio.personal.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-sm text-zinc-600 hover:text-accent dark:text-zinc-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Réseaux</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition-colors hover:border-accent hover:text-accent dark:border-white/10 dark:text-zinc-400"
              >
                <social.icon size={17} />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            {portfolio.personal.email}
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-200/70 dark:border-white/10">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
            © {year} {portfolio.personal.name}. Tous droits réservés.
          </p>
          <a
            href="#home"
            aria-label="Retour en haut de la page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-accent hover:text-accent dark:border-white/10 dark:text-zinc-400"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
