export function About() {
  const skillCategories = [
    { 
      title: "Frontend Engineering", 
      items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Responsive UX"] 
    },
    { 
      title: "Backend & Systems", 
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Middleware Architecture"] 
    },
    { 
      title: "Databases & DevOps", 
      items: ["MongoDB (Mongoose)", "PostgreSQL", "Git / GitHub", "Postman", "Vercel / Render"] 
    }
  ];

  const engineeringHighlights = [
    { metric: "MERN", label: "Core Stack Specialization" },
    { metric: "<100ms", label: "Target API Response Time" },
    { metric: "100%", label: "Clean, Modular Code Structure" },
    { metric: "2027", label: "BCA Grad — Renaissance Univ." }
  ];

  return (
    <section id="about" className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto scroll-mt-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Section Badge */}
      <div className="relative mb-16">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 text-neutral-100 text-[11px] font-mono tracking-widest uppercase mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          01 // Architecture & Stack
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-neutral-900 tracking-tight leading-[1.12]">
          Full-Stack MERN Developer crafting <br className="hidden sm:block" />
          <span className="font-semibold bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
            scalable backends & responsive interfaces.
          </span>
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12 mb-28 items-stretch">
        {/* Bio Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-neutral-600 text-lg leading-relaxed">
          <div className="space-y-4">
            <p className="text-xl text-neutral-900 font-medium leading-snug">
              I’m <span className="text-blue-600 font-semibold underline decoration-blue-200 underline-offset-4">Rishika Verma</span>, a full-stack engineer focused on building production-grade web applications.
            </p>
            <p className="text-neutral-600 text-base">
              My engineering philosophy focuses on clean controller-service patterns, predictable REST APIs, optimized MongoDB queries, and component-driven React architecture.
            </p>
          </div>

          {/* Academic Highlight Callout */}
          <div className="p-5 rounded-xl bg-neutral-900 text-neutral-200 text-sm border border-neutral-800 shadow-md font-mono">
            <div className="text-xs text-neutral-400 mb-1 font-semibold">// CURRENT STATUS</div>
            <p className="text-neutral-300">
              Pursuing BCA at <span className="text-blue-400 font-medium">Renaissance University</span> (2024–2027). Actively engineering full-stack MERN systems and API microservices.
            </p>
          </div>
        </div>

        {/* Recruiter Metric Card */}
        <div className="lg:col-span-5 relative group flex">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-full p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">Candidate Metrics</span>
              <span className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200/80 rounded-md">
                OPEN TO ROLES
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {engineeringHighlights.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl font-bold font-mono text-neutral-900 tracking-tight">{item.metric}</div>
                  <div className="text-xs text-neutral-500 font-medium">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Location</span>
              <span className="text-neutral-900 font-semibold">Indore, MP, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold whitespace-nowrap">Technical Stack Matrix</h3>
          <div className="h-[1px] w-full bg-neutral-200/80" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div 
              key={cat.title}
              className="p-7 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-base font-bold text-neutral-900">{cat.title}</h4>
                <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-blue-600 transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg group-hover:border-blue-200 group-hover:bg-blue-50/50 group-hover:text-blue-900 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Engineering Mindset */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold whitespace-nowrap">Engineering Standards</h3>
          <div className="h-[1px] w-full bg-neutral-200/80" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Clean Controllers & Services", desc: "Decoupled logic for readability and ease of testing." },
            { num: "02", title: "Optimized Schema Design", desc: "Structured MongoDB schemas with indexing in mind." },
            { num: "03", title: "Modular React Components", desc: "Reusable UI primitives with clean prop types and state flow." },
            { num: "04", title: "Production Deployment", desc: "Configured environment variables, CORS, and deployment scripts." }
          ].map((item) => (
            <div 
              key={item.num}
              className="p-6 rounded-xl bg-white border border-neutral-200/70 hover:border-neutral-400 hover:shadow-md transition-all duration-300"
            >
              <span className="text-xs font-mono text-blue-600 font-bold mb-3 block">{item.num} //</span>
              <h4 className="font-semibold text-neutral-900 text-sm mb-2">{item.title}</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}