import React, { useState } from "react";
import { X, AlertTriangle, Calendar, Users, RefreshCw } from "lucide-react";

export default function Relaunch() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-2xl shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4 text-6xl text-red-400">🚀</div>
        <div className="absolute bottom-4 left-4 text-4xl text-orange-400">
          <AlertTriangle />
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
      >
        <X size={20} />
      </button>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <RefreshCw className="w-6 h-6 text-red-600 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold text-red-600">
                RELAUNCH on
              </h2>
            </div>
            <div className="text-3xl md:text-4xl font-black text-red-700">
              9/2/2025
            </div>
          </div>

          <div className="bg-red-100 border border-red-300 rounded-xl p-4 md:max-w-md">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
              <p className="text-red-700 font-medium text-sm leading-relaxed">
                Fellow doodleheads, we are{" "}
                <strong>RE-LAUNCHING on 9/2/25 on Jupiter</strong> under a new
                ticker called <strong className="text-red-800">KOLmedy</strong>{" "}
                - NOT the prior "$BadKOLs".
              </p>
            </div>
          </div>
        </div>

        <div className="bg-orange-100 border border-orange-300 rounded-xl p-6 mb-6">
          <div className="flex items-start mb-4">
            <Calendar className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold text-orange-800">
              Important to read, doods!
            </h3>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-orange-700">
                We relaunch with ticker KOLmedy on 9/2/25 - do NOT invest in
                $BadKOLs.
              </strong>
            </p>

            <p>
              Contact{" "}
              <a
                href="t.me/BadKOLsService"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                t.me/BadKOLsService
              </a>{" "}
              to discuss our token reimbursement campaign - There is no other
              mechanism, other than deleting the description on DEX and Jupiter,
              updating X, this website, and pinning posts in our telegram group
              that we can utilize to relay this next bit of info. Please read
              our notes!
            </p>
          </div>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p>
              Thank you for the{" "}
              <span className="font-bold text-green-700">AMAZING</span> support
              we received during launch. We want you to know that the dev is
              mostly just an artist and had not launched a token before. Some
              honest mistakes were made at launch with dev's prior team. After
              all, they're people, not KOLs. They can admit mistakes. The major
              one was that liquidity was not fully locked, it was only 50%
              locked, and so some people were not too keen on it. No liquidity
              was ever removed, to this day. No one was rugged by the dev or
              team. However, they still reached a $200k+ market cap before
              heavily invested whales decided to jeet. That was another issue -
              the bubblemap was odd - we felt it was being manipulated - not by
              the team, they never removed liquidity, they held 6% 'til the end,
              and they WERE the last ones to sell, after telling holders about
              above issues. We believe too strongly in this project to allow
              that to happen again.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="flex items-start">
              <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="mb-3">
                  Dev now has an{" "}
                  <strong className="text-blue-700">
                    ALL NEW experienced team
                  </strong>{" "}
                  with past successful CTOs and launches who{" "}
                  <strong>STRONGLY</strong> believes in dev's project and
                  vision. All previous investors who can prove any losses will
                  be given an amount of new tokens in proportion, determined at
                  launch.
                </p>
                <p>
                  Please reach us in the BadKOLs service room at{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    t.me/BadKOLsService
                  </a>{" "}
                  where we can discuss this matter.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p>
              We are dedicated to prove that this new launch will be a
              successful venture for everyone. Our updated roadmap is down
              below. Please review it! From all of us at{" "}
              <span className="font-bold text-purple-700">
                KOLmedy - NOT BadKOLs
              </span>
              , we love you.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#"
            className="flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Join BadKOLs Service
          </a>
          <button className="flex items-center justify-center border-2 border-red-500 text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-500 hover:text-white transition-all duration-300">
            <RefreshCw className="w-5 h-5 mr-2" />
            View New Roadmap
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-70 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-red-600">9/2/2025</div>
            <div className="text-sm text-gray-600">Relaunch Date</div>
          </div>
          <div className="bg-white bg-opacity-70 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-orange-600">KOLmedy</div>
            <div className="text-sm text-gray-600">New Ticker</div>
          </div>
          <div className="bg-white bg-opacity-70 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-blue-600">Jupiter</div>
            <div className="text-sm text-gray-600">Launch Platform</div>
          </div>
        </div>
      </div>
    </div>
  );
}
