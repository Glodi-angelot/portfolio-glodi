import "./globals.css";

const siteUrl = "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Glodi M. | Portfolio",
    template: "%s | Glodi M.",
  },

  description:
    "Portfolio professionnel de Glodi Mombesa, développeur logiciel orienté web, mobile, backend, Data Science et Intelligence Artificielle.",

  keywords: [
    "Glodi Mombesa",
    "Portfolio Glodi",
    "Portfolio développeur",
    "Développeur logiciel",
    "Développeur web",
    "Développeur mobile",
    "Développeur backend",
    "Backend API",
    "React",
    "Next.js",
    "Django",
    "Django REST Framework",
    "JavaScript",
    "Data Science",
    "Intelligence Artificielle",
    "Université de Kinshasa",
    "Développeur RDC",
    "Développeur Kinshasa",
  ],

  authors: [{ name: "Glodi Mombesa" }],
  creator: "Glodi Mombesa",
  publisher: "Glodi Mombesa",
  applicationName: "Glodi M. Portfolio",
  category: "technology",

  openGraph: {
    title: "Glodi M. | Portfolio",
    description:
      "Découvrez le portfolio de Glodi Mombesa : projets web, mobile, backend et évolution vers la Data Science et l’Intelligence Artificielle.",
    url: siteUrl,
    siteName: "Glodi M. Portfolio",
    images: [
      {
        url: "/images/og-cover.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfolio professionnel de Glodi Mombesa",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Glodi M. | Portfolio",
    description:
      "Portfolio professionnel de Glodi Mombesa : développement web, mobile, backend et progression vers la Data Science / IA.",
    images: ["/images/og-cover.jpeg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}