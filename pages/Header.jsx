import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/project" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isDark ? 'bg-neutral-950/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className={`font-medium tracking-tight hover:opacity-70 transition-opacity ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          rishika.dev
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? (isDark ? 'text-white' : 'text-neutral-900') 
                    : (isDark ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-500 hover:text-neutral-900')
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Theme Toggle */}
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