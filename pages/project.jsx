import { projects } from "./project.card.jsx";

export function Project() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">03 — Projects</h2>
        <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
          Selected works & <span className="font-normal italic">experiments.</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <article 
            key={p.id} 
            className="group flex flex-col h-full border border-neutral-100 rounded-2xl overflow-hidden hover:border-neutral-200 transition-all hover:shadow-lg"
          >
            {/* Image */}
            <div className="aspect-video w-full overflow-hidden bg-neutral-100">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">{p.title}</h3>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed flex-grow">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech?.map((t) => (
                  <span key={t} className="text-[10px] font-medium uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a href={p.link} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800">
                  Live View ↗
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900">
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}