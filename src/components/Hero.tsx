import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import mascotVideo from "../assets/coin-buck-marcot - animation.mp4";
import btc from "../assets/coin-btc.png";
import eth from "../assets/coin-eth.png";
import usdt from "../assets/coin-usdt.png";
import sol from "../assets/coin-sol.png";
import naira from "../assets/coin-naira.png";
import FloatingCoins from "./FloatingCoins";

gsap.registerPlugin(useGSAP);

const splashCoins = [btc, eth, usdt, sol, naira, btc, usdt, eth];

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(
    () => {
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
        y: "random(-18, 18)",
        x: "random(-12, 12)",
        rotate: "random(-8, 8)",
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
            x: () => gsap.utils.random(-260, 260),
            y: () => gsap.utils.random(-160, 160),
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
      className="relative min-h-screen overflow-hidden bg-white px-4 pt-28"
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

      <div className="relative z-30 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="mascot-wrap relative flex justify-center">
          <video
            ref={videoRef}
            src={mascotVideo}
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleVideoTimeUpdate}
            className="w-65 rounded-4xl object-contain md:w-107.5"
          />
        </div>

        <div className="hero-copy text-center md:text-left">
          <p className="inline-flex rounded-full border border-[#D4AF37]/40 bg-white px-4 py-2 text-sm font-medium text-[#6A3B19] shadow-sm">
            Swift • Secure • Seamless
          </p>

          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight text-[#2B1207] md:text-7xl">
            Convert Crypto To Naira In Minutes.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6F5A4A]">
            Fast, fair and human crypto exchange for everyday Africans. No
            hidden fees. No confusion. Just one WhatsApp message.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="https://wa.me/2349094985193?text=I%20want%20to%20trade"
              className="inline-flex items-center gap-2 rounded-full bg-[#2B1207] px-7 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(43,18,7,0.25)] transition hover:scale-105"
            >
              Trade on WhatsApp <ArrowUpRight size={18} />
            </a>

            <a
              href="#how"
              className="inline-flex rounded-full border border-[#D4AF37]/50 bg-white px-7 py-4 font-semibold text-[#2B1207] transition hover:scale-105"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}