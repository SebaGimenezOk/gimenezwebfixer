import { FiStar } from "react-icons/fi";

const REVIEWS = [
  {
    id: 1,
    name: "Martín Benítez",
    role: "Fundador de E-commerce",
    comment: "Teníamos un error de build en Vite que nos tenía bloqueados hace dos días. Lo resolvió en un par de horas y además optimizó los tiempos de carga.",
    stars: 5
  },
  {
    id: 2,
    name: "Carolina Rossi",
    role: "Diseñadora UX/UI",
    comment: "Excelente comunicación y ojo técnico. Integró el frontend en Next.js respetando al 100% los prototipos de Figma y la paleta de colores.",
    stars: 5
  },
  {
    id: 3,
    name: "Gonzalo Fernández",
    role: "CTO en Agencia Digital",
    comment: "Nos ayudó con la migración a Tailwind y la limpieza de dependencias. El sitio quedó volando y súper mantenible.",
    stars: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#FAF6F0] dark:bg-[#121110] border-t border-[#EAE3D9] dark:border-[#2D2A26] transition-colors">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="text-3xl font-extrabold text-[#121110] dark:text-[#FAF6F0] sm:text-4xl text-center">
          Lo que dicen mis clientes
        </h2>
        <p className="mt-2 text-center text-sm text-[#5C554E] dark:text-[#A39B8E]">
          Experiencias reales de proyectos recuperados y optimizados.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              className="flex flex-col justify-between rounded-3xl border border-[#EAE3D9] dark:border-[#2D2A26] bg-[#F4EFE6] dark:bg-[#1E1B18] p-8 shadow-sm transition-colors"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C85A32] mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <FiStar key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#2A2622] dark:text-[#D8D2C9] italic leading-relaxed">
                  "{r.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE3D9] dark:border-[#2D2A26]">
                <h3 className="text-sm font-bold text-[#121110] dark:text-[#FAF6F0]">{r.name}</h3>
                <p className="text-[11px] text-[#5C554E] dark:text-[#A39B8E]">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}