import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-glodi.vercel.app";

const ogImage = "/images/og-cover.png";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Glodi Mombesa | Portfolio",
    template: "%s",
  },

  description:
    "Portfolio professionnel de Glodi Mombesa, développeur logiciel orienté web, mobile, backend, Data Science et Intelligence Artificielle.",

  keywords: [
    "Glodi Mombesa",
    "Portfolio Glodi Mombesa",
    "Portfolio développeur",
    "Développeur logiciel",
    "Développeur web",
    "Développeur mobile",
    "Développeur backend",
    "React",
    "Next.js",
    "Django",
    "Data Science",
    "Intelligence Artificielle",
    "Université de Kinshasa",
    "Développeur RDC",
    "Développeur Kinshasa",
  ],

  authors: [
    {
      name: "Glodi Mombesa",
      url: siteUrl,
    },
  ],

  creator: "Glodi Mombesa",
  publisher: "Glodi Mombesa",
  applicationName: "Glodi Mombesa Portfolio",
  category: "technology",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Glodi Mombesa | Portfolio",
    description:
      "Découvrez mon portfolio professionnel : projets web, mobile, backend, interfaces modernes et progression vers la Data Science et l’Intelligence Artificielle.",
    url: siteUrl,
    siteName: "Glodi Mombesa Portfolio",
    images: [
      {
        url: ogImage,
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
    title: "Glodi Mombesa | Portfolio",
    description:
      "Portfolio professionnel de Glodi Mombesa : développement web, mobile, backend, projets modernes et orientation Data Science / IA.",
    images: [ogImage],
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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0D19",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}