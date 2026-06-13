export function Contact() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">04 — Contact</h2>
        <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
          Let's work <span className="font-normal italic">together.</span>
        </h1>
      </div>

      {/* Intro */}
      <div className="max-w-2xl mb-24">
        <p className="text-lg text-neutral-600">
          I'm currently open to full-stack engineering roles and interesting collaborative projects. 
          If you have a challenge, I have the code for it.
        </p>
      </div>

      {/* Contact Links Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-24">
        {[
          { label: "Email", val: "vermarishika24598@gmail.com", href: "mailto:vermarishika24598@gmail.com" },
          { label: "GitHub", val: "github.com/vermarishika24598-blip", href: "https://github.com/vermarishika24598-blip" },
          { label: "LinkedIn", val: "linkedin.com/in/rishika-verma", href: "https://www.linkedin.com/in/rishika-verma-4561502a6/" },
          { label: "Twitter", val: "@RishikaVer19716", href: "https://x.com/RishikaVer19716" }
        ].map((link) => (
          <a 
            key={link.label}
            href={link.href}
            target="_blank" 
            rel="noreferrer"
            className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-all flex flex-col gap-1"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 group-hover:text-blue-600">
              {link.label}
            </span>
            <span className="text-sm text-neutral-900 font-medium truncate">
              {link.val}
            </span>
          </a>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-neutral-100 pt-16">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Availability</h4>
        <div className="flex flex-wrap gap-8 text-sm text-neutral-600">
          <p>Status: <span className="text-green-600 font-medium">Available for work</span></p>
          <p>Timezone: IST (UTC +5:30)</p>
          <p>Response: Within 24 hours</p>
        </div>
      </div>
    </section>
  );
}