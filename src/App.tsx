import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Classes } from './components/sections/Classes';
import { Trainers } from './components/sections/Trainers';
import { Pricing } from './components/sections/Pricing';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Features />
        <Classes />
        <Trainers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;

