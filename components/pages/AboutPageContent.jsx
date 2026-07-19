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
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const profileCards = [
  {
    icon: Code2,
    title: "Développement logiciel",
    text: "Création d’applications, interfaces web, systèmes de gestion et solutions numériques utiles.",
  },
  {
    icon: BrainCircuit,
    title: "Data & IA",
    text: "Progression en analyse de données, Machine Learning, classification et validation de modèles.",
  },
  {
    icon: Database,
    title: "Bases de données & systèmes",
    text: "Modélisation, SQL, réseaux, services Linux et architectures techniques multi-sites.",
  },
];

const qualities = [
  "Curiosité",
  "Capacité d’apprentissage",
  "Autonomie",
  "Sérieux",
  "Persévérance",
  "Résolution de problèmes",
  "Sens de l’adaptation",
];

const timeline = [
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
    period: "2020 — 2021",
    title: "Diplôme d’État — Mathématiques-Physique",
    place: "Collège Pierre Bouvet — Kinshasa",
  },
];

const focus = [
  {
    icon: Rocket,
    title: "Construire",
    text: "Transformer une idée ou un besoin en solution numérique claire, fonctionnelle et présentable.",
  },
  {
    icon: Lightbulb,
    title: "Apprendre",
    text: "Renforcer progressivement mes compétences par les projets, les formations et la pratique.",
  },
  {
    icon: ShieldCheck,
    title: "Être fiable",
    text: "Travailler avec sérieux, méthode et attention aux détails dans chaque réalisation.",
  },
];

export default function AboutPageContent() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-36">
      <div className="absolute inset-0 -z-30 bg-[#f5f3ee]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(139,30,34,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(76,107,170,0.10),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-40 top-20 -z-10 hidden w-[820px] lg:block"
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

      <div className="container-custom">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#8B1E22] shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              À propos
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#0B0D19] sm:text-5xl lg:text-6xl"
            >
              Un profil orienté{" "}
              <span className="bg-gradient-to-r from-[#8B1E22] to-[#4C6BAA] bg-clip-text text-transparent">
                développement logiciel, Data & IA.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg"
            >
              Je suis Glodi Mombesa, étudiant en Master 1 Informatique à
              l’Université de Kinshasa, orienté Intelligence Artificielle et
              Data Science. Je développe des applications, des systèmes de
              gestion et des projets numériques concrets, avec une progression
              continue en analyse de données et Machine Learning.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#0B0D19]">
                <Image
                  src="/images/glodi-profile.png"
                  alt="Photo professionnelle de Glodi Mombesa"
                  width={900}
                  height={1100}
                  priority
                  className="h-[420px] w-full object-cover object-top sm:h-[520px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0D19] via-[#0B0D19]/75 to-transparent p-6 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-200">
                    Glodi Mombesa
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    Développement logiciel • Data & IA
                  </h2>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#0B0D19] p-4 text-white">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-5 w-5 text-[#4C6BAA]" />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Orientation
                    </p>
                    <p className="text-sm font-black">IA & Data Science</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#8B1E22]" />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Localisation
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      Kinshasa, RDC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PROFILE SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-[2.4rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8B1E22]">
                Profil
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0B0D19] sm:text-4xl">
                Je construis mon parcours autour de la pratique, de la rigueur
                et de l’apprentissage continu.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Mon objectif est de renforcer mes compétences dans un
                environnement professionnel et de contribuer à des solutions
                technologiques utiles. J’accorde une grande importance à la
                clarté des interfaces, à la structure des projets et à la
                progression technique.
              </p>
            </div>

            <div className="grid gap-4">
              {profileCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.7rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B0D19] text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8B1E22]">
              Parcours
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0B0D19] sm:text-4xl">
              Une base académique solide en informatique.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Mon parcours universitaire est complété par des projets pratiques,
              des formations en ligne et une participation à des ateliers
              techniques, notamment autour du développement, de la Data Science
              et des systèmes embarqués.
            </p>

            <Link
              href="/education"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B0D19] px-6 py-4 text-sm font-black text-white transition hover:bg-[#8B1E22]"
            >
              Voir le parcours complet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {timeline.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#8B1E22] text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-black text-[#8B1E22]">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {item.place}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* QUALITIES */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-[2.4rem] bg-[#0B0D19] p-6 text-white shadow-2xl shadow-slate-900/10 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-200">
                Méthode & attitude
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Des qualités humaines au service du travail technique.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Au-delà des outils, je cherche à développer une manière de
                travailler sérieuse, claire et adaptable, capable de répondre à
                des besoins réels.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {qualities.map((quality) => (
                <div
                  key={quality}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-slate-100"
                >
                  {quality}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FOCUS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-5 md:grid-cols-3"
        >
          {focus.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B0D19] text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}