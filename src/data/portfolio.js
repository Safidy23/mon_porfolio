// Centralise toutes les informations du portfolio ici.
// Modifie ce fichier pour mettre à jour le contenu du site sans toucher aux composants.

export const portfolio = {
  seo: {
    title: 'Randriamahafaly Safidy Thierry — Développeur Full Stack & Mobile',
    description:
      "Portfolio de Randriamahafaly Safidy Thierry, étudiant en Génie Logiciel et développeur Full Stack & Mobile. Découvrez mes projets, compétences et parcours.",
  },

  personal: {
    name: 'Randriamahafaly Safidy Thierry',
    title: 'Développeur Full Stack & Mobile',
    tagline: 'Je conçois des applications web et mobiles modernes, performantes et intuitives.',
    description:
      "Étudiant en Génie Logiciel et Développement d'Applications Mobiles, je conçois des solutions web et mobiles robustes, du back-end à l'interface utilisateur. Curieux et rigoureux, j'aime transformer des idées en produits concrets, et je m'investis également dans la cybersécurité, l'animation et le montage de projets techniques.",
    location: 'Fandriana, Madagascar',
    email: 'safilaureat@gmail.com',
    phone: '038 05 456 18',
    avatar: '/images/profile.jpeg',
    cv: '/CV_Safidy_Thierry.pdf',
    quote: "Il n'y a pas de problème sans solution.",
  },

  social: {
    github: 'https://github.com/Safidy23',
    linkedin: 'https://www.linkedin.com/in/safilaureat',
    facebook: 'https://facebook.com/Safilaureat.Randriamahafaly',
    instagram: 'https://instagram.com/Safilaureat.Randriamahafaly',
  },

  stats: [
    { label: 'Projets réalisés', value: 4 },
    { label: 'Technologies maîtrisées', value: 10 },
    { label: 'Expériences', value: 4 },
  ],

  about: {
    specialty:
      "Développement Full Stack (web) et développement d'applications mobiles avec Flutter.",
    approach:
      "Méthodique et curieux : j'aborde chaque projet par une analyse claire du besoin avant de coder, en veillant à produire un code propre, testé et maintenable.",
    goals:
      "Renforcer mon expertise en génie logiciel et en cybersécurité, et contribuer à des projets ambitieux, du web au mobile.",
    passion:
      "Résoudre des problèmes concrets par le code — fidèle à ma devise : « Il n'y a pas de problème sans solution. »",
  },

  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', icon: 'FileCode', description: 'Structure sémantique des pages web' },
        { name: 'CSS', icon: 'Palette', description: 'Mise en forme et responsive design' },
        { name: 'JavaScript', icon: 'Braces', description: 'Logique et interactivité côté client' },
        { name: 'React', icon: 'Atom', description: 'Interfaces utilisateur modernes et réactives' },
        { name: 'Angular', icon: 'Shield', description: 'Framework front-end structuré en TypeScript' },
        { name: 'Tailwind CSS', icon: 'Wind', description: 'Framework CSS utility-first' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'PHP', icon: 'Server', description: 'Développement backend côté serveur' },
        { name: 'Laravel', icon: 'Layers', description: 'Framework PHP robuste et élégant' },
        { name: 'Java', icon: 'Coffee', description: 'Programmation orientée objet et applications robustes' },
        { name: 'C++', icon: 'Cpu', description: 'Programmation performante et algorithmique' },
      ],
    },
    {
      category: 'Mobile',
      items: [
        { name: 'Flutter', icon: 'Smartphone', description: 'Applications mobiles cross-platform' },
      ],
    },
    {
      category: 'Base de données',
      items: [
        { name: 'MySQL', icon: 'Database', description: 'Système de gestion de base de données relationnelle' },
        { name: 'PostgreSQL', icon: 'Database', description: 'Base de données relationnelle avancée' },
        { name: 'SQLite', icon: 'Database', description: 'Base de données légère et embarquée' },
      ],
    },
    {
      category: 'Outils',
      items: [
        { name: 'Git', icon: 'GitBranch', description: 'Gestion de versions du code' },
        { name: 'GitHub', icon: 'Github', description: 'Hébergement et collaboration de code' },
        { name: 'VS Code', icon: 'Code2', description: 'Éditeur de code principal' },
      ],
    },
  ],

  projects: [
    {
      title: 'Application Mobile Flutter',
      description: 'Application mobile développée avec Flutter dans le cadre de ma formation.',
      details:
        "Projet réalisé pour mettre en pratique le développement mobile cross-platform avec Flutter, de la conception de l'interface à la logique applicative.",
      features: [
        'Interface mobile fluide et responsive',
        'Navigation entre plusieurs écrans',
        'Logique applicative en Dart',
      ],
      image: '/images/project-placeholder.svg',
      technologies: ['Flutter'],
      category: 'Autres',
      github: '[LIEN GITHUB]',
      demo: '[LIEN DEMO]',
    },
    {
      title: 'Application Touristique Mobile',
      description: 'Application mobile de promotion touristique, développée avec Flutter.',
      details:
        'Application permettant de découvrir des sites touristiques : présentation des lieux, informations pratiques et navigation intuitive pour les visiteurs.',
      features: [
        'Présentation de sites touristiques',
        'Fiches détaillées par lieu',
        'Interface intuitive pour les visiteurs',
      ],
      image: '/images/project-placeholder.svg',
      technologies: ['Flutter'],
      category: 'Autres',
      github: '[LIEN GITHUB]',
      demo: '[LIEN DEMO]',
    },
    {
      title: 'Bibliothèque Numérique',
      description: 'Plateforme web de gestion et de consultation d’ouvrages en ligne.',
      details:
        "Application web permettant de centraliser un catalogue d'ouvrages et d'en faciliter la recherche et la consultation en ligne.",
      features: [
        'Catalogue d’ouvrages en ligne',
        'Recherche et consultation de documents',
        'Interface web responsive',
      ],
      image: '/images/project-placeholder.svg',
      technologies: ['PHP', 'Laravel'],
      category: 'Laravel',
      github: '[LIEN GITHUB]',
      demo: '[LIEN DEMO]',
    },
    {
      title: 'Site d’Établissement Universitaire',
      description: "Site web de présentation d'un établissement universitaire.",
      details:
        "Site vitrine présentant les filières, les formations et les actualités d'un établissement universitaire.",
      features: [
        'Présentation des filières et formations',
        'Actualités et informations pratiques',
        'Interface web responsive',
      ],
      image: '/images/project-placeholder.svg',
      technologies: ['PHP', 'Laravel'],
      category: 'PHP',
      github: '[LIEN GITHUB]',
      demo: '[LIEN DEMO]',
    },
    {
      title: 'Logiciel de Gestion des Étudiants (en cours)',
      description:
        'Logiciel de gestion des étudiants, des notes et des résultats — projet en cours de développement.',
      details:
        "Application en cours de réalisation pour la gestion administrative et pédagogique : inscription des étudiants, saisie des notes et génération des résultats.",
      features: [
        'Gestion des dossiers étudiants',
        'Saisie et calcul des notes',
        'Génération des résultats',
      ],
      image: '/images/project-placeholder.svg',
      technologies: ['Java'],
      category: 'Autres',
      github: '[LIEN GITHUB]',
      demo: '[LIEN DEMO]',
    },
  ],

  experiences: [
    {
      period: '[ANNÉE]',
      role: 'Développeur Logiciel',
      organization: '[ORGANISATION]',
      description:
        'Conception et développement d’applications web et mobiles : sites web, applications Flutter, logiciels de gestion.',
      technologies: ['PHP', 'Laravel', 'Flutter', 'Java'],
    },
    {
      period: '[ANNÉE]',
      role: 'Chargé du montage de projet',
      organization: '[ORGANISATION]',
      description:
        'Participation au montage et à la structuration de projets techniques, de l’idée à la mise en œuvre.',
      technologies: [],
    },
    {
      period: '[ANNÉE]',
      role: 'Animateur',
      organization: '[ORGANISATION]',
      description: 'Animation d’activités et encadrement de groupes.',
      technologies: [],
    },
    {
      period: '[ANNÉE]',
      role: 'Développeur indépendant',
      organization: 'Projets personnels',
      description:
        'Développement de projets personnels — applications mobiles, sites web et logiciels — en autoformation continue.',
      technologies: ['PHP', 'Flutter', 'Java', 'C++'],
    },
  ],

  education: [
    {
      degree: 'BEPC',
      institution: 'Lycée St Pierre, Miandrivazo',
      year: '2019 - 2020',
      field: 'Lauréat — Mention : Très Bien',
      icon: 'Award',
    },
    {
      degree: 'Baccalauréat (BACC)',
      institution: 'Lycée St Pierre, Miandrivazo',
      year: '2022 - 2023',
      field: 'Série D',
      icon: 'BookOpen',
    },
    {
      degree: 'Licence',
      institution: 'Institut Supérieur des Sciences et Technologies de Mahajanga',
      year: '2025 - 2026',
      field: 'Génie Logiciel & Développement d’Applications Mobiles',
      icon: 'GraduationCap',
    },
    {
      degree: 'Formation en Cybersécurité',
      institution: '[ÉTABLISSEMENT]',
      year: '[ANNÉE]',
      field: 'Cybersécurité',
      icon: 'ShieldCheck',
    },
  ],

  services: [
    {
      title: 'Développement Web',
      icon: 'Globe',
      description: 'Création de sites web modernes, performants et responsives.',
    },
    {
      title: 'Applications Web & Mobiles',
      icon: 'AppWindow',
      description: 'Conception d’applications web et mobiles complètes et sur mesure (Flutter).',
    },
    {
      title: 'UI/UX',
      icon: 'PenTool',
      description: 'Conception d’interfaces intuitives centrées sur l’utilisateur.',
    },
    {
      title: 'Backend & API',
      icon: 'Server',
      description: 'Développement d’API robustes et de logique métier côté serveur.',
    },
    {
      title: 'Base de données',
      icon: 'Database',
      description: 'Conception et optimisation de bases de données relationnelles.',
    },
    {
      title: 'Maintenance',
      icon: 'Wrench',
      description: 'Suivi, correction et amélioration continue des applications existantes.',
    },
  ],

  process: [
    {
      step: '01',
      title: 'Analyse',
      description: 'Compréhension des besoins, objectifs et contraintes du projet.',
    },
    {
      step: '02',
      title: 'Conception',
      description: 'Définition de l’architecture, des maquettes et de l’expérience utilisateur.',
    },
    {
      step: '03',
      title: 'Développement',
      description: 'Mise en œuvre technique avec un code propre et maintenable.',
    },
    {
      step: '04',
      title: 'Tests',
      description: 'Vérification de la qualité, de la stabilité et du responsive.',
    },
    {
      step: '05',
      title: 'Déploiement',
      description: 'Mise en ligne et suivi post-déploiement.',
    },
  ],
};
