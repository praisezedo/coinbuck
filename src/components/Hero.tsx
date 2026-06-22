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

      gsap.set(".hero-copy > *", { y: 55, opacity: 0 });
      gsap.set(".mascot-wrap", { x: -90, opacity: 0, scale: 0.94 });
      gsap.set(".coin-splash", { scale: 0, opacity: 0 });
      gsap.set(".impact-ring", { scale: 0.2, opacity: 0 });
      gsap.set(".drop-coin", {
        y: -560,
        rotate: -260,
        opacity: 1,
        scale: 1,
      });

      gsap.to(".floating-bg-coin", {
        y: isMobile ? "random(-6, 6)" : "random(-18, 18)",
        x: isMobile ? "random(-4, 4)" : "random(-12, 12)",
        rotate: isMobile ? "random(-3, 3)" : "random(-8, 8)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".drop-coin", {
        y: 0,
        rotate: 0,
        duration: 0.85,
        ease: "bounce.out",
      })
        .to(
          ".drop-coin",
          { scaleX: 1.18, scaleY: 0.82, duration: 0.08 },
          "-=0.12"
        )
        .to(".drop-coin", {
          scaleX: 1,
          scaleY: 1,
          y: -24,
          duration: 0.18,
          ease: "power2.out",
        })
        .to(".drop-coin", {
          y: 0,
          duration: 0.16,
          ease: "power2.in",
        })
        .to(
          ".impact-ring",
          {
            scale: 7,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          ".coin-splash",
          {
            scale: 1,
            opacity: 0.9,
            x: () => gsap.utils.random(isMobile ? -110 : -260, isMobile ? 110 : 260),
            y: () => gsap.utils.random(isMobile ? -80 : -160, isMobile ? 80 : 160),
            rotate: () => gsap.utils.random(-220, 220),
            duration: 0.65,
            stagger: 0.03,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          ".coin-splash",
          {
            opacity: 0,
            scale: 0,
            duration: 0.35,
            stagger: 0.015,
          },
          "-=0.2"
        )
        .to(
          ".floating-bg-coin",
          {
            opacity: 0.75,
            filter: "blur(0px)",
            scale: 1.08,
            duration: 0.6,
            stagger: 0.05,
          },
          "-=0.35"
        )
        .to(
          ".mascot-wrap",
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            onStart: () => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
              }
            },
          },
          "-=0.45"
        )
        .to(
          ".hero-copy > *",
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
          },
          "-=0.55"
        );
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
      className="relative min-h-svh overflow-hidden bg-white px-4 pb-12 pt-24 sm:pt-28 lg:pb-0"
    >
      <FloatingCoins />

      <div className="impact-ring pointer-events-none absolute left-1/2 top-[46%] z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/80" />

      <img
        src={btc}
        alt=""
        className="drop-coin pointer-events-none absolute left-1/2 top-[46%] z-20 h-24 w-24 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl"
      />

      {splashCoins.map((coin, index) => (
        <img
          key={index}
          src={coin}
          alt=""
          className="coin-splash pointer-events-none absolute left-1/2 top-[46%] z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-lg md:h-10 md:w-10"
        />
      ))}

      <div className="relative z-30 mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-0 2xl:max-w-360">
        <div className="mascot-wrap relative mx-auto flex w-fit justify-center">
          <video
            ref={videoRef}
            src={mascotVideo}
            muted
            playsInline
            preload="metadata"
            poster={mascotPoster}
            onTimeUpdate={handleVideoTimeUpdate}
            className="relative z-10 w-56 rounded-4xl object-contain sm:w-72 md:w-88 lg:w-107.5"
          />

          <p className="absolute bottom-0 right-0 z-30 flex min-h-10 min-w-40 items-center justify-center rounded-tl-2xl bg-[#2B1207] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F4D03F] shadow-[-8px_-8px_24px_rgba(43,18,7,0.18)] sm:min-h-12 sm:min-w-48 sm:px-5 sm:text-xs">
            Swift . Secure . Seamless
          </p>
        </div>

        <div className="hero-copy text-center lg:text-left">
          <p className="inline-flex justify-center rounded-full border border-[#D4AF37]/40 bg-white px-4 py-2 text-sm font-medium text-[#6A3B19] shadow-sm">
            Swift • Secure • Seamless
          </p>

          <h1 className="mt-5 text-4xl font-black leading-[0.98] tracking-tight text-[#2B1207] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Convert Crypto To Naira In Minutes.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#6F5A4A] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Fast, fair and human crypto exchange for everyday Africans. No
            hidden fees. No confusion. Just one WhatsApp message.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <button
              onClick={onTradeClick}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B1207] px-7 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(43,18,7,0.25)] transition hover:scale-105"
            >
              Trade On WhatsApp <ArrowUpRight size={18} />
            </button>

            <a
              href="#how"
              className="inline-flex justify-center rounded-full border border-[#D4AF37]/50 bg-white px-7 py-4 font-semibold text-[#2B1207] transition hover:scale-105"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}