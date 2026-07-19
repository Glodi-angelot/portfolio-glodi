import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Images,
  Sparkles,
  Tag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article introuvable | Glodi Mombesa",
      description: "Cet article n’existe pas ou n’est plus disponible.",
    };
  }

  const title = `${article.title} | Blog | Glodi Mombesa`;
  const description =
    article.excerpt || "Découvrez cet article publié par Glodi Mombesa.";
  const image = new URL(article.cover, siteUrl).toString();
  const url = new URL(`/blog/${article.slug}`, siteUrl).toString();

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
      publishedTime: article.date,
      authors: [article.author || "Glodi Mombesa"],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.title,
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

function ArticleGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Images className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700">
            Galerie
          </p>
          <h2 className="text-2xl font-black text-slate-950">
            Quelques images de cette expérience
          </h2>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className={`group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-50 shadow-sm ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden bg-slate-950 ${
                index === 0 ? "h-[320px] sm:h-[430px]" : "h-[230px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt || "Image de l’article"}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 900px"
                    : "(max-width: 768px) 100vw, 450px"
                }
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent opacity-80" />
            </div>

            {(image.caption || image.alt) && (
              <figcaption className="px-5 py-4 text-sm font-semibold leading-7 text-slate-600">
                {image.caption || image.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

function renderContentBlock(block, index) {
  if (block.type === "heading") {
    return (
      <h2
        key={index}
        className="mt-10 text-3xl font-black leading-tight text-slate-950"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={index} className="mt-5 grid gap-3">
        {(block.items || []).map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-base font-semibold leading-8 text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote
        key={index}
        className="mt-8 rounded-[1.8rem] border-l-4 border-red-700 bg-red-50 p-6 text-lg font-bold leading-8 text-slate-800"
      >
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "image") {
    return (
      <figure
        key={index}
        className="mt-8 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-50 shadow-sm"
      >
        <div className="relative h-[320px] overflow-hidden bg-slate-950 sm:h-[430px]">
          <Image
            src={block.src}
            alt={block.alt || "Image de l’article"}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {(block.caption || block.alt) && (
          <figcaption className="px-5 py-4 text-sm font-semibold leading-7 text-slate-600">
            {block.caption || block.alt}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.type === "gallery") {
    return <ArticleGallery key={index} images={block.images || []} />;
  }

  return (
    <p
      key={index}
      className="mt-6 text-base leading-8 text-slate-700 sm:text-lg"
    >
      {block.text}
    </p>
  );
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />

      <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <div className="absolute inset-0 -z-30 bg-[#f5f3ee]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(139,30,34,0.07),transparent_30%),radial-gradient(circle_at_top_right,rgba(76,107,170,0.08),transparent_30%)]" />

        <div className="container-custom">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-red-700 hover:text-red-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          {/* HERO */}
          <article className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
            <div className="relative min-h-[360px] overflow-hidden bg-slate-950 sm:min-h-[500px] lg:min-h-[580px]">
              <Image
                src={article.cover}
                alt={article.title}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Article
                </div>

                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-200">
                  {article.category}
                </p>

                <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {article.title}
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                  {article.excerpt}
                </p>
              </div>
            </div>

            {/* META BAR */}
            <div className="grid gap-4 border-t border-slate-200 bg-white p-5 sm:grid-cols-3 sm:p-6">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-red-700" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      Date
                    </p>
                    <p className="mt-1 font-black text-slate-950">
                      {article.date}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-700" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      Lecture
                    </p>
                    <p className="mt-1 font-black text-slate-950">
                      {article.readTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <Tag className="h-5 w-5 text-red-700" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                      Auteur
                    </p>
                    <p className="mt-1 font-black text-slate-950">
                      {article.author || "Glodi Mombesa"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CONTENT */}
          <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {article.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8">
              {(article.content || []).map((block, index) =>
                renderContentBlock(block, index)
              )}

              {article.gallery?.length > 0 && (
                <ArticleGallery images={article.gallery} />
              )}
            </div>
          </div>

          {/* RELATED */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
                    Autres articles
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-slate-950">
                    À lire aussi.
                  </h2>
                </div>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-black text-[#4C6BAA] transition hover:text-red-700"
                >
                  Tous les articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                  >
                    <div className="relative h-44 bg-slate-950">
                      <Image
                        src={item.cover}
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
                        Lire l’article
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
                Une idée ou un sujet à approfondir ?
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-200">
                Ce blog servira à documenter mon parcours, mes projets, mes
                apprentissages et mes réflexions dans le numérique.
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