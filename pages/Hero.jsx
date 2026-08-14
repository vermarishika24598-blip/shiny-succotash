import profilePic from "url:./Rishika.jpeg";

export function Hero() {
  const profilePhoto = profilePic; 

  const stack = [
    { name: "React", role: "Frontend" },
    { name: "Node.js", role: "Backend" },
    { name: "MongoDB", role: "Database" },
    { name: "Express", role: "API" },
    { name: "Tailwind CSS", role: "UI Design" },
  ];

  const projects = [
    { name: "Task Manager", desc: "Real-time collaboration & task tracking system", year: "2026" },
    { name: "E-Commerce", desc: "Full-stack store with JWT authentication & state management", year: "2026" },
    { name: "Movie Explorer", desc: "TMDB API integration & recommendation engine", year: "2025" },
    { name: "JSON Formatter", desc: "Ad-free client-side JSON formatting & validation tool", year: "2025" }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-24 px-6 md:px-16 max-w-6xl mx-auto overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Layout Grid */}
      <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
        
        {/* Left Column: Intro & Headline */}
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-600 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            AVAILABLE FOR ROLES & PROJECTS
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-neutral-900 tracking-tight leading-[1.08]">
            Rishika Verma.<br />
            <span className="font-semibold bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
              Full-Stack MERN Developer.
            </span>
          </h1>

          <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
            Building scalable web applications and clean backend architectures. Currently pursuing BCA at <strong className="text-neutral-900 font-semibold">Renaissance University</strong> (Batch of 2027) with a focus on shipping production-ready code.
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#project"
              className="px-6 py-3 rounded-xl bg-neutral-900 text-white text-xs font-mono tracking-wider uppercase font-medium hover:bg-neutral-800 transition-all shadow-md active:scale-95"
            >
              View Projects ↓
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-neutral-100 text-neutral-800 border border-neutral-200 text-xs font-mono tracking-wider uppercase font-medium hover:bg-neutral-200/80 transition-all active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Column: Profile Photo Card */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group w-64 sm:w-72">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200/80 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Rishika Verma"
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent text-white">
                <p className="text-xs font-semibold">Rishika Verma</p>
                <p className="text-[10px] text-neutral-300 font-mono">Indore, India • MERN Stack</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Tech Stack Bar */}
      <div className="mb-24">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-6">Core Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {stack.map((s) => (
            <div 
              key={s.name} 
              className="px-4 py-2 bg-neutral-50 border border-neutral-200/80 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all"
            >
              <span className="text-xs font-bold text-neutral-900">{s.name}</span>
              <span className="text-xs font-mono text-neutral-400 ml-2">// {s.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Highlight */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold whitespace-nowrap">Key Projects</h3>
          <div className="h-[1px] w-full bg-neutral-200/80" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-400 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-blue-600 font-semibold tracking-wider">{proj.year}</span>
                <h3 className="text-base font-bold text-neutral-900 mt-1 mb-2 group-hover:text-blue-600 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}