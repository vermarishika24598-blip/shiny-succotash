import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  
  // Tumhara exact Google Docs resume link jisme original text data hai
  const resumeLink = "https://docs.google.com/document/d/1VLKPWkN4PcMJGbpuBE5wJIi4jUVVxS7prTfx_i-MZY4/edit?tab=t.0";

  return (
    <div className="bg-neutral-950/80 text-gray-200 font-sans fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-neutral-900/60">
      {/* NAVBAR CONTAINER */}
      <motion.div
        className="p-4 flex flex-row justify-between items-center max-w-6xl mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* LOGO / NAME */}
        <Link to="/">
          <motion.p
            className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            Rishika Verma
          </motion.p>
        </Link>

        {/* NAVIGATION LINKS & ACTION BUTTON */}
        <div className="flex items-center space-x-5 md:space-x-8 text-xs md:text-sm font-medium tracking-wide">
          <div className="flex space-x-5 md:space-x-6">
            {["Home", "About", "Project", "Contact"].map((item, idx) => {
              const itemPath = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === itemPath;

              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="relative py-1"
                >
                  <Link 
                    to={itemPath} 
                    className={`transition-colors duration-200 ${isActive ? "text-orange-500 font-semibold" : "text-neutral-400 hover:text-white"}`}
                  >
                    {item}
                  </Link>
                  
                  {/* Active Slide Line Underline Effect */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ACTIVE RESUME LINK ATTACHED HERE */}
          
        </div>
      </motion.div>
    </div>
  );
}