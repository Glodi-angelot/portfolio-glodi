"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const hasGithub = project.github && project.github !== "#";
  const hasLive = project.live && project.live !== "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl hover:shadow-slate-900/10"
    >
      <div className="relative h-60 overflow-hidden bg-slate-100">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            project.accent || "from-slate-950 to-blue-700"
          }`}
        />

        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-slate-800 shadow-sm backdrop-blur">
          {project.category}
        </div>

        <div
          className={`absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r ${
            project.accent || "from-red-700 to-blue-700"
          }`}
        />

        <div className="absolute bottom-5 left-5 right-5">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-white/70">
            Projet #{index + 1}
          </p>

          <h3 className="text-3xl font-black leading-tight text-white">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-sm leading-7 text-slate-600">
          {project.description}
        </p>

        {project.highlights?.length > 0 && (
          <div className="mt-5 grid gap-2">
            {project.highlights.slice(0, 4).map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm font-medium text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {project.technologies?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            >
              <Code2 className="h-4 w-4" />
              Code
            </a>
          )}

          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Voir le projet
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}