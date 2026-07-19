"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Filter,
  Search,
  Sparkles,
} from "lucide-react";
import { articles } from "@/data/articles";

const categories = [
  { id: "all", label: "Tous" },
  { id: "Formation", label: "Formation" },
  { id: "Électronique", label: "Électronique" },
  { id: "Projet PCB", label: "Projet PCB" },
  { id: "Data & IA", label: "Data & IA" },
];

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "all" || article.category === activeCategory;

      const text = `
        ${article.title || ""}
        ${article.excerpt || ""}
        ${article.category || ""}
        ${(article.tags || []).join(" ")}
      `.toLowerCase();

      const matchesSearch = text.includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const activeCategoryLabel =
    categories.find((category) => category.id === activeCategory)?.label ||
    "cette catégorie";

  return (
    <section className="bg-[#f5f3ee] px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <div className="container-custom">
        {/* HERO */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-red-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Blog
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] text-slate-950 sm:text-5xl lg:text-6xl">
            Mes expériences, apprentissages et{" "}
            <span className="bg-gradient-to-r from-red-700 via-[#8a5f83] to-[#5b6fb3] bg-clip-text text-transparent">
              partages techniques.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Un espace pour documenter mon parcours, mes formations, mes projets
            numériques, mes découvertes techniques et mon évolution dans le
            développement, la Data Science, l’électronique et l’IA.
          </p>
        </div>

        {/* SEARCH + FILTERS */}
        <div className="mt-12 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Rechercher un article..."
              className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-semibold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-red-200 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500 sm:flex">
              <Filter className="h-4 w-4" />
              Filtrer
            </div>

            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.12em] transition ${
                    isActive
                      ? "bg-slate-950 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-950 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ARTICLES */}
        {filteredArticles.length === 0 ? (
          <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-14 text-center shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Aucun article trouvé
            </p>

            <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">
              Aucun article n’est disponible pour{" "}
              <span className="text-red-700">{activeCategoryLabel}</span>.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Essayez une autre catégorie ou effacez la recherche pour afficher
              les articles disponibles.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchTerm("");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-red-700"
            >
              Voir tous les articles
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="relative h-56 overflow-hidden bg-slate-950">
                    <Image
                      src={article.cover}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-700 shadow-sm">
                      {article.category}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h2 className="text-2xl font-black leading-tight text-white">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex flex-wrap gap-3 text-xs font-bold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {article.excerpt}
                  </p>

                  {article.gallery?.length > 0 && (
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {article.gallery.slice(0, 3).map((image) => (
                        <div
                          key={image.src}
                          className="relative h-20 overflow-hidden rounded-2xl bg-slate-100"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt || article.title}
                            fill
                            sizes="120px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {article.tags?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700"
                  >
                    Lire l’article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
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
            <h3 className="text-3xl font-black sm:text-4xl">
              Documenter mon parcours, c’est aussi construire ma progression.
            </h3>

            <p className="mt-4 text-base leading-8 text-slate-200">
              Chaque article me permet de garder une trace de mes expériences,
              de mes projets et des compétences que je développe progressivement.
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