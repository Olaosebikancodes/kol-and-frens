import React from "react";
import {
  Vote,
  Fish,
  Users,
  Trophy,
  Zap,
  Heart,
  Rocket,
  Infinity,
} from "lucide-react";

export default function Community() {
  const communityFeatures = [
    {
      icon: <Vote />,
      text: "Fren Voting Rights: Decide which influencer gets roasted next.",
    },
    {
      icon: <Fish />,
      text: "Awesome SeCrEt wHaLeS group: 1m+ holders get access to weekly bad advice and more! Guaranteed",
    },
    {
      icon: <Users />,
      text: "Lore unlocks: New heroes and origin stories emerge. No one is safe!",
    },
    {
      icon: <Trophy />,
      text: "Challenges: Compete in meme contests for tokens!",
    },
    {
      icon: <Zap />,
      text: "Fresh hot memes on the dailyish!",
    },
    {
      icon: <Heart />,
      text: "Red pandas are crazy cute! Ahhh!",
    },
  ];

  return (
    <section
      id="community"
      className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl shadow-lg"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Community
      </h3>

      <div className="flex justify-center mb-6">
        <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg">
          <img
            src="/images/community.png"
            alt=""
            className="h-full w-full rounded-md"
          />
        </div>
      </div>

      <div className="space-y-4">
        {communityFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 bg-white bg-opacity-70 p-4 rounded-xl hover:bg-opacity-90 transition-all duration-300"
          >
            <div className="text-2xl flex-shrink-0 mt-1">{feature.icon}</div>
            <p className="text-gray-700 leading-relaxed">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-white bg-opacity-50 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-blue-600">1M+</div>
          <div className="text-sm text-gray-600">Whale Access</div>
        </div>
        <div className="bg-white bg-opacity-50 p-4 rounded-xl text-center flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-purple-600">
            <Infinity />
          </div>
          <div className="text-sm text-gray-600">Daily Memes</div>
        </div>
      </div>

      <div className="mt-10 text-center flex items-center justify-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center">
          Join Community <Rocket className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}
