"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "glodimombesa@gmail.com",
    href: "mailto:glodimombesa@gmail.com",
    icon: Mail,
    description:
      "Pour une proposition professionnelle, une opportunité ou une collaboration.",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "+243 890 215 503",
    href: "https://wa.me/243890215503",
    icon: MessageCircle,
    description:
      "Pour un échange rapide autour d’un projet, d’un besoin ou d’une idée.",
    external: true,
  },
  {
    label: "GitHub",
    value: "Glodi-angelot",
    href: "https://github.com/Glodi-angelot",
    icon: FaGithub,
    description:
      "Pour consulter certains projets, dépôts publics et travaux techniques.",
    external: true,
  },
];

const reasons = [
  "Projet web ou application à développer",
  "Refonte ou amélioration d’un site existant",
  "Collaboration technique",
  "Stage, opportunité ou mission",
  "Besoin d’une interface plus professionnelle",
  "Discussion autour d’un projet numérique",
];

export default function ContactPageContent() {
  return (
    <section className="bg-[#f5f3ee] px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <div className="container-custom">
        {/* HERO */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-red-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Contact
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] text-slate-950 sm:text-5xl lg:text-6xl">
            Discutons d’un projet, d’une opportunité ou{" "}
            <span className="bg-gradient-to-r from-red-700 via-[#8a5f83] to-[#5b6fb3] bg-clip-text text-transparent">
              d’une collaboration.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Je reste disponible pour les échanges professionnels, projets
            numériques, collaborations techniques, stages, missions et
            opportunités sérieuses.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-100 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-red-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-2xl font-black text-slate-950">
                  {item.label}
                </h2>

                <p className="mt-2 break-all text-sm font-black text-red-700">
                  {item.value}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition group-hover:text-red-700">
                  Ouvrir
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>

        {/* INFO BLOCK */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2.3rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700 text-white">
              <MapPin className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-black text-slate-950">
              Basé à Kinshasa, disponible pour échanger.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Je suis basé à Kinshasa, en République Démocratique du Congo. Je
              peux échanger autour d’un projet local, d’une collaboration à
              distance ou d’une opportunité liée au développement logiciel, aux
              données et aux solutions numériques.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:glodimombesa@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-700"
              >
                Envoyer un email
                <Send className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/243890215503"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2.3rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
              Motifs de contact
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
              Vous pouvez me contacter pour :
            </h2>

            <div className="mt-6 grid gap-3">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-red-700" />
                  <span className="text-sm font-black text-slate-700">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA AVEC ELEPHANT */}
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
              Une idée sérieuse mérite une solution bien construite.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-200">
              Présentez-moi votre besoin, votre projet ou votre objectif. Nous
              pourrons réfléchir à la meilleure manière de le transformer en
              solution numérique claire et professionnelle.
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