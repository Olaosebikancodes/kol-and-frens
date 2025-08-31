import React from 'react';

export default function TeamInfo () {
  return (
    <section id="team" className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-3xl shadow-lg">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Team Info
      </h3>
      
      <div className="flex justify-center mb-6">
        <div className="w-64 h-64 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl flex items-center justify-center shadow-lg">

          <img src="/images/prince.png" alt="" className='h-full w-full rounded-md'/>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className="text-lg">
          We wanna flip the combined assets of all the influencers! How much, you say? 
          Enough to reach the moon. 7 dollars are liquid and to end, it would take 
          approximately $2.4bn of those nasty greenbacks. We'll do that twice and go 
          back home, 'cause there aren't Lambos on the moon. $4.8bn, BAYBEEEEEE.
        </p>
        
        <div className="bg-white bg-opacity-70 p-6 rounded-2xl border-l-4 border-orange-400">
          <p className="font-medium text-gray-800">
            Our team is tired of trickery and failed promises. We will keep a transparent 
            community wallet and we plan to burn tokens at smart intervals to be 
            determined. The group decides the next step - not the dev or cabals. 
            This is a concerted group effort.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-white bg-opacity-50 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-orange-600">$2.4B</div>
          <div className="text-sm text-gray-600">Target Flip</div>
        </div>
        <div className="bg-white bg-opacity-50 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-yellow-600">$4.8B</div>
          <div className="text-sm text-gray-600">BAYBEEEEEE</div>
        </div>
      </div>
    </section>
  );
};
