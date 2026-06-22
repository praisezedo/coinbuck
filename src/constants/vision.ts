import { Globe2, ShieldCheck, Zap } from "lucide-react";

type Pillar =  {
    icon: typeof Zap | typeof ShieldCheck | typeof Globe2;
    number: string;
    title: string;
    text: string;
}
export const pillars: Pillar[] = [
  {
    icon: Zap,
    number: "01",
    title: "Solve Accessibility",
    text: "Make crypto simple and usable for everyone — not just traders and tech insiders. If you can use WhatsApp, you can use CoinBuck.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Rebuild Trust",
    text: "Become the name Africans recommend to their parents, friends and business partners — the platform they’d stake their reputation on.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Power a New Economy",
    text: "Launch Buck Pay — where merchants accept crypto, freelancers get paid in crypto and families receive remittances without losing to middlemen.",
  },
];