import btc from "../assets/coin-btc.png";
import eth from "../assets/coin-eth.png";
import usdt from "../assets/coin-usdt.png";
import sol from "../assets/coin-sol.png";
import naira from "../assets/coin-naira.png";

type Coin = {
  src: string;
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number; // float
  spin: number;     // 3D spin duration
  depth: number;    // parallax depth 0..1
  opacity: number;
  blur?: number;
};

// Spread across a full viewport — component is fixed, so these coins follow the user as they scroll.
export const COINS: Coin[] = [
  { src: btc,   size: 110, top: "6%",  left: "4%",  delay: 0,   duration: 10, spin: 12, depth: 0.55, opacity: 0.95 },
  { src: eth,   size: 80,  top: "14%", left: "82%", delay: 1.2, duration: 12, spin: 16, depth: 0.40, opacity: 0.85 },
  { src: usdt,  size: 70,  top: "28%", left: "46%", delay: 0.4, duration: 11, spin: 14, depth: 0.50, opacity: 0.55, blur: 1 },
  { src: naira, size: 130, top: "38%", left: "8%",  delay: 0.8, duration: 13, spin: 18, depth: 0.65, opacity: 0.95 },
  { src: sol,   size: 64,  top: "50%", left: "78%", delay: 2.0, duration: 14, spin: 13, depth: 0.45, opacity: 0.85 },
  { src: btc,   size: 56,  top: "60%", left: "30%", delay: 2.4, duration: 9,  spin: 10, depth: 0.30, opacity: 0.45, blur: 2 },
  { src: eth,   size: 96,  top: "70%", left: "60%", delay: 1.6, duration: 11, spin: 17, depth: 0.55, opacity: 0.9 },
  { src: usdt,  size: 88,  top: "82%", left: "12%", delay: 0.6, duration: 12, spin: 15, depth: 0.5,  opacity: 0.9 },
  { src: naira, size: 60,  top: "88%", left: "70%", delay: 2.8, duration: 10, spin: 19, depth: 0.4,  opacity: 0.75 },
  { src: sol,   size: 48,  top: "20%", left: "20%", delay: 3.2, duration: 13, spin: 11, depth: 0.25, opacity: 0.5, blur: 2 },
  { src: btc,   size: 44,  top: "44%", left: "92%", delay: 3.6, duration: 15, spin: 20, depth: 0.3,  opacity: 0.55, blur: 1 },
  { src: eth,   size: 50,  top: "76%", left: "92%", delay: 0.2, duration: 14, spin: 13, depth: 0.35, opacity: 0.55, blur: 2 },
];