"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Mail,
  Smartphone,
  Sparkles,
} from "lucide-react";

const highlights = [
  "Développement web, mobile et backend/API",
  "Orientation progressive vers la Data Science et l’IA",
];

const domains = [
  {
    icon: Code2,
    title: "Web",
    text: "HTML5, CSS3, React, Next.js, Tailwind CSS",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    text: "React Native, Expo",
  },
  {
    icon: Database,
    title: "Backend",
    text: "Django, Laravel, Node.js",
  },
  {
    icon: BrainCircuit,
    title: "Data & IA",
    text: "Python, analyse, apprentissage",
  },
];

const stats = [
  {
    value: "6+",
    label: "Projets réels",
  },
  {
    value: "4",
    label: "Domaines techniques",
  },
  {
    value: "100%",
    label: "Vision produit",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fbfbfc] px-6 pb-16 pt-32 lg:pb-20 lg:pt-36"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_12%_18%,rgba(185,28,28,0.10),transparent_30%),radial-gradient(circle_at_86%_22%,rgba(15,23,42,0.10),transparent_34%),radial-gradient(circle_at_45%_90%,rgba(37,99,235,0.08),transparent_36%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />

      <div className="absolute left-0 top-28 -z-20 h-[420px] w-[420px] rounded-full bg-red-700/10 blur-3xl" />
      <div className="absolute right-0 top-20 -z-20 h-[460px] w-[460px] rounded-full bg-slate-900/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -z-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute inset-0 -z-10 opacity-[0.45]">
        <div className="absolute left-8 top-40 h-40 w-40 rounded-full border border-slate-200" />
        <div className="absolute right-24 top-44 h-72 w-72 rounded-full border border-slate-200" />
        <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full border border-red-100" />
        <div className="absolute left-0 top-1/2 h-px w-72 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute right-0 top-1/3 h-px w-96 bg-gradient-to-r from-transparent via-red-200 to-transparent" />
      </div>

      <div className="container-custom grid min-h-[calc(100vh-120px)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-bold text-slate-700 shadow-sm backdrop-blur sm:text-sm"
          >
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-red-50">
              <span className="absolute h-5 w-5 animate-ping rounded-full bg-red-500/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-red-700" />
            </span>
            Disponible pour projets, stages et collaborations
          </motion.div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.06] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Je conçois des{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-red-700 via-slate-950 to-blue-700 bg-clip-text text-transparent">
                solutions numériques
              </span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-red-100 sm:h-4" />
            </span>{" "}
            claires et modernes.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Je suis <strong className="text-slate-950">Glodi Mombesa</strong>,
            étudiant en Master Informatique à l’Université de Kinshasa. Je
            développe des solutions web, mobiles et backend, avec une
            progression vers la Data Science et l’IA.
          </p>

          <div className="mt-7 grid gap-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18 + index * 0.08, duration: 0.45 }}
                className="flex items-start gap-3 text-sm text-slate-700 sm:text-base"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-red-700" />
                </span>
                <span className="leading-7">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-red-700"
            >
              Voir mes projets
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="/cv/glodi-cv.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-red-700 hover:text-red-700"
            >
              <Download className="h-4 w-4" />
              Télécharger CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-white/80 px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-red-100 hover:bg-red-50 hover:text-red-700"
            >
              <Mail className="h-4 w-4" />
              Me contacter
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-black text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mx-auto w-full max-w-[560px] lg:mx-0"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 -z-10 rounded-full border border-dashed border-red-200"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 -z-10 rounded-full border border-dashed border-slate-200"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-3 top-6 z-20 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:block"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-700">
              Portfolio
            </p>
            <p className="mt-1 text-xs font-bold text-slate-700">
              Web · Mobile · Data
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 bottom-10 z-20 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:block"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
              Vision
            </p>
            <p className="mt-1 text-xs font-bold text-slate-700">
              Produits utiles & clairs
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(185,28,28,0.28),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.24),transparent_28%),linear-gradient(135deg,#020617,#0f172a)]" />

              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-700/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <motion.div
                    whileHover={{ scale: 1.04, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                    className="relative mx-auto h-36 w-36 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl shadow-slate-950/30 sm:mx-0"
                  >
                    <Image
                      src="/images/profile.jpeg"
                      alt="Photo professionnelle de Glodi Mombesa"
                      fill
                      sizes="(max-width: 640px) 144px, 144px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                  </motion.div>

                  <div className="text-center sm:text-left">
                    <p className="text-sm text-slate-400">
                      Portfolio professionnel
                    </p>

                    <h2 className="mt-2 text-3xl font-black">
                      Glodi Mombesa
                    </h2>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-red-100">
                      <Sparkles className="h-4 w-4 text-red-300" />
                      Ingénierie logicielle · Data & IA
                    </div>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {domains.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.35 + index * 0.08,
                          duration: 0.45,
                        }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-red-300/30 hover:bg-white/[0.09]"
                      >
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-red-200 transition group-hover:bg-red-500/20">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="text-lg font-black">{item.title}</h3>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {item.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="relative mt-6 overflow-hidden rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-400 to-blue-400" />
                  <p className="pl-3 text-sm leading-6 text-slate-300">
                    Objectif : créer des solutions utiles, propres et adaptées à
                    des besoins réels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 right-12 grid grid-cols-4 gap-2 opacity-40">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-red-700"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}