import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiZap, } from "react-icons/fi";

export default function Speed() {
  const { setWizardOpen } = useOutletContext() || { setWizardOpen: () => {} };

  return (
    <>
      <Helmet>
        <title>Optimización de Velocidad Web y Core Web Vitals | GimenezWebFixer</title>
        <meta name="description" content="Aceleramos tu sitio web a menos de 1.5 segundos. Optimización WPO extrema para mejorar tu posicionamiento en Google y evitar la pérdida de clientes." />
      </Helmet>
      
      <div className="pt-36 pb-20 bg-[#FAF6F0]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold text-[#C85A32] shadow-sm">
            <FiZap className="h-4 w-4 text-[#ee5412]" />
            WPO Extremo & Tiempos de respuesta mínimos
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#2D2A26] sm:text-5xl tracking-tight">
            Optimizá tu velocidad para <span className="text-[#ee5412] italic font-normal">vender más</span>
          </h1>
          <p className="mt-6 text-base text-[#7A7265] max-w-2xl mx-auto leading-relaxed">
            Un sitio que tarda más de 3 segundos en cargar pierde el 50% de sus visitas. Optimizamos tus Core Web Vitals (LCP, CLS, INP) para llevar el rendimiento de tu plataforma al 100%.
          </p>
          <div className="mt-8 flex justify-center">
            <button onClick={() => setWizardOpen("optimizacion")} className="rounded-full bg-[#2D2A26] px-8 py-3.5 text-sm font-semibold text-white shadow-xl hover:bg-[#ee5412] transition cursor-pointer">
              Optimizar mi velocidad
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
