import React from 'react';

export function Hero() {
  return (
    <section className="min-h-screen bg-white text-black px-8 py-16 md:px-24 font-serif selection:bg-black selection:text-white">
      
      {/* Header */}
      <header className="flex justify-between items-start border-b border-black pb-6 mb-16">
        <div>
          <h2 className="text-base font-bold uppercase tracking-tight italic">Rishika Verma</h2>
          <p className="text-[8px] uppercase tracking-[0.2em] mt-1 font-sans text-neutral-500">Fullstack & Digital Craftsman</p>
        </div>
        <div className="text-right">
          <p className="text-[8px] uppercase tracking-[0.2em] font-sans">Indore, India</p>
          <p className="text-[8px] uppercase tracking-[0.2em] font-sans text-neutral-400">© {new Date().getFullYear()}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl">
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1] tracking-tighter mb-20 italic">
          Architecting <br />
          <span className="block font-sans not-italic font-light text-[0.9rem] tracking-[0.2em] uppercase mt-6 text-neutral-400">
            Seamless Digital Experiences
          </span>
        </h1>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <article className="md:col-span-7 text-base leading-relaxed font-serif max-w-lg">
            <p className="mb-8 text-black">
              I am a developer who believes code is a form of design. I create functional digital systems that are as beautiful as they are performant.
            </p>
            <div className="border-l border-black pl-6 py-1">
              <p className="text-[8px] font-sans tracking-[0.2em] uppercase text-neutral-400 mb-2">Core Philosophy</p>
              <p className="text-sm italic leading-snug">"Simple, resilient, human-centric architecture. Solving problems with elegant execution."</p>
            </div>
          </article>

          {/* Direct Navigation Links */}
          <nav className="md:col-span-5 flex flex-col gap-4 pt-1">
            
            <a href="/project" className="group flex justify-between items-center border-b border-black py-3 hover:border-neutral-300 transition-colors">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Work / Projects</span>
              <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>

            <a href="https://github.com/vermarishika24598-blip" target="_blank" rel="noreferrer" className="group flex justify-between items-center border-b border-black py-3 hover:border-neutral-300 transition-colors">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Code / Github</span>
              <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>

            <a href="mailto:vermarishika@gmail.com" className="group flex justify-between items-center border-b border-black py-3 hover:border-neutral-300 transition-colors">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Contact / Email</span>
              <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>

          </nav>
        </div>
      </main>
    </section>
  );
}