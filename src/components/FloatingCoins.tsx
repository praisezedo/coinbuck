import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { COINS } from "../constants/coin";

gsap.registerPlugin(useGSAP);

export default function FloatingCoins() {
  const ref = useRef<HTMLDivElement>(null);

  // 1. Desktop Interactive Mouse Parallax
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;

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

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // 2. High-End Organic Rotational Motion (Godly-Inspired)
  useGSAP(
    () => {
      const coins = gsap.utils.toArray<HTMLElement>(".floating-coin-image");

      coins.forEach((coin, i) => {
        // Use the coin's index/properties to keep random ranges unique yet deterministic
        const rotationSpeed = 4 + (i % 4) * 2; // Unique durations between 4s and 10s
        const driftDistance = 15 + (i % 3) * 10;

        // Continuous Slow 3D Rotation Loop
        gsap.to(coin, {
          rotateZ: "random(-360, 360)",
          rotateX: "random(-30, 30)",
          rotateY: "random(-30, 30)",
          duration: rotationSpeed * 3,
          repeat: -1,
          ease: "none",
        });

        // Micro-Oscillation (Subtle drifting up/down/left/right)
        gsap.to(coin, {
          x: `random(-${driftDistance}, ${driftDistance})`,
          y: `random(-${driftDistance}, ${driftDistance})`,
          duration: rotationSpeed,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{
        ["--mx" as never]: 0,
        ["--my" as never]: 0,
        perspective: "1200px",
      } as React.CSSProperties}
    >
      {COINS.map((c, i) => (
        <div
          key={i}
          className={`floating-coin absolute will-change-transform ${i > 7 ? "hidden sm:block" : ""}`}
          style={{
            top: c.top,
            left: c.left,
            ["--coin-parallax" as never]: `${c.depth * 60}px`,
            ["--coin-size" as never]: `${c.size}px`,
            transform:
              "translate3d(calc(var(--mx) * var(--coin-parallax)), calc(var(--my) * var(--coin-parallax)), 0)",
            transition: "transform 750ms cubic-bezier(.2,.8,.2,1)", // Slightly smoothed transition for cleaner tracking
            opacity: c.opacity,
            filter: c.blur ? `blur(${c.blur}px)` : undefined,
          } as React.CSSProperties}
        >
          <div
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 30px 40px oklch(0.3 0.05 50 / 0.18))",
              }}
            >
              <img
                src={c.src}
                alt=""
                width={c.size}
                height={c.size}
                className="floating-coin-image object-contain"
                style={{ transformStyle: "preserve-3d" }}
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