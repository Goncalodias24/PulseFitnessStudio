import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScheduleSection from './components/ScheduleSection';
import TrainersSection from './components/TrainersSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ScheduleSection />
        <TrainersSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}