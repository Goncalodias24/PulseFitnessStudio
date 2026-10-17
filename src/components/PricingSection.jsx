import React from 'react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-white tracking-wide">PLANS & MEMBERSHIPS</h2>
        <p class="text-gray-400 text-sm mt-1">Flexible access with no long-term contracts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Basic */}
        <div className="bg-brand-card border border-brand-border rounded-lg p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Basic Access</h3>
            <p className="text-xs text-gray-400 mb-6">Full access to gym floor and cardio area.</p>
            <div className="flex items-baseline mb-6">
              <span className="text-xl font-bold text-brand-red">€</span>
              <span className="text-4xl font-black text-white">39</span>
              <span className="text-gray-400 text-sm ml-1">/mo</span>
            </div>
            <ul className="text-xs text-gray-300 space-y-3 mb-8">
              <li className="pb-2 border-b border-white/5">Unlimited gym floor access</li>
              <li className="pb-2 border-b border-white/5">Locker room & sauna access</li>
              <li className="pb-2 border-b border-white/5">Pulse app with workout plans</li>
              <li className="line-through text-gray-600">Group classes included</li>
            </ul>
          </div>
          <button className="w-full py-3 rounded-md border border-brand-red text-brand-red font-bold text-xs hover:bg-brand-red hover:text-white transition-colors">
            Select Plan
          </button>
        </div>

        {/* Featured */}
        <div className="bg-brand-card border-2 border-brand-red rounded-lg p-8 flex flex-col justify-between relative shadow-[0_0_30px_rgba(255,59,48,0.15)]">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-extrabold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Pulse Unlimited</h3>
            <p className="text-xs text-gray-400 mb-6">For those who want unlimited group fitness.</p>
            <div className="flex items-baseline mb-6">
              <span className="text-xl font-bold text-brand-red">€</span>
              <span className="text-4xl font-black text-white">79</span>
              <span className="text-gray-400 text-sm ml-1">/mo</span>
            </div>
            <ul className="text-xs text-gray-300 space-y-3 mb-8">
              <li className="pb-2 border-b border-white/5">Unlimited gym floor access</li>
              <li className="pb-2 border-b border-white/5">Unlimited group classes</li>
              <li className="pb-2 border-b border-white/5">Locker room & sauna access</li>
              <li className="pb-2 border-b border-white/5">1 Monthly fitness assessment</li>
            </ul>
          </div>
          <button className="w-full py-3 rounded-md bg-brand-red text-white font-bold text-xs hover:bg-brand-red-hover transition-colors">
            Claim Spot
          </button>
        </div>

        {/* VIP */}
        <div className="bg-brand-card border border-brand-border rounded-lg p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">VIP Performance</h3>
            <p className="text-xs text-gray-400 mb-6">Exclusive 1-on-1 coaching and support.</p>
            <div className="flex items-baseline mb-6">
              <span className="text-xl font-bold text-brand-red">€</span>
              <span className="text-4xl font-black text-white">139</span>
              <span className="text-gray-400 text-sm ml-1">/mo</span>
            </div>
            <ul className="text-xs text-gray-300 space-y-3 mb-8">
              <li className="pb-2 border-b border-white/5">Everything in Unlimited plan</li>
              <li className="pb-2 border-b border-white/5">2 PT sessions / month</li>
              <li className="pb-2 border-b border-white/5">Customized nutrition plan</li>
              <li className="pb-2 border-b border-white/5">2 Guest passes / month</li>
            </ul>
          </div>
          <button className="w-full py-3 rounded-md border border-brand-red text-brand-red font-bold text-xs hover:bg-brand-red hover:text-white transition-colors">
            Select VIP
          </button>
        </div>
      </div>
    </section>
  );
}