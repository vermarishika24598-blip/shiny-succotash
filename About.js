import { motion } from "framer-motion";
import { frontendSkills, backendSkills, programmingSkills } from "./utils/skill";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <motion.div
        className="text-center max-w-4xl mx-auto mt-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 
        text-black border border-white rounded-xl p-10 md:p-14 font-serif space-y-4"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Hi, I’m Rishika Verma, a passionate frontend developer currently learning and expanding my skills 
          toward full stack development using the MERN stack. I have a strong foundation in C, C++, and Data 
          Structures & Algorithms, which helps me write clean and logical code.
          On the frontend, I enjoy creating responsive and user-friendly web interfaces using HTML, CSS, and React.
          I’m currently learning backend technologies like Node.js, Express.js, and MongoDB to build complete,
          end-to-end web applications.
        </motion.p>
      </motion.div>

      {/* SKILLS SECTION */}
      <div className="pt-16 max-w-6xl mx-auto px-4 space-y-10">

        <motion.h1
          className="text-center font-extrabold text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* Frontend Skills Card */}
          <motion.div
            className="bg-black rounded-2xl p-6 text-center shadow-lg"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-bold mb-6 text-white">Frontend</h2>

            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 text-white rounded-lg py-4 font-bold"
                  variants={fadeUp}
                  whileHover={{ scale: 1.1, backgroundColor: "#1f2937" }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills Card */}
          <motion.div
            className="bg-black rounded-2xl p-6 text-center shadow-lg"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-bold mb-6 text-white">Backend</h2>

            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 text-white rounded-lg py-4 font-bold"
                  variants={fadeUp}
                  whileHover={{ scale: 1.1, backgroundColor: "#1f2937" }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <p className="text-white pt-10 font-extrabold">( Learning )</p>
          </motion.div>

          {/* Programming Skills Card */}
          <motion.div
            className="bg-black rounded-2xl p-6 text-center shadow-lg"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-bold mb-6 text-white">Programming</h2>

            <div className="grid grid-cols-2 gap-4">
              {programmingSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 text-white rounded-lg py-4 font-bold"
                  variants={fadeUp}
                  whileHover={{ scale: 1.1, backgroundColor: "#1f2937" }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}
