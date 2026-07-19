"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Download,
  GraduationCap,
  Layers3,
  MapPin,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const expertise = [
  {
    icon: Code2,
    title: "Développement logiciel",
    description:
      "Applications web, interfaces modernes, systèmes de gestion et solutions numériques utiles.",
  },
  {
    icon: Database,
    title: "Données & IA",
    description:
      "Analyse de données, Machine Learning, classification, préparation de données et validation de modèles.",
  },
  {
    icon: Layers3,
    title: "Systèmes & réseaux",
    description:
      "Bases de données, modélisation, réseaux, services Linux, VLAN, DHCP, DNS et architectures multi-sites.",
  },
];

const featuredProjects = [
  {
    number: "01",
    title: "NovaMarket",
    category: "Plateforme e-commerce premium",
    description:
      "Interface frontend e-commerce moderne, élégante et responsive avec catalogue, panier, checkout et pages vitrines.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    href: "/projects",
  },
  {
    number: "02",
    title: "Prototype d’aide au diagnostic médical",
    category: "Projet académique IA",
    description:
      "Application d’aide au diagnostic avec approche orientée données, classification et logique de décision.",
    tech: ["Python", "PyQt5", "Scikit-learn"],
    href: "/projects",
  },
  {
    number: "03",
    title: "Kelasi",
    category: "Plateforme de gestion scolaire",
    description:
      "Solution de gestion des résultats scolaires, classes, notes et organisation académique.",
    tech: ["Web App", "Gestion", "Éducation"],
    href: "/projects",
  },
  {
    number: "04",
    title: "Eklezia Church Website",
    category: "Site web institutionnel",
    description:
      "Site vitrine moderne et responsive conçu pour une église avec identité visuelle forte et navigation claire.",
    tech: ["Next.js", "Tailwind CSS", "Responsive"],
    href: "/projects",
  },
];

const journey = [
  {
    period: "2025 — En cours",
    title: "Master 1 Informatique — IA & Data Science",
    place: "Université de Kinshasa",
  },
  {
    period: "2021 — 2025",
    title: "Licence en Informatique",
    place: "Université de Kinshasa",
  },
  {
    period: "Apprentissage continu",
    title: "Projets personnels, certifications et pratique",
    place: "Développement, Data & IA",
  },
];

const stats = [
  {
    value: "M1",
    label: "Informatique — IA & Data Science",
  },
  {
    value: "4+",
    label: "Projets majeurs mis en avant",
  },
  {
    value: "Kinshasa",
    label: "RDC · Disponible pour collaboration",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-36">
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(139,30,34,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(76,107,170,0.10),transparent_28%)]" />

        {/* Éléphant visible desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.28, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -right-44 top-20 -z-20 hidden w-[900px] lg:block"
        >
          <Image
            src="/images/glodi-elephant-strong.png"
            alt=""
            width={1600}
            height={900}
            priority
            className="w-full object-contain"
          />
        </motion.div>

        {/* Éléphant mobile/tablette plus visible */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.22, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -right-28 top-44 -z-20 w-[520px] lg:hidden"
        >
          <Image
            src="/images/glodi-elephant-strong.png"
            alt=""
            width={1000}
            height={700}
            priority
            className="w-full object-contain"
          />
        </motion.div>

        <div className="container-custom grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-red-700 shadow-sm sm:text-xs"
            >
              <Sparkles className="h-4 w-4" />
              Portfolio professionnel
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-[#0B0D19] sm:text-5xl lg:text-7xl"
            >
              Glodi Mombesa
              <span className="mt-2 block bg-gradient-to-r from-[#8B1E22] via-[#8E4B66] to-[#4C6BAA] bg-clip-text text-transparent">
                Développement logiciel, Data & IA.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg"
            >
              Étudiant en Master 1 Informatique à l’Université de Kinshasa,
              orienté Intelligence Artificielle et Data Science. Je développe
              des applications, systèmes de gestion et projets numériques utiles,
              avec une progression continue en analyse de données et Machine
              Learning.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0B0D19] px-6 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-[#8B1E22]"
              >
                Voir mes projets
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <a
                href="/cv/glodi-mombesa-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-[#4C6BAA] hover:text-[#4C6BAA]"
              >
                Télécharger mon CV
                <Download className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <p className="text-xl font-black text-[#8B1E22] sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-red-700/10 blur-3xl sm:h-36 sm:w-36" />
            <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-blue-600/10 blur-3xl sm:h-36 sm:w-36" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 sm:rounded-[2.4rem] sm:p-4"
            >
              <div className="relative overflow-hidden rounded-[1.6rem] bg-[#0B0D19] sm:rounded-[2rem]">
                <Image
                  src="/images/glodi-profile.png"
                  alt="Photo professionnelle de Glodi Mombesa"
                  width={900}
                  height={1100}
                  priority
                  className="h-[360px] w-full object-cover object-top sm:h-[460px] lg:h-[560px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0D19] via-[#0B0D19]/80 to-transparent p-5 text-white sm:p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-red-200 sm:text-xs">
                    Glodi Mombesa
                  </p>
                  <h2 className="mt-2 text-xl font-black sm:text-2xl">
                    Développement logiciel • Data & IA
                  </h2>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 grid gap-3 sm:grid-cols-2"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-[1.5rem] bg-[#0B0D19] p-4 text-white shadow-xl shadow-slate-900/10"
              >
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-5 w-5 text-[#4C6BAA]" />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Orientation
                    </p>
                    <p className="text-sm font-black sm:text-base">
                      IA & Data Science
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#8B1E22]" />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Localisation
                    </p>
                    <p className="text-sm font-black text-slate-900 sm:text-base">
                      Kinshasa, RDC
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.4rem] border border-slate-200 bg-[#0B0D19] shadow-2xl shadow-slate-900/15"
          >
            <Image
              src="/images/glodi-brand-board.jpg"
              alt="Identité visuelle Glodi Mombesa"
              width={1600}
              height={900}
              className="h-[280px] w-full object-cover opacity-80 sm:h-[400px] lg:h-[540px]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D19] via-[#0B0D19]/60 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 max-w-2xl text-white sm:bottom-10 sm:left-10">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-red-200">
                Identité visuelle
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
                Une identité personnelle sobre, forte et mémorable.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                Mon univers visuel repose sur une image forte : mémoire, vision,
                persévérance et impact numérique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8B1E22]">
                Aperçu
              </p>
              <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#0B0D19] sm:text-4xl lg:text-5xl">
                Un profil entre développement, données et solutions concrètes.
              </h2>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-black text-[#4C6BAA] transition hover:text-[#8B1E22]"
            >
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B0D19] text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.18 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -right-44 top-0 -z-10 hidden w-[820px] lg:block"
        >
          <Image
            src="/images/glodi-elephant-strong.png"
            alt=""
            width={1600}
            height={900}
            className="w-full object-contain"
          />
        </motion.div>

        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8B1E22]">
                Projets sélectionnés
              </p>
              <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#0B0D19] sm:text-4xl">
                Quelques réalisations à découvrir.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                Une sélection de projets qui montrent mon évolution en
                développement web, systèmes de gestion, data et intelligence
                artificielle.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B0D19] px-5 py-3 text-sm font-black text-white transition hover:bg-[#8B1E22]"
            >
              Voir tous les projets
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-5 lg:grid-cols-2"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Link
                  href={project.href}
                  className="group block rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black text-[#8B1E22]">
                        {project.number}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-slate-950">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-bold text-[#4C6BAA]">
                        {project.category}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-[#8B1E22] group-hover:text-[#8B1E22]">
                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2.2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B1E22] text-white">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8B1E22]">
                  Parcours
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                  Une progression académique et pratique construite avec méthode.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Mon évolution se construit entre l’université, les projets
                  personnels, la pratique technique et une orientation
                  progressive vers la Data Science et l’Intelligence
                  Artificielle.
                </p>

                <Link
                  href="/education"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B0D19] px-6 py-4 text-sm font-black text-white transition hover:bg-[#8B1E22]"
                >
                  Voir le parcours complet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-4"
              >
                {journey.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeRight}
                    whileHover={{ x: 6 }}
                    className="rounded-[1.7rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm font-black text-[#8B1E22]">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-slate-600">
                      {item.place}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-6 sm:px-6">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[2.2rem] bg-[#0B0D19] p-7 text-white shadow-2xl shadow-slate-900/10 sm:p-10"
          >
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute inset-0">
              <Image
                src="/images/glodi-elephant-strong.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-[62%_center] opacity-35 sm:opacity-40 lg:object-right lg:opacity-25"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#8B1E22]/95 via-[#0B0D19]/75 to-[#0B0D19]/65" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-red-100">
                  Contact
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                  Discutons d’un projet, d’une opportunité ou d’une collaboration.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-red-50/90">
                  Je reste disponible pour les échanges professionnels, stages,
                  collaborations techniques et missions numériques sérieuses.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-[#0B0D19] transition hover:-translate-y-1 hover:bg-[#f5f3ee]"
              >
                Me contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}