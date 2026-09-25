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
  FiCheckCircle,
  FiZap
} from "react-icons/fi";
import BearLogo from "./BearLogo";

// 1. Opciones de Servicios (Paso 1)
const SERVICIOS_OPCIONES = [
  { title: "Reparación Web", desc: "Errores, caídas, malware o sitio lento", icon: FiShield, key: "reparacion" },
  { title: "Optimización & Velocidad", desc: "Carga lenta, Core Web Vitals, PageSpeed", icon: FiZap, key: "optimizacion" },
  { title: "Migración Web", desc: "Cambio de servidor, hosting, dominio o emails", icon: FiServer, key: "migracion" },
  { title: "Actualización & Mantenimiento", desc: "Modernizar CMS, seguridad, parches y backups", icon: FiRefreshCw, key: "mantenimiento" },
  { title: "Desarrollo a Medida", desc: "Pasarelas de pago, APIs, proyectos desde cero", icon: FiCode, key: "desarrollo" }
];

// 2. Opciones Dinámicas para el Paso 2 segun el Servicio Elegido
const PROBLEMAS_POR_SERVICIO = {
  reparacion: [
    "1. Error Crítico / Pantalla en Blanco (Error 500 / PHP)",
    "2. Sitio Infectado con Malware / Hackeado",
    "3. Certificado SSL Vencido / Error de HTTPS",
    "4. Plugin o Tema Desactualizado que rompió la web",
    "5. Formularios de Contacto no envían correos / Fallas SMTP",
    "6. Error de Conexión a Base de Datos",
    "7. Enlaces Rotos / Error 404 / Redirecciones Infinitas",
    "8. Problemas de Maquetación Visual en Celulares"
  ],
  optimizacion: [
    "1. Sitio Web Extremadamente Lento (> 4-5 segundos)",
    "2. Mal Rendimiento en Mobile (Google PageSpeed bajo)",
    "3. Imágenes Pesadas o sin formato moderno (WebP)",
    "4. Falta de Caché / CDN (Cloudflare) no configurado",
    "5. Base de Datos Sobrecargada / Consultas Lentas",
    "6. Caídas del servidor con picos de tráfico"
  ],
  migracion: [
    "1. Cambio de Proveedor de Hosting (ej: Hostinger, cPanel)",
    "2. Transferencia de Dominio / Configuración DNS",
    "3. Migración de Correos Corporativos entre Servidores",
    "4. Exportación / Importación de Base de Datos Grande",
    "5. Migración de Plataforma (ej: WordPress a React / Shopify)",
    "6. Clonación / Mover de Staging a Producción"
  ],
  mantenimiento: [
    "1. Actualización de Versión Mayor (PHP 7.x a 8.x / Node.js)",
    "2. Mantenimiento General de CMS (WordPress / Joomla)",
    "3. Auditoría de Seguridad y Parches de Vulnerabilidad",
    "4. Configuración de Respaldos Automáticos (Backups)",
    "5. Reemplazo o Eliminación de Plugins Obsoletos",
    "6. Integración de Métricas (Google Analytics 4 / Pixel)"
  ],
  desarrollo: [
    "1. Integración de Pasarelas de Pago (Mercado Pago, Stripe)",
    "2. Conexión con APIs Rest / Webhooks",
    "3. Desarrollo de Nueva Funcionalidad a Medida",
    "4. Sistema de Autenticación de Usuarios / Roles / Login",
    "5. Corrección o Refactorización de Código Legacy"
  ]
};

// 3. Stacks Tecnológicos (Paso 3)
const STACK_OPCIONES = [
  "WordPress / WooCommerce",
  "React / Next.js",
  "PHP / HTML tradicional",
  "Node.js / Express",
  "Shopify / Tiendanube",
  "No estoy seguro / No sé qué usa"
];

// 4. Urgencia (Paso 4)
const URGENCIA_OPCIONES = [
  { id: "urgente", title: "Urgencia Alta (< 24hs)", desc: "Mi negocio está parado o perdiendo dinero." },
  { id: "normal", title: "Normal (48 - 72hs)", desc: "Funciona parcialmente o necesito resolverlo pronto." },
  { id: "planificado", title: "Planificado (Esta semana)", desc: "Proyecto nuevo o actualización sin apuro inmediato." }
];

const INITIAL_FORM_DATA = {
  servicioKey: "reparacion",
  servicio: "Reparación Web",
  problema: "",
  stack: "",
  urgencia: "Normal (48 - 72hs)",
  nombre: "",
  apellido: "",
  empresaSitio: "",
  email: "",
  telefono: ""
};

export default function InteractiveQuoteWizard({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSelectService = (servObj) => {
    setFormData((prev) => ({ 
      ...prev, 
      servicio: servObj.title,
      servicioKey: servObj.key,
      problema: "" // Limpia el problema si cambia de servicio
    }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch("/cotizar.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.status === "success" || data.success) {
        setSent(true);
      } else {
        alert("Hubo un problema al enviar la solicitud. Por favor intentá nuevamente.");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSent(false);
    setLoading(false);
    setStep(1);
    setFormData(INITIAL_FORM_DATA);
    onClose();
  };

  // Obtiene los síntomas según el servicio seleccionado
  const problemasActuales = PROBLEMAS_POR_SERVICIO[formData.servicioKey] || PROBLEMAS_POR_SERVICIO.reparacion;

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
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5412]">
                Asistente de Cotización
              </span>
            </div>
            <span className="rounded-full bg-[#F2ECE1] px-3 py-1 text-xs font-semibold text-[#52796F]">
              Paso {step} de 5
            </span>
          </div>
        )}

        {/* PASO 1: Tipo de Solución */}
        {step === 1 && !sent && (
          <div>
            <h3 className="text-2xl font-bold text-[#2D2A26]">¿Qué tipo de solución estás buscando?</h3>
            <p className="mt-1 text-sm text-[#7A7265]">Seleccioná una opción para personalizar las preguntas.</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {SERVICIOS_OPCIONES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectService(s)}
                    className="group flex flex-col text-left p-4.5 rounded-2xl border border-[#E6DFD5] bg-white transition hover:border-[#ee5412] hover:shadow-lg hover:shadow-[#ee5412]/10 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 text-[#ee5412] font-semibold text-base">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] group-hover:bg-[#ee5412] group-hover:text-white transition">
                        <Icon className="h-5 w-5" />
                      </div>
                      {s.title}
                    </div>
                    <span className="mt-2.5 text-xs text-[#7A7265] leading-relaxed">{s.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* PASO 2: Síntomas Dinámicos */}
        {step === 2 && !sent && (
          <div>
            <h3 className="text-2xl font-bold text-[#2D2A26]">
              {formData.servicio}: ¿Cuál es la necesidad principal?
            </h3>
            <p className="mt-1 text-sm text-[#7A7265]">Elegí la opción que mejor describa lo que sucede.</p>

            <div className="mt-5 grid gap-2.5 max-h-72 overflow-y-auto pr-1">
              {problemasActuales.map((prob, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption("problema", prob)}
                  className="flex items-center justify-between text-left p-3.5 rounded-xl border border-[#E6DFD5] bg-white text-sm font-medium text-[#2D2A26] transition hover:border-[#ee5412] hover:bg-[#FAF6F0] cursor-pointer"
                >
                  <span>{prob}</span>
                  <FiArrowRight className="h-4 w-4 text-[#7A7265] shrink-0 ml-2" />
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

        {/* PASO 3: Stack Tecnológico */}
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

        {/* PASO 4: Urgencia */}
        {step === 4 && !sent && (
          <div>
            <h3 className="text-2xl font-bold text-[#2D2A26]">¿Con qué urgencia necesitás resolverlo?</h3>
            <p className="mt-1 text-sm text-[#7A7265]">Nos ayuda a priorizar tu solicitud en cola.</p>

            <div className="mt-6 space-y-3">
              {URGENCIA_OPCIONES.map((urg) => (
                <button
                  key={urg.id}
                  onClick={() => handleSelectOption("urgencia", urg.title)}
                  className="w-full text-left p-4 rounded-2xl border border-[#E6DFD5] bg-white transition hover:border-[#ee5412] hover:bg-[#FAF6F0] cursor-pointer"
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

        {/* PASO 5: Contacto */}
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
                    className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#ee5412] focus:ring-2 focus:ring-[#ee5412]/20 focus:outline-none transition"
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
                    className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#ee5412] focus:ring-2 focus:ring-[#ee5412]/20 focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#7A7265] uppercase tracking-wider mb-1.5">Empresa / Sitio Web</label>
                  <input
                    type="text"
                    required
                    name="empresaSitio"
                    value={formData.empresaSitio}
                    onChange={handleInputChange}
                    placeholder="miempresa.com"
                    className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#ee5412] focus:ring-2 focus:ring-[#ee5412]/20 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#7A7265] uppercase tracking-wider mb-1.5">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="1112345678"
                    className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#ee5412] focus:ring-2 focus:ring-[#ee5412]/20 focus:outline-none transition"
                  />
                </div>
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
                  className="w-full rounded-xl border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#2D2A26] focus:border-[#ee5412] focus:ring-2 focus:ring-[#ee5412]/20 focus:outline-none transition"
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
                  disabled={loading}
                  className="flex items-center gap-2.5 rounded-full bg-[#ee5412] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ee5412]/30 hover:bg-[#d4480d] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar y Obtener Cotización"}
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
              Gracias <span className="text-[#ee5412] font-semibold">{formData.nombre}</span>. Recibirás el diagnóstico preliminar y presupuesto detallado para{" "}
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