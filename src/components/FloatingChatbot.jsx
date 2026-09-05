import { useState } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

export default function FloatingChatbot({ onOpenWizard }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! Soy el asistente WebFixer. ¿Tu sitio web tiene algún problema o querés realizar una consulta?"
    }
  ]);

  const handleOption = (text) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
      {
        sender: "bot",
        text: "¡Entendido! Te sugiero iniciar el asistente de cotización interactivo para darte un presupuesto exacto en menos de 2 minutos."
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-['Poppins',sans-serif]">
      {open ? (
        <div className="relative w-80 sm:w-96 rounded-3xl border border-[#E6DFD5] bg-[#FFFBF7] p-5 shadow-2xl transition">
          <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="h-3 w-3 rounded-full bg-[#52796F] animate-pulse"></div>
              <span className="font-bold text-sm text-[#2D2A26]">Soporte WebFixer</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-[#7A7265] hover:text-[#2D2A26]">
              <FiX className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-3 h-52 overflow-y-auto pr-1 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === "bot"
                    ? "bg-[#FAF6F0] text-[#2D2A26] rounded-tl-none border border-[#E6DFD5]"
                    : "bg-[#C85A32] text-white ml-auto rounded-tr-none"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#E6DFD5] flex flex-col gap-2">
            <button
              onClick={() => handleOption("Tengo un error 500 o caída")}
              className="text-left text-xs p-2 rounded-xl bg-[#F2ECE1] text-[#2D2A26] hover:bg-[#E6DFD5] transition"
            >
              🚨 Tengo un error 500 o caída urgente
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onOpenWizard();
              }}
              className="w-full text-center text-xs py-2.5 rounded-xl bg-[#C85A32] text-white font-semibold hover:bg-[#B34D28] transition"
            >
              ⚡ Cotizar Reparación Ahora
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2.5 rounded-full bg-[#C85A32] px-5 py-3.5 text-white shadow-xl shadow-[#C85A32]/30 hover:bg-[#B34D28] hover:scale-105 transition cursor-pointer font-semibold text-xs"
        >
          <FiMessageSquare className="h-5 w-5" />
          <span>¿Necesitás ayuda?</span>
        </button>
      )}
    </div>
  );
}