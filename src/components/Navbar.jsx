import BearLogo from "./BearLogo";

export default function Navbar({ onOpenWizard }) {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-[#E6DFD5]/80 bg-[#FAF6F0]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-3">
          <BearLogo className="h-12 w-auto" />
          <span className="text-xl font-bold tracking-tight text-[#2D2A26]">
            Gimenez<span className="text-[#C85A32]">Web</span>Fixer
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#7A7265]">
          <a href="#servicios" className="hover:text-[#C85A32] transition">
            Servicios
          </a>
          <a href="#modulos" className="hover:text-[#C85A32] transition">
            Diagnóstico
          </a>
          <a href="#faq" className="hover:text-[#C85A32] transition">
            Preguntas
          </a>
        </div>

        <button
          onClick={onOpenWizard}
          className="rounded-full bg-[#C85A32] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#C85A32]/20 hover:bg-[#B34D28] transition cursor-pointer"
        >
          Cotizar Reparación
        </button>
      </div>
    </header>
  );
}