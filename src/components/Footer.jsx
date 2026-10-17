import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#08090b] border-t border-brand-border py-12 px-4 text-xs text-gray-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="text-lg font-black text-white mb-2">
            PULSE<span className="text-brand-red">.</span>FIT
          </div>
          <p className="mb-4">Your high-performance studio and training community.</p>
          <p>📍 250 Liberty Ave, Lisbon</p>
          <p>📞 (+351) 210 999 888</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
            <li><a href="#trainers" className="hover:text-white transition-colors">Trainers</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Plans</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Programs</h4>
          <ul className="space-y-2">
            <li><a href="#schedule" className="hover:text-white transition-colors">HIIT Core</a></li>
            <li><a href="#schedule" className="hover:text-white transition-colors">Power Yoga</a></li>
            <li><a href="#schedule" className="hover:text-white transition-colors">Cross Training</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-white/5">
        &copy; 2026 Pulse Athletics & Fitness Studio. All rights reserved.
      </div>
    </footer>
  );
}