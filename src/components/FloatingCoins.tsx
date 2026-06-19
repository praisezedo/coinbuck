import btc from "../assets/coin-btc.png";
import eth from "../assets/coin-eth.png";
import usdt from "../assets/coin-usdt.png";
import sol from "../assets/coin-sol.png";
import naira from "../assets/coin-naira.png";

const coins = [
  { src: btc, className: "left-[8%] top-[18%] h-16 md:h-24" },
  { src: eth, className: "right-[10%] top-[20%] h-14 md:h-20" },
  { src: usdt, className: "left-[14%] bottom-[18%] h-12 md:h-16" },
  { src: sol, className: "right-[18%] bottom-[22%] h-14 md:h-20" },
  { src: naira, className: "left-[45%] top-[12%] h-12 md:h-16" },
];

export default function FloatingCoins() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {coins.map((coin, index) => (
        <img
          key={index}
          src={coin.src}
          alt=""
          className={`floating-bg-coin absolute object-contain opacity-20 blur-sm ${coin.className}`}
        />
      ))}
    </div>
  );
}