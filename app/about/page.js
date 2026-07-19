import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata = {
  title: "À propos | Glodi Mombesa",
  description:
    "Profil de Glodi Mombesa, étudiant en Master 1 Informatique orienté développement logiciel, Data Science et Intelligence Artificielle.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  );
}