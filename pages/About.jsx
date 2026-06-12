export function About() {
  return (
    <section className="min-h-screen bg-white text-black px-8 py-24 md:px-24 font-serif">
      
      <div className="max-w-5xl">
        
        {/* Section Heading - Raw & Sharp */}
        <div className="flex items-center gap-6 mb-24">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">01 — About</span>
          <div className="h-[1px] flex-grow bg-black" />
        </div>

        {/* Content - Two Column Editorial Style */}
        <div className="grid md:grid-cols-12 gap-16">
          
          <div className="md:col-span-4">
            <h2 className="text-4xl font-normal leading-[1.1] italic">
              Building systems that balance logic and aesthetics.
            </h2>
          </div>

          <div className="md:col-span-8 text-lg leading-relaxed font-sans space-y-8">
            <p className="text-neutral-800">
              I am <strong>Rishika Verma</strong>, a full-stack developer dedicated to engineering performant web applications. My approach combines the structural rigor of core Computer Science with the fluid design language of modern frontend frameworks.
            </p>
            <p className="text-neutral-800">
              I don't just write code; I architect systems. Whether it is optimizing RESTful microservices or integrating AI-driven workflows, my focus remains on building resilient architectures that stand the test of scale.
            </p>
          </div>
        </div>

        {/* Capabilities - Minimalist List */}
        <div className="mt-32 pt-16 border-t border-black">
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-12">Capabilities & Stack</h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Frontend", items: ["React", "TypeScript", "Tailwind", "Framer"] },
              { title: "Backend", items: ["Node.js", "Express", "MongoDB", "REST API"] },
              { title: "Core", items: ["C / C++", "DSA", "System Design", "VectorShift"] }
            ].map((cat) => (
              <div key={cat.title}>
                <h4 className="text-[11px] font-bold uppercase mb-6 tracking-widest">{cat.title}</h4>
                <ul className="space-y-3">
                  {cat.items.map((i) => (
                    <li key={i} className="text-sm text-neutral-600 font-mono tracking-tight">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}