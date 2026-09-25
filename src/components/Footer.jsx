import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiTerminal,
  FiArrowUp,
} from "react-icons/fi";
import BearLogo from "./BearLogo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#EAE3D9] dark:border-[#2D2A26] bg-[#F4EFE6] dark:bg-[#171513] text-[#5C554E] dark:text-[#A39B8E] transition-colors pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Grilla Superior */}
        <div className="grid gap-10 md:grid-cols-4 pb-12 border-b border-[#EAE3D9] dark:border-[#2D2A26]">
          {/* Col 1: Marca & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BearLogo className="h-9 w-auto" />
              <span className="text-xl font-bold tracking-tight text-[#121110] dark:text-[#FAF6F0]">
                Gimenez<span className="text-[#ee5412]">Web</span>Fixer
              </span>
            </div>
            <p className="text-xs font-mono leading-relaxed text-[#5C554E] dark:text-[#A39B8E]">
              Resolviendo problemas complejos de frontend, reparando builds
              rotos y optimizando la velocidad de sitios web con precisión
              quirúrgica.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EAE3D9] dark:border-[#2D2A26] bg-[#FAF6F0] dark:bg-[#1E1B18] text-[11px] font-semibold text-[#81A499]">
              <span className="h-2 w-2 rounded-full bg-[#81A499] animate-pulse"></span>
              Sistemas operativos y estables
            </div>
          </div>

          {/* Col 2: Accesos directos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#121110] dark:text-[#FAF6F0] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-[#d4430e] transition"
                >
                  Servicios especializados
                </a>
              </li>
              <li>
                <a href="#modulos" className="hover:text-[#ee5412] transition">
                  Módulos de diagnóstico
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ee5412] transition">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Stack & Tech */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#121110] dark:text-[#FAF6F0] mb-4 flex items-center gap-1.5">
              <FiTerminal className="h-3.5 w-3.5 text-[#ee5412]" />
              Stack & Code
            </h4>
            <ul className="space-y-2 text-[11px] font-mono text-[#5C554E] dark:text-[#A39B8E]">
              <li>React / Vite / Next.js / Astro</li>
              <li>Tailwind CSS / Sass / UI Frameworks</li>
              <li>Node.js / Express / Python / n8n</li>
              <li>MySQL / MongoDB / SQL Server</li>
              <li>Headless WordPress / Vercel</li>
            </ul>
          </div>
        </div>

        {/* Fila Inferior: Copyright, Redes & Botón Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {[
              { name: "GitHub", href: "https://github.com", icon: FiGithub },
              {
                name: "LinkedIn",
                href: "https://linkedin.com",
                icon: FiLinkedin,
              },
              { name: "Twitter", href: "https://twitter.com", icon: FiTwitter },
              {
                name: "Instagram",
                href: "https://instagram.com",
                icon: FiInstagram,
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="p-2.5 rounded-full border border-[#EAE3D9] dark:border-[#2D2A26] bg-[#FAF6F0] dark:bg-[#1E1B18] text-[#121110] dark:text-[#FAF6F0] hover:text-[#ee5412] dark:hover:text-[#ee5412] hover:border-[#ee5412] transition cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="text-center text-xs text-[#5C554E] dark:text-[#A39B8E] flex items-center gap-1">
            <span>Hecho en Buenos Aires • © {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#EAE3D9] dark:border-[#2D2A26] bg-[#FAF6F0] dark:bg-[#1E1B18] text-xs font-semibold text-[#121110] dark:text-[#FAF6F0] hover:border-[#ee5412] hover:text-[#ee5412] transition cursor-pointer"
          >
            <span>Volver arriba</span>
            <FiArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
