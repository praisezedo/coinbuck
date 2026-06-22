import {Headphones, ShieldCheck, Zap } from "lucide-react";


type AboutCard = {
    icon: typeof Zap | typeof ShieldCheck | typeof Headphones;
    title: string;
    text: string;
}
export const cards: AboutCard[] = [
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