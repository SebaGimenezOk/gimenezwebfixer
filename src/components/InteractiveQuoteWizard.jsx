import { useState } from "react";
import {
  FiX,
  FiShield,
  FiRefreshCw,
  FiServer,
  FiCode,
  FiArrowRight,
  FiArrowLeft,
  FiSend,
  FiCheckCircle
} from "react-icons/fi";
import BearLogo from "./BearLogo";

const PROBLEMAS_OPCIONES = [
  "1. No carga el sitio / Carga en blanco",
  "2. Error 500 / Error interno del servidor",
  "3. Error 404 / Páginas no encontradas",
  "4. No cargan las imágenes o estilos CSS",
  "5. Los cambios que guardo no se reflejan",
  "6. Redirecciones raras o posible Hackeo/Malware",
  "7. Sitio extremadamente lento / Core Web Vitals",
  "8. Certificado de Seguridad (SSL) vencido/inválido",
  "9. Formularios o pasarelas de pago no funcionan",
  "10. Otro problema / Comportamiento extraño"
];

const STACK_OPCIONES = [
  "WordPress / WooCommerce",
  "React / Next.js",
  "PHP / HTML tradicional",
  "Node.js / Express",
  "Shopify / Tiendanube",
  "No estoy seguro / No sé qué usa"
];

const URGENCIA_OPCIONES = [
  { id: "urgente", title: "Urgencia Alta (< 24hs)", desc: "Mi negocio está parado o perdiendo dinero." },
  { id: "normal", title: "Normal (48 - 72hs)", desc: "Funciona parcialmente o necesito resolverlo pronto." },
  { id: "planificado", title: "Planificado (Esta semana)", desc: "Proyecto nuevo o actualización sin apuro inmediato." }
];

export default function InteractiveQuoteWizard({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    servicio: "Reparación Web",
    problema: "",
    stack: "",
    urgencia: "",
    nombre: "",
    apellido: "",
    empresaSitio: "",
    email: ""
  });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSelectService = (serv) => {
    setFormData((prev) => ({ ...prev, servicio: serv }));
    setStep(2);
  };

  const handleSelectOption = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setStep((s) => s + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setStep(1);
    setFormData({
      servicio: "Reparación Web",
      problema: "",
      stack: "",
      urgencia: "",
      nombre: "",
      apellido: "",
      empresaSitio: "",
      email: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Poppins',sans-serif]">
      <div
        className="absolute inset-0 bg-[#2D2A26]/60 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#E6DFD5] bg-[#FFFBF7] p-6 shadow-2xl sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-[#7A7265] hover:bg-[#F2ECE1] hover:text-[#2D2A26] transition cursor-pointer"
        >
          <FiX className="h-6 w-6" />
        </button>

        {!sent && (
          <div className="mb-6 flex items-center justify-between border-b border-[#E6DFD5] pb-4">
            <div className="flex items-center gap-2.5">
              <BearLogo className="h-12 w-auto" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                Asistente de Cotización
              </span>
            </div>
            <span className="rounded-full bg-[#F2ECE1] px-3 py-1 text-xs font-semibold text-[#52796F]">
              Paso {step} de 5
            </span>
          </div>
        )}

        {/* PASO 1 */}
        {step === 1 && !sent && (
          <div>
            <h3 className="text-2xl font-bold text-[#2D2A26]">¿Qué tipo de solución estás buscando?</h3>
            <p className="mt-1 text-sm text-[#7A7265]">Seleccioná una opción para personalizar las preguntas.</p>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {[
                { title: "Reparación Web", desc: "Errores, caídas, malware o sitio lento", icon: FiShield },
                { title: "Actualización Web", desc: "Modernizar diseño, CMS o librerías", icon: FiRefreshCw },
                { title: "Migración Web", desc: "Cambio de servidor, hosting o dominio", icon: FiServer },
                { title: "Desarrollo a Medida", desc: "Proyecto desde cero en React/WP", icon: FiCode }
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectService(s.title)}
                    className="group flex flex-col text-left p-5 rounded-2xl border border-[#E6DFD5] bg-white transition hover:border-[#C85A32] hover:shadow-lg hover:shadow-[#C85A32]/10 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 text-[#C85A32] font-semibold text-base">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] group-hover:bg-[#C85A32] group-hover:text-white transition">
                        <Icon className="h-5 w-5" />
                      </div>
                      {s.title}
                    </div>
                    <span className="mt-3 text-xs text-[#7A7265] leading-relaxed">{s.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* PASO 2 */}
        {step === 2 && !sent && (
          <div>
            <h3 className="text-2xl font-bold text-[#2D2A26]">¿Cuál es el síntoma principal?</h3>
            <p className="mt-1 text-sm text-[#7A7265]">Elegí la opción que mejor describa lo que sucede.</p>

            <div className="mt-5 grid gap-2.5 max-h-72 overflow-y-auto pr-1">
              {PROBLEMAS_OPCIONES.map((prob, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption("problema", prob)}
                  className="flex items-center justify-between text-left p-3.5 rounded-xl border border-[#E6DFD5] bg-white text-sm font-medium text-[#2D2A26] transition hover:border-[#C85A32] hover:bg-[#FAF6F0] cursor-pointer"
                >
                  <span>{prob}</span>
                  <FiArrowRight className="h-4 w-4 text-[#7A7265] shrink-0" />
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-start">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#7A7265] hover:text-[#2D2A26] cursor-pointer"
              >
                <FiArrowLeft /> Volver al paso anterior
              </button>
            </div>
          </div>
        )}

        {/* PASO 3 */}
        {step === 3 && !sent && (
          <div>
            <h3 className="text-2xl font-bold text-[#2D2A26]">¿En qué tecnología está construido tu sitio?</h3>
            <p className="mt-1 text-sm text-[#7A7265]">Si no lo sabés con certeza, elegí la última opción.</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {STACK_OPCIONES.map((stk, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption("stack", stk)}
                  className="p-4 text-left rounded-2xl border border-[#E6DFD5] bg-white text-sm font-semibold text-[#2D2A26] transition hover:border-[#52796F] hover:bg-[#FAF6F0] cursor-pointer"
                >
                  {stk}
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-start">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#7A7265] hover:text-[#2D2A26] cursor-pointer"
              >
                <FiArrowLeft /> Volver al paso anterior
              </button>
            </div>
          </div>
        )}

        {/* PASO 4 */}
        {step === 4 && !sent && (
          <div>
            <h3 className="text-2xl font-bold text-[#2D2A26]">¿Con qué urgencia necesitás resolverlo?</h3>
            <p className="mt-1 text-sm text-[#7A7265]">Nos ayuda a priorizar tu solicitud en cola.</p>

            <div className="mt-6 space-y-3">
              {URGENCIA_OPCIONES.map((urg) => (
                <button
                  key={urg.id}
                  onClick={() => handleSelectOption("urgencia", urg.title)}
                  className="w-full text-left p-4 rounded-2xl border border-[#E6DFD5] bg-white transition hover:border-[#C85A32] hover:bg-[#FAF6F0] cursor-pointer"
                >
                  <div className="font-bold text-[#2D2A26] text-base">{urg.title}</div>
                  <div className="text-xs text-[#7A7265] mt-1">{urg.desc}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-start">
              <button
                onClick={() => setStep(3)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#7A7265] hover:text-[#2D2A26] cursor-pointer"
              >
                <FiArrowLeft /> Volver al paso anterior
              </button>
            </div>
          </div>
        )}

        {/* PASO 5 */}
        {step === 5 && !sent && (
          <div>
            <h3 className="text-2xl font-bold text-[#2D2A26]">Último paso: ¿A dónde te enviamos la cotización?</h3>
            <p className="mt-1 text-sm text-[#7A7265]">Ingresá tus datos para recibir la propuesta ajustada.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#7A7265] uppercase tracking-wider mb-1.5">Nombre</label>
                  <input
                    type="text"
                    required
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Juan"
                    className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#7A7265] uppercase tracking-wider mb-1.5">Apellido</label>
                  <input
                    type="text"
                    required
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    placeholder="Pérez"
                    className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7A7265] uppercase tracking-wider mb-1.5">Empresa / Sitio Web</label>
                <input
                  type="text"
                  required
                  name="empresaSitio"
                  value={formData.empresaSitio}
                  onChange={handleInputChange}
                  placeholder="miempresa.com"
                  className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7A7265] uppercase tracking-wider mb-1.5">Email de contacto</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="juan@miempresa.com"
                  className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 focus:outline-none transition"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#7A7265] hover:text-[#2D2A26] cursor-pointer"
                >
                  <FiArrowLeft /> Volver
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2.5 rounded-full bg-[#C85A32] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#C85A32]/30 hover:bg-[#B34D28] transition cursor-pointer"
                >
                  Enviar y Obtener Cotización
                  <FiSend className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* CONFIRMACIÓN */}
        {sent && (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF2EF] text-[#52796F]">
              <FiCheckCircle className="h-10 w-10" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[#2D2A26]">¡Solicitud Recibida!</h3>
            <p className="mt-2 text-sm text-[#7A7265] max-w-md mx-auto leading-relaxed">
              Gracias <span className="text-[#C85A32] font-semibold">{formData.nombre}</span>. Recibirás el diagnóstico preliminar y presupuesto detallado para{" "}
              <span className="text-[#2D2A26] font-semibold underline">{formData.empresaSitio}</span> en el correo{" "}
              <span className="text-[#2D2A26] font-semibold">{formData.email}</span>.
            </p>
            <button
              onClick={handleReset}
              className="mt-8 rounded-full bg-[#2D2A26] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#1A1816] cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}