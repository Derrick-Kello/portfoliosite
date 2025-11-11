'use client';

export default function AboutTab() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-5xl sm:text-6xl font-normal mb-6">About Me</h1>
        <p className="text-neutral-400 text-xl sm:text-2xl">
          Software engineer, content creator, and startup co-founder
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Story Section */}
        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800 p-8">
          <h2 className="text-2xl font-semibold mb-6 text-white">My Story</h2>
          <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
            <p>
              Hey there! I'm Derrick, a Junior at Kwame Nkrumah University of Science and Technology (KNUST) 
              in Ghana, passionate about building things that matter. My journey into tech started with curiosity 
              and evolved into a mission to create solutions that make a real impact.
            </p>
            <p>
              When I'm not coding, you'll find me creating content on YouTube, documenting the 
              ups and downs of building a startup, and sharing my experiences as a student developer. 
              I believe in learning in public and helping others navigate their journey into tech.
            </p>
          </div>
        </div>

        {/* What I Do */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">What I Do</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-neutral-900/30 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Software Development</h3>
              <p className="text-neutral-400">
                Building full-stack applications with React, Next.js, TypeScript, Node.js, 
                and modern web technologies. Focused on creating scalable, user-friendly solutions.
              </p>
            </div>

            <div className="bg-neutral-900/30 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Content Creation</h3>
              <p className="text-neutral-400">
                Sharing my journey on YouTube, documenting the process of becoming a software 
                engineer and building a tech startup from the ground up.
              </p>
            </div>

            <div className="bg-neutral-900/30 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Entrepreneurship</h3>
              <p className="text-neutral-400">
                Co-founding Hostelhubb, a platform revolutionizing student accommodation 
                management. Building a product that solves real problems for students and hostel owners.
              </p>
            </div>

            <div className="bg-neutral-900/30 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Mentoring & Teaching</h3>
              <p className="text-neutral-400">
                Helping aspiring developers navigate their journey into tech through content, 
                tutorials, and sharing real-world experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 rounded-2xl border border-neutral-800 p-8">
          <h2 className="text-2xl font-semibold mb-6 text-white">Skills & Technologies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'React Native'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-800/50 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-600 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-800/50 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-600 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Electron.js', 'Clack.js', 'UI/UX Design', 'Video Editing'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-800/50 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-600 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-neutral-900/30 rounded-2xl border border-neutral-800 p-8">
          <h2 className="text-2xl font-semibold mb-6 text-white">Beyond the Code</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🎓</div>
              <div>
                <h3 className="font-semibold text-white mb-1">KNUST Student</h3>
                <p className="text-neutral-400 text-sm">
                  Junior at Kwame Nkrumah University of Science and Technology, balancing academics with building a startup.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📹</div>
              <div>
                <h3 className="font-semibold text-white mb-1">Content Creator</h3>
                <p className="text-neutral-400 text-sm">
                  Documenting my journey on YouTube to help others navigate the tech world.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="font-semibold text-white mb-1">Startup Builder</h3>
                <p className="text-neutral-400 text-sm">
                  Co-founding Hostelhubb and learning the ropes of entrepreneurship while in university.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🇬🇭</div>
              <div>
                <h3 className="font-semibold text-white mb-1">Based in Ghana</h3>
                <p className="text-neutral-400 text-sm">
                  Building tech solutions from Ghana, contributing to the growing African tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-neutral-800 p-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h2>
          <p className="text-neutral-400 mb-6">
            Interested in collaborating or just want to chat about tech? I'd love to hear from you!
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'contact' }))}
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
