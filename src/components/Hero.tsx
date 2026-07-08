import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import mascotVideo from "../assets/coin-buck-marcot - animation.mp4";
import mascotPoster from "../assets/coinbuck-mascot.webp";
import btc from "../assets/coin-btc.png";
import eth from "../assets/coin-eth.png";
import usdt from "../assets/coin-usdt.png";
import sol from "../assets/coin-sol.png";
import naira from "../assets/coin-naira.png";
import FloatingCoins from "./FloatingCoins";

gsap.registerPlugin(useGSAP);

const splashCoins = [btc, eth, usdt, sol, naira, btc, usdt, eth];

type HeroProps = {
  onTradeClick?: () => void;
};

export default function Hero({ onTradeClick }: HeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set([".hero-copy > *", ".mascot-wrap", ".floating-bg-coin"], {
          clearProps: "all",
          opacity: 1,
        });
        gsap.set([".drop-coin", ".coin-splash", ".impact-ring"], { display: "none" });
        return;
      }

      // --- INITIAL STATE ---
      gsap.set(".hero-copy-stagger", { y: 65, opacity: 0, rotateX: -15 });
      gsap.set(".hero-cta-btn", { scale: 0.9, opacity: 0 });
      gsap.set(".mascot-container", { scale: 0, opacity: 0 });
      gsap.set(".coin-splash", { scale: 0, opacity: 0, z: 50 });
      gsap.set(".impact-ring", { scale: 0.1, opacity: 0 });
      gsap.set(".drop-coin", {
        y: -window.innerHeight,
        rotate: -360,
        opacity: 1,
        scale: 1.2,
      });

      // --- PERSISTENT FLOATING BG AMBIENCE ---
      gsap.to(".floating-bg-coin", {
        y: isMobile ? "random(-8, 8)" : "random(-24, 24)",
        x: isMobile ? "random(-5, 5)" : "random(-16, 16)",
        rotate: isMobile ? "random(-4, 4)" : "random(-12, 12)",
        duration: "random(3.5, 5.5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      });

      // --- EXPERIMENTAL INTRO CINEMATIC TIMELINE ---
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(".drop-coin", {
        y: 0,
        rotate: 0,
        duration: 0.95,
        ease: "bounce.out",
      })
      .to(".drop-coin", { 
        scaleX: 1.35, 
        scaleY: 0.65, 
        duration: 0.08, 
        ease: "power2.inOut" 
      }, "-=0.15")
      .to(".drop-coin", { 
        scaleX: 1, 
        scaleY: 1, 
        y: -30, 
        duration: 0.2 
      })
      .to(".drop-coin", { 
        y: 0, 
        duration: 0.14, 
        ease: "power2.in" 
      })
      .to(".impact-ring", {
        scale: isMobile ? 6 : 9,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      }, "-=0.18")
      .to(".coin-splash", {
        opacity: 1,
        scale: () => gsap.utils.random(0.8, 1.1),
        x: (i) => {
          const angle = (i / splashCoins.length) * Math.PI * 2;
          const spread = isMobile ? gsap.utils.random(100, 140) : gsap.utils.random(220, 320);
          return Math.cos(angle) * spread;
        },
        y: (i) => {
          const angle = (i / splashCoins.length) * Math.PI * 2;
          const spread = isMobile ? gsap.utils.random(80, 110) : gsap.utils.random(180, 240);
          return Math.sin(angle) * spread;
        },
        rotate: () => gsap.utils.random(-360, 360),
        duration: 0.8,
        ease: "expo.out",
      }, "-=0.8")
      .to(".coin-splash", {
        opacity: 0,
        scale: 0.2,
        duration: 0.45,
        stagger: 0.01,
        ease: "power2.in"
      }, "-=0.3")
      .to(".drop-coin", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power4.in"
      }, "-=0.45")
      .to(".mascot-container", {
        scale: 1,
        opacity: 1,
        duration: 0.95,
        ease: "elastic.out(1, 0.75)",
        onStart: () => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        },
      }, "-=0.4")
      .to(".floating-bg-coin", {
        opacity: 0.85,
        scale: 1,
        duration: 0.8,
        stagger: 0.04,
      }, "-=0.7")
      .to(".hero-copy-stagger", {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out"
      }, "-=0.75")
      .to(".hero-cta-btn", {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5");
    },
    { scope: heroRef }
  );

  function handleVideoTimeUpdate() {
    const video = videoRef.current;
    if (!video) return;

    if (video.currentTime >= 3) {
      video.currentTime = 0;
      video.play();
    }
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-svh lg:mt-20 overflow-hidden bg-white px-4 pb-12 pt-20 sm:pt-24 lg:py-0"
      style={{ perspective: "1000px" }}
    >
      <FloatingCoins />

      <div className="relative z-30 mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-10 py-4 lg:grid-cols-[0.95fr_1.05fr] lg:py-0 2xl:max-w-360">
        
        {/* Visual Anchor Box - NOW ORDER-1 ON MOBILE (FIRST), CONVERTS TO LG:ORDER-1 ON DESKTOP */}
        <div className="order-1 lg:order-1 relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-auto lg:w-full mt-6 lg:mt-0">
          
          <div className="impact-ring pointer-events-none absolute z-10 h-28 w-28 rounded-full border border-[#D4AF37]/80 sm:h-36 sm:w-36" />

          <img
            src={btc}
            alt=""
            className="drop-coin pointer-events-none absolute z-20 h-20 w-20 object-contain drop-shadow-[0_25px_35px_rgba(212,175,55,0.4)] sm:h-26 sm:w-26 md:h-32 md:w-32"
          />

          {splashCoins.map((coin, index) => (
            <img
              key={index}
              src={coin}
              alt="crypto coin"
              className="coin-splash pointer-events-none absolute z-20 h-7 w-7 object-contain drop-shadow-md sm:h-9 sm:w-9"
            />
          ))}

          {/* Centralized Premium Stage for the Mascot */}
          <div className="mascot-container relative z-30 flex items-center justify-center">
            <video
              ref={videoRef}
              src={mascotVideo}
              muted
              playsInline
              preload="metadata"
              poster={mascotPoster}
              onTimeUpdate={handleVideoTimeUpdate}
              className="w-60  object-contain sm:w-67 md:w-70 lg:w-96"
            />
          </div>
        </div>

        {/* Copy Details Block - NOW ORDER-2 ON MOBILE (SECOND), CONVERTS TO LG:ORDER-2 ON DESKTOP */}
        <div className="hero-copy order-2 lg:order-2 text-center lg:text-left style-3d mb-8 lg:mb-0">
          <p className="hero-copy-stagger inline-flex justify-center items-center rounded-full border border-[#D4AF37]/40 bg-white px-4 py-2 text-sm font-medium text-[#6A3B19] shadow-sm">
            Swift • Secure • Seamless
          </p>

          <h1 className="hero-copy-stagger mt-5 text-4xl font-black leading-[0.96] tracking-tight text-[#2B1207] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Convert Crypto To Naira In Minutes.
          </h1>

          <p className="hero-copy-stagger mx-auto mt-5 max-w-xl text-base leading-7 text-[#6F5A4A] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Fast, fair and human crypto exchange for everyday Africans. No
            hidden fees. No confusion. Just one WhatsApp message.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <button
              onClick={onTradeClick}
              className="hero-cta-btn  duration-300 hover:-translate-y-3 inline-flex items-center hover:cursor-pointer justify-center gap-2 rounded-full bg-[#2B1207] px-7 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(43,18,7,0.25)] transition hover:brightness-125"
            >
              Trade On WhatsApp <ArrowUpRight size={18} />
            </button>

            <a
              href="#how"
              className="hero-cta-btn inline-flex  duration-300 hover:-translate-y-3 justify-center rounded-full border border-[#D4AF37]/50 bg-white px-7 py-4 font-semibold text-[#2B1207] transition hover:bg-[#FFFDF9]"
            >
              See How It Works
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}