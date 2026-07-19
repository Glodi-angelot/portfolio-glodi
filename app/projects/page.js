import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsPageContent from "@/components/pages/ProjectsPageContent";

export const metadata = {
  title: "Projets | Glodi Mombesa",
  description:
    "Découvrez les projets de Glodi Mombesa : sites web, interfaces, plateformes de gestion, projets institutionnels et réalisations numériques.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />
      <ProjectsPageContent />
      <Footer />
    </main>
  );
}