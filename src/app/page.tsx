'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HomeTab from '@/components/tabs/HomeTab';
import AboutTab from '@/components/tabs/AboutTab';
import HostelhubbTab from '@/components/tabs/HostelhubbTab';
import ContactTab from '@/components/tabs/ContactTab';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleChangeTab = (e: CustomEvent) => {
      setActiveTab(e.detail);
    };
    
    window.addEventListener('changeTab', handleChangeTab as EventListener);
    return () => window.removeEventListener('changeTab', handleChangeTab as EventListener);
  }, []);

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
        {activeTab === 'Startups' && <HostelhubbTab />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      <Footer />
    </div>
  );
}




