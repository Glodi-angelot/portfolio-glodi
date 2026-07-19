"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

const timeline = [
  {
    period: "2025 — En cours",
    title: "Master 1 Informatique — IA & Data Science",
    place: "Université de Kinshasa",
    description:
      "Formation orientée vers l’informatique avancée, l’Intelligence Artificielle, la Data Science, les systèmes et la recherche académique.",
    icon: BrainCircuit,
  },
  {
    period: "2021 — 2025",
    title: "Licence en Informatique",
    place: "Université de Kinshasa",
    description:
      "Base solide en développement logiciel, bases de données, réseaux, systèmes, modélisation et projets informatiques.",
    icon: Code2,
  },
  {
    period: "2020 — 2021",
    title: "Diplôme d’État — Mathématiques-Physique",
    place: "Collège Pierre Bouvet — Kinshasa",
    description:
      "Formation scientifique ayant renforcé mes bases en raisonnement logique, mathématiques et analyse.",
    icon: GraduationCap,
  },
];

const trainings = [
  {
    title: "Data Science and Machine Learning",
    place: "Udemy",
    period: "2026 — En cours",
    description:
      "Formation complémentaire pour renforcer mes compétences en analyse de données, Machine Learning et modélisation.",
  },
  {
    title: "Workshop Conception de Circuits Imprimés PCB",
    place: "Orange Digital Center — Kinshasa",
    period: "13 — 17 juillet 2026",
    description:
      "Atelier pratique autour de l’électronique, des circuits imprimés, de KiCad et de la conception PCB.",
  },
];

const learningAxes = [
  "Développement Mobile",
  "Data Science",
  "Intelligence Artificielle",
  "Bases de données",
  "Systèmes embarqués",
  "Interfaces web modernes",
];

export default function EducationPageContent() {
  return (
    <section className="bg-[#f5f3ee] px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <div className="container-custom">
        {/* HERO */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-red-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Parcours
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] text-slate-950 sm:text-5xl lg:text-6xl">
            Un parcours construit entre{" "}
            <span className="bg-gradient-to-r from-red-700 via-[#8a5f83] to-[#5b6fb3] bg-clip-text text-transparent">
              université, projets et apprentissage continu.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Mon évolution se construit progressivement autour de l’informatique,
            du développement logiciel, des données, de l’Intelligence
            Artificielle et de la pratique technique.
          </p>
        </div>

        {/* RESUME CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <Calendar className="h-7 w-7 text-red-700" />
            <h2 className="mt-4 text-2xl font-black text-slate-950">M1</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Informatique, orientation IA & Data Science.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <MapPin className="h-7 w-7 text-red-700" />
            <h2 className="mt-4 text-2xl font-black text-slate-950">
              Kinshasa
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Parcours académique construit principalement à l’Université de
              Kinshasa.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <Award className="h-7 w-7 text-red-700" />
            <h2 className="mt-4 text-2xl font-black text-slate-950">
              Progression
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Formation continue à travers les projets, ateliers et cours en
              ligne.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
              Formation académique
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Une base universitaire orientée informatique et technologies.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Mon parcours académique m’a permis de développer des bases en
              programmation, systèmes, réseaux, bases de données, modélisation et
              projets logiciels. Aujourd’hui, mon orientation principale se
              concentre sur l’IA et la Data Science.
            </p>

            <Link
              href="/skills"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-700"
            >
              Voir mes compétences
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5">
            {timeline.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-red-700">
                        {item.period}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-bold text-[#4C6BAA]">
                        {item.place}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TRAININGS */}
        <div className="mt-16 rounded-[2.3rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
              Formations complémentaires
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Apprendre au-delà du cadre universitaire.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Je complète mon parcours par des formations pratiques, des ateliers
              techniques et des projets personnels afin de renforcer mes
              compétences.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {trainings.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6"
              >
                <BookOpen className="h-7 w-7 text-red-700" />

                <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#4C6BAA]">
                  {item.period}
                </p>

                <h3 className="mt-2 text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm font-bold text-slate-500">
                  {item.place}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AXES */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
              Axes d’évolution
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Les domaines que je cherche à renforcer.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Mon objectif est de consolider mes bases, construire des projets
              plus solides et développer un profil capable de répondre à des
              besoins numériques réels.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {learningAxes.map((axis) => (
              <div
                key={axis}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-red-700" />
                <span className="text-sm font-black text-slate-700">
                  {axis}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[2.3rem] border border-slate-200 bg-slate-950 px-6 py-14 text-white shadow-2xl shadow-slate-900/10 sm:px-10 sm:py-16">
          <div className="absolute inset-0">
            <Image
              src="/images/glodi-elephant-strong.png"
              alt="Éléphant identitaire"
              fill
              sizes="100vw"
              className="object-cover object-right opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(127,29,29,0.82),rgba(2,6,23,0.94))]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black sm:text-4xl">
              Mon parcours continue de se construire.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-200">
              Chaque formation, chaque projet et chaque difficulté technique
              représente une occasion d’évoluer et de renforcer mon profil.
            </p>

            <Link
              href="/projects"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-red-700 hover:text-white"
            >
              Voir mes projets
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}