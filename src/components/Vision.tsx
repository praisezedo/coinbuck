import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { pillars } from "../constants/vision";
import coinbuckMascot from "../assets/coinbuck-mascot.webp";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

// Import your downloaded SVG map asset
import AfricaMapSVG from "../assets/africa.svg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Vision() {
  const visionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set([".v-title", ".v-map", ".v-line", ".v-node-base", ".v-end-mascot", ".v-stagger", ".v-card"], {
          opacity: 1, y: 0, scale: 1, strokeDashoffset: 0
        });
        return;
      }

      // --- INITIAL RESET STATES ---
      gsap.set(".v-title", { y: "100%", rotateX: -20 });
      gsap.set(".v-map", { opacity: 0, scale: 0.95 });
      gsap.set(".v-line", { strokeDashoffset: 500 });
      gsap.set(".v-node-base", { scale: 0, opacity: 0 });
      gsap.set(".v-end-mascot", { scale: 0, opacity: 0, y: 15 });
      gsap.set([".v-stagger", ".v-card"], { y: 40, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power4.out" },
      });

      // 1. Cinematic Header Reveal
      tl.to(".v-title", {
        y: "0%",
        rotateX: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
      })
      // 2. Full-Width Map Container Reveal
      .to(".v-map", {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      }, "-=0.5")
      // 3. Root Mascot Settles Down Exactly onto Nigeria
      .to(".v-node-base", {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "back.out(1.5)",
      }, "-=0.6")
      // 4. Gold Financial Trust Network Lines Draw Out From Base Hub
      .to(".v-line", {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.18,
        ease: "power3.inOut",
      }, "-=0.3")
      // 5. Verification Mascots Fade into Network Endpoints
      .to(".v-end-mascot", {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.5)",
      }, "-=0.5")
      // 6. Remaining Structural Pillars Smoothly Slide Up Underneath
      .to(".v-stagger", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.4")
      .to(".v-card", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
      }, "-=0.6");

      // Stable Glow Cycle (Premium subtle ambient lighting, NO bouncing)
      gsap.to(".v-root-glow", {
        opacity: 0.4,
        scale: 1.4,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: visionRef }
  );

  return (
    <section
      ref={visionRef}
      id="vision"
      className="relative w-full bg-[#1A0B05] px-4 py-20 sm:py-24 lg:py-32 text-[#FFF3CF] overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      <div className="mx-auto max-w-7xl w-full flex flex-col items-center">
        
        {/* HEADER BLOCK */}
        <div className="w-full text-center mb-12">
          <div className="overflow-hidden inline-block mb-3">
            <p className="v-title inline-flex rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#D4AF37] backdrop-blur">
               CoinBuck's Vision 
            </p>
          </div>
          <div className="overflow-hidden py-2">
            <h2 className="v-title text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-[#FFFDF9]">
              Our Pan-African Vision.
            </h2>
          </div>
        </div>

        {/* SCREEN-WIDE CANVAS VISUAL SYSTEM */}
        <div className="v-map w-full max-w-5xl aspect-16/10 relative flex items-center justify-center my-4 bg-black/15 rounded-[2.5rem] overflow-hidden">
          
          <div className="relative w-full h-full p-4 sm:p-12 flex items-center justify-center">
            
            {/* The Clear Country-Border Detailed SVG Map Layer */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center  opacity-30 mix-blend-screen text-[#ffc400]">
              <img 
                src={AfricaMapSVG} 
                alt="Detailed Africa Wireframe Map" 
                className="w-full h-full mix-blend-screen object-contain select-none pointer-events-none filter sepia hue-rotate-15 brightness-110"
              />
            </div>

            {/* OVERLAID PROGRAMMATIC TRUST NETWORK (SVG VALUES CALIBRATED TO PERCENT VALUE VIEWPORT) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              fill="none"
            >
              {/* Streams start at Nigeria coordinates (X:37, Y:43) and span directly to internal node endpoints */}
              {/* To North Africa Endpoint */}
              <path d="M 37 43 Q 48 30 58 26" stroke="#D4AF37" strokeWidth="0.4" strokeLinecap="round" strokeDasharray="500" className="v-line" />
              
              {/* To East Africa Endpoint */}
              <path d="M 37 43 Q 54 48 69 52" stroke="#D4AF37" strokeWidth="0.4" strokeLinecap="round" strokeDasharray="500" className="v-line" />
              
              {/* To South Africa Endpoint */}
              <path d="M 37 43 Q 46 63 53 74" stroke="#D4AF37" strokeWidth="0.4" strokeLinecap="round" strokeDasharray="500" className="v-line" />
              
              {/* To Madagascar Island Endpoint */}
              <path d="M 37 43 Q 60 65 77 74" stroke="#D4AF37" strokeWidth="0.3" strokeLinecap="round" strokeDasharray="500" className="v-line" />
            </svg>

            {/* BASE FOUNDATION HUB: Mascot Fixed Directly Over Nigeria Coordinate Marker */}
            <div className="v-node-base absolute left-[37%] top-[43%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none">
              <div className="relative flex flex-col items-center">
                
                {/* Clean, Non-bouncing Mascot Wrapper */}
                <div className="relative z-10 p-1  rounded-2xl shadow-xl">
                  <img src={coinbuckMascot} alt="CoinBuck Nigeria Hub Mascot" className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
                </div>
                
                {/* Nigeria Label Underneath */}
                <div className="mt-1.5 whitespace-nowrap rounded-md bg-[#D4AF37] px-2 py-0.5 text-[9px] font-black text-[#1A0B05] uppercase tracking-wider shadow-md">
                  Nigeria Base 🇳🇬
                </div>

                {/* Ambient Aura */}
                <div className="v-root-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#D4AF37]/15 blur-xl pointer-events-none" />
              </div>
            </div>

            {/* NETWORK ENDPOINT VERIFICATION BADGES (POSITIONED INTERNALLY OVER THE MAP) */}
            {/* North Africa Region Endpoint (e.g. Egypt / Libya area border layout) */}
            <div className="v-end-mascot absolute left-[58%] top-[26%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className=" p-1 rounded-xl shadow-lg flex items-center gap-1">
                <img src={coinbuckMascot} alt="CoinBuck North Node" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                <ShieldCheck size={12} className="text-[#D4AF37] shrink-0" />
              </div>
              <span className="text-[8px] text-[#FFF3CF]/60 font-bold tracking-tight mt-0.5">Node North</span>
            </div>

            {/* East Africa Region Endpoint (e.g. Kenya / East border layout) */}
            <div className="v-end-mascot absolute left-[69%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className=" p-1 rounded-xl shadow-lg flex items-center gap-1">
                <img src={coinbuckMascot} alt="CoinBuck East Node" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                <ShieldCheck size={12} className="text-[#D4AF37] shrink-0" />
              </div>
              <span className="text-[8px] text-[#FFF3CF]/60 font-bold tracking-tight mt-0.5">Node East</span>
            </div>

            {/* South Africa Region Endpoint (Internal layout boundaries) */}
            <div className="v-end-mascot absolute left-[53%] top-[74%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className=" p-1 rounded-xl shadow-lg flex items-center gap-1">
                <img src={coinbuckMascot} alt="CoinBuck South Node" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                <ShieldCheck size={12} className="text-[#D4AF37] shrink-0" />
              </div>
              <span className="text-[8px] text-[#FFF3CF]/60 font-bold tracking-tight mt-0.5">Node South</span>
            </div>

            {/* Madagascar Island Target Endpoint */}
            <div className="v-end-mascot absolute left-[77%] top-[74%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className=" p-1 rounded-xl shadow-lg flex items-center gap-1">
                <img src={coinbuckMascot} alt="CoinBuck Island Node" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                <ShieldCheck size={11} className="text-[#D4AF37] shrink-0" />
              </div>
              <span className="text-[8px] text-[#FFF3CF]/60 font-bold tracking-tight mt-0.5">Madagascar</span>
            </div>

          </div>
        </div>

        {/* BOTTOM CONTENT AREA */}
        <div className="w-full grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start mt-12">
          <div className="space-y-6">
            <p className="v-stagger text-base sm:text-lg leading-relaxed text-[#FFF3CF]/90">
              We’re building the most trusted bridge between crypto and everyday
              life across Africa — starting in Nigeria, and scaling into a
              continent where anyone can buy, sell, earn and spend cryptocurrency
              for real products and services as easily as sending a text.
            </p>
            <p className="v-stagger text-sm text-[#FFF3CF]/60 leading-relaxed">
              Every connection beam across the CoinBuck network map represents a fully compliant liquidity bridge. By pairing verified security structures with direct local settlement, we handle transactions with institutional-grade protection.
            </p>
            <div className="v-stagger pt-2">
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37] px-7 py-4 font-bold text-[#1A0B05] shadow-md transition-all hover:bg-[#FFF3CF] hover:scale-[1.02]"
              >
                See how CoinBuck works <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 w-full">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="v-card rounded-3xl border border-[#D4AF37]/15 bg-[#25120A] p-5 shadow-xl hover:border-[#D4AF37]/30 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1A0B05] text-[#D4AF37] border border-[#D4AF37]/10">
                      <Icon size={40} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#FFFDF9]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-6 text-[#FFF3CF]/70">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}