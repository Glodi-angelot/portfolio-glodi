import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsPageContent from "@/components/pages/SkillsPageContent";

export const metadata = {
  title: "Compétences | Glodi Mombesa",
  description:
    "Compétences pratiquées par Glodi Mombesa en développement logiciel, données, IA, bases de données, réseaux, systèmes et outils numériques.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />
      <SkillsPageContent />
      <Footer />
    </main>
  );
}