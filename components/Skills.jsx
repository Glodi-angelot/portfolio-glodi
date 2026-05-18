"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
  Smartphone,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const skills = [
  {
    icon: Layout,
    category: "Frontend",
    label: "Interface",
    description:
      "Création d’interfaces web modernes, responsives, lisibles et agréables à utiliser.",
    details:
      "Je travaille sur la structure visuelle, les composants, le responsive design, les animations légères et l’expérience utilisateur côté navigateur.",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    accent: "from-blue-700 to-cyan-500",
  },
  {
    icon: Server,
    category: "Backend",
    label: "Serveur",
    description:
      "Développement de la logique serveur, des APIs REST et de la connexion aux données.",
    details:
      "Je construis des backends capables de gérer les données, l’authentification, les règles métier et la communication avec le frontend.",
    items: ["Django", "Django REST Framework", "Node.js", "Laravel", "API REST"],
    accent: "from-slate-950 to-red-700",
  },
  {
    icon: Smartphone,
    category: "Mobile",
    label: "Application",
    description:
      "Création d’applications mobiles simples, fluides et adaptées aux usages smartphone.",
    details:
      "Je travaille avec React Native et Expo pour concevoir des expériences mobiles claires, rapides et faciles à prendre en main.",
    items: ["React Native", "Expo", "Mobile UI", "Navigation"],
    accent: "from-red-700 to-blue-700",
  },
  {
    icon: Database,
    category: "Bases de données",
    label: "Données",
    description:
      "Organisation, stockage et structuration des données d’une application.",
    details:
      "Je modélise les données selon les besoins du projet afin d’obtenir une base claire, cohérente et exploitable.",
    items: ["SQL", "MySQL", "PostgreSQL", "SQLite", "Modélisation"],
    accent: "from-blue-700 to-slate-950",
  },
  {
    icon: BrainCircuit,
    category: "Data Science & IA",
    label: "Progression",
    description:
      "Progression vers l’analyse de données, Python, l’IA et le Machine Learning.",
    details:
      "Cet axe fait partie de mon évolution académique et personnelle. Je l’aborde progressivement à travers mes études, mes formations et ma pratique.",
    items: ["Python", "R", "Excel", "Data Science", "IA", "Machine Learning"],
    accent: "from-red-700 via-slate-950 to-blue-700",
  },
  {
    icon: GitBranch,
    category: "Outils",
    label: "Workflow",
    description:
      "Outils de développement, versionnement, déploiement et organisation du travail.",
    details:
      "J’utilise ces outils pour développer proprement, suivre l’évolution du code et mettre les projets en ligne.",
    items: ["Git", "GitHub", "Vercel", "Render", "VS Code"],
    accent: "from-slate-950 to-blue-700",
  },
];

const quickStats = [
  {
    value: "6",
    label: "Domaines",
  },
  {
    value: "30+",
    label: "Technologies",
  },
  {
    value: "4",
    label: "Axes forts",
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSkill = skills[activeIndex];
  const ActiveIcon = activeSkill.icon;

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,rgba(185,28,28,0.08),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(37,99,235,0.08),transparent_32%),linear-gradient(to_bottom,#f8fafc,#ffffff)]" />

      <div className="absolute left-0 top-24 -z-10 h-80 w-80 rounded-full bg-red-700/5 blur-3xl" />
      <div className="absolute right-0 bottom-24 -z-10 h-96 w-96 rounded-full bg-blue-700/5 blur-3xl" />

      <div className="container-custom relative">
        <SectionTitle
          eyebrow="Compétences"
          title="Une stack technique organisée, claire et évolutive."
          description="Une vue interactive de mes compétences : frontend, backend, mobile, bases de données, outils et progression vers la Data Science / IA."
        />

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-3xl font-black text-slate-950">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-bold text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-700/10 blur-3xl" />
            <div className="absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-blue-700/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex items-center gap-3 rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-red-200">
                  <TerminalSquare className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-black text-slate-950">Glodi Stack</h3>
                  <p className="text-sm text-slate-500">
                    Sélectionnez un domaine
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={skill.category}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition ${
                        isActive
                          ? "border-slate-950 bg-slate-950 text-white shadow-xl shadow-slate-900/10"
                          : "border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-red-100 hover:bg-red-50"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeSkillBackground"
                          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,28,28,0.25),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_40%)]"
                        />
                      )}

                      <div className="relative flex items-center justify-between gap-3">
                        <span className="flex items-center gap-3">
                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${
                              isActive
                                ? "bg-white/10 text-red-100"
                                : "bg-slate-50 text-red-700 ring-1 ring-slate-200 group-hover:bg-white"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </span>

                          <span>
                            <span
                              className={`block text-sm font-black ${
                                isActive ? "text-white" : "text-slate-950"
                              }`}
                            >
                              {skill.category}
                            </span>
                            <span
                              className={`mt-0.5 block text-xs ${
                                isActive ? "text-slate-300" : "text-slate-500"
                              }`}
                            >
                              {skill.label}
                            </span>
                          </span>
                        </span>

                        <Zap
                          className={`h-4 w-4 transition ${
                            isActive ? "text-red-200" : "text-slate-400"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-7"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/10 blur-3xl" />
            <div className="absolute -bottom-28 left-20 h-72 w-72 rounded-full bg-red-700/10 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.category}
                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -22, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div
                      className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${activeSkill.accent} text-white shadow-xl shadow-slate-900/10`}
                    >
                      <ActiveIcon className="h-8 w-8" />
                    </div>

                    <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-red-700">
                      {activeSkill.label}
                    </p>

                    <h3 className="text-3xl font-black text-slate-950 sm:text-5xl">
                      {activeSkill.category}
                    </h3>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Domaine actif
                  </div>
                </div>

                <p className="max-w-3xl text-lg leading-8 text-slate-700">
                  {activeSkill.description}
                </p>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500">
                  {activeSkill.details}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {activeSkill.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-red-100 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-red-700 shadow-sm ring-1 ring-slate-200 transition group-hover:bg-red-700 group-hover:text-white">
                        <Code2 className="h-4 w-4" />
                      </div>

                      <p className="font-black text-slate-950">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                    <p className="text-sm leading-7 text-slate-700">
                      Cette section présente les technologies que j’utilise, que
                      j’apprends et que je développe progressivement dans mes
                      projets et mon parcours académique.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}