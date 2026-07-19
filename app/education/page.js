import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EducationPageContent from "@/components/pages/EducationPageContent";

export const metadata = {
  title: "Parcours | Glodi Mombesa",
  description:
    "Parcours académique de Glodi Mombesa : Master 1 Informatique IA & Data Science, Licence en Informatique, formations complémentaires et apprentissage continu.",
};

export default function EducationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />
      <EducationPageContent />
      <Footer />
    </main>
  );
}