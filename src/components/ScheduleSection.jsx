import React, { useState } from 'react';
import { scheduleData } from '../data/scheduleData';
import SpotCounter from './SpotCounter';

export default function ScheduleSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [spots, setSpots] = useState({});

  const categories = [
    { id: 'all', label: 'All Classes' },
    { id: 'hiit', label: 'HIIT' },
    { id: 'strength', label: 'Strength' },
    { id: 'yoga', label: 'Yoga' },
    { id: 'cardio', label: 'Cardio' },
  ];

  // Filter the array based on selected category
  const filteredSchedule = activeCategory === 'all'
    ? scheduleData
    : scheduleData.filter(item => item.category === activeCategory);

  // Handle spot count increments/decrements per class card
  const handleSpotChange = (id, delta) => {
    setSpots(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'hiit': return 'border-l-brand-red';
      case 'strength': return 'border-l-emerald-500';
      case 'yoga': return 'border-l-blue-500';
      case 'cardio': return 'border-l-amber-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <section id="schedule" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-white tracking-wide">CLASS SCHEDULE</h2>
        <p className="text-gray-400 text-sm mt-1">Filter and reserve your workout sessions</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-colors ${
              activeCategory === cat.id
                ? 'bg-brand-red text-white'
                : 'bg-brand-card text-gray-400 border border-brand-border hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Class Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSchedule.map(item => (
          <div
            key={item.id}
            className={`bg-brand-card p-5 rounded-lg border border-brand-border border-l-4 ${getCategoryBadgeClass(item.category)} flex flex-col justify-between`}
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-gray-400">{item.day} • {item.time}</span>
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-brand-dark text-gray-300">
                  {item.category}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-brand-red font-semibold mb-2">{item.coach}</p>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>

            <SpotCounter
              count={spots[item.id] || 0}
              onIncrement={() => handleSpotChange(item.id, 1)}
              onDecrement={() => handleSpotChange(item.id, -1)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}