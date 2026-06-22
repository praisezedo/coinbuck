import { useRef } from "react";
import {steps} from "../constants/steps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FloatingCoins from "./FloatingCoins";
import stepMascot from "../assets/coinbuck-marcot-steps.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function Steps() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const isDesktop = window.innerWidth >= 1024;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        defaults: { ease: "power4.out" },
      });

      tl.fromTo(
        ".how-heading > *",
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.12 }
      )
        .fromTo(
          ".flow-line",
          { scaleY: 0, transformOrigin: "top center" },
          { scaleY: 1, duration: 1.25, ease: "power2.inOut" },
          "-=0.2"
        )
        .fromTo(
          ".step-card",
          {
            x: isDesktop ? -45 : 0,
            y: isDesktop ? 0 : 55,
            opacity: 0,
            scale: 0.96,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.16,
          },
          "-=0.75"
        )
        .fromTo(
          ".step-mascot-card",
          {
            x: isDesktop ? 80 : 0,
            y: isDesktop ? 0 : 60,
            opacity: 0,
            scale: 0.92,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
          },
          "-=0.85"
        );

      gsap.to(".step-mascot", {
        y: -12,
        rotate: 1.5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".flow-pulse", {
        y: () => (window.innerWidth < 1024 ? 690 : 540),
        opacity: 0,
        duration: 2.3,
        repeat: -1,
        ease: "power2.inOut",
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="how"
      className="relative overflow-hidden bg-white px-4 py-28"
    >
      <FloatingCoins />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="how-heading mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-[#D4AF37]/40 bg-white/85 px-4 py-2 text-sm font-medium text-[#6A3B19] shadow-sm backdrop-blur">
            How it works
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#2B1207] md:text-6xl">
            Five steps. Zero confusion.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#6F5A4A]">
            No app download. No complicated setup. Everything happens inside
            WhatsApp — the platform you already use every day.
          </p>
        </div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            <div className="absolute left-5 top-6 h-[calc(100%-3rem)] w-px bg-[#E8D7B8]" />

            <div className="flow-line absolute left-5 top-6 h-[calc(100%-3rem)] w-0.75 origin-top rounded-full bg-linear-to-b from-[#D4AF37] via-[#F4D03F] to-[#8B5A2B] shadow-[0_0_30px_rgba(212,175,55,0.7)]" />

            <div className="flow-pulse absolute left-3.25 top-6 h-4 w-4 rounded-full bg-[#F4D03F] shadow-[0_0_30px_rgba(244,208,63,1)]" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="step-card group relative ml-12 overflow-hidden rounded-4xl border border-[#D4AF37]/25 bg-[#2B1207] p-5 shadow-[0_25px_70px_rgba(43,18,7,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute -left-13 top-8 z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#D4AF37] text-sm font-black text-white shadow-[0_0_22px_rgba(212,175,55,0.5)]">
                      {index + 1}
                    </div>

                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#D4AF37]/15 blur-2xl transition duration-300 group-hover:bg-[#D4AF37]/25" />

                    <span className="pointer-events-none absolute right-5 top-3 text-7xl font-black text-[#D4AF37]/15">
                      0{index + 1}
                    </span>

                    <div className="relative z-10 flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37] text-[#2B1207] shadow-[0_0_24px_rgba(212,175,55,0.35)]">
                        <Icon size={23} />
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
                          Step 0{index + 1}
                        </p>

                        <h3 className="mt-1 text-xl font-black text-[#F4D03F]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#F7E8C8]">
                          {step.text}
                        </p>

                        <p className="mt-4 inline-flex rounded-full border border-[#D4AF37]/30 bg-[#3A1A0C] px-3 py-1 text-xs font-semibold text-[#F4D03F]">
                          {step.note}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="step-mascot-card relative flex justify-center lg:justify-end">
            <div className="absolute inset-10 rounded-full bg-[#D4AF37]/20 blur-[90px]" />

            <div className="relative p-6">
              <img
                src={stepMascot}
               loading="lazy"
              decoding="async"
                alt="CoinBuck mascot explaining five steps"
                className="step-mascot w-75 object-contain drop-shadow-[0_30px_70px_rgba(43,18,7,0.18)] md:w-115"
              />

              <div className="absolute -left-4 bottom-8 rounded-2xl border border-[#E8D7B8] bg-white px-4 py-3 shadow-xl">
                <p className="text-xs font-medium text-[#6F5A4A]">
                  One message starts it
                </p>
                <p className="text-base font-black text-[#2B1207]">
                  WhatsApp → Naira
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}