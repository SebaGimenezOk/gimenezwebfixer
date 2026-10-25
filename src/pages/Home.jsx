import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import DiagnosticAndFaq from "../components/DiagnosticAndFaq";
import InteractiveQuoteWizard from "../components/InteractiveQuoteWizard";
import TestimonialsSection from "../components/TestimonialsSection";


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
   

     
    </div>
  );
}