import { projects } from "./project.card.jsx";

export function Project() {
  return (
    <section className="min-h-screen bg-white text-black px-8 py-24 md:px-24">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <header className="mb-24">
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter uppercase">Works</h1>
          <div className="w-full h-[1px] bg-black mt-4"></div>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {projects.map((p) => (
            <article key={p.id} className="flex flex-col">
              
              {/* Image Frame */}
              <div className="w-full aspect-[16/10] border border-black overflow-hidden mb-8">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Title & Description */}
              <div className="flex-grow">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-3">{p.title}</h2>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-sm">
                  {p.description}
                </p>
                
                {/* Tech Stack - Added this for better engineering feel */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech?.map((t) => (
                    <span key={t} className="text-[9px] uppercase tracking-widest border border-neutral-300 px-2 py-0.5 text-neutral-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-black bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-black bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}