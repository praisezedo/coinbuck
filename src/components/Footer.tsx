import { ArrowUpRight, Phone, MessageCircle, Mail } from "lucide-react";
import coinbuckLogo from "../assets/coinbuck-logo.webp";
import { links } from "../constants/links";

export default function Footer() {
  return (
<footer className="relative z-50 overflow-hidden border-t border-[#D4AF37]/20 bg-[#2B1207] px-4 py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <img
            src={coinbuckLogo}
            alt="CoinBuck logo"
            loading="lazy"
            decoding="async"
            className="h-16 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
          />

          <p className="mt-5 max-w-md text-sm leading-7  text-[#F7E8C8]">
            CoinBuck helps everyday Africans convert crypto to naira fast,
            fairly and securely through a simple WhatsApp-first experience.
          </p>

          <p className="mt-6 text-sm font-semibold text-white">
            Swift • Secure • Seamless
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black text-white">Explore</h3>

          <div className="mt-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-[#F7E8C8] transition hover:text-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black text-white">Contact</h3>

          <div className="mt-4 space-y-3">
            <a
               href="https://wa.me/2349094985193"
                 target="_blank"
                rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#F7E8C8] transition hover:text-[#D4AF37]"
            >
              <MessageCircle size={16} />
              +234 909 498 5193
              <ArrowUpRight size={14} />
            </a>

            <a
              href="tel:+2349076248151"
              className="flex items-center gap-2 text-sm text-[#F7E8C8] transition hover:text-[#D4AF37]"
            >
              <Phone size={16} />
              +234 907 624 8151
            </a>
             <a 
             href="mailto:coinbuckex@gmail.com"
              className="flex items-center gap-2 text-sm text-[#F7E8C8] transition hover:text-[#D4AF37]"
             >
              <Mail size={16} />
              coinbuckex@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#D4AF37]/20 pt-6 text-sm text-[#CDBB9A] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} CoinBuck. All rights reserved.</p>

        <p>Built for fast and trusted crypto-to-naira exchange.</p>
      </div>
    </footer>
  );
}