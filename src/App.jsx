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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <TeamInfo />
            <Community />
            <Tokenomics />
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
