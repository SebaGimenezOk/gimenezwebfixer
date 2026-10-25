import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InteractiveQuoteWizard from "./components/InteractiveQuoteWizard";
import Footer from "./components/Footer";

// Tus páginas
import Home from "./pages/Home.jsx";
import Malware from "./pages/Malware.jsx";
import Speed from "./pages/Speed.jsx";



export default function App() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] antialiased font-['Helvetica_Neue',Helvetica,Arial,sans-serif] selection:bg-[#C85A32] selection:text-white">
      <Navbar />

      {/* Manejo nativo de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eliminacion-malware" element={<Malware />} />
        <Route path="/optimizacion-velocidad" element={<Speed />} />
      </Routes>

      <InteractiveQuoteWizard
        isOpen={wizardOpen}
        onClose={() => setWizardOpen(false)}
      />

      <Footer />
    </div>
  );
}
