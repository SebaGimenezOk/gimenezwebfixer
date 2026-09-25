import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import DiagnosticAndFaq from "./components/DiagnosticAndFaq";
import InteractiveQuoteWizard from "./components/InteractiveQuoteWizard";
import TestimonialsSection from "./components/TestimonialsSection";

import Footer from "./components/Footer";

// Carga global de Helvetica Neue / Inter fallback si no está local
if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.href =
    "https://fonts.cdnfonts.com/css/helvetica-neue-5";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export default function App() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] antialiased font-['Helvetica_Neue',Helvetica,Arial,sans-serif] selection:bg-[#C85A32] selection:text-white">
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
   

      <Footer />
    </div>
  );
}