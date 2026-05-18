"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Copy,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "glodimombesa@gmail.com",
    href: "mailto:glodimombesa@gmail.com",
    description:
      "Pour une opportunité, une collaboration, un stage ou un échange professionnel.",
    tag: "Professionnel",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+243 890 215 503",
    href: "https://wa.me/243890215503",
    description:
      "Pour un échange rapide autour d’un projet, d’un besoin ou d’une proposition.",
    tag: "Rapide",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/Glodi-angelot",
    href: "https://github.com/Glodi-angelot",
    description:
      "Pour consulter mes dépôts, mes projets et l’évolution de mon travail technique.",
    tag: "Projets",
  },
];

const steps = [
  "Présentez le contexte",
  "Expliquez le besoin",
  "Indiquez le délai ou l’objectif",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(185,28,28,0.07),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(37,99,235,0.08),transparent_32%),linear-gradient(to_bottom,#f8fafc,#ffffff)]" />

      <div className="absolute left-0 top-24 -z-10 h-80 w-80 rounded-full bg-red-700/5 blur-3xl" />
      <div className="absolute right-0 bottom-20 -z-10 h-96 w-96 rounded-full bg-blue-700/5 blur-3xl" />

      <div className="container-custom">
        <SectionTitle
          eyebrow="Contact"
          title="Discutons d’un projet, d’une opportunité ou d’une collaboration."
          description="Je suis ouvert aux échanges professionnels, aux missions, aux stages, aux collaborations techniques et aux projets numériques sérieux."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-900 bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/20 sm:p-9"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,28,28,0.32),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.25),transparent_34%)]" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-700/20 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-blue-700/10 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-red-200">
                <Send className="h-8 w-8" />
              </div>

              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-200">
                Disponible
              </p>

              <h3 className="text-3xl font-black leading-tight sm:text-4xl">
                Une idée, un besoin ou une opportunité ?
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Le moyen le plus simple de me contacter est de passer par email,
                WhatsApp ou GitHub. Je privilégie les échanges clairs, sérieux
                et orientés vers des objectifs concrets.
              </p>

              <div className="mt-7 rounded-[1.5rem] border border-red-400/20 bg-red-500/10 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-red-200" />
                  <p className="text-sm leading-7 text-slate-300">
                    Pour un premier échange, il suffit de préciser le contexte,
                    le besoin, le délai souhaité et le type de solution
                    recherchée.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                {steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-black text-red-100">
                      {index + 1}
                    </div>

                    <p className="text-sm font-bold text-slate-200">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "Email" ? undefined : "_blank"}
                  rel={
                    contact.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, x: 26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-100 hover:shadow-2xl hover:shadow-slate-900/10"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-slate-950 to-blue-700 opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-700/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-red-200 transition group-hover:bg-red-700 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                            {contact.label}
                          </p>

                          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-blue-700">
                            {contact.tag}
                          </span>
                        </div>

                        <h3 className="break-all text-lg font-black text-slate-950 sm:text-xl">
                          {contact.value}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {contact.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-700">
                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="rounded-[1.8rem] border border-blue-100 bg-blue-50 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                  <Sparkles className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="font-black text-slate-950">
                    Réponse simple et professionnelle
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Pour aller plus vite, envoyez un message clair avec votre
                    besoin principal. Je pourrai ensuite vous répondre de façon
                    plus précise.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}