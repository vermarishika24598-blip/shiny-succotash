import { motion } from "framer-motion";

export function Header() {
  return (
    <>
      <div className="bg-gray-900 text-white font-serif">

        {/* NAVBAR */}
        <motion.div
          className="p-4 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-sans font-extrabold text-xl md:text-2xl"
            whileHover={{ scale: 1.1 }}
          >
            Rishika Verma
          </motion.p>

          <div className="flex space-x-6 mt-3 md:mt-0 text-sm md:text-base">
            {["Home", "About", "Project", "Contact"].map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* HERO SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto mt-16 px-4">

          {/* LEFT TEXT AREA */}
          <motion.div
            className="text-center md:text-left mt-10 md:mt-0"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl space-y-4 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2>Hello</h2>
              <h1>I'm Rishika</h1>
              <motion.h1
                className="text-orange-400"
              >
                Frontend Developer
              </motion.h1>
            </motion.div>

            {/* BUTTONS */}
            <div className="space-x-6 mt-10 mb-12">
              <motion.button
                className="bg-orange-600 px-4 py-2 rounded-sm shadow-orange-500/50 hover:bg-orange-700 duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume
              </motion.button>

              <motion.button
                className="border border-orange-500 px-4 py-2 hover:bg-orange-500/20 duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Get in touch
              </motion.button>
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.img
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-black"
            src="https://media.licdn.com/dms/image/v2/D4D03AQGO6TIbYnxh1A/profile-displayphoto-shrink_800_800/B4DZb.YgecGYAg-/0/1748024560061?e=1766016000&v=beta&t=655o5Nl68ZdGGzTQaONSVvFgrp2c4iAfp7kr8w4IbsA"
            alt="Rishika"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* SKILLS BAR */}
        <motion.div
          className="bg-gray-800 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base p-4 max-w-6xl mx-auto">
            {["HTML", "CSS", "JavaScript", "React", "Redux", "Git", "GitHub"].map((skill, i) => (
              <motion.h1
                key={i}
                whileHover={{ scale: 1.2, color: "#fb923c" }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.h1>
            ))}
          </div>
        </motion.div>

      </div>
    </>
  );
}
