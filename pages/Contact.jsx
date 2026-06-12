import React from 'react';

export function Contact() {
  const emailAddress = "vermarishika@gmail.com";

  return (
    <section className="min-h-screen bg-white text-black px-8 py-24 md:px-24 font-serif">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="flex items-center gap-6 mb-24">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">04 — Contact</span>
          <div className="h-[1px] flex-grow bg-black" />
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          {/* Left Column: Intent */}
          <div className="space-y-12">
            <h1 className="text-5xl font-normal italic leading-tight tracking-tighter">
              Let's build <br /> something <br /> exceptional.
            </h1>
            <p className="text-neutral-600 font-sans text-sm leading-relaxed max-w-sm">
              I’m currently open to full-stack engineering collaborations and architectural consultations. 
              My inbox is always open for interesting problems.
            </p>
          </div>

          {/* Right Column: High-Contrast Box + Links */}
          <div className="flex flex-col gap-12">
            
            {/* Email Link Box */}
            <a 
              href={`mailto:${emailAddress}`}
              className="group block border border-black p-8 hover:bg-black hover:text-white transition-all duration-300"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Direct Email</p>
              <h3 className="text-xl font-sans tracking-tight font-bold">{emailAddress}</h3>
              <span className="block mt-4 text-xs font-mono italic">Send message →</span>
            </a>

            {/* Social Links List */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 mb-2">Connect Elsewhere</p>
              
              <a href="https://www.linkedin.com/in/rishika-verma-4561502a6/" target="_blank" rel="noreferrer" className="flex justify-between items-center border-b border-black pb-2 hover:font-bold transition-all">
                <span>LinkedIn</span>
                <span className="text-xs">↗</span>
              </a>
              
              <a href="https://github.com/vermarishika24598-blip" target="_blank" rel="noreferrer" className="flex justify-between items-center border-b border-black pb-2 hover:font-bold transition-all">
                <span>GitHub</span>
                <span className="text-xs">↗</span>
              </a>
              
              <a href="https://x.com/RishikaVer19716" target="_blank" rel="noreferrer" className="flex justify-between items-center border-b border-black pb-2 hover:font-bold transition-all">
                <span>Twitter / X</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}