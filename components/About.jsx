"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const focus = [
  "Développement web, mobile et backend",
  "Interfaces propres et expérience utilisateur",
  "Progression vers Data Science et IA",
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Rigueur technique",
    text: "Structurer le code, organiser les composants et construire une base claire.",
    color: "text-red-700 bg-red-50",
  },
  {
    icon: Lightbulb,
    title: "Vision produit",
    text: "Comprendre le besoin réel avant de penser à l’interface ou au code.",
    color: "text-blue-700 bg-blue-50",
  },
  {
    icon: Rocket,
    title: "Progression continue",
    text: "Apprendre, pratiquer, corriger et améliorer chaque projet avec méthode.",
    color: "text-slate-700 bg-slate-100",
  },
];

const timeline = [
  {
    label: "Aujourd’hui",
    title: "Master 1 Informatique",
    text: "Université de Kinshasa, avec une orientation progressive vers la Data Science et l’Intelligence Artificielle.",
  },
  {
    label: "Base académique",
    title: "Licence en Informatique",
    text: "Formation terminée en 2024-2025, avec consolidation des bases en développement logiciel.",
  },
  {
    label: "En continu",
    title: "Certifications & pratique",
    text: "Formations personnelles, Udemy, Coursera et projets pratiques pour renforcer mes compétences.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(185,28,28,0.07),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(37,99,235,0.08),transparent_30%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />

      <div className="container-custom">
        <SectionTitle
          eyebrow="À propos"
          title="Un profil sérieux, polyvalent et orienté solutions."
          description="Je construis mon parcours autour du développement logiciel, de la qualité des interfaces et d’une progression vers la Data Science et l’Intelligence Artificielle."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[5rem] bg-red-50" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-tr-[5rem] bg-blue-50" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black text-red-700 shadow-sm sm:text-sm">
                <Sparkles className="h-4 w-4" />
                Master Informatique · Université de Kinshasa
              </div>

              <h3 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Je développe des solutions numériques avec méthode, clarté et sens du détail.
              </h3>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Je suis étudiant en{" "}
                <strong className="text-slate-950">Master 1 Informatique</strong>.
                Mon parcours est centré sur le développement logiciel, avec une
                progression vers la{" "}
                <strong className="text-slate-950">Data Science</strong> et
                l’<strong className="text-slate-950">Intelligence Artificielle</strong>.
                Je m’intéresse aux projets utiles, bien structurés et agréables à utiliser.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {focus.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {index === 0 && <Code2 className="h-4 w-4 text-red-700" />}
                      {index === 1 && <Layers className="h-4 w-4 text-blue-700" />}
                      {index === 2 && <BrainCircuit className="h-4 w-4 text-slate-800" />}
                    </div>

                    <p className="text-sm font-bold leading-6 text-slate-700">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <p className="text-sm leading-7 text-slate-700">
                    Mon objectif est simple : progresser avec sérieux et construire
                    des projets propres, cohérents et capables de répondre à des
                    besoins réels.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-900 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/20 sm:p-7"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,28,28,0.32),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.28),transparent_34%)]" />

            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-red-200">
                <GraduationCap className="h-7 w-7" />
              </div>

              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-200">
                Parcours
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Formation et progression
              </h3>

              <div className="mt-6 space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-200">
                      {item.label}
                    </p>

                    <h4 className="mt-2 font-black text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-slate-950 to-blue-700 opacity-0 transition group-hover:opacity-100" />

                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h4 className="text-lg font-black text-slate-950">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-400 transition group-hover:text-red-700">
                  Principe {index + 1}
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}