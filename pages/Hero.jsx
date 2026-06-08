import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-gray-200 flex items-center justify-center overflow-hidden font-sans pt-16">
      
      {/* HIGH-END AMBIENT BLUR GRAPHICS */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-neutral-800/30 rounded-full blur-[120px] pointer-events-none" />

      {/* BACKGROUND MATRIX GRID LINES PATTERN */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />

      {/* MAIN HERO CONTENT BLOCK */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* AVAILABILITY BADGE */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800/80 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider text-neutral-400 mb-8 shadow-inner backdrop-blur-sm"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <span>Available for Fullstack Internships</span>
        </motion.div>

        {/* CATCHY MULTI-LAYER HEADER TITLE */}
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.15] mb-6"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Engineering Scalable <br />
          <span className="bg-gradient-to-r from-orange-400 via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            MERN Stack Architectures
          </span>
        </motion.h1>

        {/* CONCISE SUBTEXT DESCRIPTION */}
        <motion.p 
          className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-sans text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi, I am <span className="text-neutral-200 font-semibold">Rishika Verma</span>. I build responsive web systems featuring structured RESTful microservices, real-time sync connections, and clean declarative user interfaces.
        </motion.p>

        {/* CALL TO ACTION BUTTON ARRAYS */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 text-xs font-semibold tracking-wide w-full sm:w-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* PRIMARY CT ACTION LINK */}
          <a 
            href="/project"
            className="w-full sm:w-auto bg-neutral-100 border border-neutral-200 text-neutral-950 px-6 py-3 rounded-xl hover:bg-neutral-900 hover:text-white hover:border-neutral-800 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-neutral-950/50"
          >
            Explore My Builds <span className="font-mono text-sm">→</span>
          </a>

          {/* SECONDARY GITHUB CODE LINK */}
          <a 
            href="https://github.com/vermarishika24598-blip" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-neutral-900/60 border border-neutral-800/80 text-neutral-300 px-6 py-3 rounded-xl hover:bg-neutral-800/60 hover:text-white hover:border-neutral-700 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <span>View Codebase</span>
          </a>
        </motion.div>

        {/* BOTTOM METRICS BADGE OVERLAYS */}
        <motion.div 
          className="grid grid-cols-3 gap-4 md:gap-12 mt-20 pt-8 border-t border-neutral-900 w-full max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <p className="text-xl md:text-2xl font-bold text-white font-mono">MERN</p>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium mt-1">Core Stack</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold text-white font-mono">REST</p>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium mt-1">API Design</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold text-white font-mono">Git</p>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium mt-1">Version Control</p>
          </div>
          </motion.div>

      </div>
    </div>
  );
}