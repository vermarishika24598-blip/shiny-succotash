export function Hero() {
  const stack = [
    { name: "React", role: "Frontend" },
    { name: "Node.js", role: "Backend" },
    { name: "MongoDB", role: "Database" },
    { name: "Express", role: "API" },
  ];

  const projects = [
    { name: "Task Manager", desc: "Real-time collaboration & task tracking", year: "2026" },
    { name: "E-Commerce", desc: "Full-stack store with JWT authentication", year: "2026" },
    { name: "Movie Explorer", desc: "TMDB API integration & recommendations", year: "2025" },
    { name: "JSON Formatter", desc: "AD-free JSON formatting & validation tool", year: "2025" }
  ];

  return (
    <section className="pt-32 pb-20 px-6 md:px-16 max-w-5xl mx-auto">
      {/* Intro */}
      <div className="mb-20">
        <span className="text-blue-500 text-xs font-medium tracking-wide uppercase">Available for work</span>
        <h1 className="text-5xl md:text-7xl font-semibold mt-6 mb-8 text-neutral-900 leading-[1.1]">
          Rishika Verma.<br />
          <span className="text-neutral-400">Fullstack Developer.</span>
        </h1>
        <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
          I build scalable web applications. Currently a BCA student at Renaissance University. 
          I believe in learning by shipping code rather than just theory.
        </p>
      </div>

      {/* Stack */}
      <div className="mb-20">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">Tech Stack</h3>
        <div className="flex flex-wrap gap-4">
          {stack.map((s) => (
            <div key={s.name} className="px-4 py-2 border border-neutral-200 rounded-lg">
              <span className="text-sm font-medium text-neutral-900">{s.name}</span>
              <span className="text-sm text-neutral-400 ml-2">{s.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {projects.map((proj, i) => (
          <div key={i} className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors">
            <span className="text-xs text-neutral-400 font-mono">{proj.year}</span>
            <h3 className="text-base font-semibold mt-2 mb-2 group-hover:text-blue-600 transition-colors">{proj.name}</h3>
            <p className="text-sm text-neutral-600">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}