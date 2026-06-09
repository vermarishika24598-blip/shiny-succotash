import { motion } from "framer-motion";

// Stagger parent configuration for beautiful entry sequence
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-gray-200 flex items-center justify-center overflow-hidden font-sans pt-16">
      
      {/* HIGH-END INTERACTIVE AMBIENT BLUR GRAPHICS */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          x: [-10, 30, -10],
          y: [-20, 10, -20],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-600 rounded-full blur-[140px] pointer-events-none" 
      />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none" />

      {/* BACKGROUND MATRIX GRID LINES PATTERN WITH PULSE ANIMATION */}
      <motion.div 
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      {/* MAIN HERO CONTENT BLOCK */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center"
      >
        
        {/* AVAILABILITY BADGE */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800/80 px-4 py-2 rounded-full text-[11px] font-mono tracking-wider text-neutral-400 mb-8 shadow-inner backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span>Available for Fullstack Internships</span>
        </motion.div>

        {/* CATCHY MULTI-LAYER HEADER TITLE WITH ENHANCED ANIMATION */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.15] mb-6 select-none"
        >
          Engineering Scalable <br />
          <motion.span 
            animate={{ bgPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: "200% auto" }}
            className="bg-gradient-to-r from-orange-400 via-neutral-100 to-orange-500 bg-clip-text text-transparent"
          >
            MERN Stack Architectures
          </motion.span>
        </motion.h1>

        {/* CONCISE SUBTEXT DESCRIPTION */}
        <motion.p 
          variants={itemVariants}
          className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-sans text-center"
        >
          Hi, I am <span className="text-neutral-200 font-semibold">Rishika Verma</span>. I build responsive web systems featuring structured RESTful microservices, real-time sync connections, and clean declarative user interfaces.
        </motion.p>

        {/* CALL TO ACTION BUTTON ARRAYS */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold tracking-wide w-full sm:w-auto"
        >
          {/* PRIMARY BUTTON WITH SHIMMER RUNTIME */}
          <motion.a 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="/project"
            className="relative overflow-hidden w-full sm:w-auto bg-white text-neutral-950 px-7 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-lg shadow-orange-950/10 font-bold group"
          >
            {/* BUTTON SHIMMER GLOW */}
            <motion.div 
              initial={{ x: "-150%" }}
              animate={{ x: "250%" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-950/5 to-transparent skew-x-12 pointer-events-none"
            />
            <span className="relative z-10 flex items-center gap-1.5">
              Explore My Builds <span className="font-mono text-sm transition-transform group-hover:translate-x-1">→</span>
            </span>
          </motion.a>

          {/* SECONDARY GITHUB CODE LINK */}
          <motion.a 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/vermarishika24598-blip" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-neutral-900/60 border border-neutral-800/80 text-neutral-300 px-7 py-3.5 rounded-xl hover:bg-neutral-800/60 hover:text-white hover:border-neutral-700 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <span>View Codebase</span>
          </motion.a>
        </motion.div>

        {/* BOTTOM METRICS BADGE OVERLAYS */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-12 mt-20 pt-8 border-t border-neutral-900/80 w-full max-w-xl text-center"
        >
          {[
            { metric: "MERN", label: "Core Stack" },
            { metric: "REST", label: "API Design" },
            { metric: "Git", label: "Version Control" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.08, y: -4, color: "#fb923c" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="cursor-default group transition-colors duration-200"
            >
              <p className="text-xl md:text-2xl font-bold text-white font-mono group-hover:text-orange-400 transition-colors">{item.metric}</p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}