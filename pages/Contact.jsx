import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Contact() {
  const emailAddress = "vermarishika@gmail.com";
  
  const emailSubject = encodeURIComponent("Collaboration / Project Query");
  const emailBody = encodeURIComponent("Hi Rishika,\n\nI came across your portfolio and would love to connect regarding...");

  return (
    <>
      <div className="pt-24 min-h-screen bg-neutral-950 text-gray-200 font-sans pb-16 relative overflow-hidden">
        
        {/* ANIMATED BACKGROUND BLUR */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* HEADING SECTION */}
          <div className="text-center mb-12 space-y-2">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent pb-1"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-neutral-500 text-sm font-mono"
            >
              // Let's build something exceptional together
            </motion.p>
          </div>

          {/* MAIN CONNECT CARD */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-neutral-900/40 border border-neutral-800/80 text-white text-center rounded-3xl p-8 md:p-14 
                       shadow-2xl relative backdrop-blur-md group hover:border-orange-500/30 transition-all duration-500"
          >
            <motion.p 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
            >
              Let's Connect
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-sm md:text-base leading-relaxed text-neutral-400 max-w-2xl mx-auto"
            >
              I’m always open to collaborating on creative full-stack engineering systems or cutting-edge AI automation. Whether you have a project or just want to say hi — my inbox is open!
            </motion.p>

            {/* EMAIL BUTTON WITH SHIMMER ANIMATION */}
            <motion.div 
              variants={itemVariants}
              className="my-10 flex flex-col items-center justify-center w-full"
            >
              <a 
                href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
                className="w-full sm:w-auto flex justify-center group/btn"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-orange-950/40 text-white border border-orange-500/20"
                >
                  {/* SHIMMER EFFECT LAYER */}
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                  
                  <HiOutlineMail size={22} className="relative z-10" />
                  <span className="relative z-10 tracking-wide text-sm md:text-base">{emailAddress}</span>
                </motion.button>
              </a>
            </motion.div>

            {/* SEPARATOR */}
            <motion.div 
              variants={itemVariants}
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-8" 
            />

            {/* SOCIAL LINKS WITH STAGGERED POP-IN */}
            <div className="flex justify-center gap-6 md:gap-10 items-center">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/rishika-verma-4561502a6/", color: "hover:text-blue-400" },
                { icon: FaGithub, href: "https://github.com/vermarishika24598-blip", color: "hover:text-white" },
                { icon: FaTwitter, href: "https://x.com/RishikaVer19716", color: "hover:text-sky-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-neutral-500 transition-all duration-300`}
                  whileHover={{ scale: 1.3, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={34} />
                </motion.a>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </>
  );
}