import React from "react";
import { AlertTriangle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-20 text-9xl font-bold text-orange-500 rotate-12">
          ₿
        </div>
        <div className="absolute bottom-20 right-20 text-9xl font-bold text-yellow-500 -rotate-12">
          🚀
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-orange-300 rotate-45">
          💎
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What is <span className="text-orange-500">KOL and frens</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl border-l-4 border-orange-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  A Parody of All Crypto's Most Notorious Archetypes
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're VIPs who get access to a SoFi card that gives terrible
                  advice and steals coins from the next long line of KOL misery.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border-l-4 border-yellow-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Suspiciously Authentic
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Attack shiny cheeky milk, 2 Pump disappears randomly, and Dunk
                  Mooner is still falling for the protocol. Together, they
                  represent everything beautiful and broken about crypto
                  culture.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl border-l-4 border-orange-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Hilariously Honest
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  This isn't financial advice - it's a trusted member of the
                  crypto community who is tired of dodging exit rugs, but he's
                  also the kind of person who thinks 'Diamond is a breakfast
                  cereal.'
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/images/liquidity.png"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                  PARODY
                </div>
                <div
                  className="absolute -bottom-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  100% SATIRE
                </div>
                <div className="absolute top-1/2 -right-8 bg-green-500 text-white px-3 py-2 rounded-full font-bold text-xs shadow-lg animate-bounce">
                  REAL MEN
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="w-5 h-5 inline-block ml-2" />
              <h4 className="text-xl font-bold text-red-600">
                Side Effects May Include
              </h4>
            </div>
            <p className="text-red-700 font-medium">
              Hopium addiction and spontaneous meme creation. The charts are
              fake, the confidence is real, and everyone's a dev until proven
              otherwise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
