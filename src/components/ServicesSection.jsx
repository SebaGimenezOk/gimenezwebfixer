import { FiShield, FiRefreshCw, FiServer, FiCheck } from "react-icons/fi";

const CORE_SERVICES = [
  {
    id: "reparacion",
    icon: FiShield,
    name: "Reparación Web",
    subtitle: "Tu sitio caído o vulnerado, funcionando de nuevo",
    price: "Desde USD 90",
    urgency: "Respuesta en < 24hs",
    badge: "Urgencias 24/7",
    features: [
      "Eliminación de malware, virus e inyecciones",
      "Solución de caídas, errores 500 y pantalla blanca",
      "Optimización de Core Web Vitals (LCP, CLS)",
      "Backup completo de seguridad previo"
    ]
  },
  {
    id: "actualizacion",
    icon: FiRefreshCw,
    name: "Actualización Web",
    subtitle: "Modernizá tu stack sin perder lo que ya funciona",
    price: "Desde USD 140",
    urgency: "Sugerido cada 6 meses",
    badge: "Mantenimiento",
    features: [
      "Upgrade de CMS, PHP, dependencias y librerías",
      "Modernización de stack (WordPress, Next.js, Node)",
      "Rediseño UI/UX responsive mobile-first",
      "Auditoría de seguridad post-upgrade"
    ]
  },
  {
    id: "migracion",
    icon: FiServer,
    name: "Migración Web",
    subtitle: "Cambio de hosting o dominio sin interrupción",
    price: "Desde USD 160",
    urgency: "Downtime real: 0 min",
    badge: "Sin caídas",
    features: [
      "Traslado de servidor, hosting y base de datos",
      "Migración de casillas de correo y registros DNS",
      "Configuración e instalación de SSL",
      "Monitoreo funcional durante 72hs post-migración"
    ]
  }
];

export default function ServicesSection({ onOpenWizard }) {
  return (
    <section id="servicios" className="py-20 bg-[#FFFBF7] border-y border-[#E6DFD5]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#2D2A26] sm:text-4xl">
            Soluciones Especializadas
          </h2>
          <p className="mt-3 text-[#7A7265] text-sm sm:text-base">
            Elegí la categoría que mejor se adecúe al estado actual de tu proyecto.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {CORE_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="relative flex flex-col rounded-3xl border border-[#E6DFD5] bg-[#FAF6F0] p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#FFFBF7] text-[#ee5412] border border-[#E6DFD5]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-[#EAF2EF] px-3 py-1 text-xs font-semibold text-[#52796F]">
                    {s.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#2D2A26]">{s.name}</h3>
                <p className="mt-2 text-xs text-[#7A7265] leading-relaxed">{s.subtitle}</p>

                <div className="my-6 border-t border-[#E6DFD5] pt-4">
                  <div className="text-2xl font-black text-[#2D2A26]">{s.price}</div>
                  <div className="text-xs font-semibold text-[#ee5412] mt-0.5">{s.urgency}</div>
                </div>

                <ul className="space-y-3 text-xs text-[#2D2A26] mb-8 grow">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <FiCheck className="h-4 w-4 text-[#52796F] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenWizard}
                  className="w-full rounded-xl bg-[#2D2A26] py-3 text-xs font-semibold text-white hover:bg-[#ee5412] transition cursor-pointer"
                >
                  Seleccionar este servicio
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}