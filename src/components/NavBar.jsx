import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Rocket, TrendingUp, Theater } from "lucide-react";

export default function Navigation () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "team", label: "Team", href: "#team" },
    { id: "community", label: "Community", href: "#community" },
    { id: "tokenomics", label: "Tokenomics", href: "#tokenomics" },
    { id: "gallery", label: "Gallery", href: "#gallery" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background blur effect
      setIsScrolled(window.scrollY > 50);
      

      const sections = navItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      })).filter(section => section.element);

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + 150; 
      
      let currentSection = "home"; 
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop) {
          currentSection = section.id;
        }

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
          currentSection = sections[sections.length - 1].id;
        }
      }
      
      setActiveSection(currentSection);
    };

    let timeoutId;
    const throttledHandleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 10);
    };

    handleScroll();
    
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setIsMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }
    `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <div
              className={`
              w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-2xl md:text-3xl
              ${
                isScrolled
                  ? "bg-gradient-to-br from-orange-500 to-yellow-500"
                  : "bg-white/20 backdrop-blur-sm"
              }
            `}
            >
              <Theater className="text-white"/>
            </div>
            <div>
              <h1
                className={`
                text-xl md:text-2xl font-bold transition-colors duration-300
                ${isScrolled ? "text-gray-800" : "text-white"}
              `}
              >
                KOL and frens
              </h1>
              <p
                className={`
                text-xs md:text-sm transition-colors duration-300
                ${isScrolled ? "text-gray-600" : "text-white/80"}
              `}
              >
                An edgy parody
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`
                  px-4 py-2 rounded-full font-medium transition-all duration-300 relative
                  ${
                    activeSection === item.id
                      ? "text-orange-600 bg-orange-100"
                      : isScrolled
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                      : "text-white hover:text-orange-200 hover:bg-white/20"
                  }
                `}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              className={`
              px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all duration-300 transform hover:scale-105
              ${
                isScrolled
                  ? "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                  : "border-2 border-white text-white hover:bg-white hover:text-orange-600"
              }
            `}
            >
              View Chart
              <TrendingUp className="w-5 h-5" />
            </button>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
              Buy $KOL <Rocket className="w-5 h-5 text-purple-500" />
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              lg:hidden p-2 rounded-full transition-colors duration-300
              ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }
            `}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl mt-2 shadow-lg border border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`
                  w-full text-left px-6 py-3 font-medium transition-colors duration-300
                  ${
                    activeSection === item.id
                      ? "text-orange-600 bg-orange-50 border-r-4 border-orange-500"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 py-4 space-y-3 border-t border-gray-200">
              <button className="w-full border-2 border-orange-500 text-orange-600 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                View Chart <TrendingUp className="w-4 h-4" />
              </button>
              <button className="w-full bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                Buy $KOL
                <Rocket className="w-5 h-5 text-purple-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
