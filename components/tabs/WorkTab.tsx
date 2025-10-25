import ProjectCard from '../ui/ProjectCard';

export default function WorkTab() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'A full-stack e-commerce solution with payment integration',
      tech: ['Next.js', 'Stripe', 'MongoDB'],
    },
    {
      title: 'Social Media Dashboard',
      desc: 'Analytics dashboard for social media management',
      tech: ['React', 'D3.js', 'Node.js'],
    },
    {
      title: 'AI Writing Assistant',
      desc: 'AI-powered content generation tool',
      tech: ['Next.js', 'OpenAI', 'Tailwind'],
    },
    {
      title: 'Portfolio Website',
      desc: 'Custom portfolio site with animations',
      tech: ['Next.js', 'Framer Motion', 'TypeScript'],
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        My Work
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );