import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <Vision />
    </main>
  );
}