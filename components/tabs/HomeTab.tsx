'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const phrases = [
  "Hey there, Derrick here",
  "Software Engineer",
  "Content Creator",
  "KNUST Student",
  "Tech Storyteller"
];

export default function HomeTab() {
  const [musicTab, setMusicTab] = useState('recently');
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 60000; // 60 seconds pause when fully typed

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        // Finished typing, wait 60 seconds then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else if (!isDeleting) {
        // Typing
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
      } else {
        // Deleting
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  const videos = [
    { id: '5i6eOFjh3ek', title: 'Programming Explained\nA beginners guide' },
    { id: 'h0poAyfrRt8', title: '20,000 subscribers' },
    { id: 'CHbUnxFivvY', title: 'week in the life' },
    { id: 't0j-sdpQsOc', title: 'Day in the life\nsoftware engineer' },
  ];

  const recentlyPlayed = {
    featured: 'https://open.spotify.com/embed/track/2aTKrdenCq5qBOoJPFdn4P?utm_source=generator', // Jamie Miller - Here's Your Perfect
    tracks: [
      'https://open.spotify.com/embed/track/3WDIhWoRWVcaHdRwMEHkkS?utm_source=generator', // Love on the Weekend - John Mayer
      'https://open.spotify.com/embed/track/6habFhsOp2NvshLv26DqMb?utm_source=generator', // Gravity - FIFTY FIFTY
      'https://open.spotify.com/embed/track/0fea68AdmYNygeTGI4RC18?utm_source=generator', // Bloom - The Paper Kites
      'https://open.spotify.com/embed/track/5odlY52u43F5BjByhxg7wg?utm_source=generator', // Die For You - The Weeknd
    ]
  };

  const topTracks = {
    featured: 'https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b?utm_source=generator', // Blinding Lights - The Weeknd
    tracks: [
      'https://open.spotify.com/embed/track/2aTKrdenCq5qBOoJPFdn4P?utm_source=generator', // Shape of You - Ed Sheeran
      'https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp?utm_source=generator', // Mr. Brightside - The Killers
      'https://open.spotify.com/embed/track/6habFhsOp2NvshLv26DqMb?utm_source=generator', // Such a Whore - JVKE
      'https://open.spotify.com/embed/track/1BxfuPKGuaTgP7aM0Bbdwr?utm_source=generator', // Cruel Summer - Taylor Swift
    ]
  };

  const currentMusic = musicTab === 'recently' ? recentlyPlayed : topTracks;



  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl font-normal mb-6 text-left">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-neutral-400 text-lg text-left">
          Junior at KNUST, Ghana, documenting the journey of becoming a software engineer
          and building a tech startup.
        </p>
      </div>

      {/* Latest Video */}
      <div className="mb-12 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-normal">Latest Video</h2>
          <div className="flex items-center gap-6 text-neutral-400 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              208 subscribers
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              1.8k views
            </span>
          </div>
        </div>
        <div className="relative aspect-video bg-neutral-900 rounded-2xl overflow-hidden group cursor-pointer">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/gY-6D-jtCjk?si=L9kfX5p3TotF3Mu3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute bottom-4 right-4 bg-red-600 rounded-full p-3">
            <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Video Thumbnails */}
      <div className="mb-16 max-w-3xl mx-auto overflow-x-auto pb-4">
        <div className="flex gap-3 justify-center">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="w-44 h-24 bg-neutral-900 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 relative group"
            >
              <Image 
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                width={320}
                height={180}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <div className="absolute top-2 left-2 right-2 text-left text-white font-medium text-xs whitespace-pre-line drop-shadow-lg">
                  {video.title}
                </div>
                <div className="bg-red-600 rounded-full p-2 opacity-90 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mb-16 max-w-3xl mx-auto">
        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800 p-8 overflow-hidden relative">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 via-transparent to-neutral-800/20 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-normal mb-1">Software Engineer</h2>
                <p className="text-neutral-500 text-sm">Co-Founder @ Hostelhubb</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>

            {/* Auto-scrolling carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex gap-4 animate-scroll">
                  {(() => {
                    const techStack = [
                      { name: 'JavaScript', color: '#F7DF1E', glow: 'shadow-[0_0_15px_rgba(247,223,30,0.5)]', icon: 'JS' },
                      { name: 'TypeScript', color: '#3178C6', glow: 'shadow-[0_0_15px_rgba(49,120,198,0.5)]', icon: 'TS' },
                      { 
                        name: 'React', 
                        color: '#61DAFB', 
                        glow: 'shadow-[0_0_15px_rgba(97,218,251,0.5)]', 
                        icon: <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="2.5"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-60 16 16)"/></svg>
                      },
                      { name: 'Next.js', color: '#FFFFFF', glow: 'shadow-[0_0_15px_rgba(255,255,255,0.3)]', icon: '▲' },
                      { name: 'Node.js', color: '#339933', glow: 'shadow-[0_0_15px_rgba(51,153,51,0.5)]', icon: '⬢' },
                      { 
                        name: 'React Native', 
                        color: '#61DAFB', 
                        glow: 'shadow-[0_0_15px_rgba(97,218,251,0.5)]', 
                        icon: <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="2.5"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-60 16 16)"/></svg>
                      },
                      { 
                        name: 'Java', 
                        color: '#ED8B00', 
                        glow: 'shadow-[0_0_15px_rgba(237,139,0,0.5)]', 
                        icon: <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor"><path d="M11.5 22s-1.5 1 1 1.5c3 0.5 4.5 0.5 7.5-0.5 0 0 1 0.5 2 1-7 3-16 0-10.5-2zM11 19s-1.5 1 1 1.5c3.5 0.5 6 0.5 10.5-1 0 0 0.5 0.5 1.5 1-9 2.5-19 0.5-13-1.5zM17 13c1.5 2 0 3.5 0 3.5s4-2 2-4.5c-2-2.5-3.5-3.5 4.5-7.5 0 0-12 3-6.5 8.5z"/></svg>
                      },
                      { name: 'Spring Boot', color: '#6DB33F', glow: 'shadow-[0_0_15px_rgba(109,179,63,0.5)]', icon: '🍃' },
                      { name: 'PostgreSQL', color: '#4169E1', glow: 'shadow-[0_0_15px_rgba(65,105,225,0.5)]', icon: '🐘' },
                      { 
                        name: 'Electron.js', 
                        color: '#9FEAF9', 
                        glow: 'shadow-[0_0_15px_rgba(159,234,249,0.5)]', 
                        icon: <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="3"/><path d="M16 6v4M16 22v4M6 16h4M22 16h4"/></svg>
                      },
                      { name: 'Clack.js', color: '#A855F7', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.5)]', icon: '🎯' },
                    ];
                    return techStack.concat(techStack).map((tech, idx) => (
                      <div
                        key={idx}
                        className={`flex-shrink-0 px-5 py-3 bg-neutral-800/50 rounded-lg border transition-all duration-300 hover:bg-neutral-800 ${tech.glow}`}
                        style={{ borderColor: tech.color + '40' }}
                      >
                        <div className="flex items-center gap-3 whitespace-nowrap">
                          <span 
                            className="text-lg font-bold flex items-center"
                            style={{ color: tech.color }}
                          >
                            {tech.icon}
                          </span>
                          <span 
                            className="text-sm font-medium"
                            style={{ color: tech.color }}
                          >
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>
              
              {/* Fade edges */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-900/50 to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-900/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Music Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Left: Recently Played / Top Tracks Toggle */}
        <div>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMusicTab('recently')}
              className={`px-6 py-2 rounded-full transition-all ${
                musicTab === 'recently'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Recently Played
            </button>
            <button
              onClick={() => setMusicTab('top')}
              className={`px-6 py-2 rounded-full transition-all ${
                musicTab === 'top'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Top Tracks
            </button>
          </div>

          {/* Spotify Embed - Featured Track */}
          <div className="bg-neutral-900 rounded-2xl overflow-hidden">
            <iframe
              key={currentMusic.featured}
              src={currentMusic.featured}
              width="100%"
              height="352"
              className="border-0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        
        </div>

        {/* Right: Song List - Spotify Embeds with Custom Design */}
        <div className="space-y-2 mt-15">
          {currentMusic.tracks.map((trackUrl) => (
            <div key={trackUrl} className="bg-neutral-900 rounded-xl overflow-hidden">
              <iframe
                src={trackUrl}
                width="100%"
                height="80"
                className="border-0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
}
