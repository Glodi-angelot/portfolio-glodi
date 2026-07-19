import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import BrandLogo from "./BrandLogo";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Compétences", href: "/skills" },
  { label: "Projets", href: "/projects" },
  { label: "Parcours", href: "/education" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Email",
    value: "glodimombesa@gmail.com",
    href: "mailto:glodimombesa@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "+243 890 215 503",
    href: "https://wa.me/243890215503",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "GitHub",
    value: "Glodi-angelot",
    href: "https://github.com/Glodi-angelot",
    icon: FaGithub,
    external: true,
  },
];

const tags = ["Web", "Mobile", "Backend", "Data & IA"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#f5f3ee] px-4 py-14 sm:px-6">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(139,30,34,0.06),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(76,107,170,0.08),transparent_30%)]" />

      <div className="container-custom">
        <div className="rounded-[2.2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_1fr]">
            {/* BRAND */}
            <div>
              <BrandLogo href="/" />

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                Portfolio professionnel de Glodi Mombesa, étudiant en Master 1
                Informatique à l’Université de Kinshasa, orienté développement
                logiciel, Data Science et Intelligence Artificielle.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-red-700">
                <Sparkles className="h-4 w-4" />
                Disponible pour projets et collaborations
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#0B0D19]">
                Navigation
              </h3>

              <div className="mt-5 grid gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-red-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition group-hover:bg-red-700" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#0B0D19]">
                Contact
              </h3>

              <div className="mt-5 grid gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-red-100 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-red-700 shadow-sm ring-1 ring-slate-200 transition group-hover:bg-red-700 group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </span>

                          <span>
                            <span className="block text-sm font-black text-[#0B0D19]">
                              {link.label}
                            </span>

                            <span className="mt-0.5 block break-all text-xs font-semibold text-slate-500">
                              {link.value}
                            </span>
                          </span>
                        </div>

                        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-red-700" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-slate-700">Glodi Mombesa</span>.
              Tous droits réservés.
            </p>

            <p>
              Conçu avec{" "}
              <span className="font-bold text-slate-700">Next.js</span>,{" "}
              <span className="font-bold text-slate-700">Tailwind CSS</span> et{" "}
              <span className="font-bold text-slate-700">Framer Motion</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}