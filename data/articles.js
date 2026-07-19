export const articles = [
  {
    title:
      "Fin du Workshop PCB à Orange Digital Center : une expérience pratique et enrichissante",
    slug: "fin-workshop-pcb-orange-digital-center",
    excerpt:
      "Retour sur ma participation au workshop de conception de circuits imprimés organisé par Orange Digital Center, entre apprentissage, pratique, collaboration et fabrication au FabLab.",
    cover: "/images/blog/odc-pcb-cover.jpeg",
    author: "Glodi Mombesa",
    date: "2026-07-19",
    readTime: "5 min",
    category: "Formation",
    tags: [
      "Orange Digital Center",
      "PCB",
      "Formation",
      "FabLab",
      "Électronique",
    ],
    status: "Publié",
    gallery: [
      {
        src: "/images/blog/odc-pcb-cover.jpeg",
        alt: "Photo de groupe devant Orange Digital Center",
      },
      {
        src: "/images/blog/odc-pcb-fablab.jpeg",
        alt: "Photo de groupe dans le FabLab",
      },
      {
        src: "/images/blog/odc-pcb-machine.jpeg",
        alt: "Démonstration d’une machine de fabrication PCB",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "J’ai eu le plaisir de participer au workshop consacré à la conception de circuits imprimés, organisé par Orange Digital Center. Cette formation a été une belle expérience d’apprentissage, de pratique et de collaboration.",
      },
      {
        type: "paragraph",
        text: "Pendant cette formation, nous avons découvert tout le processus de création d’un circuit électronique, depuis la compréhension du besoin jusqu’à la fabrication de la carte au FabLab.",
      },
      {
        type: "heading",
        text: "Ce que nous avons appris",
      },
      {
        type: "list",
        items: [
          "Reconnaître les principaux composants électroniques et comprendre leurs rôles",
          "Réaliser un schéma électronique avec KiCad",
          "Choisir et assigner les empreintes correspondant aux composants réels",
          "Placer les composants sur la carte",
          "Effectuer le routage des pistes en cuivre",
          "Vérifier les connexions et corriger les erreurs",
          "Visualiser le circuit en 3D",
          "Préparer puis fabriquer le circuit imprimé à l’aide des équipements du FabLab",
        ],
      },
      {
        type: "paragraph",
        text: "Pour mettre ces connaissances en pratique, les participants ont été répartis en groupes. Chaque groupe devait réaliser un projet afin de passer de la théorie à une application concrète.",
      },
      {
        type: "quote",
        text: "Cette expérience m’a permis de mieux comprendre le lien entre l’électronique, l’informatique, les systèmes embarqués et l’Internet des objets.",
      },
      {
        type: "paragraph",
        text: "Je remercie Orange Digital Center, les formateurs et tous les participants pour les connaissances partagées, l’encadrement et l’excellent esprit de collaboration.",
      },
    ],
  },

  {
    title:
      "De KiCad à la fabrication : les étapes que j’ai découvertes dans la conception PCB",
    slug: "de-kicad-a-la-fabrication-etapes-conception-pcb",
    excerpt:
      "Un retour technique sur les étapes de conception PCB : schéma électronique, empreintes, placement, routage, visualisation 3D et préparation à la fabrication.",
    cover: "/images/blog/odc-pcb-schema.png",
    author: "Glodi Mombesa",
    date: "2026-07-19",
    readTime: "6 min",
    category: "Électronique",
    tags: ["KiCad", "PCB", "Routage", "3D", "Électronique"],
    status: "Publié",
    gallery: [
      {
        src: "/images/blog/odc-pcb-schema.png",
        alt: "Schéma électronique réalisé dans KiCad",
      },
      {
        src: "/images/blog/odc-pcb-layout.png",
        alt: "Routage des pistes dans l’éditeur PCB de KiCad",
      },
      {
        src: "/images/blog/odc-pcb-3d-top.png",
        alt: "Vue 3D du PCB côté pistes",
      },
      {
        src: "/images/blog/odc-pcb-3d-side.png",
        alt: "Vue 3D latérale du circuit imprimé",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "L’un des points les plus intéressants du workshop a été la découverte du flux complet de conception PCB avec KiCad. Nous ne nous sommes pas limités à dessiner un circuit : nous avons suivi plusieurs étapes permettant de passer d’un schéma électronique à une carte prête à être fabriquée.",
      },
      {
        type: "heading",
        text: "1. Réaliser le schéma électronique",
      },
      {
        type: "paragraph",
        text: "La première étape consistait à représenter le fonctionnement du circuit sous forme de schéma. Cette étape permet de comprendre les connexions entre les composants, leur rôle et la logique générale du montage.",
      },
      {
        type: "heading",
        text: "2. Choisir et assigner les empreintes",
      },
      {
        type: "paragraph",
        text: "Après le schéma, il fallait associer chaque composant à une empreinte réelle. Cette étape est importante, car elle permet de faire correspondre les symboles du schéma aux composants physiques qui seront placés sur la carte.",
      },
      {
        type: "heading",
        text: "3. Placer les composants",
      },
      {
        type: "paragraph",
        text: "Le placement des composants influence la lisibilité du circuit, la facilité du routage et la qualité finale de la carte. Il faut réfléchir à l’organisation des LED, des résistances, des transistors, des connecteurs et des alimentations.",
      },
      {
        type: "heading",
        text: "4. Router les pistes en cuivre",
      },
      {
        type: "paragraph",
        text: "Le routage permet de relier les composants entre eux grâce aux pistes en cuivre. C’est une étape qui demande de l’attention, car il faut éviter les erreurs, les croisements inutiles et les connexions manquantes.",
      },
      {
        type: "heading",
        text: "5. Visualiser la carte en 3D",
      },
      {
        type: "paragraph",
        text: "La visualisation 3D permet d’avoir un aperçu réaliste du circuit avant sa fabrication. Elle aide à vérifier l’emplacement des composants et l’aspect général de la carte.",
      },
      {
        type: "quote",
        text: "Ce processus m’a montré qu’un circuit imprimé n’est pas seulement un dessin technique, mais une vraie solution physique qui demande logique, précision et méthode.",
      },
    ],
  },

  {
    title:
      "Notre projet PCB : un indicateur électronique de niveau d’eau à cinq LED",
    slug: "projet-pcb-indicateur-niveau-eau-cinq-led",
    excerpt:
      "Présentation du projet réalisé pendant le workshop : un indicateur de niveau d’eau utilisant cinq sondes, des transistors BC547, des résistances et cinq LED.",
    cover: "/images/blog/odc-pcb-result.jpeg",
    author: "Glodi Mombesa",
    date: "2026-07-19",
    readTime: "6 min",
    category: "Projet PCB",
    tags: ["Niveau d’eau", "PCB", "BC547", "LED", "IoT"],
    status: "Publié",
    gallery: [
      {
        src: "/images/blog/odc-pcb-result.jpeg",
        alt: "Carte PCB fabriquée pendant le workshop",
      },
      {
        src: "/images/blog/odc-pcb-3d-front.png",
        alt: "Vue 3D du circuit avec les composants",
      },
      {
        src: "/images/blog/odc-pcb-schema.png",
        alt: "Schéma électronique de l’indicateur de niveau d’eau",
      },
      {
        src: "/images/blog/odc-pcb-layout.png",
        alt: "Routage du PCB dans KiCad",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Dans le cadre du workshop, notre groupe a travaillé sur la conception d’un indicateur électronique de niveau d’eau à cinq LED. L’objectif était de concevoir un système capable d’indiquer visuellement le niveau d’eau dans un réservoir.",
      },
      {
        type: "heading",
        text: "Principe de fonctionnement",
      },
      {
        type: "paragraph",
        text: "Le système utilise plusieurs sondes placées à différentes hauteurs dans un réservoir. Lorsque l’eau atteint une sonde, le transistor correspondant agit comme un interrupteur et commande l’allumage d’une LED.",
      },
      {
        type: "list",
        items: [
          "LED bleue : niveau 100 %, réservoir plein",
          "LED verte : niveau 75 %",
          "LED jaune : niveau 50 %",
          "LED orange : niveau 25 %",
          "LED rouge : niveau vide",
        ],
      },
      {
        type: "heading",
        text: "Composants utilisés",
      },
      {
        type: "list",
        items: [
          "Transistors BC547",
          "Résistances de 1 kΩ",
          "Résistance de 10 kΩ",
          "Cinq LED : rouge, orange, jaune, verte et bleue",
          "Connecteurs pour les sondes",
          "Carte PCB",
          "Alimentation régulée de 5 V en courant continu",
        ],
      },
      {
        type: "heading",
        text: "Étapes de réalisation",
      },
      {
        type: "list",
        items: [
          "Réalisation du schéma électronique",
          "Choix et assignation des empreintes",
          "Placement des composants sur la carte",
          "Routage des pistes en cuivre",
          "Vérification des connexions",
          "Visualisation 3D du circuit",
          "Fabrication de la carte au FabLab",
        ],
      },
      {
        type: "paragraph",
        text: "Ce projet m’a permis de mieux comprendre comment un besoin simple peut être transformé en système électronique fonctionnel. Il m’a aussi montré que l’électronique peut être reliée à l’informatique, aux systèmes embarqués et à l’Internet des objets.",
      },
      {
        type: "quote",
        text: "À l’avenir, ce type de projet peut servir de base pour concevoir des dispositifs intelligents capables de collecter des données et de communiquer avec une application ou un système d’IA.",
      },
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug, limit = 3) {
  return articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit);
}

export default articles;