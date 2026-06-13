export function About() {
  const skillCategories = [
    { title: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript"] },
    { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
    { title: "Database", items: ["MongoDB", "PostgreSQL", "Git"] }
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">01 — About</h2>
        <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
          Building digital products that are <br /> 
          <span className="font-normal">functional, fast, and simple.</span>
        </h1>
      </div>

      {/* Bio */}
      <div className="prose prose-neutral max-w-2xl mb-24">
        <p className="text-lg text-neutral-600 leading-relaxed">
          I'm <strong>Rishika Verma</strong>, a full-stack developer based in Indore. 
          I don't just write code; I solve problems. My approach is simple: 
          keep the architecture clean, the UX intuitive, and ship often.
        </p>
        <p className="text-lg text-neutral-600 leading-relaxed mt-6">
          Currently studying BCA at Renaissance University (Batch of 2027), 
          I spend most of my time refining my MERN stack skills and learning 
          the nuances of real-world application deployment.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mb-24">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-10">Tech Stack</h3>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h4 className="text-sm font-bold text-neutral-900 mb-4">{cat.title}</h4>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-600 flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div className="grid md:grid-cols-2 gap-8 border-t border-neutral-100 pt-16">
        {[
          { title: "Clean Code", desc: "Readable, maintainable, and built for scale." },
          { title: "User First", desc: "Design decisions based on user utility." },
          { title: "Shipping", desc: "Done is better than perfect." },
          { title: "Constant Learning", desc: "Always upgrading to modern stacks." }
        ].map((item, i) => (
          <div key={i}>
            <h4 className="font-medium text-neutral-900 mb-1">{item.title}</h4>
            <p className="text-sm text-neutral-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}