import { useRef } from "react";
import { MessageCircle, Coins, Wallet, ShieldCheck, Landmark } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CoinbuckMascot from "../assets/coinbuck-mascot.png";
import FloatingCoins from "./FloatingCoins";
import stepMascot from "../assets/coinbuck-marcot-steps.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    icon: MessageCircle,
    title: "Message Us on WhatsApp",
    text: "Open a conversation with a real CoinBuck agent in seconds. No bots, no forms, no waiting.",
    note: "Takes less than 10 seconds",
  },
  {
    icon: Coins,
    title: "Tell Us What You Want",
    text: "Let us know your coin and amount — USDT, BTC, ETH, and more. We give you a live rate upfront.",
    note: "Real-time rate disclosed upfront",
  },
  {
    icon: Wallet,
    title: "Send Your Crypto",
    text: "We give you a secure, verified wallet address. Send from TrustWallet, Binance, Bybit or anywhere.",
    note: "Secure verified address",
  },
  {
    icon: ShieldCheck,
    title: "We Confirm On-Chain",
    text: "Our team verifies your transaction on the blockchain and sends confirmation quickly.",
    note: "Blockchain verified",
  },
  {
    icon: Landmark,
    title: "Receive Your Money",
    text: "Naira lands straight in your bank account — GTBank, Zenith, Access, Opay, Palmpay.",
    note: "Direct bank payout",
  },
];

export default function Steps() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
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
          { scaleY: 1, duration: 1.2, ease: "power2.inOut" },
          "-=0.2"
        )
        .fromTo(
          ".step-card",
          { x: -45, opacity: 0, scale: 0.96 },
          { x: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.16 },
          "-=0.75"
        )
        .fromTo(
          ".step-mascot-card",
          { x: 80, opacity: 0, scale: 0.92 },
          { x: 0, opacity: 1, scale: 1, duration: 0.8 },
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
        y: 520,
        opacity: 0,
        duration: 2.2,
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
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-[#E8D7B8] md:block" />
            <div className="flow-line absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-0.75 origin-top rounded-full bg-[#D4AF37] shadow-[0_0_24px_rgba(212,175,55,0.5)] md:block" />
            <img src={CoinbuckMascot} alt="CoinBuck mascot" className="flow-pulse object-contain absolute left-4.75 top-6 hidden h-4 w-4 rounded-full bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.9)] md:block" />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="step-card relative rounded-4xl border border-[#E8D7B8] bg-white/90 p-5 pl-5 shadow-[0_18px_50px_rgba(43,18,7,0.06)] backdrop-blur-md md:ml-14"
                  >
                    <div className="flex gap-4">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3CF] text-[#D4AF37]">
                        <Icon size={23} />
                      </div>

                      <div>
                        <p className="text-xs font-black tracking-[0.25em] text-[#D4AF37]">
                          0{index + 1}
                        </p>

                        <h3 className="mt-1 text-xl font-black text-[#2B1207]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#6F5A4A]">
                          {step.text}
                        </p>

                        <p className="mt-3 inline-flex rounded-full bg-[#FFF9EE] px-3 py-1 text-xs font-semibold text-[#6A3B19]">
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

            <div className="relative rounded-[3rem]   p-6  backdrop-blur-md">
              <img
                src={stepMascot}
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