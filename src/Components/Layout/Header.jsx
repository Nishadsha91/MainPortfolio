import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          <span
            style={{ fontFamily: "'Kode Mono', monospace" }}
            className="italic bg-gradient-to-r to-white from-gray-400 text-transparent bg-clip-text"
          >
            MN.
          </span>
        </h1>

        <nav className="space-x-6">
          <Link to="hero" smooth={true} duration={800} className="hover:text-indigo-400 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={800} className="hover:text-indigo-400 cursor-pointer">About</Link>
          <Link to="projects" smooth={true} duration={800} className="hover:text-indigo-400 cursor-pointer">Works</Link>
          <Link to="contact" smooth={true} duration={800} className="hover:text-indigo-400 cursor-pointer">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
