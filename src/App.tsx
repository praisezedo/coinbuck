import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Steps from "./components/Steps";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TradeModal from "./components/TradeModal";

export default function App() {
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);

  const openTradeModal = () => setIsTradeModalOpen(true);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <Header onTradeClick={openTradeModal} />
      <Hero onTradeClick={openTradeModal} />
      <About />
      <Vision />
      <Steps />
      <Reviews />
      <CTA onTradeClick={openTradeModal} />
      <Footer />

      <TradeModal
        isOpen={isTradeModalOpen}
        onClose={() => setIsTradeModalOpen(false)}
      />
    </main>
  );
}