import { useState } from "react";
import BearLogo from "./BearLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-[#E6DFD5]/80 bg-[#FAF6F0]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        
        {/* Marca / Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <BearLogo className="h-12 w-auto sm:h-16" />
          <span className="text-lg font-bold tracking-tight text-[#2D2A26] sm:text-xl">
            Gimenez<span className="text-[#ee5412]">Web</span>Fixer
          </span>
        </div>

        {/* Menú Desktop (>= 768px) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#7A7265]">
          <a href="#servicios" className="hover:text-[#ee5412] transition">
            Servicios
          </a>
          <a href="#modulos" className="hover:text-[#ee5412] transition">
            Diagnóstico
          </a>
          <a href="#faq" className="hover:text-[#ee5412] transition">
            Preguntas
          </a>
        </div>

        {/* Botón Hamburguesa Mobile (< 768px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden p-2 text-[#2D2A26] hover:text-[#ee5412] focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desplegable Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E6DFD5]/80 bg-[#FAF6F0] px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-[#7A7265]">
          <a 
            href="#servicios" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-[#ee5412] transition"
          >
            Servicios
          </a>
          <a 
            href="#modulos" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-[#ee5412] transition"
          >
            Diagnóstico
          </a>
          <a 
            href="#faq" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-[#ee5412] transition"
          >
            Preguntas
          </a>
        </div>
      )}
    </header>
  );
}