interface SkillBarProps {
    skill: string;
    level: number;
  }
  
  export default function SkillBar({ skill, level }: SkillBarProps) {
    return (
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-slate-300">{skill}</span>
          <span className="text-cyan-400">{level}%</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    );
  }