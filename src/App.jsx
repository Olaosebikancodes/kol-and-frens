import Navigation from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import TeamInfo from "./components/TeamInfo";
import Community from "./components/Community";
import Tokenomics from "./components/Tokenomics";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Relaunch from "./components/Relaunch";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto items-stretch">
            <div className="w-full flex">
              <TeamInfo />
            </div>
            <div className="w-full flex">
              <Community />
            </div>
            <div className="w-full md:col-span-2 lg:col-span-1 flex">
              <Tokenomics />
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Features />
      <Relaunch />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
