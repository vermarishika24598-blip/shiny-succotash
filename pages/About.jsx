import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { frontendSkills, backendSkills, programmingSkills } from "./skill";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function About() {
  const containerRef = useRef(null);
  
  // Dynamic Scroll Parallax Effect for a sophisticated background feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <>
      <div ref={containerRef} className="relative min-h-screen bg-neutral-950 pb-24 overflow-hidden pt-12">
        
        {/* Subtle Cyber Grid Layer behind content */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        {/* Ambient Floating Glows */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" 
        />

        {/* ================= ABOUT MAIN SECTION ================= */}
        <div className="max-w-4xl mx-auto px-4 mt-16 relative z-10">
          <motion.div
            className="bg-neutral-900/30 border border-neutral-800/60 backdrop-blur-md rounded-3xl p-8 md:p-16 space-y-6 shadow-2xl relative group overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {/* Top Minimalist Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent group-hover:via-orange-500 transition-all duration-700" />

            <div className="flex flex-col items-center space-y-3">
              <span className="text-xs font-mono text-orange-500 tracking-[0.2em] uppercase font-bold bg-orange-500/5 px-3 py-1 rounded-full border border-orange-500/10">
                01 . Synopsis
              </span>
              <motion.h1 
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-white bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                About Me
              </motion.h1>
            </div>

            <motion.p
              className="text-sm md:text-base leading-relaxed text-neutral-400 font-sans max-w-3xl mx-auto text-justify md:text-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I’m <span className="text-white font-semibold">Rishika Verma</span>, a full-stack MERN Developer dedicated to engineering high-performance, scalable web applications and deploying advanced AI automations. Backed by a strong engineering foundation in C, C++, and Core Data Structures & Algorithms, I build digital architectures focused on clean logic and fast processing.
              <br /><br />
              On the frontend, I create fluid, responsive, and pixel-perfect user interfaces using <span className="text-orange-400 font-medium">React</span> and modern state-management principles. On the backend, I design reliable scalable microservices using <span className="text-white font-medium">Node.js, Express, and MongoDB</span>—seamlessly structuring secure databases, implementing clean system utilities, and integrating powerful native AI orchestrations like <span className="text-purple-400 font-medium">VectorShift workflows</span>.
            </motion.p>
          </motion.div>
        </div>

        {/* ================= TECHNICAL EXPERTISE SECTION ================= */}
        <div className="pt-28 max-w-6xl mx-auto px-4 space-y-12 relative z-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-purple-400 tracking-[0.2em] uppercase font-bold bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
              02 . Capabilities
            </span>
            <motion.h1
              className="font-extrabold text-3xl md:text-4xl tracking-tight text-white"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technical Architecture
            </motion.h1>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Frontend Engineering Card */}
            <motion.div
              className="bg-neutral-900/20 border border-neutral-900 rounded-3xl p-6 text-center shadow-xl relative group hover:border-neutral-800 hover:bg-neutral-900/40 transition-all duration-300 backdrop-blur-sm"
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-4 right-5 font-mono text-xs text-neutral-700 group-hover:text-neutral-500 transition-colors">// FE</div>
              <h2 className="text-lg font-bold mb-6 text-neutral-200 border-b border-neutral-900 pb-3 text-left pl-2 tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Frontend Engineering
              </h2>

              <div className="grid grid-cols-2 gap-2.5">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-950 border border-neutral-900 text-neutral-400 rounded-xl py-3 font-medium text-xs tracking-wide transition-all duration-200 hover:text-white hover:border-neutral-700 hover:bg-neutral-900"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend & AI Solutions Card */}
            <motion.div
              className="bg-neutral-900/20 border border-neutral-900 rounded-3xl p-6 text-center shadow-xl relative group hover:border-neutral-800 hover:bg-neutral-900/40 transition-all duration-300 backdrop-blur-sm md:-top-3 md:border-neutral-800/50"
              variants={fadeUp}
              whileHover={{ y: -7 }}
            >
              <div className="absolute top-4 right-5 font-mono text-xs text-purple-500 animate-pulse">// AI ACTIVE</div>
              <h2 className="text-lg font-bold mb-6 text-neutral-200 border-b border-neutral-900 pb-3 text-left pl-2 tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Backend & AI Solutions
              </h2>

              <div className="grid grid-cols-2 gap-2.5">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-950 border border-neutral-900 text-neutral-400 rounded-xl py-3 font-medium text-xs tracking-wide transition-all duration-200 hover:text-white hover:border-neutral-700 hover:bg-neutral-900"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.div>
                ))}
                
                {/* Custom Ultra-Glow VectorShift AI Badge */}
                <motion.div
                  className="bg-gradient-to-r from-purple-950/80 via-neutral-950 to-indigo-950/80 text-purple-300 rounded-xl py-3 font-bold text-xs border border-purple-500/20 shadow-md col-span-2 mt-1 flex items-center justify-center gap-1.5 hover:border-purple-500/60 hover:text-white transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  VectorShift AI Specialist
                </motion.div>
              </div>
            </motion.div>

            {/* Computer Science Core Card */}
            <motion.div
              className="bg-neutral-900/20 border border-neutral-900 rounded-3xl p-6 text-center shadow-xl relative group hover:border-neutral-800 hover:bg-neutral-900/40 transition-all duration-300 backdrop-blur-sm"
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-4 right-5 font-mono text-xs text-neutral-700 group-hover:text-neutral-500 transition-colors">// CS</div>
              <h2 className="text-lg font-bold mb-6 text-neutral-200 border-b border-neutral-900 pb-3 text-left pl-2 tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" /> Computer Science Core
              </h2>

              <div className="grid grid-cols-2 gap-2.5">
                {programmingSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-950 border border-neutral-900 text-neutral-400 rounded-xl py-3 font-medium text-xs tracking-wide transition-all duration-200 hover:text-white hover:border-neutral-700 hover:bg-neutral-900"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </>
  );
}