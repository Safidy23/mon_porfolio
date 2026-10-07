import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Facebook, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';

const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: portfolio.personal.email, href: `mailto:${portfolio.personal.email}` },
  {
    icon: Phone,
    label: 'Téléphone',
    value: portfolio.personal.phone,
    href: `tel:${portfolio.personal.phone.replace(/\s+/g, '')}`,
  },
  { icon: MapPin, label: 'Localisation', value: portfolio.personal.location, href: null },
  { icon: Github, label: 'GitHub', value: 'GitHub', href: portfolio.social.github },
  { icon: Facebook, label: 'Facebook', value: 'Facebook', href: portfolio.social.facebook },
  { icon: Instagram, label: 'Instagram', value: 'Instagram', href: portfolio.social.instagram },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Le nom est requis.';
  if (!form.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Adresse email invalide.';
  }
  if (!form.subject.trim()) errors.subject = 'Le sujet est requis.';
  if (!form.message.trim()) errors.message = 'Le message est requis.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const mailBody = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const mailSubject = encodeURIComponent(form.subject);
    window.location.href = `mailto:${portfolio.personal.email}?subject=${mailSubject}&body=${mailBody}`;

    setSent(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section-container py-8 sm:py-12">
      <Reveal>
        <p className="font-mono text-sm font-medium text-accent">08. Contact</p>
        <h2 className="section-heading mt-2">Travaillons ensemble</h2>
        <p className="section-subheading">
          Une idée de projet, une opportunité ou simplement envie d’échanger ? N’hésitez pas à me
          contacter.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        <Reveal direction="left" className="lg:col-span-2">
          <div className="glass-panel h-full rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Coordonnées</h3>
            <ul className="mt-6 space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="link-underline text-sm font-medium text-zinc-800 dark:text-zinc-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="right" className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-panel space-y-5 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-accent dark:border-white/15 dark:text-white"
                  placeholder="Votre nom"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-accent dark:border-white/15 dark:text-white"
                  placeholder="vous@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                className="w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-accent dark:border-white/15 dark:text-white"
                placeholder="Sujet de votre message"
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full resize-none rounded-xl border border-zinc-300 bg-transparent px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-accent dark:border-white/15 dark:text-white"
                placeholder="Votre message..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Ce formulaire ouvre votre client mail via un lien « mailto ». Aucune donnée n’est
              envoyée à un serveur.
            </p>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send size={16} />
              Envoyer
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm font-medium text-emerald-500"
              >
                <CheckCircle2 size={16} />
                Votre client mail s’est ouvert avec votre message pré-rempli.
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
