// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection'; // Import HeroSection
import FeatureGrid from '../components/home/FeatureGrid'; // Import FeatureGrid

function HomePage() {
  return (
    <> {/* Fragment untuk membungkus multiple components */}
      <HeroSection />
      <FeatureGrid />
      {/* Kamu bisa tambahkan StatsSection atau komponen lain di sini nanti */}
    </>
  );
}

export default HomePage;