"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Sites web modernes",
    description:
      "Création de sites vitrines propres, responsives et adaptés à une identité professionnelle.",
    items: [
      "Site vitrine",
      "Portfolio",
      "Site institutionnel",
      "Page de présentation",
    ],
  },
  {
    icon: Code2,
    title: "Interfaces utilisateur",
    description:
      "Conception d’interfaces claires, élégantes et simples à utiliser pour le web.",
    items: [
      "Design responsive",
      "Sections modernes",
      "Navigation claire",
      "Expérience utilisateur",
    ],
  },
  {
    icon: Server,
    title: "Backend & systèmes de gestion",
    description:
      "Mise en place ou amélioration de systèmes de gestion avec logique métier et base de données.",
    items: [
      "Django",
      "Gestion des utilisateurs",
      "Tableaux de bord",
      "Organisation des données",
    ],
  },
  {
    icon: Database,
    title: "Bases de données",
    description:
      "Structuration des données, modélisation et préparation de systèmes exploitables.",
    items: ["MySQL", "PostgreSQL", "MERISE", "UML"],
  },
  {
    icon: Layers3,
    title: "Amélioration de projets existants",
    description:
      "Correction, refonte visuelle, amélioration mobile et professionnalisation d’un projet déjà commencé.",
    items: [
      "Responsive mobile",
      "Correction UI",
      "Refonte visuelle",
      "Amélioration des pages",
    ],
  },
  {
    icon: Rocket,
    title: "Accompagnement projet",
    description:
      "Aide à transformer une idée en structure claire : pages, fonctionnalités, contenu et plan d’évolution.",
    items: [
      "Analyse du besoin",
      "Structure du projet",
      "Fonctionnalités",
      "Préparation au déploiement",
    ],
  },
];

const process = [
  "Comprendre le besoin",
  "Structurer les pages",
  "Proposer une interface claire",
  "Développer progressivement",
  "Tester et améliorer",
  "Préparer la mise en ligne",
];

export default function ServicesPageContent() {
  return (
    <section className="bg-[#f5f3ee] px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <div className="container-custom">
        {/* HERO */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-red-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Services
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] text-slate-950 sm:text-5xl lg:text-6xl">
            Des services numériques simples, utiles et{" "}
            <span className="bg-gradient-to-r from-red-700 via-[#8a5f83] to-[#5b6fb3] bg-clip-text text-transparent">
              orientés résultat.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            J’aide à concevoir, améliorer ou structurer des solutions numériques
            : sites web, interfaces, systèmes de gestion, bases de données et
            projets web évolutifs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-red-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-2xl font-black text-slate-950">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-5 grid gap-2">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-red-700" />
                      <span className="text-sm font-bold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* PROCESS */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
              Méthode
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Une manière simple de passer de l’idée à une solution claire.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Je privilégie une méthode progressive : comprendre le besoin,
              structurer le projet, créer une interface propre, puis améliorer
              jusqu’à obtenir un résultat présentable.
            </p>

            <Link
              href="/projects"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-700"
            >
              Voir mes réalisations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[2.3rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700 text-white">
              <Wrench className="h-7 w-7" />
            </div>

            <div className="grid gap-3">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-black text-slate-700">{step}</p>
                </div>
              ))}
            </div>
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
              Un besoin numérique à transformer en projet ?
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-200">
              Présentez-moi votre idée, votre problème ou votre projet existant.
              Nous pouvons réfléchir à une solution claire, simple et
              professionnelle.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-red-700 hover:text-white"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}