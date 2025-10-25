interface ProjectCardProps {
    title: string;
    desc: string;
    tech: string[];
  }
  
  export default function ProjectCard({ title, desc, tech }: ProjectCardProps) {
    return (
      <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
        <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-4xl">🚀</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((technology, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    );
  }
  