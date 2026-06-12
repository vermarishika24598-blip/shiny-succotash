import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    // 'bg-white/80' aur 'backdrop-blur-md' se scroll karte waqt premium feel aayega
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 md:px-24 bg-white/80 backdrop-blur-md">
      <nav className="flex justify-between items-center border-b border-black pb-4">
        
        {/* Logo - Minimalist & Sharp */}
        <Link to="/" className="text-lg font-bold uppercase tracking-tighter text-black">
          RV.
        </Link>

        {/* Links - Clean typography */}
        <div className="flex gap-8">
          {["Home", "About", "Project", "Contact"].map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <Link 
                key={item} 
                to={path}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  isActive 
                    ? "text-black underline underline-offset-[12px] decoration-1" 
                    : "text-[#666] hover:text-black"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}