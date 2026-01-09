


import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticleBackground from "../Background/ParticleBackground";

// Animation Variants - Optimized with will-change
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-black overflow-hidden"
    >
      {/* Particle Background - Remove props since your component doesn't use them */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Name */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6 px-4"
          style={{ willChange: "transform, opacity" }} // Performance hint
        >
          <h1
            style={{ fontFamily: "'Kode Mono', monospace" }}
            className="hero-name text-6xl sm:text-6xl md:text-8xl lg:text-[190px] font-bold tracking-tight uppercase 
                       bg-gradient-to-r from-white via-gray-300 to-gray-100 
                       text-transparent bg-clip-text leading-tight"
          >
            MOHAMMED
          </h1>
          <h1
            style={{ fontFamily: "'Kode Mono', monospace" }}
            className="hero-name text-6xl sm:text-6xl md:text-8xl lg:text-[190px] font-bold tracking-tight uppercase 
                       bg-gradient-to-r from-white via-gray-300 to-gray-100 
                       text-transparent bg-clip-text leading-tight"
          >
            NISHAD
          </h1>
        </motion.div>



        {/* Social Links - Optimized hover effects */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="flex justify-center space-x-6 text-3xl mb-10"
          style={{ willChange: "transform, opacity" }}
        >
          {[
            { Icon: FaGithub, href: "https://github.com/Nishadsha91" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mohammed-nishad91" },
            { Icon: FaInstagram, href: "https://www.instagram.com/nis_had.__/" },
          ].map(({ Icon, href }, index) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-all duration-300 transform hover:scale-110"
              style={{ willChange: "transform" }}
            >
              <Icon />
            </a>
          ))}
        </motion.div>

        {/* Buttons - Optimized hover effects */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={1.2}
          variants={fadeUp}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          style={{ willChange: "transform, opacity" }}
        >
          {/* View My Work */}
          <a
            href="#projects"
            className="relative px-8 py-3 font-semibold rounded-xl 
                      bg-white/5 backdrop-blur-lg border border-white/10
                      shadow-md shadow-gray-500/20
                      hover:bg-white hover:text-black hover:shadow-indigo-500/50
                      transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>

          {/* Hire Me - Resume Download */}
          <a
            href="/Mohammed Nishad.pdf"
            download
            className="relative px-8 py-3 font-semibold rounded-xl 
                      bg-white/5 backdrop-blur-lg border border-white/10
                      shadow-md shadow-gray-500/40
                      hover:bg-white hover:text-black hover:shadow-indigo-500/50
                      transition-all duration-300 transform hover:scale-105"
          >
            Hire Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;