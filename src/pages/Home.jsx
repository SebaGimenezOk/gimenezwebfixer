import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import DiagnosticAndFaq from "../components/DiagnosticAndFaq";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home({ setWizardOpen }) {
  return (
    <>
      <main>
        <Hero onOpenWizard={() => setWizardOpen(null)} />
        <ServicesSection onOpenWizard={(key) => setWizardOpen(key)} />
        <DiagnosticAndFaq />
      </main>
      <TestimonialsSection />
    </>
  );
}