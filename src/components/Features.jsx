import React, { useState, useEffect } from "react";
import {
  Flame,
  Diamond,
  Rocket,
  Theater,
  Users,
  Zap,
  DollarSign,
  Droplets,
  UserCheck,
  TrendingUp,
} from "lucide-react";

export default function Features() {
  const [counters, setCounters] = useState({
    supply: 0,
    burned: 0,
    liquidity: 0,
    holders: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        supply: 1000000000,
        burned: 37,
        liquidity: 4.8,
        holders: 420,
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          supply: Math.floor(targets.supply * progress),
          burned: Math.floor(targets.burned * progress),
          liquidity: parseFloat((targets.liquidity * progress).toFixed(1)),
          holders: Math.floor(targets.holders * progress),
        });

        if (step >= steps) clearInterval(timer);
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Flame className="w-12 h-12 text-red-500" />,
      title: "37% Burned",
      description:
        "Enough to reach the moon, $7 dollars are liquid and to end, to do so.",
      highlight: true,
    },
    {
      icon: <Diamond className="w-12 h-12 text-blue-500" />,
      title: "Diamond Hands",
      description:
        "First Viking Rights. Decide which influencer gets custody rights, yeah, you know.",
      highlight: false,
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-500" />,
      title: "To The Moon",
      description:
        "Awesome SnG-Fi wh4-45 group. Ten holders get access to weekly bad decisions.",
      highlight: false,
    },
    {
      icon: <Theater className="w-12 h-12 text-pink-500" />,
      title: "Pure Parody",
      description:
        "Save untitled flow bureau and origin storage energy. This one is safe!",
      highlight: true,
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Professional Team",
      description:
        "Four launch. Taped and transparent Team so No VC allocation. 5% PURCHASED by dev.",
      highlight: false,
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Lightning Fast",
      description:
        "Challenge. Complete in meme contests for 'upload influencers forever.'",
      highlight: false,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-orange-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-orange-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-4 border-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              KOL and frens
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver five times the combined power of all the influencer hype
            train. Beep beep! 🚂
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 w-full h-40 flex flex-col justify-center px-1">
            <div className="flex justify-center mb-2">
              <DollarSign className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              {formatNumber(counters.supply)}
            </div>

            <div className="text-gray-600 font-medium">Total Supply</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 w-full h-40 flex flex-col justify-center">
            <div className="flex justify-center mb-2">
              <Flame className="w-8 h-8 text-red-500" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
              {counters.burned}%
            </div>
            <div className="text-gray-600 font-medium">Burned Forever</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 w-full h-40 flex flex-col justify-center">
            <div className="flex justify-center mb-2">
              <Droplets className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              ${formatNumber(counters.liquidity * 1_000_000_000)}
            </div>
            <div className="text-gray-600 font-medium">Liquidity</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 w-full h-40 flex flex-col justify-center">
            <div className="flex justify-center mb-2">
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              {formatNumber(counters.holders)}
            </div>
            <div className="text-gray-600 font-medium">Holders</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-2 relative overflow-hidden
                ${
                  feature.highlight
                    ? "ring-2 ring-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50"
                    : ""
                }
              `}
            >
              {feature.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 md:p-12 rounded-3xl text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            Ready to Join the Parody?{" "}
            <Theater className="w-12 h-12 text-pink-500" />
          </h3>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Emergency push council override in case of influencer meltdown.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
              Buy $KOL Now <Rocket className="text-orange-600" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2">
              <TrendingUp className="" />
              View Chart
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            * Charts are fake, confidence is real. Our token is a time of
            finicky science promising us- determined us well keep a transparent
            community active and our plan is born into consensus together so
            that this is a concerned group effort.
          </p>
        </div>
      </div>
    </section>
  );
}
