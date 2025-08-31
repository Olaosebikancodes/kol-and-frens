import React, { useState } from "react";
import { HeartCrack, Mail, Rocket, AlertTriangle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-orange-400 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-28 h-28 border-2 border-yellow-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-xl mr-3">
                🤡
              </div>
              <div>
                <h3 className="text-xl font-bold">KOL and frens</h3>
                <p className="text-gray-400 text-sm">
                  An edgy parody, staked in mud
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              The most notorious crypto types, but make it absolutely
              ridiculous.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#tokenomics"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("tokenomics")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Tokenomics
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-3 text-sm">
              Get our terrible financial advice!
            </p>
            <div className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@degen.com"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-orange-400 focus:outline-none text-white placeholder-gray-400 text-sm"
              />
              <button
                onClick={handleNewsletter}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-2 px-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                {subscribed ? (
                  "✅ Subscribed!"
                ) : (
                  <>
                    <Rocket className="w-4 h-4" />
                    Join
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-60 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Disclaimer:</span> This
            is a parody project. Not financial advice. High risk. DYOR. We're
            comedians, not advisors.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400 mb-2 md:mb-0">
            <p>© {currentYear} KOL and frens. All rights reserved (sort of).</p>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <a
              href="mailto:KOLandfrens@gmail.com"
              className="hover:text-orange-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="flex items-center gap-1">
              Made with <HeartCrack className="text-red-500 w-4 h-4" /> by
              Peaches
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
