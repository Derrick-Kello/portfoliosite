'use client';
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

// Add scrollbar-hide utility
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;
  document.head.appendChild(style);
}

export default function Navigation({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }: NavigationProps) {
  const tabs = ['home', 'about', 'Startups', 'contact'];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'} px-4`}>
      {/* Dynamic Island Container */}
      <div className={`bg-transparent backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.02] max-w-full ${
        isScrolled ? 'px-3 sm:px-4 py-2 scale-90' : 'px-4 sm:px-6 py-3'
      } ${
        isDarkMode 
          ? 'border border-neutral-800/50 shadow-black/50 hover:shadow-neutral-900/50' 
          : 'border border-neutral-300/50 shadow-neutral-400/30 hover:shadow-neutral-500/40'
      }`}>
        <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'gap-1.5 sm:gap-2' : 'gap-2 sm:gap-4'}`}>
          {/* Logo */}
          <div className={`rounded-full flex items-center justify-center border shadow-inner transition-all duration-300 flex-shrink-0 ${
            isScrolled ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-7 h-7 sm:w-8 sm:h-8'
          } ${
            isDarkMode
              ? 'bg-gradient-to-br from-neutral-700 to-neutral-900 border-neutral-700'
              : 'bg-gradient-to-br from-neutral-200 to-neutral-400 border-neutral-300'
          }`}>
            <span className={`transition-all duration-300 ${isScrolled ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'} ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>👤</span>
          </div>
          
          {/* Divider */}
          <div className={`w-px transition-all duration-300 flex-shrink-0 ${isScrolled ? 'h-3 sm:h-4' : 'h-5 sm:h-6'} ${
            isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300'
          }`}></div>
          
          {/* Navigation Tabs */}
          <div className={`flex transition-all duration-300 overflow-x-auto scrollbar-hide ${isScrolled ? 'gap-0.5' : 'gap-0.5 sm:gap-1'}`}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full capitalize font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  isScrolled ? 'px-2 sm:px-3 py-1 text-[10px] sm:text-xs' : 'px-2.5 sm:px-4 py-1.5 text-xs sm:text-sm'
                } ${
                  activeTab === tab
                    ? isDarkMode
                      ? 'bg-white text-black shadow-lg shadow-white/20'
                      : 'bg-black text-white shadow-lg shadow-black/20'
                    : isDarkMode
                      ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                      : 'text-neutral-600 hover:text-black hover:bg-neutral-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className={`w-px transition-all duration-300 flex-shrink-0 ${isScrolled ? 'h-3 sm:h-4' : 'h-5 sm:h-6'} ${
            isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300'
          }`}></div>

          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`flex items-center justify-center rounded-full transition-all duration-300 flex-shrink-0 ${
              isScrolled ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-7 h-7 sm:w-8 sm:h-8'
            } ${
              isDarkMode
                ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                : 'text-neutral-600 hover:text-black hover:bg-neutral-200'
            }`}
          >
            {isDarkMode ? (
              <svg className={`transition-all duration-300 ${isScrolled ? 'w-2.5 h-2.5 sm:w-3 sm:h-3' : 'w-3.5 h-3.5 sm:w-4 sm:h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className={`transition-all duration-300 ${isScrolled ? 'w-2.5 h-2.5 sm:w-3 sm:h-3' : 'w-3.5 h-3.5 sm:w-4 sm:h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}