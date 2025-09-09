import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticleBackground from "../Background/ParticleBackground";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-black overflow-hidden"
    >
      {/* Particle Background (lighter version) */}
      <ParticleBackground particleCount={25} fpsLimit={30} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Name */}
     {/* Name */}
<motion.div
  initial="hidden"
  animate="show"
  variants={fadeUp}
  className="mb-6"
>
  <h1
    style={{ fontFamily: "'Kode Mono', monospace" }}
    className="hero-name text-5xl md:text-[150px] font-bold tracking-tight uppercase 
               bg-gradient-to-r from-white via-gray-200 to-gray-100 
               text-transparent bg-clip-text"
  >
    MOHAMMED
  </h1>
  <h1
    style={{ fontFamily: "'Kode Mono', monospace" }}
    className="hero-name text-5xl md:text-[150px] font-bold tracking-tight uppercase mt-2 
               bg-gradient-to-r from-white via-gray-300 to-gray-100 
               text-transparent bg-clip-text"
  >
    NISHAD
  </h1>
</motion.div>


        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.6}
          variants={fadeUp}
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Full Stack Developer
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="flex justify-center space-x-6 text-2xl mb-10"
        >
          <a
            href="https://github.com/Nishadsha91"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-nishad91"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/nis_had.__/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={1.2}
          variants={fadeUp}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="#projects"
            className="relative px-8 py-3 text-white font-semibold rounded-xl 
                       bg-white/5 backdrop-blur-lg border border-white/10
                       shadow-md shadow-gray-500/20
                       hover:bg-white hover:text-black hover:shadow-indigo-500/50
                       transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="relative px-8 py-3 font-semibold text-gray-200 rounded-xl 
                       bg-white/5 backdrop-blur-lg border border-white/10
                       shadow-md shadow-gray-500/20
                       hover:bg-white hover:text-black hover:shadow-indigo-500/50
                       transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
