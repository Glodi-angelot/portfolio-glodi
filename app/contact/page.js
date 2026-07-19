import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata = {
  title: "Contact | Glodi Mombesa",
  description:
    "Contactez Glodi Mombesa pour une opportunité, une collaboration, un stage, une mission ou un projet numérique sérieux.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-slate-950">
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  );
}