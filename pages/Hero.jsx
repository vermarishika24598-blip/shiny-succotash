import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="bg-neutral-950 text-gray-200 font-sans relative overflow-hidden min-h-screen pt-24 flex flex-col justify-between">
      
      {/* Subtle Ambient Glow on Hero Background */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* HERO MAIN BODY */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto w-full flex-1 px-6 py-12">

        {/* LEFT TEXT AREA */}
        <motion.div
          className="text-center md:text-left mt-12 md:mt-0 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <span className="text-orange-500 font-mono tracking-widest text-xs md:text-sm uppercase block font-semibold">
              // Available for Freelance & Remote Contracts
            </span>
            
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white space-y-3">
              <h2>Hi, I'm Rishika</h2>
              <h1 className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent pb-2">
                Full-Stack Developer
              </h1>
            </div>
            
            <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed pt-2">
              Specializing in robust <span className="text-white">MERN Architecture</span> and highly scalable 
              <span className="text-purple-400"> AI Workflow & Automation Integrations</span>. Crafting production-ready code from database engine to responsive screen interfaces.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-center md:justify-start items-center space-x-4 pt-4">
            <a href="https://docs.google.com/document/d/1VLKPWkN4PcMJGbpuBE5wJIi4jUVVxS7prTfx_i-MZY4/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-gradient-to-r from-orange-600 to-amber-600 font-semibold px-6 py-3 rounded-xl shadow-lg shadow-orange-950/40 text-white border border-orange-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Review Resume
              </motion.button>
            </a>

            <Link to="/contact">
              <motion.button
                className="bg-neutral-900 border border-neutral-800 font-medium px-6 py-3 rounded-xl hover:bg-neutral-800 hover:border-neutral-700 text-gray-300 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse" />
          
          <motion.img
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-neutral-900 shadow-2xl relative z-10"
            src="https://media.licdn.com/dms/image/v2/D4D03AQGO6TIbYnxh1A/profile-displayphoto-shrink_800_800/B4DZb.YgecGYAg-/0/1748024560061?e=1766016000&v=beta&t=655o5Nl68ZdGGzTQaONSVvFgrp2c4iAfp7kr8w4IbsA"
            alt="Rishika Verma"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </div>

      {/* TECH STACK CAROUSEL BAR */}
      <motion.div
        className="bg-neutral-950 border-t border-neutral-900/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-mono tracking-wider font-semibold p-4 max-w-6xl mx-auto text-neutral-500">
          {["REACT", "NODE.JS", "EXPRESS", "MONGODB", "JAVASCRIPT", "VECTORSHIFT AI", "REDUX", "DSA (C++)"].map((skill, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="text-orange-500/60">•</span>
              <motion.span
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                className="cursor-default transition-colors duration-150"
              >
                {skill}
              </motion.span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}