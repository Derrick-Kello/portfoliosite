export default function MediaTab() {
    return (
      <div className="space-y-12 animate-fade-in">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Additional Media
        </h2>
        
        <div className="text-center py-20">
          <p className="text-xl text-slate-400">
            This section can be used for blog posts, photo galleries, podcasts, or other media content.
          </p>
          <p className="text-slate-500 mt-4">
            Main media content (YouTube & Spotify) is now on the Home page.
          </p>
        </div>
      </div>
    );
  }