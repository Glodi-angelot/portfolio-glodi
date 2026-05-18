"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  GraduationCap,
  Medal,
  School,
  Sparkles,
  Target,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const timeline = [
  {
    icon: School,
    period: "Actuellement",
    title: "Master 1 Informatique",
    place: "Université de Kinshasa",
    description:
      "Formation universitaire avancée en informatique, avec une orientation progressive vers la Data Science et l’Intelligence Artificielle.",
    color: "red",
  },
  {
    icon: GraduationCap,
    period: "2024 - 2025",
    title: "Licence en Informatique",
    place: "Université de Kinshasa",
    description:
      "Formation ayant renforcé mes bases en programmation, développement logiciel, bases de données et logique informatique.",
    color: "blue",
  },
  {
    icon: Medal,
    period: "Formation continue",
    title: "Certifications & apprentissage personnel",
    place: "Udemy, LeetCode et autoformation",
    description:
      "Renforcement régulier de mes compétences à travers des cours en ligne, des exercices d’algorithmique et des projets personnels.",
    color: "slate",
  },
];

const learningAreas = [
  {
    icon: Code2,
    title: "Développement logiciel",
    text: "Frontend, backend, mobile, APIs et architecture d’applications.",
  },
  {
    icon: BrainCircuit,
    title: "Data Science & IA",
    text: "Analyse de données, Python, apprentissage automatique et systèmes intelligents.",
  },
  {
    icon: Target,
    title: "Méthode professionnelle",
    text: "Qualité du code, organisation, présentation et amélioration continue.",
  },
];

const colorStyles = {
  red: {
    badge: "bg-red-50 text-red-700 border-red-100",
    icon: "bg-red-50 text-red-700",
    line: "from-red-700 to-red-300",
  },
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    icon: "bg-blue-50 text-blue-700",
    line: "from-blue-700 to-blue-300",
  },
  slate: {
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    icon: "bg-slate-100 text-slate-800",
    line: "from-slate-900 to-slate-300",
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_18%,rgba(185,28,28,0.07),transparent_30%),radial-gradient(circle_at_86%_24%,rgba(37,99,235,0.08),transparent_32%),linear-gradient(to_bottom,#f8fafc,#ffffff)]" />

      <div className="absolute left-0 top-28 -z-10 h-80 w-80 rounded-full bg-red-700/5 blur-3xl" />
      <div className="absolute right-0 bottom-20 -z-10 h-96 w-96 rounded-full bg-blue-700/5 blur-3xl" />

      <div className="container-custom">
        <SectionTitle
          eyebrow="Parcours"
          title="Un parcours académique solide, renforcé par la pratique."
          description="Mon évolution se construit entre formation universitaire, projets personnels, certifications et apprentissage continu."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-700/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-700/10 blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-black text-red-700">
                <Sparkles className="h-4 w-4" />
                Formation & progression
              </div>

              <h3 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                J’avance avec méthode, discipline et curiosité technique.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Mon parcours est orienté vers la maîtrise du développement
                logiciel et l’évolution vers la Data Science et l’Intelligence
                Artificielle. Je combine la formation académique avec la pratique
                personnelle pour transformer mes connaissances en projets concrets.
              </p>

              <div className="mt-7 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <BookOpen className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="font-black text-slate-950">
                      Ce que ce parcours montre
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      Une progression sérieuse, une capacité d’apprentissage et
                      une volonté de construire des solutions numériques propres,
                      utiles et bien présentées.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-950">M1</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    Master Informatique
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-950">2025</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    Licence en Informatique
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-950">∞</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    Apprentissage continu
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6">
            <div className="absolute left-9 top-10 hidden h-[calc(100%-5rem)] w-px bg-slate-200 sm:block" />

            <div className="grid gap-5">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const colors = colorStyles[item.color];

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="relative rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 sm:ml-14"
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${colors.icon} sm:absolute sm:-left-[4.35rem] sm:top-5 sm:ring-8 sm:ring-white`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div
                      className={`mb-4 inline-flex rounded-full border px-3 py-1.5 text-xs font-black ${colors.badge}`}
                    >
                      {item.period}
                    </div>

                    <h3 className="text-xl font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-blue-700">
                      {item.place}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div
                      className={`mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r ${colors.line}`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-slate-950 to-blue-700 opacity-0 transition group-hover:opacity-100" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-red-200 transition group-hover:bg-red-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h4 className="font-black text-slate-950">{area.title}</h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.text}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Axe de progression
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}