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
  GitBranch,
  Layers3,
  MonitorCog,
  Network,
  PenTool,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const skillGroups = [
  {
    icon: Code2,
    title: "Développement",
    description:
      "Compétences utilisées pour créer des applications web, des interfaces et des systèmes de gestion.",
    items: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
  },
  {
    icon: BrainCircuit,
    title: "Données & IA",
    description:
      "Compétences en progression autour de l’analyse de données, du Machine Learning et de la classification.",
    items: [
      "pandas",
      "scikit-learn",
      "Classification",
      "Naïve Bayes",
      "Préparation de données",
      "Analyse de données",
      "Validation de modèles",
    ],
  },
  {
    icon: Database,
    title: "Bases de données",
    description:
      "Conception, modélisation et manipulation de données dans des projets académiques et pratiques.",
    items: ["MySQL", "SQL Server", "PostgreSQL", "MERISE", "UML"],
  },
  {
    icon: Network,
    title: "Réseaux & systèmes",
    description:
      "Notions et pratiques autour des architectures réseau, services Linux et environnements virtualisés.",
    items: [
      "Linux",
      "Packet Tracer",
      "GNS3",
      "VLAN",
      "DHCP",
      "DNS",
      "Virtualisation",
    ],
  },
  {
    icon: Layers3,
    title: "Technologies utilisées",
    description:
      "Technologies rencontrées ou utilisées dans mes projets, exercices, formations et expérimentations.",
    items: [
      "React",
      "React Native",
      "Laravel / Blade",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    icon: MonitorCog,
    title: "Outils",
    description:
      "Outils de travail utilisés pour coder, documenter, concevoir, tester et organiser mes projets.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "RStudio",
      "Overleaf",
      "WampServer",
      "Excel",
      "Figma",
      "Adobe XD",
      "Illustrator",
    ],
  },
];

const practicalAreas = [
  {
    icon: Server,
    title: "Construire des systèmes de gestion",
    text: "Organisation des données, interfaces, logique métier et fonctionnalités adaptées à un besoin réel.",
  },
  {
    icon: Terminal,
    title: "Développer des prototypes techniques",
    text: "Création de solutions expérimentales pour apprendre, tester une idée ou valider une approche.",
  },
  {
    icon: GitBranch,
    title: "Structurer un projet",
    text: "Organisation du code, usage de GitHub, documentation et amélioration progressive du travail.",
  },
];

export default function SkillsPageContent() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-36">
      <div className="absolute inset-0 -z-30 bg-[#f5f3ee]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(139,30,34,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(76,107,170,0.10),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-40 top-24 -z-10 hidden w-[860px] lg:block"
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
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#8B1E22] shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            Compétences
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight text-[#0B0D19] sm:text-5xl lg:text-6xl"
          >
            Des compétences orientées{" "}
            <span className="bg-gradient-to-r from-[#8B1E22] to-[#4C6BAA] bg-clip-text text-transparent">
              développement logiciel, données et systèmes.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg"
          >
            Cette page présente les compétences que je pratique dans mes projets
            académiques, personnels et techniques. Mon objectif est de progresser
            avec méthode, en consolidant les bases du développement logiciel tout
            en avançant vers la Data Science et l’Intelligence Artificielle.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
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

        {/* SKILLS GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16 grid gap-5 lg:grid-cols-2"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[2.2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B0D19] text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-[#0B0D19]">
                      {group.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* PRACTICAL VALUE */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8B1E22]">
              Mise en pratique
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0B0D19] sm:text-4xl">
              Mes compétences prennent surtout de la valeur dans les projets.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Je privilégie une progression concrète : apprendre, construire,
              tester, corriger et améliorer. Chaque projet me permet de renforcer
              mes bases techniques et de mieux comprendre comment transformer un
              besoin en solution numérique.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B0D19] px-6 py-4 text-sm font-black text-white transition hover:bg-[#8B1E22]"
            >
              Voir mon profil
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
            {practicalAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#8B1E22] text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-950">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {area.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* DESIGN BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[2.4rem] bg-[#0B0D19] p-7 text-white shadow-2xl shadow-slate-900/10 sm:p-10"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/glodi-elephant-strong.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right opacity-25"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D19] via-[#0B0D19]/80 to-[#8B1E22]/55" />

          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-red-200">
                <PenTool className="h-7 w-7" />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-200">
                Design & présentation
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Une solution doit être fonctionnelle, mais aussi claire et
                présentable.
              </h2>
            </div>

            <p className="text-base leading-8 text-slate-200">
              Dans mes projets, je cherche à produire des interfaces simples à
              comprendre, propres visuellement et adaptées au besoin. C’est pour
              cela que j’accorde de l’importance à la structure, à l’expérience
              utilisateur et à la cohérence visuelle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}