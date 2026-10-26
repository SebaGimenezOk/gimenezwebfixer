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
  const [initialService, setInitialService] = useState(null);

  const handleOpenWizard = (serviceKey = null) => {
    setInitialService(serviceKey);
    setWizardOpen(true);
  };

  const handleCloseWizard = () => {
    setWizardOpen(false);
    setInitialService(null);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] antialiased font-['Inter',Helvetica,Arial,sans-serif] selection:bg-[#C85A32] selection:text-white">
      {/* Pasamos la función al Navbar por si tiene botones de cotizar */}
      <Navbar setWizardOpen={handleOpenWizard} />

      {/* Manejo nativo de rutas pasando setWizardOpen a cada página */}
      <Routes>
        <Route path="/" element={<Home setWizardOpen={handleOpenWizard} />} />
        <Route path="/eliminacion-malware" element={<Malware setWizardOpen={handleOpenWizard} />} />
        <Route path="/optimizacion-velocidad" element={<Speed setWizardOpen={handleOpenWizard} />} />
      </Routes>

      <InteractiveQuoteWizard
        isOpen={wizardOpen}
        onClose={handleCloseWizard}
        initialServiceKey={initialService}
      />

      <Footer />
    </div>
  );
}