import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { pillars } from "../constants/vision";
import visionImage from "../assets/coinbuck-marcot-vision.webp";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function Vision() {
  const visionRef = useRef<HTMLElement | null>(null);

useGSAP(
  () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 75%",
          once: true,
          markers: false,
        },
        defaults: { ease: "power4.out" },
      });

      tl.fromTo(
        ".vision-copy > *",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
        }
      )
        .fromTo(
          ".vision-card",
          { y: 40, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .fromTo(
          ".vision-visual",
          { x: 80, opacity: 0, scale: 0.92 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
          },
          "-=0.75"
        );

      gsap.to(".vision-visual", {
        y: -14,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".vision-glow", {
        scale: 1.18,
        opacity: 0.5,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, visionRef);

    return () => ctx.revert();
  },
  { scope: visionRef }
);

  return (
    <section
      ref={visionRef}
      id="vision"
      className="relative overflow-hidden bg-white px-4 py-20 sm:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl 2xl:max-w-[1440px] items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <div className="vision-copy">
          <p className="mb-4 inline-flex rounded-full border border-[#D4AF37]/40 bg-white/85 px-4 py-2 text-sm font-medium text-[#6A3B19] shadow-sm backdrop-blur">
            Vision we are building for Africa
          </p>

          <h2 className="max-w-3xl text-3xl sm:text-4xl font-black leading-tight tracking-tight text-[#2B1207] md:text-6xl">
            Our Pan-African Vision.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8 text-[#6F5A4A]">
            We’re building the most trusted bridge between crypto and everyday
            life across Africa — starting in Nigeria, and scaling into a
            continent where anyone can buy, sell, earn and spend cryptocurrency
            for real products and services as easily as sending a text.
          </p>

          <div className="mt-7 grid gap-4 sm:mt-9 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="vision-card group rounded-3xl border border-[#E8D7B8] bg-white/85 p-5 shadow-[0_18px_50px_rgba(43,18,7,0.06)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,18,7,0.1)]"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3CF] text-[#D4AF37]">
                      <Icon size={23} />
                    </div>

                    <div>
                      <p className="text-xs font-black tracking-[0.25em] text-[#D4AF37]">
                        {pillar.number}
                      </p>

                      <h3 className="mt-1 text-xl font-black text-[#2B1207]">
                        {pillar.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#6F5A4A]">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="#how"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white/90 px-6 py-4 font-semibold text-[#2B1207] shadow-sm transition hover:scale-105"
          >
            See how CoinBuck works <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="vision-glow absolute inset-10 rounded-full  blur-[90px]" />

          <div className="vision-visual relative overflow-hidden rounded-[3rem] p-3 backdrop-blur-md">
            <img
              src={visionImage}
              loading="lazy"
              decoding="async"
              alt="CoinBuck Pan-African crypto vision"
              width={1024}
              height={1024}
              className="w-[280px] rounded-[2rem] object-cover sm:w-[360px] sm:rounded-[2.5rem] md:w-120 lg:w-130"
            />

            <div className="absolute bottom-6 right-6 rounded-2xl border border-[#D4AF37]/40 bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs font-medium text-[#6F5A4A]">Starting from</p>
              <p className="text-lg font-black text-[#2B1207]">Nigeria → Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}