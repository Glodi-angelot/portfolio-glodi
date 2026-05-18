"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  LayoutDashboard,
  PlugZap,
  RefreshCcw,
  Server,
  Smartphone,
  Sparkles,
  Target,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: LayoutDashboard,
    title: "Sites web modernes",
    short: "Sites vitrines, landing pages et interfaces responsives.",
    description:
      "Je peux concevoir des sites web propres, modernes et professionnels pour présenter une activité, une organisation, un projet ou un service de manière claire.",
    points: [
      "Site vitrine ou landing page",
      "Design responsive mobile et desktop",
      "Sections bien structurées",
      "Mise en ligne sur Vercel ou Netlify",
    ],
    tag: "Web",
  },
  {
    icon: Code2,
    title: "Interfaces utilisateur",
    short: "Interfaces propres, lisibles et agréables à utiliser.",
    description:
      "Je peux créer ou améliorer des interfaces simples à comprendre, avec une attention portée à la lisibilité, aux espacements, aux couleurs et à l’expérience utilisateur.",
    points: [
      "Interface claire et cohérente",
      "Composants réutilisables",
      "Animations légères",
      "Meilleure expérience utilisateur",
    ],
    tag: "UI/UX",
  },
  {
    icon: Server,
    title: "Backend & API",
    short: "Logique serveur, APIs REST et gestion des données.",
    description:
      "Je peux développer la partie backend d’une application : gestion des données, logique métier, authentification, endpoints API et connexion avec le frontend.",
    points: [
      "API REST avec Django REST Framework",
      "Gestion des utilisateurs",
      "Connexion aux bases de données",
      "Structure backend maintenable",
    ],
    tag: "Backend",
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    short: "Applications mobiles avec React Native et Expo.",
    description:
      "Je peux concevoir des applications mobiles simples, fluides et adaptées aux usages sur smartphone, avec une interface claire et une navigation intuitive.",
    points: [
      "Interface mobile propre",
      "Navigation entre écrans",
      "Connexion possible à une API",
      "Base évolutive pour ajout de fonctionnalités",
    ],
    tag: "Mobile",
  },
  {
    icon: PlugZap,
    title: "Intégration frontend/backend",
    short: "Connexion entre interface, API et base de données.",
    description:
      "Je peux connecter une interface utilisateur à une API afin de rendre une application dynamique, exploitable et capable de manipuler des données réelles.",
    points: [
      "Formulaires dynamiques",
      "Affichage de données depuis une API",
      "Actions utilisateur",
      "Gestion des états côté frontend",
    ],
    tag: "Full-stack",
  },
  {
    icon: RefreshCcw,
    title: "Amélioration de projets",
    short: "Refonte, correction, optimisation et nettoyage.",
    description:
      "Je peux améliorer un projet existant afin de le rendre plus propre, plus responsive, plus lisible, mieux structuré ou plus professionnel visuellement.",
    points: [
      "Refonte visuelle",
      "Correction d’erreurs",
      "Amélioration responsive",
      "Nettoyage du code",
    ],
    tag: "Refonte",
  },
];

const approach = [
  {
    title: "Comprendre",
    text: "Identifier le besoin réel avant de construire.",
  },
  {
    title: "Structurer",
    text: "Organiser une solution claire et maintenable.",
  },
  {
    title: "Construire",
    text: "Développer proprement et présenter un résultat sérieux.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const detailRef = useRef(null);

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  const handleSelect = (index) => {
    setActiveIndex(index);

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
    }
  };

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(185,28,28,0.07),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(37,99,235,0.08),transparent_32%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />

      <div className="absolute left-0 top-28 -z-10 h-80 w-80 rounded-full bg-red-700/5 blur-3xl" />
      <div className="absolute right-0 bottom-20 -z-10 h-96 w-96 rounded-full bg-blue-700/5 blur-3xl" />

      <div className="container-custom">
        <SectionTitle
          eyebrow="Services"
          title="Ce que je peux concrètement apporter."
          description="Des services simples, clairs et adaptés à mon profil actuel : création d’interfaces, développement web, backend, mobile et amélioration de projets existants."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-700/10 blur-3xl" />
            <div className="absolute -bottom-16 left-6 h-48 w-48 rounded-full bg-blue-700/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">
                <Sparkles className="h-4 w-4" />
                Services
              </div>

              <h3 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                Des solutions utiles, propres et faciles à comprendre.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Mon objectif est de transformer un besoin en interface claire,
                application fonctionnelle ou base technique mieux structurée.
              </p>

              <div className="mt-6 grid gap-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={service.title}
                      type="button"
                      onClick={() => handleSelect(index)}
                      className={`group relative overflow-hidden rounded-[1.5rem] border p-4 text-left transition ${
                        isActive
                          ? "border-slate-950 bg-slate-950 text-white shadow-xl shadow-slate-900/10"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:-translate-y-1 hover:border-red-100 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeServiceBackground"
                          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,28,28,0.28),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.20),transparent_42%)]"
                        />
                      )}

                      <div className="relative flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition ${
                            isActive
                              ? "bg-white/10 text-red-100"
                              : "bg-white text-red-700 shadow-sm ring-1 ring-slate-200 group-hover:bg-red-50"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="min-w-0">
                          <div className="mb-1 flex flex-wrap items-center gap-2">
                            <h4
                              className={`font-black ${
                                isActive ? "text-white" : "text-slate-950"
                              }`}
                            >
                              {service.title}
                            </h4>

                            <span
                              className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${
                                isActive
                                  ? "bg-white/10 text-blue-100"
                                  : "bg-blue-50 text-blue-700"
                              }`}
                            >
                              {service.tag}
                            </span>
                          </div>

                          <p
                            className={`text-sm leading-6 ${
                              isActive ? "text-slate-300" : "text-slate-500"
                            }`}
                          >
                            {service.short}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              ref={detailRef}
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:sticky lg:top-28"
            >
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/10 blur-3xl" />
              <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-red-700/10 blur-3xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.title}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.98 }}
                  transition={{ duration: 0.28 }}
                  className="relative"
                >
                  <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-red-200 shadow-xl shadow-slate-900/10">
                        <ActiveIcon className="h-8 w-8" />
                      </div>

                      <p className="text-xs font-black uppercase tracking-[0.24em] text-red-700">
                        Service sélectionné
                      </p>

                      <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                        {activeService.title}
                      </h3>
                    </div>

                    <div className="w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">
                      {activeService.tag}
                    </div>
                  </div>

                  <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                    {activeService.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {activeService.points.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.25 }}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                        <span className="text-sm font-semibold leading-6 text-slate-700">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5">
                    <div className="flex items-start gap-3">
                      <Target className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                      <p className="text-sm leading-7 text-slate-700">
                        Chaque service est adapté selon le contexte du projet,
                        son niveau de complexité, les délais et les besoins
                        réels.
                      </p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-red-700"
                  >
                    Me contacter
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-3">
              {approach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700">
                    Étape {index + 1}
                  </p>

                  <h4 className="mt-2 font-black text-slate-950">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}