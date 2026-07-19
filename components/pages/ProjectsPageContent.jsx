"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Filter,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

const filters = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "gestion", label: "Gestion" },
  { id: "institutionnel", label: "Institutionnel" },
  { id: "ia-data", label: "IA & Data" },
];

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getProjectTags(project) {
  const content = `
    ${project.title || ""}
    ${project.category || ""}
    ${project.description || ""}
    ${project.problem || ""}
    ${project.role || ""}
    ${(project.technologies || []).join(" ")}
    ${(project.highlights || []).join(" ")}
    ${(project.features || []).join(" ")}
  `.toLowerCase();

  const tags = [];

  if (
    content.includes("web") ||
    content.includes("site") ||
    content.includes("frontend") ||
    content.includes("react") ||
    content.includes("next") ||
    content.includes("html") ||
    content.includes("css") ||
    content.includes("javascript") ||
    content.includes("responsive")
  ) {
    tags.push("web");
  }

  if (
    content.includes("e-commerce") ||
    content.includes("ecommerce") ||
    content.includes("commerce") ||
    content.includes("boutique") ||
    content.includes("catalogue") ||
    content.includes("checkout") ||
    content.includes("panier") ||
    content.includes("market")
  ) {
    tags.push("ecommerce");
  }

  if (
    content.includes("gestion") ||
    content.includes("task") ||
    content.includes("dashboard") ||
    content.includes("plateforme") ||
    content.includes("système") ||
    content.includes("systeme")
  ) {
    tags.push("gestion");
  }

  if (
    content.includes("church") ||
    content.includes("église") ||
    content.includes("eglise") ||
    content.includes("institutionnel") ||
    content.includes("organisation") ||
    content.includes("restaurant") ||
    content.includes("vitrine")
  ) {
    tags.push("institutionnel");
  }

  if (
    content.includes("ia") ||
    content.includes("data") ||
    content.includes("machine learning") ||
    content.includes("scikit") ||
    content.includes("analyse") ||
    content.includes("diagnostic") ||
    content.includes("classification")
  ) {
    tags.push("ia-data");
  }

  return [...new Set(tags)];
}

function getProjectLink(project) {
  return `/projects/${project.slug || slugify(project.title)}`;
}

export default function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) =>
      getProjectTags(project).includes(activeFilter)
    );
  }, [activeFilter]);

  const activeFilterLabel =
    filters.find((filter) => filter.id === activeFilter)?.label || "cette catégorie";

  return (
    <section className="bg-[#f5f3ee] px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <div className="container-custom">
        {/* HERO */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-red-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Projets
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] text-slate-950 sm:text-5xl lg:text-6xl">
            Des projets concrets en{" "}
            <span className="bg-gradient-to-r from-red-700 via-[#8a5f83] to-[#5b6fb3] bg-clip-text text-transparent">
              développement, gestion, Data et systèmes.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Cette page regroupe mes projets réalisés ou en évolution. Chaque
            projet peut être consulté en détail, avec son image, sa description,
            ses points forts et ses liens de démonstration.
          </p>
        </div>

        {/* FILTRES */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
            <Filter className="h-4 w-4" />
            Filtrer
          </div>

          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
                  isActive
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-950 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* MESSAGE SI AUCUN PROJET */}
        {filteredProjects.length === 0 ? (
          <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-14 text-center shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Aucun projet publié
            </p>

            <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">
              Aucun projet n’est encore disponible dans la catégorie{" "}
              <span className="text-red-700">{activeFilterLabel}</span>.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Vous pouvez revenir sur <strong>Tous</strong> ou choisir une autre
              catégorie pour consulter les projets déjà publiés.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-red-700"
            >
              Voir tous les projets
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <article
                key={project.slug || project.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-700 shadow-sm">
                    {project.category}
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r ${
                      project.accent || "from-red-700 to-blue-700"
                    }`}
                  />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                      Projet {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                      {project.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  {project.status && (
                    <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">
                      {project.status}
                    </div>
                  )}

                  <p className="text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  {project.highlights?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.highlights.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.technologies?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-950/5 px-3 py-1.5 text-xs font-black text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={getProjectLink(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700"
                    >
                      Voir le détail
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                      >
                        Démo
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                      >
                        Code
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA AVEC ELEPHANT EN FOND */}
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
            <h3 className="text-3xl font-black sm:text-4xl">
              Un projet à construire ou améliorer ?
            </h3>

            <p className="mt-4 text-base leading-8 text-slate-200">
              Discutons d’une interface, d’un site, d’une plateforme ou d’une
              idée numérique à rendre plus professionnelle.
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