export default function ContactForm() {
    return (
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none text-white transition-all duration-300"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none text-white transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none text-white transition-all duration-300"
            placeholder="Your message..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>
    );
  }