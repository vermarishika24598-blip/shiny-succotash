import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { frontendSkills, backendSkills, programmingSkills } from "./skill";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

// FIX: Variable name cleaned up
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SkillCard({ children, className, variants, highlightColor = "orange" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const glowColor = highlightColor === "purple" ? "rgba(147, 51, 234, 0.15)" : "rgba(249, 115, 22, 0.12)";

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-900/10 p-6 text-center shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-neutral-800/80 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  );
}

export function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <>
      <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-neutral-950 pb-32 pt-16 selection:bg-orange-500/20 selection:text-orange-300">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-25 pointer-events-none" />

        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-600/[0.07] rounded-full blur-[130px] pointer-events-none" 
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-purple-600/[0.07] rounded-full blur-[160px] pointer-events-none" 
        />

        <div className="max-w-4xl mx-auto px-4 mt-12 relative z-10">
          <motion.div
            className="bg-neutral-900/20 border border-neutral-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-16 space-y-6 shadow-2xl relative group overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent group-hover:via-gradient-to-r group-hover:from-transparent group-hover:via-orange-500 group-hover:to-transparent transition-all duration-1000" />

            <div className="flex flex-col items-center space-y-4">
              <span className="text-[10px] font-mono text-orange-400 tracking-[0.25em] uppercase font-bold bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20 shadow-inner">
                01 // Synopsis
              </span>
              <motion.h1 
                className="text-4xl md:text-6xl font-black tracking-tight text-white bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                About Me
              </motion.h1>
            </div>

            <motion.p
              className="text-sm md:text-[15px] leading-relaxed text-neutral-400 font-sans max-w-2xl mx-auto text-center pt-4 border-t border-neutral-900/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              Hi, I’m <span className="text-white font-semibold hover:text-orange-400 transition-colors duration-200">Rishika Verma</span>, a full-stack MERN Developer dedicated to engineering high-performance, scalable web applications and deploying advanced AI automations. Backed by a strong engineering foundation in C, C++, and Core Data Structures & Algorithms, I build digital architectures focused on clean logic and fast processing.
              <br /><br />
              On the frontend, I create fluid, responsive, and pixel-perfect user interfaces using <span className="text-orange-400 font-medium">React</span> and modern state-management principles. On the backend, I design reliable scalable microservices using <span className="text-white font-medium">Node.js, Express, and MongoDB</span>—seamlessly structuring secure databases, implementing clean system utilities, and integrating powerful native AI orchestrations like <span className="text-purple-400 font-medium">VectorShift workflows</span>.
            </motion.p>
          </motion.div>
        </div>

        <div className="pt-32 max-w-6xl mx-auto px-4 space-y-16 relative z-10">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-mono text-purple-400 tracking-[0.25em] uppercase font-bold bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-500/20 shadow-inner">
              02 // Capabilities
            </span>
            <motion.h2
              className="font-black text-3xl md:text-5xl tracking-tight text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Technical Architecture
            </motion.h2>
          </div>

          {/* FIX: Handled corrected staggerContainer variable name here */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <SkillCard variants={fadeUp} highlightColor="orange">
              <div className="absolute top-4 right-5 font-mono text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">// FE</div>
              <h3 className="text-md font-bold mb-6 text-neutral-200 border-b border-neutral-900/80 pb-3 text-left pl-1 tracking-wide flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" /> Frontend Engineering
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-950/80 border border-neutral-900/60 text-neutral-400 rounded-xl py-2.5 font-medium text-xs tracking-wide transition-all duration-200 hover:text-white hover:border-neutral-700 hover:bg-neutral-900"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </SkillCard>

            <SkillCard 
              variants={fadeUp} 
              highlightColor="purple" 
              className="md:-top-4 border-neutral-800/40 bg-neutral-900/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute top-4 right-5 font-mono text-[9px] font-bold text-purple-400 tracking-wider bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 animate-pulse">// AI ACTIVE</div>
              <h3 className="text-md font-bold mb-6 text-neutral-200 border-b border-neutral-900/80 pb-3 text-left pl-1 tracking-wide flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(147,51,234,0.6)]" /> Backend & AI Solutions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-950/80 border border-neutral-900/60 text-neutral-400 rounded-xl py-2.5 font-medium text-xs tracking-wide transition-all duration-200 hover:text-white hover:border-neutral-700 hover:bg-neutral-900"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.div>
                ))}
                <motion.div
                  className="bg-gradient-to-r from-purple-950/50 via-neutral-950 to-indigo-950/50 text-purple-300 rounded-xl py-3 font-bold text-xs border border-purple-500/30 shadow-lg col-span-2 mt-1 flex items-center justify-center gap-2 hover:border-purple-500/70 hover:text-white transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  VectorShift AI Specialist
                </motion.div>
              </div>
            </SkillCard>

            <SkillCard variants={fadeUp} highlightColor="orange">
              <div className="absolute top-4 right-5 font-mono text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">// CS</div>
              <h3 className="text-md font-bold mb-6 text-neutral-200 border-b border-neutral-900/80 pb-3 text-left pl-1 tracking-wide flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-neutral-400 shadow-[0_0_8px_rgba(163,163,163,0.4)]" /> Computer Science Core
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {programmingSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-950/80 border border-neutral-900/60 text-neutral-400 rounded-xl py-2.5 font-medium text-xs tracking-wide transition-all duration-200 hover:text-white hover:border-neutral-700 hover:bg-neutral-900"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </SkillCard>
          </motion.div>
        </div>
      </div>
    </>
  );
}