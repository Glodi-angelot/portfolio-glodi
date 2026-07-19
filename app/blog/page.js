import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPageContent from "@/components/pages/BlogPageContent";

export const metadata = {
  title: "Blog | Glodi Mombesa",
  description:
    "Articles, réflexions et partages d’expérience de Glodi Mombesa sur le développement logiciel, les projets numériques, la Data Science et l’Intelligence Artificielle.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />
      <BlogPageContent />
      <Footer />
    </main>
  );
}