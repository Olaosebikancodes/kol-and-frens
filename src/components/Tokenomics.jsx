import React from 'react';
import { Rocket, Users, X, Diamond, Lock, Target, Flame, Swords, BarChart3, Ban, AlertTriangle, BarChart } from 'lucide-react';

export default function Tokenomics() {
  const tokenomicsFeatures = [
    { icon: <Rocket />, text: "Fair launch" },
    { icon: <Users />, text: "Honest and transparent team" },
    { icon: <X />, text: "No VC allocation" },
    { icon: <Diamond />, text: "5% PURCHASED by dev" },
    { icon: <Lock />, text: "2% Locked" },
    { icon: <Target />, text: "1% For promos and contests" },
    { icon: <Flame />, text: "Burns planned!" },
    { icon: <Swords />, text: "We PvP (against ourselves!)" },
    { icon: <BarChart3 />, text: "Limited supply" },
    { icon: <Ban />, text: "No shame!" },
    { icon: <AlertTriangle />, text: "Emergency plush council override in case of influencer meltdown" }
  ];


  return (
    <section id="tokenomics" className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-3xl shadow-lg">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
        Tokenomics
      </h3>
      <p className="text-center text-gray-600 mb-6 italic">
        (is that a bwekfast cereal?)
      </p>

      <div className="flex justify-center mb-6">
        <div className="w-80 h-64 bg-gradient-to-br from-green-200 to-yellow-200 rounded-2xl flex items-center justify-center shadow-lg">
          <img src="/images/hero.png" alt="" className='h-full w-full rounded-md'/>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {tokenomicsFeatures.map((feature, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 bg-white bg-opacity-70 p-3 rounded-xl hover:bg-opacity-90 transition-all duration-300"
          >
            <div className="text-xl flex-shrink-0">
              {feature.icon}
            </div>
            <p className="text-gray-700 font-medium">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white bg-opacity-50 p-4 rounded-xl text-center">
          <div className="text-xl font-bold text-green-600">5%</div>
          <div className="text-xs text-gray-600">Dev Buy</div>
        </div>
        <div className="bg-white bg-opacity-50 p-4 rounded-xl text-center">
          <div className="text-xl font-bold text-yellow-600">2%</div>
          <div className="text-xs text-gray-600">Locked</div>
        </div>
        <div className="bg-white bg-opacity-50 p-4 rounded-xl text-center">
          <div className="text-xl font-bold text-orange-600">1%</div>
          <div className="text-xs text-gray-600">Promos</div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
        <div className="text-2xl mb-2">🚨</div>
        <h4 className="font-bold text-red-700 mb-2">Emergency Protocol</h4>
        <p className="text-sm text-red-600">
          Plush council override activated in case of influencer meltdown
        </p>
      </div>

      <div className="mt-6 text-center flex items-center justify-center">
        <button className="flex items-center justify-center bg-gradient-to-r from-green-500 to-yellow-500 text-white px-6 py-3 rounded-full font-bold hover:from-green-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
          View Tokenomics<BarChart />
        </button>
      </div>
    </section>
  );
};
