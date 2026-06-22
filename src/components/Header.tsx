import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import coinbuckMarcot from "../assets/coinbuck-mascot.webp";

gsap.registerPlugin(useGSAP);

type HeaderProps = {
  onTradeClick?: () => void;
};
export default function Header({ onTradeClick }: HeaderProps) {

    const headerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1.8,
        ease: "power4.out",
      }
    );
  });

  return (
    <header ref={headerRef} className="fixed left-0 top-0 z-50 w-full px-2 pt-2 sm:px-4 sm:pt-4">
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-full
          border
          border-[#E8D7B8]
          bg-white/75
          px-3
          sm:px-6
          py-2
          sm:py-3
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={coinbuckMarcot}
            alt="CoinBuck mascot"
             loading="eager"
              decoding="async"
               className="
                 h-11 
                 sm:h-14
                 w-auto
              object-contain
              drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]
            "
          />

          {/* Optional brand text */}
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-lg font-bold">
              <span className="text-[#2B1207]">Coin</span>
              <span className="text-[#D4AF37]">Buck</span>
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B7355]">
              Swift • Secure • Seamless
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <div className="hidden items-center gap-5 text-sm font-medium text-[#5F4A3A] lg:flex xl:gap-8">
          <a
            href="#about"
            className="transition-colors duration-300 hover:text-[#D4AF37]"
          >
            About
          </a>

          <a
            href="#vision"
            className="transition-colors duration-300 hover:text-[#D4AF37]"
          >
            Vision
          </a>

          <a
            href="#how"
            className="transition-colors duration-300 hover:text-[#D4AF37]"
          >
           Steps
          </a>

          <a
            href="#reviews"
            className="transition-colors duration-300 hover:text-[#D4AF37]"
          >
            Reviews
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-[#D4AF37]"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
      <button
        onClick={onTradeClick}
        className="inline-flex items-center gap-2 rounded-full bg-[#2B1207] px-7 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(43,18,7,0.25)] transition hover:scale-105"
      >
        Trade Now 
        <ArrowUpRight size={16}/>
      </button>
      </nav>
    </header>
  );
}