import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  projects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable | Glodi Mombesa",
      description: "Ce projet n’existe pas ou n’est plus disponible.",
    };
  }

  const title = `${project.title} | Glodi Mombesa`;
  const description =
    project.description ||
    "Découvrez ce projet réalisé par Glodi Mombesa.";
  const image = new URL(project.ogImage || project.image, siteUrl).toString();
  const url = new URL(`/projects/${project.slug}`, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Glodi Mombesa",
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, 3);

  const features = project.features?.length
    ? project.features
    : project.highlights || [];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />

      <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <div className="absolute inset-0 -z-30 bg-[#f5f3ee]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(139,30,34,0.07),transparent_30%),radial-gradient(circle_at_top_right,rgba(76,107,170,0.08),transparent_30%)]" />

        <div className="container-custom">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-red-700 hover:text-red-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>

          {/* HERO */}
          <div className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
            <div className="relative min-h-[360px] overflow-hidden bg-slate-950 sm:min-h-[500px] lg:min-h-[580px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Projet détaillé
                </div>

                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-200">
                  {project.category}
                </p>

                <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                  {project.description}
                </p>
              </div>
            </div>

            {/* INFOS */}
            <div className="grid gap-4 border-t border-slate-200 bg-white p-5 sm:grid-cols-3 sm:p-6">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-red-700" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      Année
                    </p>
                    <p className="mt-1 font-black text-slate-950">
                      {project.year || "2026"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-red-700" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      Statut
                    </p>
                    <p className="mt-1 font-black text-slate-950">
                      {project.status || "Projet présenté"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:items-end sm:justify-center">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-red-700"
                  >
                    Voir en ligne
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-900 transition hover:-translate-y-1 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                  >
                    Code source
                    <FaGithub className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* CONTENU */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                Besoin
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Problème ou objectif du projet
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {project.problem ||
                  "Ce projet répond à un besoin concret de présentation, d’organisation ou de gestion numérique."}
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                Contribution
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Mon rôle
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {project.role ||
                  "J’ai participé à la conception, à la structuration et à la mise en place de ce projet."}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                Fonctionnalités
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Ce que le projet propose
              </h2>

              {features.length > 0 ? (
                <div className="mt-6 grid gap-3">
                  {features.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-700" />
                      <p className="text-sm font-semibold leading-7 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Les fonctionnalités détaillées seront ajoutées progressivement.
                </p>
              )}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                Stack
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Technologies utilisées
              </h2>

              {project.technologies?.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Les technologies seront précisées prochainement.
                </p>
              )}
            </div>
          </div>

          {/* ÉVOLUTIONS */}
          {project.evolution?.length > 0 && (
            <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                Évolution
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Pistes d’amélioration possibles
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {project.evolution.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold leading-7 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJETS SIMILAIRES */}
          {relatedProjects.length > 0 && (
            <div className="mt-16">
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
                    Autres projets
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-slate-950">
                    À découvrir aussi.
                  </h2>
                </div>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-black text-[#4C6BAA] transition hover:text-red-700"
                >
                  Tous les projets
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {relatedProjects.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/projects/${item.slug}`}
                    className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                  >
                    <div className="relative h-44 bg-slate-950">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#4C6BAA]">
                        {item.category}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-slate-950">
                        {item.title}
                      </h3>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-black text-red-700">
                        Voir le détail
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

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
                Un projet similaire à construire ?
              </h2>

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

      <Footer />
    </main>
  );
}