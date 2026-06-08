import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Contact() {
  const emailAddress = "vermarishika@gmail.com";

  return (
    <>
      <div className="pt-24 min-h-screen bg-neutral-950 text-gray-200 font-sans pb-16 relative overflow-hidden">
        
        {/* Ambient background blur elements matching Header/About */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6">
          
          {/* HEADING SECTION */}
          <div className="text-center mb-12 space-y-2">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent pb-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-neutral-500 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              // Let's build something exceptional together
            </motion.p>
          </div>

          {/* MAIN CONNECT CARD */}
          <motion.div
            className="bg-neutral-900/40 border border-neutral-800/80 text-white text-center rounded-2xl p-8 md:p-14 
                       shadow-2xl relative backdrop-blur-sm group hover:border-neutral-700 transition-colors duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Let's Connect
            </motion.p>
            
            <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-400 max-w-2xl mx-auto">
              I’m always open to collaborating on creative full-stack engineering systems, scalable software modules, or cutting-edge AI automation infrastructures. Whether you have a project architecture in mind or just want to discuss performance optimizations — drop a message!
            </p>

            {/* INTERACTIVE EMAIL BUTTON CONTAINER */}
            <div className="my-8">
              <a href={`mailto:${emailAddress}`}>
                <motion.button 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-950/40 text-white border border-orange-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiOutlineMail size={20} />
                  <span>{emailAddress}</span>
                </motion.button>
              </a>
            </div>

            {/* SEPARATOR LINE */}
            <div className="w-full h-[1px] bg-neutral-800/60 my-6" />

            {/* SOCIAL LINK BADGES */}
            <div className="flex justify-center gap-8 items-center text-neutral-400">
              <motion.a
                href="https://www.linkedin.com/in/rishika-verma-4561502a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <FaLinkedin size={32} />
              </motion.a>
              
              <motion.a
                href="https://github.com/vermarishika24598-blip"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <FaGithub size={32} />
              </motion.a>
              
              <motion.a
                href="https://x.com/RishikaVer19716"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <FaTwitter size={32} />
              </motion.a>
            </div>
            
          </motion.div>
        </div>
      </div>
    </>
  );
}