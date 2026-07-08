import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { metrics } from "../constants/metrics";
import { reviews } from "../constants/reviews";
import FloatingCoins from "./FloatingCoins"; // Ensure the import path matches your project structure
import ReviewsModal from "./ReviewsModal"
import type { Review } from "../constants/reviews";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Reviews() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [reviewdata , setReview] = useState({name: "", review: ""} as Review);
  const [isModalOpen , setIsModalOpen] = useState(false);

  const openModal = (review: Review) => {
      setReview(review);
      setIsModalOpen(true);
  }

 const closeModal = () => {
    setIsModalOpen(false);
 }
  useGSAP(
    () => {
      // --- REVIEWS CONTINUOUS LOOP MARQUEE ---
      gsap.to(".review-track", {
        xPercent: -50,
        duration: window.innerWidth < 768 ? 45 : 30,
        repeat: -1,
        ease: "none",
      });

      // --- HEADINGS & BACKGROUND AMBIENCE REVEAL ---
      gsap.fromTo(
        ".metrics-heading > *",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
        ".wireframe-globe",
        { scale: 0.8, opacity: 0 },
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

      // --- METRIC CARD REVEALS ---
      gsap.fromTo(
        ".metric-card",
        { y: 45, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".metrics-grid",
            start: "top 80%",
            once: true,
          },
        }
      );

      // --- ADVANCED ROLLING ODOMETER MOTOR ---
      gsap.utils.toArray<HTMLElement>(".digit-strip").forEach((strip) => {
        const targetDigit = parseInt(strip.dataset.digit || "0", 10);
        
        gsap.to(strip, {
          y: `-${targetDigit * 10}%`,
          duration: 2.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: strip,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="reviews" className="relative overflow-hidden">
      
      {/* METRICS SECTION */}
      <div className="metrics-section relative overflow-hidden bg-[#2B1207] px-4 py-20 sm:py-24 lg:py-28">
        
        {/* Dynamic Wireframe Ring System */}
        <div className="wireframe-globe absolute left-1/2 top-1/2 h-96 w-96 sm:h-140 sm:w-140 lg:h-175 lg:w-175 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <div className="absolute inset-0 rounded-full border border-[#D4AF37]" />
          <div className="absolute inset-10 rounded-full border border-[#D4AF37]" />
          <div className="absolute inset-20 rounded-full border border-[#D4AF37]" />
          <div className="absolute inset-0 rounded-full border border-[#D4AF37] rotate-45" />
          <div className="absolute inset-0 rounded-full border border-[#D4AF37] rotate-90" />
          <div className="absolute inset-0 rounded-full border border-[#D4AF37] rotate-135" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="metrics-heading text-center">
            <p className="inline-flex rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm font-medium text-[#D4AF37] bg-white/5 backdrop-blur-sm">
              Trusted By Traders
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl font-black text-[#F4D03F] md:text-6xl tracking-tight">
              Built on trust.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#F7E8C8]/90">
              Thousands of Nigerians trust CoinBuck to convert crypto quickly, securely and transparently.
            </p>
          </div>

          {/* GRID METRICS LAYOUT */}
          <div className="metrics-grid mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
              const prefix = metric.prefix || "";
              const suffix = metric.suffix || "";
              const charsArray = metric.value.toString().split("");

              return (
                <div
                  key={metric.label}
                  className="metric-card rounded-4xl border border-[#D4AF37]/20 bg-[#3A1A0C]/60 p-8 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    {/* Rolling Slat Window */}
                    <div className="text-3xl sm:text-4xl font-black text-[#D4AF37] flex items-center overflow-hidden h-12 tracking-tight">
                      {prefix && <span className="mr-0.5 select-none">{prefix}</span>}
                      
                      {charsArray.map((char, i) => {
                        const isNumber = !isNaN(parseInt(char, 10));

                        if (!isNumber) {
                          return (
                            <span key={i} className="px-0.5 text-2xl sm:text-3xl font-medium text-[#D4AF37] select-none">
                              {char}
                            </span>
                          );
                        }

                        return (
                          <div key={i} className="relative h-12 w-[0.6em] overflow-hidden inline-block text-center">
                            <div 
                              className="digit-strip absolute top-0 left-0 w-full flex flex-col"
                              data-digit={char}
                              style={{ transform: "translateY(0%)" }}
                            >
                              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <span key={num} className="h-12 leading-none flex items-center justify-center select-none">
                                  {num}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}

                      {suffix && <span className="ml-1 text-2xl sm:text-3xl font-bold text-[#D4AF37]/90 select-none">{suffix}</span>}
                    </div>

                    <p className="mt-3 text-sm font-medium text-[#F7E8C8]">
                      {metric.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* REVIEWS MARQUEE RUNWAY WITH FLOATING COIN BACKGROUND */}
      <div className="relative overflow-hidden  py-16 sm:py-20 lg:py-24">
        
        {/* Floating Coins Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingCoins />
        </div>

        <div className="relative z-10 mx-auto mb-12 max-w-7xl px-4 text-center">
          <p className="inline-flex rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm font-medium text-[#F4D03F] bg-white/5 backdrop-blur-sm">
            Customer Stories
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl font-black text-[#F4D03F] md:text-6xl tracking-tight">
            Real people. Real trades.
          </h2>
        </div>

        <div className="relative z-10 overflow-hidden">
          <div className="review-track flex w-max gap-6">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                onClick={() => openModal(review)}
                className="w-[min(21.875rem,calc(100vw-2rem))] hover:border-[#f7c00d] shrink-0 rounded-4xl border border-[#D4AF37]/20 bg-[#3A1A0C] p-6 cursor-pointer transition-colors"
              >
                <div className="mb-4 flex gap-1 text-[#D4AF37] tracking-widest">
                  ★★★★★
                </div>
                <p className="leading-7 text-[#F7E8C8]/90 text-sm sm:text-base font-medium">
                  "{review.review}"
                </p>
                <p className="mt-6 font-black text-[#F4D03F] text-sm">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Modal - Rendered at section level, outside review cards */}
        <ReviewsModal reviewdata={reviewdata} closeModal={closeModal} isModalOpen={isModalOpen} />
      </div>


    </section>
  );
}