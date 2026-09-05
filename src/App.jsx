import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import DiagnosticAndFaq from "./components/DiagnosticAndFaq";
import InteractiveQuoteWizard from "./components/InteractiveQuoteWizard";
import TestimonialsSection from "./components/TestimonialsSection";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

// Carga global de la fuente
if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export default function App() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2D2A26] antialiased font-['Poppins',sans-serif] selection:bg-[#C85A32] selection:text-white">
      <Navbar onOpenWizard={() => setWizardOpen(true)} />

      <main>
        <Hero onOpenWizard={() => setWizardOpen(true)} />
        <ServicesSection onOpenWizard={() => setWizardOpen(true)} />
        <DiagnosticAndFaq />
      </main>

      <InteractiveQuoteWizard
        isOpen={wizardOpen}
        onClose={() => setWizardOpen(false)}
      />
      <TestimonialsSection />
      <Chatbot />

      <Footer />
    </div>
  );
}
