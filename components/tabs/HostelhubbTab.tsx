'use client';
import { useState } from 'react';

export default function HostelhubbTab() {
  const [activeSection, setActiveSection] = useState<'company' | 'team'>('company');

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <h1 className="relative text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hostelhubb
            </h1>
          </div>
        </div>
        <p className="text-neutral-400 text-xl max-w-3xl mb-4">
          Making Student University Lives easy with modern technology
        </p>
        <a 
          href="https://hostelhub.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Visit Hostelhubb</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-12 border-b border-neutral-800">
        <button
          onClick={() => setActiveSection('company')}
          className={`px-6 py-3 font-medium transition-all relative ${
            activeSection === 'company'
              ? 'text-white'
              : 'text-neutral-400 hover:text-neutral-300'
          }`}
        >
          The Company
          {activeSection === 'company' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          )}
        </button>
        <button
          onClick={() => setActiveSection('team')}
          className={`px-6 py-3 font-medium transition-all relative ${
            activeSection === 'team'
              ? 'text-white'
              : 'text-neutral-400 hover:text-neutral-300'
          }`}
        >
          The Team
          {activeSection === 'team' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          )}
        </button>
      </div>

      {/* Company Section */}
      {activeSection === 'company' && (
        <div className="space-y-12 animate-fadeIn">
          {/* Mission */}
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800 p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  Hostelhubb is transforming how students find, book, and manage their accommodation. 
                  We've built a comprehensive platform that connects students with quality hostels 
                  and provides hostel managers with powerful tools to streamline operations.
                  We also provide a wide range of student-tailored services that make living
                  on campus so much easier and comfortable.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/30 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Student Discovery</h3>
                <p className="text-neutral-400">
                  Help students easily find and compare hostels near their campus with detailed listings, 
                  photos, reviews, and real-time availability.
                </p>
              </div>

              <div className="bg-neutral-900/30 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Seamless Booking</h3>
                <p className="text-neutral-400">
                  Streamlined booking process with secure payments, instant confirmations, 
                  and digital contracts for a hassle-free experience.
                </p>
              </div>

              <div className="bg-neutral-900/30 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Management Tools</h3>
                <p className="text-neutral-400">
                  Empower hostel owners with analytics, booking management, payment tracking, 
                  and tenant communication tools.
                </p>
              </div>

              <div className="bg-neutral-900/30 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Secure Platform</h3>
                <p className="text-neutral-400">
                  Built with security first - encrypted data, secure payments, and verified listings 
                  to protect both students and hostel owners.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 rounded-2xl border border-neutral-800 p-8">
            <h2 className="text-2xl font-semibold mb-6 text-white">Built With Modern Tech</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Mobile App</h3>
                <div className="flex flex-wrap gap-3">
                  {['React Native', 'Firebase', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-neutral-800/50 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-600 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Management Systems & Landing Page</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Firebase'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-neutral-800/50 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-600 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Section */}
      {activeSection === 'team' && (
        <div className="space-y-12 animate-fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">The Founding Team</h2>
            <p className="text-neutral-400 text-lg">
              Two developers, one vision - building the future of student accommodation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Derrick */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                    D
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Derrick</h3>
                    <p className="text-purple-400 font-medium">Co-Founder & Developer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Role</h4>
                    <p className="text-neutral-300">
                      Frontend developer and UI/UX designer responsible for all frontend design and development 
                      across the mobile app, management systems, and landing page.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'React Native', 'TypeScript', 'UI/UX Design', 'Frontend Architecture'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-400 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Beyond Code</h4>
                    <p className="text-neutral-300">
                      KNUST student, content creator documenting the startup journey, 
                      and passionate about making tech accessible to everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AGyemangDev */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
                    AG
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">AgyemangDev</h3>
                    <p className="text-pink-400 font-medium">Co-Founder & Developer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Role</h4>
                    <p className="text-neutral-300">
                      Backend developer responsible for Firebase integration, Node.js backend services, 
                      and building robust server-side architecture for the platform.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Firebase', 'Node.js', 'Backend Architecture', 'APIs', 'Database Design'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-md text-purple-400 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Beyond Code</h4>
                    <p className="text-neutral-300">
                      Problem solver at heart, passionate about creating efficient backend systems 
                      and building technology that makes a real impact in people's lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Story */}
          <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 rounded-2xl border border-neutral-800 p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">The Partnership</h3>
            <p className="text-neutral-300 text-lg leading-relaxed mb-4">
              What started as a shared frustration with the student housing search process 
              turned into a mission to solve it. Combining frontend expertise with backend mastery, 
              we're building a platform that serves both students and hostel owners.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed">
              From late-night coding sessions to product launches, we're proving that 
              two passionate developers can build something that matters.
            </p>
          </div>

          {/* Marketing & Advertisement Team */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4 text-white">Marketing & Advertisement</h2>
              <p className="text-neutral-400 text-lg">
                Spreading the word and connecting with students across campus
              </p>
            </div>

            <div className="bg-neutral-900/30 rounded-2xl border border-neutral-800 p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-white">Our Marketing Team</h3>
                  <p className="text-neutral-300 mb-4">
                    Our dedicated marketing and advertisement team works tirelessly to spread awareness 
                    about Hostelhubb across campus and beyond. They handle social media campaigns, 
                    student outreach, brand partnerships, and creative content that resonates with our audience.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-neutral-800/30 rounded-lg border border-neutral-700/50 p-4 hover:border-neutral-600 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                      📱
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Social Media</h4>
                      <p className="text-neutral-500 text-xs">Content & Engagement</p>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs">
                    Managing our presence across Instagram, Twitter, and TikTok to connect with students.
                  </p>
                </div>

                <div className="bg-neutral-800/30 rounded-lg border border-neutral-700/50 p-4 hover:border-neutral-600 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                      🎨
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Creative Design</h4>
                      <p className="text-neutral-500 text-xs">Graphics & Branding</p>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs">
                    Creating eye-catching visuals, posters, and promotional materials for campaigns.
                  </p>
                </div>

                <div className="bg-neutral-800/30 rounded-lg border border-neutral-700/50 p-4 hover:border-neutral-600 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                      🎯
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Campus Outreach</h4>
                      <p className="text-neutral-500 text-xs">Events & Partnerships</p>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs">
                    Organizing campus events and building partnerships with student organizations.
                  </p>
                </div>

                <div className="bg-neutral-800/30 rounded-lg border border-neutral-700/50 p-4 hover:border-neutral-600 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                      📊
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Analytics</h4>
                      <p className="text-neutral-500 text-xs">Data & Insights</p>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs">
                    Tracking campaign performance and user engagement to optimize our strategies.
                  </p>
                </div>

                <div className="bg-neutral-800/30 rounded-lg border border-neutral-700/50 p-4 hover:border-neutral-600 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                      ✍️
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Content Writing</h4>
                      <p className="text-neutral-500 text-xs">Blogs & Copy</p>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs">
                    Crafting compelling stories and copy that highlight our value proposition.
                  </p>
                </div>

                <div className="bg-neutral-800/30 rounded-lg border border-neutral-700/50 p-4 hover:border-neutral-600 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                      🤝
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Brand Partnerships</h4>
                      <p className="text-neutral-500 text-xs">Collaborations</p>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs">
                    Building strategic partnerships with brands and businesses that serve students.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                <p className="text-neutral-300 text-sm text-center">
                  <span className="font-semibold text-orange-400">Growing Together:</span> Our marketing team plays a crucial role in 
                  connecting Hostelhubb with students who need it most, ensuring our platform reaches every corner of campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
