import { useState, useRef } from "react";
import { FiSkipForward } from "react-icons/fi";

export default function HeroCinematic({ onFinish }) {
  const [showTitle, setShowTitle] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  const handleEnded = () => {
    setShowTitle(true);
    setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsFinished(true);
        if (onFinish) onFinish();
      }, 700);
    }, 1800);
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsFading(true);
    setTimeout(() => {
      setIsFinished(true);
      if (onFinish) onFinish();
    }, 500);
  };

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-100 w-screen h-screen bg-[#0B0F17] flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/hero-chimp.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showTitle ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Título en pantalla a negro con Inter ExtraBold y tracking ultra ajustado */}
      {showTitle && (
        <div className="relative z-20 flex flex-col items-center justify-center animate-fadeIn px-4">
          <h1 className="font-['Inter',sans-serif] text-6xl sm:text-8xl font-extrabold tracking-tighter text-white select-none text-center">
            Gimenez<span className="text-[#ee5412]">Web</span>Fixer
          </h1>
        </div>
      )}

      {!showTitle && (
        <button
          onClick={handleSkip}
          className="absolute bottom-10 right-10 z-30 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-6 py-3 text-xs font-mono font-semibold text-white shadow-2xl hover:bg-white hover:text-black transition cursor-pointer"
        >
          <span>Saltar intro</span>
          <FiSkipForward className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}