import { useState } from "react";
import { FiLock, FiCpu, FiTerminal, FiChevronDown } from "react-icons/fi";

const MODULES = [
  {
    title: "Limpieza de Malware & Listas Negras",
    description:
      "Desinfectamos tu código, eliminamos redirecciones no deseadas y desbloqueamos tu dominio de Google Safe Browsing.",
    icon: FiLock
  },
  {
    title: "Optimización WPO & Velocidad Extreme",
    description:
      "Reducimos tiempos de carga a menos de 1.5s comprimiendo recursos, optimizando imágenes y configurando CDN.",
    icon: FiCpu
  },
  {
    title: "Base de Datos & Debugging de PHP",
    description:
      "Reparación de tablas corruptas, optimización de consultas SQL lentas y depuración de errores fatales.",
    icon: FiTerminal
  }
];

const FAQS = [
  {
    q: "¿Cuánto tiempo demora la reparación de un sitio caído?",
    a: "El tiempo estándar de diagnóstico inicial y propuesta técnica es de menos de 24 horas. Para urgencias críticas, iniciamos las tareas dentro de las primeras 2 a 4 horas post-confirmación."
  },
  {
    q: "¿Qué sucede si mi sitio fue hackeado o marcado como no seguro?",
    a: "Limpiamos exhaustivamente los archivos y la base de datos, eliminamos inyecciones maliciosas y realizamos la solicitud de reconsideración ante Google Safe Browsing para reestablecer la reputación de tu sitio."
  },
  {
    q: "¿Mis datos o emails corren riesgo durante la migración?",
    a: "No. Realizamos un clonado completo y pruebas en entorno staging antes de redirigir los DNS, garantizando un downtime real de 0 minutos y protegiendo tu tráfico y casillas de correo."
  }
];

export default function DiagnosticAndFaq() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* DIAGNÓSTICO RÁPIDO */}
      <section id="modulos" className="py-20 bg-[#FAF6F0]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#2D2A26] sm:text-4xl">
              Módulos de Diagnóstico Específicos
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {MODULES.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[#E6DFD5] bg-white p-6 shadow-sm"
                >
                  <Icon className="h-7 w-7 text-[#ee5412]" />
                  <h3 className="mt-4 text-base font-bold text-[#2D2A26]">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#7A7265] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#FFFBF7] border-t border-[#E6DFD5]">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <h2 className="text-3xl font-extrabold text-center text-[#2D2A26]">
            Preguntas Frecuentes
          </h2>

          <div className="mt-10 space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E6DFD5] bg-[#FAF6F0] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 font-semibold text-sm text-[#2D2A26] flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <FiChevronDown
                    className={`h-5 w-5 text-[#ee5412] transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-[#7A7265] leading-relaxed border-t border-[#E6DFD5]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}