import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cards } from "../constants/about";
import aboutMascot from "../assets/coinbuck-mascot-about.webp";
import FloatingCoins from "./FloatingCoins";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const painPoints = [
  "Hidden fees",
  "Sketchy platforms",
  "Money disappearing",
  "No one to call",
];

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const isCompact = window.innerWidth < 1024;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const scrollConfig = {
        trigger: aboutRef.current,
        start: "top 75%",
        once: true,
      };

      if (reduceMotion) {
        gsap.set([".about-heading", ".about-text", ".pain-pill", ".about-mascot-card", ".about-card-desktop", ".about-card-mobile"], {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: scrollConfig,
        defaults: { ease: "power4.out" },
      });

      // 1. Godly-Inspired Premium Text Reveal & Mascot Animation
      tl.fromTo(
        ".about-mascot-card",
        {
          opacity: 0,
          scale: 0.85,
          y: isCompact ? 30 : 0,
          x: isCompact ? 0 : -50,
        },
        { opacity: 1, scale: 1, y: 0, x: 0, duration: 1.2 }
      )
      .fromTo(
        ".about-heading",
        { y: 50, rotateX: -15, opacity: 0 },
        { y: 0, rotateX: 0, opacity: 1, duration: 1.1, stagger: 0.15 },
        "-=0.9"
      )
      .fromTo(
        ".about-text",
        { y: 30, opacity: 0, rotateX: -10 },
        { y: 0, rotateX: 0, opacity: 1, duration: 0.85, stagger: 0.1 },
        "-=0.6"
      )
      .fromTo(
        ".pain-pill",
        { y: 15, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.06, ease: "back.out(1.5)" },
        "-=0.5"
      );

      // 2. High-End Explosive Card Animation (Mobile/Tablet Only)
      if (isCompact) {
        const mobileCards = gsap.utils.toArray<HTMLElement>(".about-card-mobile");
        
        mobileCards.forEach((card, index) => {
          const angles = [-140, -40, 90]; 
          const radius = window.innerWidth < 400 ? 115 : 135; 
          const angleRad = (angles[index] * Math.PI) / 180;
          
          const targetX = Math.cos(angleRad) * radius;
          const targetY = Math.sin(angleRad) * radius;
          const initialRotation = angles[index] * 0.4;

          gsap.set(card, {
            opacity: 0,
            scale: 0.3,
            x: 0,
            y: 0,
            rotation: initialRotation,
          });

          tl.to(
            card,
            {
              opacity: 1,
              scale: 1,
              x: targetX,
              y: targetY,
              rotation: 0,
              duration: 1.4,
              ease: "elastic.out(1, 0.65)",
            },
            `-=${0.75 - index * 0.1}`
          );
        });
      } else {
        // Desktop Grid Card entry
        tl.fromTo(
          ".about-card-desktop",
          { opacity: 0, y: 50, scale: 0.9, rotateX: -12 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // 3. Ambient Idle Movements (Micro-interactions)
      gsap.to(".about-mascot", {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-spark", {
        scale: 1.25,
        opacity: 0.35,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: aboutRef }
  );

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative overflow-hidden bg-transparent px-4 py-20 sm:py-24 lg:py-28"
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Background */}
      <FloatingCoins />

      <div className="relative z-30 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 2xl:max-w-360">
        
        {/* Text Details Container - NOW ORDER-1 ON MOBILE (FIRST) */}
        <div className="about-copy-wrap order-1 lg:order-2" style={{ transformStyle: "preserve-3d" }}>
          <div>
            <p className="about-heading mb-4 inline-flex rounded-full border border-[#D4AF37]/40 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-[#6A3B19] shadow-sm">
              What we’re all about
            </p>
          </div>

          <h2 className="about-heading max-w-3xl text-3xl sm:text-4xl font-black leading-tight tracking-tight text-[#2B1207] md:text-6xl origin-left">
            Crypto Built For Everyday Africans.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-7 sm:mt-8 sm:space-y-5 sm:text-lg sm:leading-8 text-[#6F5A4A] origin-left">
            <p className="about-text">
              CoinBuck was born out of a simple frustration — crypto in Nigeria
              and across Africa is harder than it needs to be.
            </p>

            <div className="about-text flex flex-wrap gap-2.5">
              {painPoints.map((point) => (
                <span
                  key={point}
                  className="pain-pill rounded-full border border-[#E8D7B8] bg-[#FFF9EE]/90 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#5A3218] shadow-sm"
                >
                  {point}
                </span>
              ))}
            </div>

            <p className="about-text">
              We started by making crypto-to-naira conversion fast, fair and
              human. But we’re not stopping there.
            </p>

            <p className="about-text font-semibold text-[#2B1207]">
              CoinBuck isn’t just a crypto exchange. We’re building the
              financial layer Africa was never given.
            </p>
          </div>

          {/* DESKTOP ONLY CARDS GRID */}
          <div className="mt-12 hidden gap-4 lg:grid lg:grid-cols-3" style={{ transformStyle: "preserve-3d" }}>
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="about-card-desktop rounded-3xl border border-[#E8D7B8] bg-white/80 p-5 shadow-[0_18px_50px_rgba(43,18,7,0.06)] backdrop-blur-md origin-bottom"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF3CF] text-[#D4AF37]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-[#2B1207]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6F5A4A]">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Stage Container - NOW ORDER-2 ON MOBILE (BOTTOM) */}
        <div className="order-2 lg:order-1 relative flex items-center justify-center min-h-96 sm:min-h-112 lg:min-h-auto mt-12 lg:mt-0">
          
          {/* DESKTOP ONLY BRANDING MAP */}
          <div className="hidden lg:block relative">
            <div className="about-spark absolute right-16 top-8 h-32 w-32 rounded-full bg-[#FFF3CF]/40 blur-3xl" />
            <div className="about-mascot-card relative rounded-[3rem] p-6 backdrop-blur-md">
              <img
                src={aboutMascot}
                loading="lazy"
                decoding="async"
                alt="CoinBuck mascot teaching"
                width={1024}
                height={1024}
                className="about-mascot w-64 object-contain sm:w-80 md:w-107.5"
              />
              <div className="absolute -right-4 bottom-10 rounded-2xl border border-[#E8D7B8] bg-white px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#2B1207]">
                  <CheckCircle2 size={18} className="text-[#D4AF37]" />
                  Built for trust
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE & TABLET COMPACT STAGE */}
          <div className="relative flex h-64 w-64 items-center justify-center lg:hidden">
            <div className="about-spark absolute h-40 w-40 rounded-full bg-[#FFF3CF]/50 blur-2xl" />

            {/* Central Mascot Anchor */}
            <div className="about-mascot-card relative z-10 flex h-48 w-48 items-center justify-center p-2 backdrop-blur-sm">
              <img
                src={aboutMascot}
                loading="lazy"
                decoding="async"
                alt="CoinBuck mascot teaching"
                className="about-mascot h-full w-full object-contain transform scale-110"
              />
            </div>

            {/* Radially Exploded Mobile Cards */}
            {cards.slice(0, 3).map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="about-card-mobile absolute z-20 w-40 sm:w-45 rounded-2xl border border-[#E8D7B8] bg-white/95 p-3 shadow-[0_12px_30px_rgba(43,18,7,0.12)] backdrop-blur-md pointer-events-auto"
                >
                  <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF3CF] text-[#D4AF37]">
                    <Icon size={14} />
                  </div>
                  <h3 className="text-[0.75rem] font-black leading-tight text-[#2B1207]">
                    {card.title}
                  </h3>
                  <p className="mt-0.5 text-[0.62rem] leading-normal text-[#6F5A4A]">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}