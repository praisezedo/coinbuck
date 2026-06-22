import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { metrics } from "../constants/metrics";
import { reviews } from "../constants/reviews";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Reviews() {
  const sectionRef = useRef<HTMLElement | null>(null);
useGSAP(
  () => {

    gsap.utils.toArray<HTMLElement>(".metric-number").forEach((el) => {
  const value = Number(el.dataset.value);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";

  const counter = { val: 0 };

  gsap.to(counter, {
    val: value,
    duration: 1.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      once: true,
    },
    onUpdate: () => {
      const current =
        value % 1 !== 0
          ? counter.val.toFixed(1)
          : Math.floor(counter.val).toLocaleString();

      el.textContent = `${prefix}${current}${suffix}`;
    },
  });
});
    gsap.fromTo(
      ".metrics-heading > *",
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".metrics-section",
          start: "top 70%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".metric-card",
      { y: 55, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".metrics-grid",
          start: "top 75%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".wireframe-globe",
      { scale: 0.8, opacity: 0, rotate: 0 },
      {
        scale: 1,
        opacity: 0.12,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".metrics-section",
          start: "top 75%",
          once: true,
        },
        onComplete: () => {
          gsap.to(".wireframe-globe", {
            rotate: 360,
            duration: 60,
            repeat: -1,
            ease: "none",
          });
        },
      }
    );

    gsap.to(".review-track", {
      xPercent: -50,
      duration: window.innerWidth < 768 ? 45 : 30,
      repeat: -1,
      ease: "none",
    });
  },
  { scope: sectionRef }
);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative overflow-hidden"
    >
      {/* METRICS SECTION */}

<div className="metrics-section relative overflow-hidden bg-[#2B1207] px-4 py-20 sm:py-24 lg:py-28">
        <div className="wireframe-globe absolute left-1/2 top-1/2 h-96 w-96 sm:h-140 sm:w-140 lg:h-175 lg:w-175 -translate-x-1/2 -translate-y-1/2 opacity-10">
          <div className="absolute inset-0 rounded-full border border-[#D4AF37]" />
          <div className="absolute inset-10 rounded-full border border-[#D4AF37]" />
          <div className="absolute inset-20 rounded-full border border-[#D4AF37]" />
          <div className="absolute inset-0 rounded-full border border-[#D4AF37] rotate-45" />
          <div className="absolute inset-0 rounded-full border border-[#D4AF37] rotate-90" />
          <div className="absolute inset-0 rounded-full border border-[#D4AF37] rotate-135" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
         <div className="metrics-heading text-center">
            <p className="inline-flex rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm font-medium text-[#D4AF37]">
              Trusted By Traders
            </p>

            <h2 className="mt-5 text-3xl sm:text-4xl font-black text-[#F4D03F] md:text-6xl">
              Built on trust.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#F7E8C8]">
              Thousands of Nigerians trust CoinBuck to convert crypto quickly,
              securely and transparently.
            </p>
          </div>

<div className="metrics-grid mt-10 grid sm:mt-14 lg:mt-16 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
                <div
                key={metric.label}
                className="metric-card rounded-4xl border border-[#D4AF37]/20 bg-[#3A1A0C]/60 p-8 backdrop-blur-md"
                >
                <h3
                className="metric-number text-4xl font-black text-[#D4AF37]"
                data-value={metric.value}
                data-prefix={metric.prefix || ""}
                data-suffix={metric.suffix || ""}
                >
                {metric.prefix || ""}0{metric.suffix || ""}
                </h3>
                <p className="mt-3 text-sm font-medium text-[#F7E8C8]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS MARQUEE */}

      <div className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto mb-12 max-w-7xl px-4 text-center">
          <p className="inline-flex rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm font-medium text-[#6A3B19]">
            Customer Stories
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-black text-[#2B1207] md:text-6xl">
            Real people. Real trades.
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="review-track flex w-max gap-6">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-[min(21.875rem,calc(100vw-2rem))] shrink-0 rounded-4xl border border-[#E8D7B8] bg-white p-6 shadow-[0_20px_50px_rgba(43,18,7,0.08)]"
              >
                <div className="mb-4 flex gap-1 text-[#D4AF37]">
                  ★★★★★
                </div>

                <p className="leading-7 text-[#6F5A4A]">
                  "{review.review}"
                </p>

                <p className="mt-6 font-black text-[#2B1207]">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}