import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata = {
  title: "Services | Glodi Mombesa",
  description:
    "Services proposés par Glodi Mombesa : sites web modernes, interfaces utilisateur, backend, bases de données, systèmes de gestion et amélioration de projets numériques.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </main>
  );
}