import { FiZap, FiArrowRight } from "react-icons/fi";

export default function Hero({ onOpenWizard }) {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-[#E07A5F]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DFD5] bg-[#FFFBF7] px-4 py-2 text-xs font-semibold text-[#52796F] shadow-sm">
          <FiZap className="h-4 w-4 text-[#C85A32]" />
          Diagnóstico técnico interactivo paso a paso
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#2D2A26] sm:text-6xl tracking-tight">
          Tu sitio arreglado en minutos,{" "}
          <span className="text-[#C85A32] italic font-normal">
            no en semanas.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#7A7265] max-w-2xl mx-auto leading-relaxed">
          Resolvemos problemas de carga, malware, errores de servidor y
          actualizaciones complejas con cotizaciones claras e instantáneas.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenWizard}
            className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-[#C85A32] px-9 py-4 text-base font-semibold text-white shadow-xl shadow-[#C85A32]/25 hover:bg-[#B34D28] hover:scale-[1.02] transition cursor-pointer"
          >
            Iniciar Cotización Guiada
            <FiArrowRight className="h-5 w-5" />
          </button>
          <a
            href="#servicios"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-[#E6DFD5] bg-white px-8 py-4 text-base font-semibold text-[#2D2A26] hover:bg-[#FAF6F0] transition"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}