import React from 'react';
import { trainerData } from '../data/scheduleData';

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-20 px-4 bg-brand-alt border-y border-brand-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white tracking-wide">COACHING TEAM</h2>
          <p className="text-gray-400 text-sm mt-1">Certified professionals ready to elevate your training</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainerData.map(coach => (
            <article key={coach.id} className="bg-brand-card border border-brand-border rounded-lg overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white">{coach.name}</h3>
                <span className="text-xs font-semibold text-brand-red mb-3">{coach.role}</span>
                <p className="text-xs text-gray-400 mb-4 flex-grow">{coach.bio}</p>
                <div className="flex flex-wrap gap-1">
                  {coach.skills.map((skill, idx) => (
                    <span key={idx} className="bg-white/5 text-gray-400 text-[10px] px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}