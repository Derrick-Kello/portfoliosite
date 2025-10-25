'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeTab from '@/components/tabs/HomeTab';
import AboutTab from '@/components/tabs/AboutTab';
import GearTab from '@/components/tabs/GearTab';
import ContactTab from '@/components/tabs/ContactTab';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      
      <main className="pt-20">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'gear' && <GearTab />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      <Footer />
    </div>
  );
}




