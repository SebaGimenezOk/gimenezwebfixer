import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import DiagnosticAndFaq from "../components/DiagnosticAndFaq";
import TestimonialsSection from "../components/TestimonialsSection";
import HeroCinematic from "../components/HeroCinematic";


export default function Home({ setWizardOpen }) {
  return (
    <>
      <main>
       <HeroCinematic onOpenWizard={(key) => setWizardOpen(key)} />
        <Hero onOpenWizard={() => setWizardOpen(null)} />
        <ServicesSection onOpenWizard={(key) => setWizardOpen(key)} />
        <DiagnosticAndFaq />
      </main>
      <TestimonialsSection />
    </>
  );
}