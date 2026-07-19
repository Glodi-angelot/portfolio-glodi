export const projects = [
  {
    title: "BUTAMU Restaurant",
    slug: "butamu-restaurant",
    category: "Site vitrine restaurant",
    image: "/images/butamu.png",
    ogImage: "/images/butamu.png",
    year: "2026",
    status: "Projet déployé",
    description:
      "Site vitrine moderne pour un restaurant, conçu pour présenter l’identité visuelle, l’ambiance, les plats, les informations pratiques et faciliter le contact avec les clients.",
    problem:
      "Un restaurant a besoin d’une présence en ligne claire, agréable et facilement accessible afin de présenter son univers, ses plats et ses informations pratiques aux clients.",
    role:
      "Conception de l’interface, structuration des sections, intégration responsive et mise en ligne du projet.",
    features: [
      "Page d’accueil moderne",
      "Présentation de l’identité du restaurant",
      "Mise en avant des plats et de l’ambiance",
      "Informations pratiques accessibles",
      "Interface responsive adaptée au mobile",
      "Lien direct vers le site en ligne",
    ],
    highlights: [
      "Interface élégante et responsive",
      "Présentation claire du restaurant",
      "Expérience utilisateur simple et directe",
    ],
    technologies: ["React", "Tailwind CSS", "Netlify", "Responsive Design"],
    evolution: [
      "Ajout d’un menu administrable",
      "Système de réservation",
      "Formulaire de contact fonctionnel",
      "Galerie dynamique",
      "Intégration WhatsApp ou commande en ligne",
    ],
    github: "#",
    live: "https://butamu-restaurant.netlify.app/",
    accent: "from-orange-500 to-red-500",
  },

  {
    title: "NovaMarket",
    slug: "novamarket",
    category: "Plateforme e-commerce premium",
    image: "/images/novamarket.png",
    ogImage: "/images/novamarket.png",
    year: "2026",
    status: "Frontend terminé",
    description:
      "Interface frontend e-commerce moderne, élégante et responsive, conçue pour offrir une expérience d’achat fluide et professionnelle.",
    problem:
      "Beaucoup de boutiques en ligne manquent de clarté visuelle, de cohérence dans le parcours utilisateur et d’une expérience mobile vraiment soignée.",
    role:
      "Conception de l’interface, structuration du projet frontend, création des pages principales, gestion des interactions JavaScript et adaptation responsive.",
    features: [
      "Page d’accueil moderne et responsive",
      "Catalogue produits avec recherche, filtres et tri",
      "Fiche produit détaillée",
      "Panier avec calcul du total",
      "Code promo simulé",
      "Checkout avec validation des champs",
      "Pages connexion et inscription côté frontend",
      "Pages À propos et Contact",
      "Notifications toast, menu mobile et bouton retour en haut",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Font Awesome",
      "Google Fonts",
      "Responsive Design",
    ],
    highlights: [
      "Interface e-commerce premium",
      "Parcours utilisateur complet",
      "Responsive desktop, tablette et mobile",
      "Base prête pour une future intégration Django",
    ],
    evolution: [
      "Intégration backend avec Django",
      "Gestion réelle des produits",
      "Authentification utilisateur",
      "Panier connecté à une base de données",
      "Gestion des commandes",
      "Dashboard administrateur",
      "Paiement simulé ou Mobile Money",
      "Génération de factures PDF",
    ],
    live: "https://glodi-angelot.github.io/novamarket/",
    github: "https://github.com/Glodi-angelot/novamarket.git",
    accent: "from-amber-500 to-orange-600",
  },

  {
    title: "TaskFlow",
    slug: "taskflow",
    category: "Application de gestion",
    image: "/images/taskflow.png",
    ogImage: "/images/taskflow.png",
    year: "2026",
    status: "Prototype / Projet évolutif",
    description:
      "Application de gestion de tâches pensée pour organiser, suivre et prioriser les activités avec une interface simple, claire et orientée productivité.",
    problem:
      "La gestion des tâches devient rapidement difficile lorsqu’il n’existe pas une interface simple pour suivre les priorités, l’état d’avancement et les activités importantes.",
    role:
      "Structuration de l’application, conception de l’interface, organisation des fonctionnalités principales et préparation d’une base évolutive.",
    features: [
      "Gestion des tâches",
      "Organisation par priorité",
      "Interface claire et responsive",
      "Suivi des activités",
      "Base prête pour une évolution backend",
    ],
    highlights: [
      "Gestion des tâches et priorités",
      "Interface claire et responsive",
      "Base solide pour une évolution future",
    ],
    technologies: ["React", "Tailwind CSS", "Django REST Framework", "MySQL"],
    evolution: [
      "Authentification utilisateur",
      "Gestion d’équipes",
      "Tableau de bord statistique",
      "Notifications",
      "API complète avec Django REST Framework",
      "Base de données relationnelle",
    ],
    github: "#",
    live: "#",
    accent: "from-slate-900 to-blue-600",
  },

  {
    title: "Eklezia Church Website",
    slug: "eklezia-church-website",
    category: "Site vitrine institutionnel",
    image: "/images/eklezia.png",
    ogImage: "/images/eklezia.png",
    year: "2026",
    status: "Projet déployé",
    description:
      "Site web moderne pour une église, conçu pour présenter son identité, ses activités, ses messages et ses informations importantes de manière claire et professionnelle.",
    problem:
      "Beaucoup d’églises ou d’organisations communautaires n’ont pas une présence numérique claire, moderne et facile à consulter sur mobile comme sur ordinateur.",
    role:
      "Conception de l’interface, structuration des sections, intégration responsive, optimisation de la présentation et déploiement du projet.",
    features: [
      "Page d’accueil moderne",
      "Présentation de l’église",
      "Sections pour activités et informations importantes",
      "Interface responsive mobile et desktop",
      "Navigation simple et claire",
      "Design propre adapté à une organisation religieuse",
      "Déploiement en ligne sur Vercel",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "Vercel",
    ],
    highlights: [
      "Site vitrine propre et professionnel",
      "Identité visuelle claire",
      "Expérience responsive",
    ],
    evolution: [
      "Ajout d’un système de publication d’actualités",
      "Gestion dynamique des prédications ou messages",
      "Galerie média administrable",
      "Formulaire de contact fonctionnel",
      "Dashboard admin pour gérer le contenu",
    ],
    live: "https://eklezia-church-website.vercel.app",
    github: "https://github.com/Glodi-angelot/eklezia-church-website.git",
    accent: "from-indigo-600 to-blue-600",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(currentSlug, limit = 3) {
  return projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, limit);
}

export default projects;