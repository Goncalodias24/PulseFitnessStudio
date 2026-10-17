import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="py-16 sm:py-24 px-4 text-center bg-[radial-gradient(circle_at_top,rgba(255,59,48,0.12),transparent_60%)]">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block bg-brand-red/15 text-brand-red px-4 py-1 rounded-full text-xs font-extrabold tracking-widest mb-6">
          HIGH PERFORMANCE STUDIO
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
          MIND & BODY IN SYNC
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-8">
          High-intensity workouts, functional strength, and dedicated recovery with expert coaching to help you reach your peak version.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="#pricing" className="bg-brand-red text-white px-6 py-3 rounded-md font-bold hover:bg-brand-red-hover transition-colors">
            Explore Memberships
          </a>
          <a href="#schedule" className="bg-transparent text-white border border-brand-border px-6 py-3 rounded-md font-bold hover:bg-brand-border transition-colors">
            View Class Schedule
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-brand-border">
          <div>
            <div className="text-3xl font-black text-brand-red">40+</div>
            <div className="text-xs uppercase text-gray-400 mt-1">Classes per Week</div>
          </div>
          <div>
            <div className="text-3xl font-black text-brand-red">12</div>
            <div className="text-xs uppercase text-gray-400 mt-1">Elite Coaches</div>
          </div>
          <div>
            <div className="text-3xl font-black text-brand-red">100%</div>
            <div className="text-xs uppercase text-gray-400 mt-1">Result Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
}