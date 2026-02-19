import { useEffect, useState } from "react";

type EnvelopeIntroProps = {
  onOpened: () => void;
};

export const EnvelopeIntro = ({ onOpened }: EnvelopeIntroProps) => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!isOpening) return;

    const timer = window.setTimeout(() => {
      onOpened();
    }, 1700);

    return () => window.clearTimeout(timer);
  }, [isOpening, onOpened]);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-[#1d2d24]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(228,184,107,0.18),transparent_35%),radial-gradient(circle_at_85%_100%,rgba(77,109,89,0.45),transparent_45%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 6px)",
        }}
      />

      <div className="relative h-full w-full">
        <div
          className={`absolute inset-0 origin-top bg-[#2f5a47] shadow-[inset_0_-30px_70px_rgba(0,0,0,0.3)] transition-transform duration-1000 ${
            isOpening ? "-translate-y-[95%]" : "translate-y-0"
          }`}
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 55%)" }}
        />

        <div
          className={`absolute inset-y-0 left-0 w-1/2 origin-left bg-[#305845] shadow-[inset_-12px_0_25px_rgba(0,0,0,0.24)] transition-transform duration-1000 ${
            isOpening ? "-translate-x-[102%]" : "translate-x-0"
          }`}
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />

        <div
          className={`absolute inset-y-0 right-0 w-1/2 origin-right bg-[#2b5240] shadow-[inset_12px_0_25px_rgba(0,0,0,0.24)] transition-transform duration-1000 ${
            isOpening ? "translate-x-[102%]" : "translate-x-0"
          }`}
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#264a39] shadow-[inset_0_18px_35px_rgba(0,0,0,0.2)]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <button
            type="button"
            onClick={() => setIsOpening(true)}
            aria-label="Meghívó felnyitása"
            disabled={isOpening}
            className={`z-20 flex h-28 w-28 items-center justify-center rounded-full border border-[#dcb874] bg-[radial-gradient(circle_at_28%_25%,#f8e6be,#c59135_70%)] font-serif text-4xl font-semibold text-[#4c2e10] shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4d79c]/80 ${
              isOpening ? "scale-90 opacity-0" : "opacity-100 hover:scale-105"
            }`}
          >
            KM
          </button>

          <p className="mt-8 font-serif text-3xl text-[#f2e6c9] drop-shadow-sm sm:text-4xl">Katalin &amp; Martin</p>
          <p className="mt-3 max-w-sm text-sm uppercase tracking-[0.28em] text-[#e0cc9f]">Koppints a pecsétre és nyisd fel a meghívót</p>
        </div>
      </div>
    </div>
  );
};
