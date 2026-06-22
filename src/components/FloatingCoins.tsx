import { useEffect, useRef } from "react";
import {COINS} from "../constants/coin";

export default function FloatingCoins() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", String(x));
        el.style.setProperty("--my", String(y));
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      style={{
        ["--mx" as never]: 0,
        ["--my" as never]: 0,
        perspective: "1200px",
      } as React.CSSProperties}
    >
      {COINS.map((c, i) => (
        <div
          key={i}
          className="absolute will-change-transform"
          style={{
            top: c.top,
            left: c.left,
            transform: `translate3d(calc(var(--mx) * ${c.depth * 60}px), calc(var(--my) * ${c.depth * 60}px), 0)`,
            transition: "transform 600ms cubic-bezier(.2,.8,.2,1)",
            opacity: c.opacity,
            filter: c.blur ? `blur(${c.blur}px)` : undefined,
          }}
        >
          <div
            className="animate-float-3d"
            style={{
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="animate-coin-spin"
              style={{
                animationDuration: `${c.spin}s`,
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 30px 40px oklch(0.3 0.05 50 / 0.18))",
              }}
            >
              <img
                src={c.src}
                alt=""
                width={c.size}
                height={c.size}
                style={{ width: c.size, height: c.size }}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
