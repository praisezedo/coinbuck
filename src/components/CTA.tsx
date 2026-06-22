import { Phone, ArrowUpRight, ShieldCheck, Clock3, BadgeDollarSign, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import ctaMascot from "../assets/coinbuck-mascot-cta section.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const trustItems = [
  {
    icon: Clock3,
    text: "Fast Payouts",
  },
  {
    icon: Headphones,
    text: "Human Support",
  },
  {
    icon: BadgeDollarSign,
    text: "Transparent Rates",
  },
  {
    icon: ShieldCheck,
    text: "Secure Transactions",
  },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(
        ".cta-copy > *",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power4.out",
        }
      ).fromTo(
        ".trust-pill",
        {
          y: 25,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "back.out(1.6)",
        },
        "-=0.3"
      );

      gsap.fromTo(
        ".cta-mascot-wrap",
        {
          x: window.innerWidth >= 1024 ? 80 : 0,
          y: window.innerWidth < 1024 ? 60 : 0,
          opacity: 0,
          scale: 0.92,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".cta-mascot-wrap",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.to(".cta-mascot", {
        y: -12,
        rotate: 1.5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".cta-glow", {
        scale: 1.12,
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#FFF9EE] px-4 py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT */}
        <div className="cta-copy">
          <p className="inline-flex rounded-full border border-[#D4AF37]/30 bg-white px-4 py-2 text-sm font-medium text-[#6A3B19] shadow-sm">
            Ready To Start?
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-[#2B1207] md:text-7xl">
            Convert Crypto To Naira With Confidence.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6F5A4A]">
            Join thousands of Nigerians using CoinBuck to exchange crypto
            quickly, securely and transparently.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/2349094985193?text=I%20want%20to%20trade"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B1207] px-8 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(43,18,7,0.25)] transition hover:scale-105"
            >
              Trade on WhatsApp
              <ArrowUpRight size={18} />
            </a>

            <a
              href="tel:+2349076248151"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 bg-white px-8 py-4 font-semibold text-[#2B1207] transition hover:scale-105"
            >
              <Phone size={18} />
              Give Us A Call
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="trust-pill flex items-center gap-2 rounded-full border border-[#E8D7B8] bg-white px-4 py-2 shadow-sm"
                >
                  <Icon
                    size={16}
                    className="text-[#D4AF37]"
                  />
                  <span className="text-sm font-medium text-[#2B1207]">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="cta-mascot-wrap relative flex justify-center lg:justify-end">
          <div className="cta-glow absolute h-87.5 w-87.5 rounded-full bg-[#D4AF37]/20 blur-[90px]" />

          <img
            src={ctaMascot}
            loading="lazy"
              decoding="async"
            alt="CoinBuck mascot"
            className="cta-mascot relative z-10 w-80 object-contain md:w-120"
          />
        </div>
      </div>
    </section>
  );
}