# CRÉATION D'UN PORTFOLIO PERSONNEL MODERNE, FLUIDE ET RESPONSIVE

Je veux créer un portfolio personnel professionnel, moderne, très fluide, responsive, élégant et visuellement impressionnant.

Le portfolio doit présenter mon profil, mes compétences, mes projets, mon parcours et mes coordonnées.

L'objectif est d'obtenir un véritable portfolio de développeur professionnel, et non une simple page CV.

---

# 1. STACK OBLIGATOIRE

Utilise uniquement cette stack :

### Frontend

* React
* JavaScript
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React

### Outils

* Git
* GitHub
* VS Code

### Hébergement

Le projet doit pouvoir être facilement déployé sur :

* Vercel
* Render
* GitHub Pages si nécessaire

## IMPORTANT

Ne pas utiliser :

* Laravel
* PHP
* MySQL
* Node.js comme backend
* base de données
* API backend

Le portfolio doit être **frontend uniquement**.

Toutes les informations du portfolio doivent être stockées dans des fichiers JavaScript facilement modifiables.

---

# 2. ARCHITECTURE

Utilise une architecture simple :

```text
portfolio/
│
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── cv.pdf
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── portfolio.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── index.html
```

Ne crée pas une architecture inutilement complexe.

---

# 3. FICHIER DE DONNÉES

Créer :

```text
src/data/portfolio.js
```

Toutes mes informations doivent être centralisées ici.

Exemple :

```js
export const portfolio = {
    personal: {
        name: "[NOM COMPLET]",
        title: "Développeur Full Stack",
        description: "[DESCRIPTION]",
        location: "[VILLE, PAYS]",
        email: "[EMAIL]",
        phone: "[TÉLÉPHONE]",
        avatar: "/images/profile.jpg",
        cv: "/cv.pdf"
    },

    social: {
        github: "[GITHUB]",
        linkedin: "[LINKEDIN]",
        facebook: "[FACEBOOK]"
    },

    skills: [],
    projects: [],
    experiences: [],
    education: [],
    services: []
};
```

Je dois pouvoir modifier mon contenu sans modifier les composants React.

---

# 4. DESIGN

Créer un design :

* moderne
* premium
* professionnel
* minimaliste
* élégant
* technologique
* fluide
* responsive

Le design doit avoir une véritable identité visuelle.

Éviter les templates génériques.

---

# 5. THÈME

Utiliser principalement un thème sombre.

Palette :

* noir profond
* gris foncé
* gris
* blanc cassé
* couleur d'accent moderne

Prévoir également :

* Dark mode
* Light mode
* System mode

Sauvegarder le choix dans `localStorage`.

Utiliser Tailwind CSS et les variables CSS pour le système de couleurs.

---

# 6. NAVBAR

Créer une navbar fixe.

Desktop :

```text
Logo | Accueil | À propos | Compétences | Projets | Expérience | Contact
```

À droite :

* bouton thème
* bouton CV
* bouton contact

Ajouter un effet au scroll :

* backdrop blur
* transparence
* bordure
* transition fluide

Mobile :

* menu hamburger
* menu animé avec Framer Motion
* fermeture après sélection

---

# 7. HERO

Créer une Hero Section très moderne.

Contenu :

```text
Bonjour, je suis

[NOM COMPLET]

Développeur Full Stack

Je conçois des applications web modernes,
performantes et intuitives.
```

Boutons :

```text
Voir mes projets
Me contacter
Télécharger mon CV
```

Ajouter :

* animation d'entrée
* apparition progressive
* légère animation du texte
* élément visuel moderne
* glow subtil

Utiliser Framer Motion.

---

# 8. ÉLÉMENT VISUEL HERO

Créer un élément visuel distinctif.

Choisir un seul concept :

* terminal de développeur animé
* carte technologique
* orbite abstraite
* code animé
* grille futuriste

Le rendu doit rester professionnel.

Ne pas utiliser plusieurs effets concurrents.

---

# 9. À PROPOS

Créer une section :

```text
À propos de moi
```

Présenter :

* profil
* spécialité
* façon de travailler
* objectifs
* passion pour le développement

Ajouter quelques statistiques :

```text
+X Projets
+X Technologies
+X Expériences
```

Les valeurs doivent venir de `portfolio.js`.

---

# 10. COMPÉTENCES

Créer une section :

```text
Mes compétences
```

Catégories :

### Frontend

* HTML
* CSS
* JavaScript
* React
* Tailwind CSS

### Backend

* PHP
* Laravel
* Node.js

### Base de données

* MySQL
* PostgreSQL
* SQLite

### Outils

* Git
* GitHub
* VS Code
* Figma

Ne pas inventer les compétences.

Les compétences doivent être modifiables dans `portfolio.js`.

Créer des cartes modernes avec :

* icône Lucide React
* nom
* courte description
* animation hover

---

# 11. PROJETS

Créer une section très importante :

```text
Mes projets
```

Chaque projet doit contenir :

* image
* titre
* description
* technologies
* catégorie
* GitHub
* Demo

Exemple :

```js
{
    title: "Nom du projet",
    description: "Description",
    image: "/images/project.jpg",
    technologies: ["React", "Laravel"],
    category: "Web",
    github: "...",
    demo: "..."
}
```

Créer des filtres :

```text
Tous
Web
React
Laravel
PHP
Autres
```

Les filtres doivent être animés avec Framer Motion.

---

# 12. CARTES PROJETS

Au survol :

* zoom léger de l'image
* translation subtile
* glow
* apparition des boutons
* transition douce

Les cartes doivent être parfaitement responsives.

---

# 13. DÉTAIL D'UN PROJET

Lorsqu'on clique sur un projet, afficher une modal ou une vue détaillée.

Contenu :

* grande image
* description
* fonctionnalités
* technologies
* GitHub
* Demo

Utiliser Framer Motion pour l'ouverture et la fermeture.

---

# 14. EXPÉRIENCE

Créer une timeline :

```text
2026
│
├── Expérience
│
2025
│
├── Expérience
│
2024
│
└── Expérience
```

Chaque élément :

* période
* poste
* organisation
* description
* technologies

Animation au scroll.

---

# 15. FORMATION

Créer :

```text
Formation
```

Afficher :

* diplôme
* établissement
* année
* domaine

Utiliser des cartes élégantes.

---

# 16. SERVICES

Créer :

```text
Ce que je peux faire
```

Services :

* Développement Web
* Applications Web
* UI/UX
* Backend & API
* Base de données
* Maintenance

Utiliser les icônes Lucide React.

---

# 17. PROCESSUS

Créer :

```text
Mon processus
```

Étapes :

```text
01 Analyse
02 Conception
03 Développement
04 Tests
05 Déploiement
```

Créer une timeline animée.

---

# 18. CONTACT

Créer une section :

```text
Travaillons ensemble
```

Afficher :

* email
* téléphone
* localisation
* GitHub
* LinkedIn

Créer un formulaire :

```text
Nom
Email
Sujet
Message
Envoyer
```

IMPORTANT :

Comme il n'y a pas de backend, ne prétends pas que le formulaire envoie réellement un message.

Prévoir plutôt :

* validation frontend
* bouton mailto
* ou intégration facilement remplaçable par Formspree/EmailJS plus tard

---

# 19. FOOTER

Créer un footer moderne avec :

* nom
* courte description
* navigation
* réseaux sociaux
* email
* copyright

---

# 20. ANIMATIONS

Utiliser **Framer Motion**.

Animations :

* fade
* slide
* scale
* stagger
* reveal on scroll
* hover
* modal
* navbar
* menu mobile

Les animations doivent être :

* rapides
* fluides
* élégantes

Éviter les animations excessives.

Respecter :

```text
prefers-reduced-motion
```

---

# 21. RESPONSIVE

Le site doit fonctionner parfaitement sur :

### Mobile

320px
375px
390px
430px

### Tablette

768px
820px
1024px

### Desktop

1280px
1440px
1920px

Aucun :

* overflow horizontal
* texte coupé
* bouton inaccessible
* image déformée
* menu cassé

---

# 22. ACCESSIBILITÉ

Respecter :

* HTML sémantique
* alt images
* labels
* navigation clavier
* focus visible
* contraste
* boutons accessibles
* aria-label si nécessaire

---

# 23. PERFORMANCE

Optimiser :

* images
* lazy loading
* animations
* composants
* bundle

Ne pas installer de bibliothèque inutile.

---

# 24. SEO

Ajouter :

* title
* meta description
* favicon
* Open Graph
* Twitter Card
* robots.txt
* sitemap.xml

Créer un titre et une description personnalisables dans `portfolio.js`.

---

# 25. MICRO-INTERACTIONS

Ajouter subtilement :

* hover boutons
* underline animé
* icônes animées
* cartes interactives
* transitions
* feedback visuel

Ne pas surcharger le site.

---

# 26. CURSEUR

Sur desktop uniquement, tu peux ajouter un curseur personnalisé très discret.

Il doit être supprimé sur mobile.

Si cela nuit aux performances ou à l'accessibilité, ne pas l'utiliser.

---

# 27. QUALITÉ

Avant de terminer :

* corriger les erreurs
* supprimer les imports inutilisés
* supprimer les composants inutilisés
* vérifier les liens
* vérifier les images
* vérifier le responsive
* vérifier les animations
* vérifier la navigation
* vérifier le changement de thème
* vérifier le menu mobile
* vérifier le formulaire

Lancer :

```bash
npm run build
```

Le build doit terminer sans erreur.

---

# 28. INSTALLATION

Si le projet n'existe pas encore :

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```

Installer ensuite :

```bash
npm install framer-motion lucide-react
```

Installer/configurer Tailwind CSS avec la version compatible avec le projet Vite actuel.

---

# 29. RÈGLE DE CONTENU

Ne jamais inventer :

* mon identité
* mes diplômes
* mes expériences
* mes clients
* mes statistiques
* mes témoignages

Utiliser des placeholders :

```text
[NOM COMPLET]
[EMAIL]
[GITHUB]
[LINKEDIN]
[VILLE]
[DESCRIPTION]
```

---

# 30. RÉSULTAT FINAL

Je veux un portfolio qui donne une impression :

* professionnelle
* moderne
* premium
* fluide
* rapide
* responsive
* élégante
* technologique

Il doit être suffisamment impressionnant pour être présenté à :

* recruteurs
* entreprises
* clients
* enseignants
* collaborateurs

Mais il doit rester simple à maintenir.

---

# 31. MÉTHODE D'IMPLÉMENTATION

Commence par analyser le projet existant.

Ensuite :

1. configurer Vite
2. configurer Tailwind CSS
3. installer Framer Motion
4. installer Lucide React
5. créer `portfolio.js`
6. créer le système de thème
7. créer Navbar
8. créer Hero
9. créer About
10. créer Skills
11. créer Projects
12. créer Experience
13. créer Education
14. créer Services
15. créer Process
16. créer Contact
17. créer Footer
18. ajouter animations
19. ajouter responsive
20. ajouter SEO
21. optimiser
22. tester
23. lancer le build
24. corriger toutes les erreurs

Ne remplace pas inutilement les fichiers existants.

Réutilise les composants lorsqu'ils existent déjà.

Le résultat final doit être propre, cohérent et prêt à être déployé sur Vercel ou Render.

COMMENCE MAINTENANT.
