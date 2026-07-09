import { useRef } from "react";
import { steps } from "../constants/steps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FloatingCoins from "./FloatingCoins";
import stepMascot from "../assets/coinbuck-marcot-steps.webp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Steps() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set([".how-heading > *", ".zigzag-node", ".explanation-box", ".step-line-path", ".step-mascot-card"], {
          opacity: 1, y: 0, scale: 1, strokeDashoffset: 0
        });
        return;
      }

      // --- PREMIUM ANIMATION TIMELINE ---
      gsap.set(".how-heading > *", { y: 30, opacity: 0 });
      gsap.set(".step-line-path", { strokeDashoffset: 1600 });
      gsap.set(".zigzag-node", { scale: 0, opacity: 0 });
      gsap.set(".explanation-box", { opacity: 0, y: 15 });
      gsap.set(".step-mascot-card", { opacity: 0, y: 25 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power4.out" },
      });

      tl.to(".how-heading > *", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
      })
      .to(".step-line-path", {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.inOut",
      }, "-=0.4")
      .to(".zigzag-node", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: "back.out(1.3)",
      }, "-=1.3")
      .to(".explanation-box", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
      }, "-=1.0")
      .to(".step-mascot-card", {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, "-=0.2");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="how"
      className="relative bg-transparent px-4 py-16 sm:py-24 lg:py-32 text-[#FFF3CF] overflow-hidden"
    >
      <FloatingCoins />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        
        {/* HEADER SECTION */}
        <div className="how-heading mx-auto max-w-3xl text-center mb-16 lg:mb-28">
          <p className="mb-4 inline-flex rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#D4AF37] backdrop-blur">
            how it works
          </p>
          <h2 className="text-3xl font-black sm:text-5xl lg:text-7xl tracking-tight text-[#080600] leading-none">
            Five Steps. Zero Confusion.
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-[#1a1301]/80 max-w-2xl mx-auto">
            Everything runs fluidly inside WhatsApp. No secondary application friction points.
          </p>
        </div>

        {/* FLOWCHART VIEWPORT SYSTEM */}
        <div className="relative w-full">
          
          {/* RESPONSIVE BACKGROUND LINES */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Desktop "Z" Path Layer */}
            <svg viewBox="0 0 1000 1300" fill="none" preserveAspectRatio="none" className="hidden lg:block w-full h-full">
              <path d="M 500,50 L 200,350 L 800,650 L 200,950 L 500,1250" stroke="#D4AF37" strokeOpacity="0.1" strokeWidth="4" strokeLinecap="round" />
              <path d="M 500,50 L 200,350 L 800,650 L 200,950 L 500,1250" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" className="step-line-path" strokeDasharray="1600" />
            </svg>

            {/* Mobile & Tablet Center Vertical Line (Always Visible) */}
            <div className="block lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1">
              <svg viewBox="0 0 4 100" fill="none" preserveAspectRatio="none" className="w-full h-full">
                <line x1="2" y1="0" x2="2" y2="100" stroke="#D4AF37" strokeOpacity="0.15" strokeWidth="4" />
                <line x1="2" y1="0" x2="2" y2="100" stroke="#D4AF37" strokeWidth="4" className="step-line-path" strokeDasharray="1600" />
              </svg>
            </div>
          </div>

          {/* LAYOUT CONTAINER */}
          <div className="relative z-10 flex flex-col gap-16 sm:gap-24 lg:gap-0 lg:h-325 lg:justify-between w-full">
            {steps.map((step, index) => {
              const Icon = step.icon;

              // Grid mapping configuration values strictly for Desktop viewports
              const desktopConfigs = [
                { leftClass: "lg:left-[50%]", textClass: "lg:left-[calc(50%+8rem)] lg:text-left" },   // Step 1: Center
                { leftClass: "lg:left-[20%]", textClass: "lg:left-[calc(20%+8rem)] lg:text-left" },  // Step 2: Left
                { leftClass: "lg:left-[80%]", textClass: "lg:right-[calc(20%+8rem)] lg:text-right" }, // Step 3: Right
                { leftClass: "lg:left-[20%]", textClass: "lg:left-[calc(20%+8rem)] lg:text-left" },  // Step 4: Left
                { leftClass: "lg:left-[50%]", textClass: "lg:left-[calc(50%+8rem)] lg:text-left" }   // Step 5: Center
              ][index];

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center justify-center lg:block w-full text-center"
                >
                  {/* SOLID WHITE CIRCLE NODE */}
                  <div 
                    className={`zigzag-node relative lg:absolute top-0 ${desktopConfigs.leftClass} lg:-translate-x-1/2 lg:-translate-y-1/2 shrink-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center p-3 sm:p-4 z-20 border border-white mx-auto lg:mx-0`}
                  >
                    <span className="absolute top-2 sm:top-3.5 text-[7px] sm:text-[8px] font-black tracking-[0.2em] text-[#1A0B05]/40">
                      PHASE 0{index + 1}
                    </span>

                    {/* Gold Icon Box */}
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#FFF3CF] flex items-center justify-center text-[#D4AF37] mb-1 sm:mb-2 shadow-sm shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                    </div>

                    {/* Dark Brown Heading Text */}
                    <h3 className="text-[11px] sm:text-xs lg:text-sm font-black tracking-tight text-[#3a2b01] max-w-[90%] leading-tight">
                      {step.title}
                    </h3>

                    {/* Step Count Badge */}
                    <div className="absolute -bottom-1.5 sm:-bottom-2 bg-[#1A0B05] text-[#FFF3CF] font-black text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-0.5 rounded-full shadow-md">
                      0{index + 1}
                    </div>
                  </div>

                  {/* PARAGRAPH EXPLANATION BOX */}
                  <div className={`explanation-box mt-4 lg:mt-0 lg:absolute lg:top-0 lg:-translate-y-1/2 w-full max-w-70 sm:max-w-md mx-auto lg:mx-0 ${desktopConfigs.textClass}`}>
                    <p className="text-xs sm:text-sm lg:text-base bg-white/70  font-bold leading-relaxed text-[#3a2b01]">
                      {step.text}
                    </p>
                    {step.note && (
                      <span className="mt-1 sm:mt-1.5 inline-block text-[15px] md:text-[17px] font-bold tracking-wide text-[#D4AF37] bg-[#1A0B05] border border-[#D4AF37]/20 px-2 sm:px-2.5 py-0.5 rounded-full shadow-sm">
                        {step.note}
                      </span>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM MASCOT FINISHER */}
        <div className="mt-20 lg:mt-32 w-full flex justify-center">
          <div className="step-mascot-card relative p-4 flex flex-col items-center">
            <img
              src={stepMascot}
              loading="lazy"
              alt="CoinBuck system guide assistant mascot"
              className="step-mascot w-50 sm:w-70 lg:w-100 object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            />
            <div className="absolute -left-6 sm:-left-10 bottom-6 sm:bottom-8 rounded-xl sm:rounded-2xl border border-[#D4AF37]/20 bg-[#25120A] px-3 py-2 sm:px-4 sm:py-3 shadow-2xl backdrop-blur">
              <p className="text-[8px] sm:text-[10px] font-bold tracking-wider text-[#D4AF37] uppercase">Instant Initiation</p>
              <p className="text-xs sm:text-sm font-black text-[#FFFDF9]">WhatsApp → Settlement</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}