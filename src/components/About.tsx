import { useRef } from "react";
import { CheckCircle2, Headphones, ShieldCheck, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import aboutMascot from "../assets/coinbuck-mascot-about.png";
import FloatingCoins from "./FloatingCoins";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const painPoints = [
  "Hidden fees",
  "Sketchy platforms",
  "Money disappearing",
  "No one to call",
];

const cards = [
  {
    icon: Zap,
    title: "Fast Conversion",
    text: "Crypto-to-naira transactions made quick, simple and stress-free.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Rates",
    text: "No surprises, no fine print. You see the rate before you trade.",
  },
  {
    icon: Headphones,
    title: "Human Support",
    text: "Real CoinBuck agents guide you through the process on WhatsApp.",
  },
];

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
        defaults: { ease: "power4.out" },
      });

tl.from(".about-mascot-card", {
  x: window.innerWidth >= 1024 ? -90 : 0,
  y: window.innerWidth < 1024 ? -80 : 0,
  opacity: 0,
  scale: 0.92,
  duration: 0.9,
})
        .from(
          ".about-heading",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          ".about-text",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.4"
        )
        .from(
          ".pain-pill",
          {
            y: 25,
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.35"
        )
        .from(
          ".about-card",
          {
            y: 40,
            opacity: 0,
            duration: 0.65,
            stagger: 0.12,
          },
          "-=0.25"
        );

      gsap.to(".about-mascot", {
        y: -12,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-spark", {
        scale: 1.25,
        opacity: 0.35,
        duration: 1.4,
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
      className="relative overflow-hidden bg-transparent px-4 py-28"
    >
        <FloatingCoins/>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 relative flex justify-center lg:order-1 lg:justify-start">
          <div className="about-spark absolute right-16 top-8 h-32 w-32 rounded-full blur-3xl" />

          <div className="about-mascot-card relative rounded-[3rem] bg-white/80 p-6 backdrop-blur-md">
            <img
              src={aboutMascot}
              alt="CoinBuck mascot teaching"
              className="about-mascot w-70 object-contain drop-shadow-[0_30px_60px_rgba(43,18,7,0.18)] md:w-107.5"
            />

            <div className="absolute -right-4 bottom-10 rounded-2xl border border-[#E8D7B8] bg-white px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#2B1207]">
                <CheckCircle2 size={18} className="text-[#D4AF37]" />
                Built for trust
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="about-heading mb-4 inline-flex rounded-full border border-[#D4AF37]/40 bg-white px-4 py-2 text-sm font-medium text-[#6A3B19] shadow-sm">
            What we’re all about
          </p>

          <h2 className="about-heading max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#2B1207] md:text-6xl">
            Crypto Built For Everyday Africans.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-[#6F5A4A]">
            <p className="about-text">
              CoinBuck was born out of a simple frustration — crypto in Nigeria
              and across Africa is harder than it needs to be.
            </p>

            <div className="about-text flex flex-wrap gap-3">
              {painPoints.map((point) => (
                <span
                  key={point}
                  className="pain-pill rounded-full border border-[#E8D7B8] bg-[#FFF9EE]/90 px-4 py-2 text-sm font-semibold text-[#5A3218]"
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="about-card rounded-3xl border border-[#E8D7B8] bg-white/85 p-5 shadow-[0_18px_50px_rgba(43,18,7,0.06)] backdrop-blur-md"
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
      </div>
    </section>
  );
}