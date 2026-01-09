
import React, { useState } from "react"; // Added useState
import { Menu, X } from "lucide-react"; // Import icons
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 flex justify-center pt-6">
      <div className="relative">
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-full blur-xl opacity-50"></div>

        {/* Main glass container */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/50 rounded-full px-6 md:px-10 py-3 md:py-4 shadow-2xl overflow-hidden flex items-center justify-between gap-8">

          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full pointer-events-none"></div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 z-10">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white cursor-pointer transition-all duration-300 text-sm uppercase tracking-widest font-medium hover:drop-shadow-lg"
              >
                {item}
              </a>
            ))}
          </nav>

    

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full px-6 md:hidden">
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col space-y-6 text-center shadow-2xl">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white text-lg uppercase tracking-widest font-medium py-2 border-b border-white/5 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Optional: CSS for additional glass effect */}
      <style>{`
        @supports (backdrop-filter: blur(20px)) {
          header div > div {
            background: rgba(255, 255, 255, 0.03);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;