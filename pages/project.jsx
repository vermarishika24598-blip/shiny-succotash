import { motion } from "framer-motion";
import { projects } from "./project.card.jsx";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Project() {
  return (
    <>
      <div className="pt-24 min-h-screen bg-neutral-950 text-gray-200 font-sans pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          {/* Heading Section */}
          <div className="text-center mb-16 space-y-2">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent pb-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured Engineering Projects
            </motion.h1>
            <motion.p 
              className="text-neutral-500 text-sm md:text-base font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              // Production-ready deployment builds & architectures
            </motion.p>
          </div>

          {/* PROJECT GRID */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((value) => (
              <motion.div
                key={value.id}
                className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-5 text-white flex flex-col justify-between shadow-xl relative group hover:border-neutral-700 transition-colors duration-300 backdrop-blur-sm"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div>
                  {/* IMAGE CONTAINER WITH ZOOM EFFECT */}
                  <div className="rounded-xl h-48 w-full overflow-hidden relative border border-neutral-800">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* TITLE */}
                  <h1 className="text-xl font-bold mt-4 text-neutral-100 group-hover:text-orange-400 transition-colors duration-300">
                    {value.title}
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed font-sans text-justify">
                    {value.description}
                  </p>
                </div>

                {/* BOTTOM CONTENT AREA TO ALIGN FOOTER */}
                <div>
                  {/* TECH BADGES */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {value.tech.map((t, index) => (
                      <span
                        key={index}
                        className="text-[11px] font-mono tracking-wider bg-neutral-900 border border-neutral-800 text-gray-400 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* INTERACTIVE ACTION LINKS */}
                  <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs font-semibold tracking-wide">
                    <a
                      href={value.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-900 border border-neutral-800 text-gray-300 px-4 py-2 rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-200 flex items-center gap-1 shadow-sm"
                    >
                      Live Demo <span>↗</span>
                    </a>

                    <a
                      href={value.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white px-2 py-2 transition-colors duration-200 flex items-center gap-1"
                    >
                      Codebase <span>→</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </>
  );
}