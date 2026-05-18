"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Filter,
  Layers,
  Sparkles,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/projects";

const filters = [
  {
    label: "Tous",
    value: "all",
    match: () => true,
  },
  {
    label: "Sites web",
    value: "web",
    match: (project) =>
      project.category?.toLowerCase().includes("site") ||
      project.category?.toLowerCase().includes("web"),
  },
  {
    label: "E-commerce",
    value: "ecommerce",
    match: (project) =>
      project.category?.toLowerCase().includes("commerce") ||
      project.title?.toLowerCase().includes("nova"),
  },
  {
    label: "Mobile",
    value: "mobile",
    match: (project) =>
      project.category?.toLowerCase().includes("mobile") ||
      project.title?.toLowerCase().includes("taskflow"),
  },
  {
    label: "Institutionnel",
    value: "institutionnel",
    match: (project) =>
      project.category?.toLowerCase().includes("institutionnel") ||
      project.title?.toLowerCase().includes("gaacad") ||
      project.title?.toLowerCase().includes("eklezia"),
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const currentFilter = filters.find((filter) => filter.value === activeFilter);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => currentFilter.match(project));
  }, [currentFilter]);

  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  const hasGithub = activeProject?.github && activeProject.github !== "#";
  const hasLive = activeProject?.live && activeProject.live !== "#";

  const handleFilter = (value) => {
    setActiveFilter(value);
    setActiveIndex(0);
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === filteredProjects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? filteredProjects.length - 1 : current - 1
    );
  };

  if (!activeProject) return null;

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(185,28,28,0.07),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(37,99,235,0.08),transparent_32%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />

      <div className="container-custom">
        <SectionTitle
          eyebrow="Projets"
          title="Des réalisations concrètes, propres et orientées utilisateur."
          description="Une sélection de projets web, frontend, mobile et institutionnels qui montrent ma capacité à concevoir des interfaces modernes, structurées et présentables."
        />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/5 sm:p-6 lg:p-8">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-red-700/10 blur-3xl" />

          <div className="relative mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">
                <Sparkles className="h-4 w-4" />
                Projet sélectionné
              </div>

              <h3 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {activeProject.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                {activeProject.category}
                {activeProject.status ? ` · ${activeProject.status}` : ""}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previousProject}
                disabled={filteredProjects.length <= 1}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-red-100 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Projet précédent"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextProject}
                disabled={filteredProjects.length <= 1}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Projet suivant"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative mb-8 rounded-[1.7rem] border border-slate-200 bg-slate-50 p-3">
            <div className="mb-3 flex items-center gap-2 px-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              <Filter className="h-4 w-4 text-red-700" />
              Filtrer les projets
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;
                const count = projects.filter((project) =>
                  filter.match(project)
                ).length;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => handleFilter(filter.value)}
                    className={`rounded-full px-4 py-2 text-xs font-black transition sm:text-sm ${
                      isActive
                        ? "bg-slate-950 text-white shadow-lg shadow-slate-900/10"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-red-100 hover:bg-red-50 hover:text-red-700"
                    }`}
                  >
                    {filter.label}
                    <span
                      className={`ml-2 rounded-full px-2 py-0.5 text-[10px] ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${activeProject.title}`}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch"
            >
              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm sm:min-h-[460px]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    activeProject.accent || "from-slate-950 to-blue-700"
                  }`}
                />

                <img
                  src={activeProject.image}
                  alt={`Aperçu du projet ${activeProject.title}`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-black text-slate-800 shadow-sm backdrop-blur">
                    {activeProject.category}
                  </span>

                  {activeProject.status && (
                    <span className="rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-xs font-black text-white shadow-sm backdrop-blur">
                      {activeProject.status}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-white/70">
                    Projet {activeIndex + 1} / {filteredProjects.length}
                  </p>

                  <h4 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
                    {activeProject.title}
                  </h4>

                  <div
                    className={`mt-5 h-1.5 w-40 rounded-full bg-gradient-to-r ${
                      activeProject.accent || "from-red-700 to-blue-700"
                    }`}
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-700/10 blur-3xl" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-red-200">
                      <Layers className="h-7 w-7" />
                    </div>

                    <p className="text-base leading-8 text-slate-600">
                      {activeProject.description}
                    </p>

                    {activeProject.highlights?.length > 0 && (
                      <div className="mt-6 grid gap-3">
                        {activeProject.highlights.slice(0, 4).map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                            <span className="leading-6">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeProject.technologies?.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {hasGithub && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                      >
                        <Code2 className="h-4 w-4" />
                        Voir le code
                      </a>
                    )}

                    {hasLive && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                      >
                        Voir le projet
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                    {!hasGithub && !hasLive && (
                      <span className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-bold text-slate-500">
                        Projet en préparation
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-7 flex items-center justify-center">
            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500">
              {filteredProjects.length} projet
              {filteredProjects.length > 1 ? "s" : ""} dans ce filtre
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}