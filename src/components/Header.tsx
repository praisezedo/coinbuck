import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import coinbuckMarcot from "../assets/coinbuck-mascot.png";

gsap.registerPlugin(useGSAP);
export default function Header() {

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
    <header ref={headerRef} className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
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
          px-6
          py-3
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={coinbuckMarcot}
            alt="CoinBuck mascot"
            className="
              h-14
              w-auto
              object-contain
              drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]
            "
          />

          {/* Optional brand text */}
          <div className="hidden md:flex flex-col leading-none">
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
        <div className="hidden items-center gap-8 text-sm font-medium text-[#5F4A3A] md:flex">
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
        <a
          href="https://wa.me/2349094985193?text=I%20want%20to%20trade"
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-[#2B1207]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#3A1A0C]
            hover:shadow-[0_8px_25px_rgba(43,18,7,0.25)]
          "
        >
          Trade Now
          <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}