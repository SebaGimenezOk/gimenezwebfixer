import { useState } from "react";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

const KNOWLEDGE_BASE = {
  precio: "Los precios van desde $80.000 ARS para reparaciones/optimizaciones hasta $280.000 ARS para desarrollos completos institucionales.",
  tiempo: "Los diagnósticos y correcciones de bugs de build se entregan en 24-48 hs. Sitios completos toman entre 1 y 2 semanas.",
  tecnologia: "Trabajamos con React, Next.js, Tailwind CSS, Vite, JavaScript/TypeScript y WordPress headless.",
  contacto: "Podés agendar una llamada directa o escribir al WhatsApp mediante el botón de cotización en la barra superior."
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy WebFixer. ¿En qué puedo ayudarte hoy con tu sitio web?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input;
    const newMessages = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInput("");

    // Respuesta inteligente basada en palabras clave
    setTimeout(() => {
      const query = userText.toLowerCase();
      let botReply = "Para darte una respuesta exacta sobre ese punto, lo ideal es enviar una consulta mediante el Cotizador para revisar tu caso específico.";

      if (query.includes("precio") || query.includes("cuesta") || query.includes("cuanto")) {
        botReply = KNOWLEDGE_BASE.precio;
      } else if (query.includes("tiempo") || query.includes("tarda") || query.includes("plazo")) {
        botReply = KNOWLEDGE_BASE.tiempo;
      } else if (query.includes("stack") || query.includes("tecnologia") || query.includes("react") || query.includes("tailwind")) {
        botReply = KNOWLEDGE_BASE.tecnologia;
      } else if (query.includes("contacto") || query.includes("hablar") || query.includes("whatsapp")) {
        botReply = KNOWLEDGE_BASE.contacto;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-[#ee5412] px-5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-[#B34D28] transition cursor-pointer"
        >
          <FiMessageSquare className="h-5 w-5" />
          <span>Consultar Assistant</span>
        </button>
      ) : (
        <div className="flex h-96 w-80 sm:w-96 flex-col rounded-3xl border border-[#EAE3D9] dark:border-[#2D2A26] bg-[#FAF6F0] dark:bg-[#1E1B18] shadow-2xl overflow-hidden transition-colors">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EAE3D9] dark:border-[#2D2A26] bg-[#F4EFE6] dark:bg-[#171513] px-5 py-4">
            <span className="font-bold text-sm text-[#121110] dark:text-[#FAF6F0]">Soporte & Consultas</span>
            <button onClick={() => setIsOpen(false)} className="text-[#5C554E] dark:text-[#A39B8E] hover:text-[#121110]">
              <FiX className="h-5 w-5" />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] rounded-2xl p-3 ${
                  m.sender === "user"
                    ? "ml-auto bg-[#ee5412] text-white"
                    : "mr-auto bg-[#F4EFE6] dark:bg-[#221F1C] text-[#121110] dark:text-[#FAF6F0] border border-[#EAE3D9] dark:border-[#2D2A26]"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-[#EAE3D9] dark:border-[#2D2A26] p-3 bg-[#FAF6F0] dark:bg-[#1E1B18]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Preguntá sobre tiempos, precios..."
              className="flex-1 rounded-xl border border-[#EAE3D9] dark:border-[#2D2A26] bg-[#F4EFE6] dark:bg-[#221F1C] px-3 py-2 text-xs text-[#121110] dark:text-[#FAF6F0] focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="rounded-xl bg-[#ee5412] p-2.5 text-white hover:bg-[#ee5412] transition"
            >
              <FiSend className="h-4 w-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}