import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Steps from "./components/Steps";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <Vision />
      <Steps/>
      <Reviews/>
      <CTA />
    </main>
  );
}