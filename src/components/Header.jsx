import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-brand-dark/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <a href="#hero" className="text-xl font-black tracking-wider text-white">
          PULSE<span className="text-brand-red">.</span>FIT
        </a>
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
            <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
            <li><a href="#trainers" className="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
            <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Plans</a></li>
            <li>
              <a href="#pricing" className="bg-brand-red text-white px-4 py-2 rounded-md font-bold text-xs hover:bg-brand-red-hover transition-colors">
                Join Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}