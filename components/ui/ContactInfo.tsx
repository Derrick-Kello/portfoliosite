export default function ContactInfo() {
    const contactItems = [
      { icon: '📧', label: 'Email', value: 'your.email@example.com' },
      { icon: '🐦', label: 'Twitter', value: '@yourhandle' },
      { icon: '💼', label: 'LinkedIn', value: '/in/yourprofile' },
      { icon: '🐙', label: 'GitHub', value: '@yourusername' },
    ];
  
    return (
      <div className="space-y-6">
        <p className="text-lg text-slate-300 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Feel free to reach out!
        </p>
  
        <div className="space-y-4">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <div className="text-sm text-slate-400">{item.label}</div>
                <div className="text-white">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  