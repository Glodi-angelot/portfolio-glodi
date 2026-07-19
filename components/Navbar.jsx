"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

const links = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Compétences", href: "/skills" },
  { label: "Projets", href: "/projects" },
  { label: "Parcours", href: "/education" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="container-custom flex h-16 items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
        <BrandLogo href="/" onClick={closeMenu} />

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-bold text-slate-600 lg:flex">
          {links.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-white hover:text-red-700 hover:shadow-sm xl:px-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-red-700"
          >
            Contact
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-red-50 hover:text-red-700 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="container-custom mt-3 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl lg:hidden"
          >
            <div className="mb-4 rounded-[1.5rem] border border-red-100 bg-red-50 p-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-red-700">
                <Sparkles className="h-4 w-4" />
                Navigation
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Accédez rapidement aux pages importantes du portfolio.
              </p>
            </div>

            <div className="grid gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035, duration: 0.22 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 transition hover:border-red-100 hover:bg-white hover:text-red-700"
                  >
                    <span>{link.label}</span>
                    <span className="h-2 w-2 rounded-full bg-slate-300 transition group-hover:bg-red-700" />
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-4 text-sm font-black text-white shadow-lg shadow-slate-900/10 transition hover:bg-red-700"
              >
                Me contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}