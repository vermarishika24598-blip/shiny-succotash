import { useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { label: "Home", targetId: "hero" },
    { label: "About", targetId: "about" },
    { label: "Projects", targetId: "project" },
    { label: "Contact", targetId: "contact" }
  ];

  // Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isDark ? 'bg-neutral-950/90 border-neutral-800' : 'bg-white/90 border-neutral-200'} backdrop-blur-md border-b`}>
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Link */}
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, "hero")} 
          className={`font-medium tracking-tight hover:opacity-70 transition-opacity cursor-pointer ${isDark ? 'text-white' : 'text-neutral-900'}`}
        >
          rishika.dev
        </a>

        {/* Navigation Items */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.targetId}`}
              onClick={(e) => handleScroll(e, item.targetId)}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isDark 
                  ? 'text-neutral-400 hover:text-white' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all ${
              isDark 
                ? 'border-neutral-700 text-neutral-400 hover:bg-neutral-800' 
                : 'border-neutral-200 text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  );
}